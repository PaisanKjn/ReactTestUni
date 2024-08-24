import { View } from "react-native";
import React from "react";
import FlatListExample from "./components/FlatListExample"
import FlatListBackEnd from "./components/FlatListBackEnd";
import NewsApp from "./components/NewsApp";
import AxiosGetData from "./components/AxiosGetData";
import AxiosPostData from "./components/AxiosPostData";
import WeatherLondon from "./components/WeatherLondon";

const App = () => {
  return (
    <View>
      {/* <FlatListExample/> */}
      {/* <FlatListBackEnd/> */}
      {/* <NewsApp/> */}
      {/* <AxiosPostData/> */}
      <WeatherLondon/>
    </View>
  );
};

export default App;
