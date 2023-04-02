import React, { useState } from 'react';
import {useSelector} from "react-redux"
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  
 const transactionslist=useSelector((state)=> state.expensereducer);
 const [history,sethistory]=useState(transactionslist.transaction)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* {transactionslist.transaction.map((trans) => (<Transaction/>))} */}
        {transactionslist.transaction.map( (transaction) => (<Transaction trans={Transaction}/>))}
        {/* key={transaction.id} transaction={transaction} */}
      </ul>
    </>
  )
}