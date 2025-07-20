import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { CATEGORIES } from "./data/dummy-data";

const NavigationStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      <NavigationContainer>
        <NavigationStack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#582508ff" },
          }}
        >
          <NavigationStack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              // headerStyle: { backgroundColor: "#351401" },
              // headerTintColor: "white",
              // contentStyle: { backgroundColor: "#582508ff" },
            }}
          />

          <NavigationStack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const { categoryId } = route.params;
            //   const category = CATEGORIES.find(
            //     (category) => category.id === categoryId
            //   );

            //   return { title: category.title };
            // }}
          />
        </NavigationStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
