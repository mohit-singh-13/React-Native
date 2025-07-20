import { View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  function pressHandler(id) {
    navigation.navigate("MealsOverview", { categoryId: id });
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler.bind(this, itemData.item.id)}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
