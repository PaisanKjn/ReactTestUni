import 'react-native-gesture-handler' // needs to be at the top of App.tsx
import { View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen(){

  return(
    <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      // Global config
      // headerStyle: { backgroundColor: "#205a41" },
      // headerTintColor: "white",
      headerTitleStyle: { fontWeight: "bold" },
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
      options={{
        title: "About Us",
        headerStyle: { backgroundColor: "#205a41" },
        headerTintColor: "white",
      }}
      name="About"
      component={AboutScreen}
    />
  </HomeStack.Navigator>
  )
};
const App = (): React.JSX.Element => {




  return (
    <HeaderButtonsProvider stackType="native">
      <NavigationContainer>
        <Drawer.Navigator
        screenOptions={{headerShown:false}}>
          <Drawer.Screen name = "HomeStack" component={HomeStackScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </HeaderButtonsProvider>
  );
};

export default App;
