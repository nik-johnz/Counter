import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  // state to hold the vlaue from input box
  const [range, setRange] = useState("")
  //hook to dispatc a function in action
  const dispatch = useDispatch()
  // component can access the state by using useSelector hook
  const count = useSelector((state)=>state.counter.value)

  //range
  console.log(range);


  return (
    <>
    <div className='d-flex align-items-center justify-content-center flex-column w-100 mt-5'>
        <h1 style={{fontSize:'50px'}}>{count}</h1>
        <div className='mt-5'>
            <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-2 ms-3'>Decrement</button>
            {/*Number method is used to convert string into number */}
            <button onClick={()=>dispatch(reset())} className='btn btn-danger p-2 ms-3'>Reset</button>
            <button onClick={()=>dispatch(increment(Number(range)))}  className='btn btn-success p-2 ms-3'>Increment</button>
        </div>
    </div>
    {/*input box*/}
    <div>
    <input type="text" onChange={(e)=>setRange(e.target.value)} style={{borderColor:'black'}} className='form-control w-100  mt-3' placeholder='Enter the Range'/>
  </div>
    </>
  )
}

export default Counter