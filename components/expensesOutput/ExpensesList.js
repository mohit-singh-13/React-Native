import { FlatList } from "react-native";

const ExpensesList = ({ expenses }) => {
  return <FlatList data={expenses} renderItem={() => {}} />;
};

export default ExpensesList;
