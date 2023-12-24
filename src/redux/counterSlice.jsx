import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    //action are created inside this reducers key as objects
    reducers:{
        //logics to update state
        //function to increment nuber
        increment:(state, action)=>{
            //if it's a argument then it can only be accessed by action and value in playload
            state.value += action.payload
        },
        //function to decrement number
        decrement:(state, action)=>{
            //if it's a argument then it can only be accessed by action and value in playload
            state.value -= action.payload
        },
        //function tp reset
        reset:(state)=>{
            state.value = 0
        }
    }
})


//action is required by components inorder to update state
export const {increment,decrement,reset} = counterSlice.actions

//rendeer is required to store to change the state value
export default counterSlice.reducer