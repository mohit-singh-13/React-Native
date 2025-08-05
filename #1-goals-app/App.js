import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, Modal, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeGoalModal() {
    setIsModalOpen(false);
  }

  function addGoalHandler(userInput) {
    console.log(userInput);
    setGoals((prev) => [...prev, userInput]);
    closeGoalModal();
  }

  function deleteGoalHandler(deleteItemIndex) {
    console.log("this :", this);
    setGoals((prev) => prev.filter((_, index) => index !== deleteItemIndex));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={() => setIsModalOpen((prev) => !prev)}
        />

        <Modal visible={isModalOpen} animationType="slide">
          <View style={styles.inputContainer}>
            <GoalInput
              addGoalHandler={addGoalHandler}
              onCloseGoalModal={closeGoalModal}
            />
          </View>
        </Modal>

        <View style={styles.listContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: "#1e085a",
  },

  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },

  listContainer: {
    flex: 6,
  },
});
