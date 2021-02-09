import React from 'react'
import createSore from '../store/store'

const isServer = typeof window === 'undefined' //判断是否是服务端
const __NEXT_REUDX_STORE__ = '__NEXT_REUDX_STORE__'

//创建store并保存，使得在页面切换时仍是一个store基础上保存
function getOrCreateStore(initialState) {
  if (isServer) {
    return createSore(initialState)
  }

  if (!window[__NEXT_REUDX_STORE__]) {
    window[__NEXT_REUDX_STORE__] = createSore(initialState)
  }
  return window[__NEXT_REUDX_STORE__]
}
export default (Comp)=>{
  class WithReduxApp extends React.Component{
    constructor(props){
      super(props);  //必须填写
      this.reduxStore=getOrCreateStore(props.initialReduxState)
    }
    render(){
      const {Component,pageProps,...rest}=this.props;
      console.log(Component,pageProps)
      if(pageProps){
        pageProps.test='123'
      }
      return <Comp Component={Component} pageProps={pageProps} {...rest} reduxStore={this.reduxStore}/>
    }
  }
  //在服务端渲染的时候会被执行一次，客户端渲染也会被执行
  //这个方法执行完成后会被销毁，下次执行时重新创建
  WithReduxApp.getInitialProps=async(ctx)=>{
      //作store的初始化
      const reduxStore = getOrCreateStore();
      ctx.reduxStore=reduxStore;
      let appProps={};
      if(typeof Comp.getInitialProps==='function'){
        appProps=await Comp.getInitialProps(ctx)
      }
      return {
        ...appProps,
        initialReduxState:reduxStore.getState()
      }
   }
   return WithReduxApp
}