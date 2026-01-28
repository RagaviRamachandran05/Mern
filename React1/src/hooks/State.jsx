import {useEffect, useState} from 'react'

const State = () => {
    const[count,setCount]=useState(0)
    
    const[like,likeCount]=useState(0)
      useEffect(()=>{
        console.log("From useEffect")
      },[like])
  return (
    <div>
        <h2>State</h2>
        <h3>
            Count:{count}
        </h3>
        <button onClick={()=>setCount(count+1)}> Increment</button>
        <button onClick={()=>setCount(count-1)}> Decrement</button>

        <h2>Like🩷</h2>
        <h3>Like:{like}</h3>
        <button onClick={()=>likeCount(like+1)}> Like👍</button>
        <button onClick={()=>likeCount(like-1)}> Dislike👎</button>
    </div>
  )
}

export default State