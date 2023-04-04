import { createSlice } from "@reduxjs/toolkit";
const pocket = createSlice({
  name: "pocket",
  initialState: {
    income: 0,
    expense: 0,
    transaction: [],
  },
  reducers: {
    updatepocket: (state, action) => {
      const money = parseInt(action.payload);
      if (money > 0) {
        state.income += money;
      } else {
        state.expense += money;
      }
    },

    addtransaction: (state, action) => {
      state.transaction.push(action.payload);
    },

    deletetransaction: (state, action) => {
      action.payload.amount<0?state.expense-=action.payload.amount:state.income-=action.payload.amount;
      state.transaction = state.transaction.filter((transaction) => {
        return transaction.id !== action.payload.id;
      });
    },
  },
});
export const {
  updatepocket,
  addtransaction,
  deletetransaction,
} = pocket.actions;
export default pocket.reducer;
