import { createSlice } from "@reduxjs/toolkit";
const pocket=createSlice({
    name:'pocket',
    initialState : {
        income : 0,
        expense : 0,
        transaction :[]
    },
    reducers :{
        updatepocket  : (state,action)=>{
            if(action.payload>0)
            {
                state.income+=action.payload
            }
            else 
            {
                state.expense+=action.payload
            }
        },
        addtransaction : (state,action)=>{
            state.transaction.push(action.payload)
        }
    }
})
export default pocket.reducers;
export const  {addtransaction} = pocket.action;