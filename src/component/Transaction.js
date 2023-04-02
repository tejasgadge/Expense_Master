import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  console.log(num)
  // let p = num.toFixed(2).split(".");
  // return (
  //   "₹ " +
  //   p[0]
  //     .split("")
  //     .reverse()
  //     .reduce(function (acc, num, i, orig) {
  //       return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
  //     }, "") +
  //   "." +
  //   p[1]
  // );
}

export const Transaction = ( trans ) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = trans.amount < 0 ? '-' : '+';

  return (
    <li className={trans.amount < 0 ? 'minus' : 'plus'}>
      {trans.text} <span>{sign}{moneyFormatter(trans.amount)}</span><button onClick={() => deleteTransaction(trans.id)} className="delete-btn">x</button>
    </li>
  )
}