import React from 'react';
import {  useSelector } from 'react-redux'

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '₹ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Balance = () => {

  const pocket=useSelector((state)=> state.expensereducer)

  return (
    <>
    <div className="balance">
    <h4>Your Balance</h4>
    <h1>{moneyFormatter(pocket.income+pocket.expense)}</h1>
    </div>
    </>
  )
}