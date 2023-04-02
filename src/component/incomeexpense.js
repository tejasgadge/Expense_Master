import React from 'react';
import {  useSelector } from 'react-redux'

//Money formatter function
function moneyFormatter(num) {
  // let p = num.toFixed(2).split(".");
  return (
    "₹ " + num
    // p[0]
    //   .split("")
    //   .reverse()
    //   .reduce(function (acc, num, i, orig) {
    //     return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
    //   }, "") +
    // "." +
    // p[1]
  );
}

export const IncomeExpenses = () => {
  const pocket=useSelector((state)=> state.expensereducer);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{moneyFormatter(pocket.income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{moneyFormatter(pocket.expense)}</p>
      </div>
    </div>
  );
};
