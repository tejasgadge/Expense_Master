import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtransaction } from "../redux/slices";
import {nanoid} from "@reduxjs/toolkit"

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const dispatch=useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: nanoid(),
      text,
      amount: amount,
    };

    dispatch(addtransaction(newTransaction));
  };

  return (
    <>
      <div className="addtransaction">
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter transaction details..."
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              (negative - expense, positive - income)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    </>
  );
};
