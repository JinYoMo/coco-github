import Document,{Html,Head,Main,NextScript} from 'next/document'
import { Component } from 'react';
import {ServerStyleSheet} from 'styled-components'

function withLog(Comp){
   return (props)=>{
     console.log(props);
     return <Comp {...props}/> //渲染组件
   }
}

/** 
 * 只有在服务端渲染时才会被执行 客户端是不起作用的
 * Document中本身就有getInitialProps和render方法 自定义就会覆盖 至少需要写出下面内容
*/
class MyDocument extends Document{
  static async getInitialProps(ctx){
    const sheet=new ServerStyleSheet()
    const originalRenderPage=ctx.renderPage;

    try{
      ctx.renderPage=()=>originalRenderPage({
        enhanceApp:App=>(props)=>sheet.collectStyles(<App {...props} />),  //增强App  _app.js导出的app  withLog方法用来做包装
        // enhanceComponent:Component=>withLog(Component)  //pages下面定义的每一个js文件
      })
      const props=await Document.getInitialProps(ctx)
      return {
        ...props,
        style:<>{props.styles}{sheet.getStyleElement()}</>  //内置样式+style compontents样式
      }
    }finally{
      sheet.seal()
    }
  }
  render() {
    return <Html>
       <Head />
       <body className="test">
         <Main />
         <NextScript />
       </body>
    </Html>
  }
}

export default MyDocument