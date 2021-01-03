const Koa = require('koa');
const Router = require('koa-router')
const next = require('next');

const dev=process.env.NODE_ENV!=='production';
const app=next({dev})
const handle=app.getRequestHandler();

app.prepare().then(()=>{
  const server=new Koa();

  // 传入的方法为中间件
  server.use(async(ctx,next)=>{
    await handle(ctx.req,ctx.res);  //nextjs兼容各种nodejs的http框架 所以使用ctx.req,ctx.res
    ctx.respond=false;
  })
  server.listen(3000,()=>{
    console.log('Koa server listening on 3000')
  })
})