import React, { useReducer } from 'react'
const reducer=(state,action)=>{
     switch (action.type) {
      case "INCREMENT":
        return {count:state.count+1}
      case "DECREMENT":
        return {count:state.count-1}
      case "RESET":
        return {count:0}
       
      default:
        return state
     }

}
const intialState={count:0}
const Reducer = () => {
  const [state,dispatch]=useReducer(reducer,intialState)
  return (
    <div>
        <h1>Reducer</h1>
        <h3>Count:{state.count}</h3>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
        </div>
  )
}

export default Reducer