const Koa = require('koa');
const Router = require('koa-router')
const next = require('next');
const session=require('koa-session')
const Redis =require('ioredis')
const koaBody=require('koa-body')
const atob = require('atob')

const auth=require('./server/auth')
const api=require('./server/api')

const RedisSessionStore=require('./server/session-store')

const dev=process.env.NODE_ENV!=='production';
const app=next({dev})
const handle=app.getRequestHandler();
//连接redis 创建redis client
const redis=new Redis()

//设置nodejs全局增加一个atob方法 用于解码使用 base-64 编码的字符串
global.atob = atob

app.prepare().then(()=>{
  const server=new Koa();
  const router=new Router()

  server.keys=['Jokcy develop Github App']  //用于加密
  //处理post请求的数据
  server.use(koaBody())

  const SESSION_CONFIG={
    key:'jid',  //设置到浏览器当中的key
    // maxAge:10*1000, //设置10s消失
    store:new RedisSessionStore(redis)  //用来存取session内容的连接数据库redis存取的功能
  }
  server.use(session(SESSION_CONFIG,server))
  //配置处理github OAuth的登录及登出
  auth(server)
  //接口代理
  api(server)
  //解决页面刷新路由映射问题 /b/2
  router.get('/b/:id',async (ctx)=>{
    const id=ctx.params.id;
    //await handle已处理完成body的内容，即返回的html内容
    await handle(ctx.req,ctx.res,{
      pathname:'/b',
      query:{id}
    })
    ctx.respond=false; //不再使用koa内部对body的处理，改为手动返回hyttp响应的内容
  })
  //创建获取用户信息接口，方便客户端直接访问拿到渲染
  router.get('/api/user/info',async (ctx)=>{
   const user=ctx.session.userInfo
   if(!user){
     ctx.status=401;
     ctx.body='Need Login'
   }else{
     ctx.body=user
     ctx.set('Content-Type','application/json')
   }
  })
  server.use(router.routes())
  // 传入的方法为中间件 多数请求均会调用该方法
  server.use(async(ctx,next)=>{
    // ctx.cookies.set('id','userid:xxx')
    ctx.req.session=ctx.session;
    await handle(ctx.req,ctx.res);  //nextjs兼容各种nodejs的http框架 所以使用ctx.req,ctx.res
    ctx.respond=false;
  })
  server.listen(3000,()=>{
    console.log('Koa server listening on 3000')
  })
})