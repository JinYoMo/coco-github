import {useEffect} from 'react'
import {Button,Icon,Tabs} from 'antd' 
import getConfig from 'next/config'
import {connect} from 'react-redux'
import Router,{withRouter} from 'next/router'
import LRU from 'lru-cache'

import Repo from '../components/Repo'
import {cacheArray} from '../lib/repo-basic-cache'

const api=require('../lib/api')

const { publicRuntimeConfig } = getConfig()

let cachedUserRepos, cachedUserStaredRepos

const isServer=typeof window ==='undefined'

//注意缓存在客户端和服务端公用的情况，引入isServer判断 并且设置了时效
// const cache=new LRU({
//   maxAge:1000*60*10  //最长10min不去使用缓存数据就清空
// })
 function Index({userRepos,userStaredRepos,user,router}){
  console.log(userRepos,userStaredRepos,user,router)
  const tabKey=router.query.key || '1';
  const handleTabChange= activeKey =>{
     Router.push(`/?key=${activeKey}`)
  }
  //第一次进来发现有数据就会被缓存
  useEffect(()=>{
    if(!isServer){
      cachedUserRepos = userRepos
      cachedUserStaredRepos = userStaredRepos
      // //不是服务端的情况下，对数据进行缓存，方便再次进入不需要调接口
      // if(userRepos){
      //   cache.set('userRepos',userRepos)
      // }
      // if(userStaredRepos){
      //   cache.set('userStaredRepos',userStaredRepos)
      // }
      const timeout = setTimeout(() => {
        cachedUserRepos = null
        cachedUserStaredRepos = null
      }, 1000 * 60 * 10)  //10min必须清空策略
    }
  },[userRepos,userStaredRepos])  //监听参数发生变化则会调用

   //每次调用存储数据
   useEffect(()=>{
    //客户端情况下保存
    if(!isServer){
      cacheArray(userRepos)
      cacheArray(userStaredRepos)
    } 
  })

   if(!user||!user.id){
     return <div className="root">
       <p>亲，您还没有登录哦~</p>
       <Button type="primary" href={publicRuntimeConfig.OAUTH_URL}>点击登录</Button>
       <style jsx>{`
        .root{
          height:400px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
        }
       `}</style>
     </div>
   }
    return (
      <div className="root">
          <div className="user-info">
              <img src={user.avatar_url} alt="user avatar" className="avatar" />
              <span className="login">{user.login}</span>
              <span className="name">{user.name}</span>
              <span className="bio">{user.bio}</span>
              <p className="email">
                  <Icon type="mail" style={{marginRight:10}}></Icon>
                  <a href={user.html_url} target="_black">{user.html_url}</a>
              </p>
          </div>
          <div className="user-repos">
                <Tabs activeKey={tabKey} onChange={handleTabChange} animated={false}>
                  <Tabs.TabPane tab="你的仓库" key="1">
                    {userRepos.map(repo=>(
                      <Repo key={repo.id} repo={repo} />
                    ))}
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="你关注的仓库" key="2">
                    {userStaredRepos.map(repo=>(
                      <Repo key={repo.id} repo={repo} />
                    ))}
                  </Tabs.TabPane>
                </Tabs>
          </div>
          <style jsx>{`
            .root{
              display:flex;
              align-items:flex-start;
              padding:20px 0;
            }
            .user-info{
              width:200px;
              margin-right:40px;
              flex-shrink:0;
              display:flex;
              flex-direction:column;
            }
            .login{
              font-weight:800;
              font-size:20px;
              margin-top:20px;
            }
            .name{
              font-size:16px;
              color:#777;
            }
            .bio{
              margin-top: 20px;
              color:#333;
            }
            .avatar{
              width:100%;
              border-radius:5px;
            }
            .user-repos{
              flex-grow:1;  
            }
            `}</style>
      </div>
    )
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
 Index.getInitialProps=async ({ctx,reduxStore})=>{
  //  const result=await axios
  //  .get('/github/search/repositories?q=react')
  //  .then(resp=>console.log(resp))
  const user=reduxStore.getState().user; //拿到用户信息
  if(!user||!user.id){
    return {
      isLogin:false
    }
  }
  if(!isServer){
    //不是服务端的情况下，对数据进行缓存，再次进入不需要调接口，直接返回
    // if(cache.get('userRepos')&&cache.get('userStaredRepos')){
    //   return {
    //     userRepos:cache.get('userRepos'),
    //     userStaredRepos:cache.get('userStaredRepos')
    //   }
    // }
    if (cachedUserRepos && cachedUserStaredRepos) {
      return {
        userRepos: cachedUserRepos,
        userStaredRepos: cachedUserStaredRepos,
      }
    }
  }
  //ctx.req,ctx.res只有在服务端渲染时才会有
  //调用当前用户的仓库列表
  const userRepos= await api.request(
    {
      url: '/user/repos',
    },
    ctx.req,
    ctx.res,
  )
  //调用关注的仓库列表
  const userStaredRepos= await api.request(
    {
      url: '/user/starred',
    },
    ctx.req,
    ctx.res,
  )
   return {
     isLogin:true,
     userRepos:userRepos.data,
     userStaredRepos:userStaredRepos.data
   }
 }

export default withRouter(
  connect(function mapState(state) {
    return {
      user: state.user,
    }
  })(Index),
)