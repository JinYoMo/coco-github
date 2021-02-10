//创建store
import {createStore,combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const userInitialState={}

function userReducer(state=userInitialState,action){
  switch (action.type){
    default:
      return state
  }
}
const allReducers=combineReducers({
  user:userReducer
})

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
      user:userInitialState
    },state),
    composeWithDevTools(applyMiddleware(ReduxThunk))  //applyMiddleware用于异步的中间件
  )
  return store;  //确保每次生成的store都是新的
}