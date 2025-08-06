import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getExpenses } from "../../utils/http";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 48.34,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 32.99,
    date: new Date().toISOString(),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date().toISOString(),
  },
  {
    id: "e4",
    description: "Some bananas",
    amount: 5.99,
    date: new Date().toISOString(),
  },
  {
    id: "e5",
    description: "Some bananas",
    amount: 5.99,
    date: new Date().toISOString(),
  },
];

const initialState = {
  expenses: [],
  loading: true,
};

export const getExpensesInitially = createAsyncThunk(
  "expenses/getExpensesInitially",
  async () => {
    const response = await getExpenses();
    return response;
  }
);

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },

    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
    },

    updateExpense: (state, action) => {
      const index = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );

      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExpensesInitially.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExpensesInitially.fulfilled, (state, action) => {
        state.expenses = action.payload;
        state.loading = false;
      })
      .addCase(getExpensesInitially.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addExpense, deleteExpense, updateExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
