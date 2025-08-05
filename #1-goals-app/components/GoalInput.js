import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandler, onCloseGoalModal }) => {
  const [userInput, setUserInput] = useState("");

  function goalInputHandler(e) {
    setUserInput(e);
  }

  return (
    <>
      <Image
        style={styles.goalImage}
        source={require("../assets/images/goal.png")}
      />
      <TextInput
        placeholder="Your course goal!"
        style={styles.inputElement}
        onChangeText={goalInputHandler}
        value={userInput}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Add Goal"
          onPress={() => {
            addGoalHandler(userInput);
            setUserInput("");
          }}
        />
        <Button title="Cancel" onPress={onCloseGoalModal} color={"red"} />
      </View>
    </>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputElement: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "80%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    marginVertical: 20
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 6,
  },

  goalImage: {
    width: 100,
    height: 100,
    margin: 20
  },
});
