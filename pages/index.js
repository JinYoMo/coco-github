// import React from 'react' //next.js框架以默认将react引入，此处无需再引入
// import Router from 'next/router'
// import Link from 'next/link'
// import {Button} from 'antd'
import {useEffect} from 'react'
import axios from 'axios'

import {connect} from 'react-redux'
import {add} from '../store/store'
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
const Index= ({counter,username,rename,add}) => {

  // function goToB(){
  //   Router.push({
  //     pathname:'/b',
  //     query:{
  //       id:2
  //     }
  //   },'/b/2')
  // }
  useEffect(()=>{
    axios.get('/api/user/info').then(resp=>{
      console.log(resp)
    })
  },[])
  return (
    <>
     <span>Count {counter}</span>
     <a>UserName {username}</a>
     <input value={username} onChange={(e)=>rename(e.target.value)} />
     <button onClick={()=>add(counter)}>do add</button>
     {/* 跳转github OAutn连接 */}
     <a href={publicRuntimeConfig.OAUTH_URL}>去登录</a>
    </>
  )

}

//改变了store的状态
Index.getInitialProps=async({reduxStore})=>{
   reduxStore.dispatch(add(3))
   return {}
}
//export default 必须是一个函数 connect返回的就是函数
export default connect(function mapStateToProps(state){
   return {
     counter:state.counter.count,
     username:state.user.username
   }
},function mapDispatchToProps(dispatch){
   return{
     add:(num)=>dispatch({type:'ADD',num}),
     rename:(name)=>dispatch({type:'UPDATE_USERNAME',name})
   }
})(Index)