import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../redux/slices/expensesSlice";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpenseDB, storeExpense, updateExpenseDB } from "../utils/http";

const ManageExpense = ({ route, navigation }) => {
  const { expenseId } = route.params || {};
  const isEditing = !!expenseId;
  const dispatch = useDispatch();
  const selectedExpense = useSelector((state) => state.expenses.expenses).find(
    (expense) => expense.id === expenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler(id) {
    dispatch(deleteExpense({ id }));
    await deleteExpenseDB(id);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler({ amount, date, description }) {
    if (isEditing) {
      await updateExpenseDB(expenseId, {
        amount: amount,
        date: date,
        description: description,
      });

      dispatch(
        updateExpense({
          id: expenseId,
          description,
          amount,
          date,
        })
      );
    } else {
      const id = await storeExpense({ description, amount, date });

      dispatch(
        addExpense({
          id,
          description,
          amount,
          date,
        })
      );
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        isEditing={isEditing}
        onSubmit={confirmHandler}
        selectedExpense={selectedExpense || {}}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            color={GlobalStyles.colors.error500}
            size={34}
            onPress={deleteExpenseHandler.bind(this, expenseId)}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
