import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetails from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavouritesContextProvider from "./store/context/favourites-context";

const NavigationStack = createNativeStackNavigator();
const NavigationDrawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationDrawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#582508ff" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
      }}
    >
      <NavigationDrawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />

      <NavigationDrawer.Screen
        name="Favourite"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </NavigationDrawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <NavigationStack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#582508ff" },
            }}
          >
            <NavigationStack.Screen
              name="Drawer"
              component={DrawerNavigation}
              options={{ headerShown: false }}
            />

            <NavigationStack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />

            <NavigationStack.Screen
              name="MealDetails"
              component={MealDetails}
            />
          </NavigationStack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
