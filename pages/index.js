import { request } from '../lib/api'
 const api=require('../lib/api')
 function Index(){
    return <span>Index</span>
 }
 //服务端和客户端都会执行
 /**
  * 客户端切换与访问Index页面服务端渲染都会执行getInitialProps
  * 在服务端渲染的时候，运行环境是处于nodejs环境，而不是处于浏览器的环境
  * 在nodejs环境中axios.get('/github/search/repositories?q=react')方式请求，会请求'http://localhost:80/github/search/repositories?q=react'地址，这个地址明显请求不成功
  * 解决的方式是请求api时判断是否为服务端，提取出公共的lib/api.js
  * 客户端的请求会到server/api.js中做处理，返回给客户端
  * 以上就是同构的概念——就是有部分代码都可能会在客户端和服务端执行，因此这段代码就要适应浏览器的执行环境，也要适应nodejs的执行环境，因此做区分处理，最终汇集到一个点requestGithub上面，保证在客户端和服务端都可正常执行
  */
 Index.getInitialProps=async ({ctx})=>{
  //  const result=await axios
  //  .get('/github/search/repositories?q=react')
  //  .then(resp=>console.log(resp))

  //ctx.req,ctx.res只有在服务端渲染时才会有
  const result= await request({
    url:'/search/repositories?q=react'
  },ctx.req,ctx.res)
   return {
     data:result.data
   }
 }
export default Index