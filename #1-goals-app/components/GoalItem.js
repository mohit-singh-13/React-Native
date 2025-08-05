import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemData, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      {/* <Pressable onPress={() => onDeleteItem(itemData.index)}> */}
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, itemData.index)}
        style={({ pressed }) => pressed && styles.pressedItem} // for IOS
      >
        <Text key={itemData.index} style={styles.text}>
          {itemData.item}
        </Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    fontSize: 16,
    margin: 8,
    backgroundColor: "#5e0acc",
    color: "white",
    borderRadius: 8,
  },

  pressedItem: {
    color: "red",
  },

  text: {
    color: "white",
    padding: 8,
  },
});
