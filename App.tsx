import { View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";

const App = (): React.JSX.Element => {
  const HomeStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#205a41" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      >
        <HomeStack.Screen
          options={{
            title: "Main",
          }}
          name="Home"
          component={HomeScreen}
        />
        <HomeStack.Screen
          options={{ title: "About Us" }}
          name="About"
          component={AboutScreen}
        />
        <HomeStack.Screen
          options={{ title: "Create Post" }}
          name="CreatePost"
          component={CreatePostScreen}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
