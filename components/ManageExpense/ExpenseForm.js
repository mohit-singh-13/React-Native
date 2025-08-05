import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../ui/Button";

const ExpenseForm = ({ onCancel, isEditing, onSubmit, selectedExpense }) => {
  const [inputValues, setInputValues] = useState({
    amount: selectedExpense.amount?.toString() || "",
    date: selectedExpense.date || "",
    description: selectedExpense.description || "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((prev) => {
      return {
        ...prev,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: !isNaN(new Date(inputValues.date))
        ? new Date(inputValues.date).toISOString()
        : "Invalid Date",
      description: inputValues.description,
    };

    const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isDateValid = expenseData.date.toString() === "Invalid Date";
    const isDescriptionValid = expenseData.description.trim().length > 0;

    if (!isAmountValid || !isDateValid || !isDescriptionValid) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }

    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label={"Amount"}
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
          }}
          value={inputValues.amount}
        />

        <Input
          label={"Date"}
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "default",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
          }}
          value={inputValues.date}
        />
      </View>

      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
        }}
        value={inputValues.description}
      />

      <View style={styles.buttonContainer}>
        <Button mode={"flat"} onPress={onCancel}>
          Cancel
        </Button>
        <Button onPress={submitHandler}>{isEditing ? "Update" : "Add"}</Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },

  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  rowInput: {
    flex: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
