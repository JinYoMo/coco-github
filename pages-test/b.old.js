import React,{useState,useReducer,useEffect,useContext,useLayoutEffect,useRef} from 'react'

import MyContext from '../lib/my-context'

class MyCount extends React.Component{
  state={
    count:0
  }

  componentDidMount(){
    //状态更新
    this.interval=setInterval(() => {
      this.setState({count:this.state.count+1})
    }, 1000);
  }

  componentWillUnmount(){
    //定时器在组件卸载后需要清除 避免定时器内使用的变量不被释放报错
    if(this.interval){
      clearInterval(this.interval)
    }
  }

  render() {
    return <span>{this.state.count}</span>
  }
}
function countReducer(state,action){
   switch (action.type) {
     case 'add':
       return state+1
     case 'minus':
       return state-1
     default:
       return state
   }
}
//函数组件
function MyCountFunc() {
  // const [count,setCount]=useState(0)  //[a,b]
  const [count,dispatchCount]=useReducer(countReducer,0)
  const [name,setName]=useState('jokcy')
  //拿到MyContext.Provider上的value
  const context=useContext(MyContext)
  const inputRef=useRef()  //获得dom节点所具有的属性

  // setCount(1) //不基于新的count值
  // setCount(c=>c+1) //基于新的count值

  //组件渲染完成后会执行useEffect
  // useEffect(()=>{
  // //状态更新
  //   const interval=setInterval(() => {
  //     // setCount(c=>c+1)
  //     dispatchCount({type:'add'})
  //   }, 1000);
  //   return ()=>clearInterval(interval)
  // },[])
  useEffect(()=>{
    console.log('effect invoked')
    console.log(inputRef)
    return ()=>console.log('effect deteched')
  },[count])

  // useLayoutEffect(()=>{
  //    console.log('layout effect invoked')
  //   return ()=>console.log('layout effect deteched')
  // },[count])

    return (
      <div>
         <input ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)}/>
         <button onClick={()=>dispatchCount({type:'add'})}>{count}</button>
         <p>{context}</p>
      </div>
    )
}

export default MyCountFunc