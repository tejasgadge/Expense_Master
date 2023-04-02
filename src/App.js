import React from 'react';
import { Header } from './component/header';
import { Balance } from './component/balance';
import { IncomeExpenses } from './component/incomeexpense';
import { TransactionList } from './component/transactionlist';
import { AddTransaction } from './component/addtransaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        <TransactionList/>
      </div>
    </div>
  );
}

export default App;
