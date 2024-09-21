import "react-native-gesture-handler"; // needs to be at the top of App.tsx
import { View } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuScreen from "./screens/MenuScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const LoginStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
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
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Products" component={ProductScreen} />
      <ProductStack.Screen name="Details" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} options={{
        headerStyle: { backgroundColor: "#FFB449" },
        headerTintColor: "white",
      }} />

    </LoginStack.Navigator>
  );
}

const App = (): React.JSX.Element => {

  const [isLogin] = useState(false);

  return (
    <>
      <SafeAreaProvider>
        <HeaderButtonsProvider stackType="native">
          <NavigationContainer>

            {isLogin ? (
              <Drawer.Navigator
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <MenuScreen {...props} />}
              >
                <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
                <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
              </Drawer.Navigator>
            )
              : (
                <LoginStackScreen />
              )}

          </NavigationContainer>
        </HeaderButtonsProvider>
      </SafeAreaProvider>
      <Toast />
    </>
  );
};

export default App;
