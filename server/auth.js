const axios=require('axios')

const config=require('../config')

const {client_id,client_secret,request_token_url} = config.github

module.exports=(server)=>{
  //登录部分逻辑
   server.use(async(ctx,next)=>{
     if(ctx.path==='/auth'){
       const code=ctx.query.code
       if(!code){
         ctx.body='code not exist'
         return
       }
       const result = await axios({
         method:'POST',
         url:request_token_url,
         data:{
          client_id,
          client_secret,
          code
         },
         headers:{
           Accept:'application/json'
         }
       })
       if(result.status===200&&(result.data&&!result.data.error)){
        ctx.session.githubAuth=result.data;
        const {access_token,token_type} = result.data
        //获取用户信息
        const userInfoResp=await axios({
          method:'GET',
          url:'https://api.github.com/user',
          headers:{
            'Authorization':`${token_type} ${access_token}`
          }
        })
        // console.log(userInfoResp.data)
        ctx.session.userInfo=userInfoResp.data; //将用户信息保存在session

        ctx.redirect((ctx.session&&ctx.session.urlBeforeAuth)||'/')  //重定位到当前页面，若没有urlBeforeAuth，定位到rootUrl
        ctx.session.urlBeforeAuth='';
       }else{
         const errorMsg=result.data&&!result.data.error
         ctx.body=`request token failed ${errorMsg}`
       }
       console.log(result.status,result.data)
     }else{
       await next()
     }
   })
   //登出部分逻辑
   server.use(async (ctx,next)=>{
      const path =ctx.path;
      const method=ctx.method;
      if(path==='/logout'&&method==='POST'){
        ctx.session=null;
        ctx.body="logout success"
      }else{
        await next()
      }
   })
   server.use(async (ctx,next)=>{
      const path =ctx.path;
      const method=ctx.method;
      if(path==='/prepare-auth'&&method==='GET'){
        const {url}=ctx.query;  //正式进入OAuth之前 目前处于的url
        ctx.session.urlBeforeAuth=url;
        // ctx.body='ready'
        ctx.redirect(config.OAUTH_URL)
      }else{
        await next()
      }
  })
}