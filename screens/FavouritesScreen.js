import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { StyleSheet, Text, View } from "react-native";

const FavouritesScreen = () => {
  const { ids } = useContext(FavouritesContext);

  const displayedMeals = MEALS.filter((meal) => ids.includes(meal.id));

  return (
    <View style={styles.rootContainer}>
      {displayedMeals.length > 0 ? (
        <MealsList items={displayedMeals} />
      ) : (
        <View style={styles.innerContainer}>
          <Text style={styles.noFavText}>
            Your favourite meals will appear here
          </Text>
        </View>
      )}
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  noFavText: {
    color: "white",
  },
});
