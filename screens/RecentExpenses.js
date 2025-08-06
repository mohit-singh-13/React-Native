import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useDispatch, useSelector } from "react-redux";
import { getDateMinusDays } from "../utils/date";
import { useEffect } from "react";
import { getExpensesInitially } from "../redux/slices/expensesSlice";
import LoadingOverlay from "../components/ui/LoadingOverlay";

const RecentExpenses = () => {
  const dispatch = useDispatch();
  const expensesData = useSelector((state) => state.expenses.expenses);
  const isLoading = useSelector((state) => state.expenses.loading);

  useEffect(() => {
    dispatch(getExpensesInitially());
  }, []);

  const recentExpenses = expensesData.filter((expense) => {
    const today = new Date();
    const dateSevenDaysAgo = getDateMinusDays(today, 7);

    return new Date(expense.date) > dateSevenDaysAgo;
  });

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expensesPeriod={"Last 7 days"}
      expenses={recentExpenses}
      fallbackText={"No data to show"}
    />
  );
};

export default RecentExpenses;
