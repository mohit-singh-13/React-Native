import { FlatList, View, Text, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

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
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
