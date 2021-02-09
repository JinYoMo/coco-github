//创建store
import {createStore,combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
const initialState={
  count:0,
}
const userInitialState={
  username:'Jokcy'
}
const ADD='ADD';
function counterReducer(state=initialState,action){
  console.log(state,action)
  switch (action.type) {
    case 'ADD':
      return {count:state.count+(action.num||1)};  //返回新对象 不能使用state.count+=1 return state 这种方式未改变state的地址，从而未对比值更新，即更新了状态，页面未渲染
    default:
      return state
  }
}
const UPDATE_USERNAME='UPDATE_USERNAME';
function userReducer(state=userInitialState,action){
  switch (action.type){
    case UPDATE_USERNAME:
      return{
        ...state,
        username:action.name,
      }
    default:
      return state
  }
}
const allReducers=combineReducers({
  counter:counterReducer,
  user:userReducer
})

//action creator
export function add(num){
  return {
    type:'ADD',
    num,
  }
}
//用于异步添加
function addAsync(num){
  return dispatch=>{
    setTimeout(()=>{
      dispatch(add(num));
    },3000)
  }
}
// // console.log(store.getState())  //获取到state
// // store.dispatch({type:'ADD'})  //再次执行reducer，将action传入 从而更新state
// store.dispatch(add(3))
// store.dispatch(addAsync(3))
// // console.log(store.getState())  //获取新的state
// //subscribe该方法每次数据变更均会调用(后面)
// store.subscribe(()=>{
//   console.log('change',store.getState());
// })
// store.dispatch({type:'ADD'})  //再次执行reducer，将action传入 从而更新state
// store.dispatch({type:UPDATE_USERNAME,name:'Lilei'})

export default function initializeStore(state){
  const store=createStore(
    allReducers,
    Object.assign({}, {
      counter:initialState,
      user:userInitialState
    },state),
    composeWithDevTools(applyMiddleware(ReduxThunk))  //applyMiddleware用于异步的中间件
  )
  return store;  //确保每次生成的store都是新的
}