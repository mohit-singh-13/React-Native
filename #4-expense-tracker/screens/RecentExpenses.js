import { Text } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "../utils/date";

const RecentExpenses = () => {
  const expensesData = useSelector((state) => state.expenses.expenses);

  const recentExpenses = expensesData.filter((expense) => {
    const today = new Date();
    const dateSevenDaysAgo = getDateMinusDays(today, 7);

    return new Date(expense.date) > dateSevenDaysAgo;
  });

  return (
    <ExpensesOutput
      expensesPeriod={"Last 7 days"}
      expenses={recentExpenses}
      fallbackText={"No data to show"}
    />
  );
};

export default RecentExpenses;
