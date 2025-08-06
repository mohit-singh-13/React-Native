import axios from "axios";

const BACKEND_URL = "";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData
  );
  return response.data.name;
};

export const getExpenses = async () => {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      ...response.data[key],
    };

    expenses.push(expenseObj);
  }

  return expenses;
};

export const deleteExpenseDB = async (id) => {
  await axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
};

export const updateExpenseDB = async (id, expenseData) => {
  await axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
};
