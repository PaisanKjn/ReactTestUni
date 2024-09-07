import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import AppLogo from "../components/AppLogo";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>(); // return the props so you don't have to type the navigation/route shit thing

  const MaterialHeaderButton = (props: any) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
      headerTitle: () => <AppLogo />,
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => Alert.alert("Alert","Hello React Native")}
          />
        </HeaderButtons>
      ), 
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="hasNoMeaning"
            iconName="logout"
            onPress={() => Alert.alert("Alert","Logout")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const goToAbout = () => {
    navigation.navigate("About", {
      companyName: "泰国人公司",
      companyId: 420,
    });
  };
  const goToCreatePost = () => {
    navigation.navigate("CreatePost");
  };
  return (
    <View style={styles.container}>
      <MaterialIcon name="home" size={40} color="#ec3faa" />
      <Text style={styles.header}>HomeScreen</Text>
      <Button color={"#67a33b"} title="About Us" onPress={goToAbout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา
    fontWeight: "bold",
  },
});
