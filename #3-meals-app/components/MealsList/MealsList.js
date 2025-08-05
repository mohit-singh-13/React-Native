import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealsList = ({ items }) => {
  const navigation = useNavigation();

  function pressHandler(id, title) {
    navigation.navigate("MealDetails", { mealId: id, mealTitle: title });
  }

  function renderMealItem(itemData) {
    const { title, imageUrl, duration, complexity, affordability } =
      itemData.item;

    return (
      <MealItem
        title={title}
        imageUrl={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        onPress={pressHandler.bind(this, itemData.item.id, title)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
