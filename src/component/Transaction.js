import React from 'react';
import { useDispatch } from "react-redux";
import { deletetransaction,updatepocket } from "../redux/slices";

// import handledelete from './handledelete';
//Money formatter function
function moneyFormatter(num) {

  console.log(num)
  // let p = num.toFixed(2).split(".");
  return (
    "₹" + Math.abs(num)
    );
  //   p[0]
  //     .split("")
  //     .reverse()
  //     .reduce(function (acc, num, i, orig) {
  //       return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
  //     }, "") +
  //   "." +
  //   p[1] 
}

export const Transaction = ( {id,text,amount} ) => {

  const dispatch=useDispatch()
  const handledelete=()=>{

    dispatch(deletetransaction(id))
    dispatch(updatepocket(amount*-1))

}


  const sign = amount < 0 ? '-' : '+';

  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text} <span>{sign}{moneyFormatter(amount)}</span><button onClick={()=>{handledelete()}} className="delete-btn">x</button>
    </li>
  )
}