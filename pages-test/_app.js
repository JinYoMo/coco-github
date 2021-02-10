import App,{Container} from 'next/app'
import {Provider} from 'react-redux'

import 'antd/dist/antd.css'

import MyContext from '../lib/my-context'
import Layout from '../components/Layout'

import store from '../store/store'
import testHoc from '../lib/with-redux'

//nextjs自定义App
class MyApp extends App {
  state={
    context:"value"
  }

  /** 
   * 1.自定义getInitialProps进行全局性的数据获取 
   * 2.手动判断渲染页面是否有getInitialProps，如果有要去执行并获取到它的数据
   * 3.每一次页面切换都会调用
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
        <Layout>
          <Provider store={reduxStore}>
            <MyContext.Provider value={this.state.context}>
              <Component {...pageProps}/>
              <button onClick={()=>this.setState({context:`${this.state.context}111`})}>update context</button>
            </MyContext.Provider>
          </Provider>
        </Layout>
      </Container>
    )
  }
}
export default testHoc(MyApp)