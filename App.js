// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(e) {
    setUserInput(e);
  }

  function addGoalHandler() {
    console.log(userInput);
    // setGoals([...goals, userInput]);
    setGoals((prev) => [...prev, userInput]);
  }

  return (
    // <View style={styles.container}>
    //   <Text>Mohit Singh</Text>
    //   <View>
    //     <Text
    //       // style={{
    //       //   margin: 20,
    //       //   borderWidth: 1,
    //       //   padding: 5,
    //       //   backgroundColor: "red",
    //       //   color: "white",
    //       // }}
    //       style={styles.dummyText}
    //     >
    //       Another text
    //     </Text>
    //   </View>
    //   <Button title="Click Here" />
    //   {/* Hello MOhit */}
    //   {/* <StatusBar style="auto" /> */}
    // </View>

    <View style={{ paddingTop: 50, paddingHorizontal: 16, flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          // borderWidth: 1,
          justifyContent: "space-between",
          alignItems: "center",
          // paddingBottom: 24,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          marginBottom: 24,
        }}
      >
        <TextInput
          placeholder="Your course goal!"
          style={{
            borderWidth: 1,
            borderColor: "#cccccc",
            width: "80%",
            marginRight: 8,
            padding: 8,
          }}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={{ flex: 6 }}>
        {goals.map((goal, index) => (
          <Text
            key={index}
            style={{
              fontSize: 16,
              padding: 8,
              margin: 8,
              backgroundColor: "#5e0acc",
              color: "white",
              borderRadius: 8,
            }}
          >
            {goal}
          </Text>
        ))}
        {/* <Text>List of goals...</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  dummyText: {
    margin: 20,
    borderWidth: 1,
    padding: 5,
    backgroundColor: "red",
    color: "white",
  },
});
