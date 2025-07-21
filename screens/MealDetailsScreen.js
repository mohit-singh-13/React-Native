import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";

const MealDetailsScreen = ({ route, navigation }) => {
  const { mealId, mealTitle } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: mealTitle });
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Fav" />;
      },
    });
  }, []);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = selectedMeal;

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <Text style={styles.title}>{title}</Text>

      <View style={styles.details}>
        <Text style={styles.detailText}>{duration} m</Text>
        <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          {ingredients.map((ingredient, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.itemText}>{ingredient}</Text>
            </View>
          ))}

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          {/* <ScrollView> */}
          {steps.map((step, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.itemText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },

  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 8,
  },

  detailText: {
    color: "white",
  },

  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
  },

  subtitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },

  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 24,
    backgroundColor: "white",
  },

  itemText: {
    color: "brown",
    textAlign: "center",
  },

  listContainer: {
    maxWidth: "80%",
  },

  listOuterContainer: {
    alignItems: "center",
  },
});
