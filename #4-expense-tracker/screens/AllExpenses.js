import { Text } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";

const AllExpenses = () => {
  const expensesData = useSelector((state) => state.expenses.expenses);

  return (
    <ExpensesOutput
      expensesPeriod={"Total"}
      expenses={expensesData}
      fallbackText={"No data to show"}
    />
  );
};

export default AllExpenses;
