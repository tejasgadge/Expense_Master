import React from "react";
import { useSelector } from "react-redux";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const transactionslist = useSelector((state) => state.expensereducer);

  return (
    <>
      <h3>History</h3>
      {console.log(transactionslist)}
      <ul className="list">
        {transactionslist.transaction.map((trans) => {
          return <Transaction {...trans} />;
        })}
      </ul>
    </>
  );
};
