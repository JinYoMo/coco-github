import { withRouter} from 'next/router'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
// import moment from 'moment'  //写在顶部为公共模块加载
/** 
 * 1.<style jsx>形成一个编译之后的className 组件间隔离，不影响其他组件的样式
 * 2.<style jsx>是这个组件被渲染后样式才会生效，当组件不再显示后，样式就会被移除消失，即使是全局样式也不再起作用
 * 3.nextjs优点：根据组件的挂载和卸载来进行样式的展示与否，不会出现样式冲突;有孤立作用域,即便组件同时显示，也不会有影响,全局样式可能有点影响
 */
/**
* 异步加载组件
* 异步组件 只有等到执行渲染时才会被真正加载
*/
const Comp = dynamic(import('../../components/comp'))
 /**
 * styled-components使用
*/
const Title=styled.h1`
  color:yellow;
  font-size:40px;
`

const color='#113366'
const A=({router,name,time})=>(
    <>
      <Title>This is Title {time}</Title>
      <Comp />
      <Link href="#aaa">
        <a className="link">
          A {router.query.id} {name}
        </a>
      </Link>
      <style jsx>{`
        a{
          color:blue
        }
        .link{
          color:${color}
        }
      `}</style>
    </>
)
//先执行getInitialProps方法，之后才会渲染A组件(上面)
A.getInitialProps=async ctx=>{
  //需要使用时加载 异步加载
  const moment = await import('moment')
  const promise=new Promise((resolve)=>{
    setTimeout(()=>{
    resolve({
      name:'jokcy',
      time:moment.default(Date.now() - 60*1000).fromNow() //转变为 '一分钟之前'
    })
    },1000)
  })
  return await promise
}

export default withRouter(A)