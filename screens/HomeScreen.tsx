import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

const HomeScreen = ({navigation, route}: any):React.JSX.Element => {
  const goToAbout = () => {
    navigation.navigate('About', {
      companyName: '泰国人公司',
      companyId: 420
    });
  };
  const goToCreatePost = () => {
    navigation.navigate('CreatePost');
  }
  return (
    <View style = {styles.container}>
      <Text style= {styles.header}>HomeScreen</Text>
      <Button
      title = "About Us"
      onPress={goToAbout}/>
      <View style = {styles.postContainer}>

     
       <Button
      title = "Create POST"
      onPress={goToCreatePost}/>
      <Text style = {styles.postText}>Post: <Text style = {styles.postContent}>{route.params?.post}</Text> </Text>
     
       </View>
    </View>
  )
}

export default HomeScreen

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