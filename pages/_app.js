import App,{Container} from 'next/app'
import {Provider} from 'react-redux'
import Router from 'next/router'

import 'antd/dist/antd.css'

import Layout from '../components/Layout'
import PageLoading from '../components/PageLoading'

import store from '../store/store'
import testHoc from '../lib/with-redux'
import Link from 'next/link'

//nextjs自定义App
class MyApp extends App {
  state={
    context:"value",
    loading:false
  }
  startLoading=()=>{
    this.setState({
      loading:true
    })
  }
  stopLoading=()=>{
    this.setState({
      loading:false
    })
  }
  /**
   * class中两个生命周期方法
   * componentDidMount
   * componentWillUnmount
   */
  componentDidMount(){
    //绑定监听
    Router.events.on('routeChangeStart',this.startLoading);
    Router.events.on('routeChangeComplete',this.stopLoading);
    Router.events.on('routeChangeError',this.stopLoading);
  }
 
  componentWillUnmount(){
    //取消监听
    Router.events.off('routeChangeStart',this.startLoading);
    Router.events.off('routeChangeComplete',this.stopLoading);
    Router.events.off('routeChangeError',this.stopLoading);
  }
  /** 
   * 1.自定义getInitialProps进行全局性的数据获取 属于一个异步过程
   * 2.手动判断渲染页面是否有getInitialProps，如果有要去执行并获取到它的数据
   * 3.每一次页面切换都会调用getInitialProps
  */
  static async getInitialProps(ctx){
    const { Component } = ctx;
    //给页面传递特定的props
    let pageProps={}
    if(Component.getInitialProps){
      pageProps=await Component.getInitialProps(ctx);
    }
    return{
      pageProps
    }
  }

  render(){
    const {Component,pageProps,reduxStore}=this.props
    return(
      <Container>
        <Provider store={reduxStore}>
          {this.state.loading?<PageLoading />:null}
          <Layout>
            <Link href="/">
              <a>Index</a>
            </Link>
            <Link href="/detail">
              <a>Detail</a>
            </Link>
            <Component {...pageProps}/>
          </Layout>
        </Provider>
      </Container>
    )
  }
}
export default testHoc(MyApp)