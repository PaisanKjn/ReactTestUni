import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppFooter = (): React.JSX.Element => {
  const hello = "Hello TNI Footer";
  const hello2 = <Text>Hello JSX</Text>;
  const isLogin = false;
  return (
    <View>
      <Text style={styles.myText}>
        {hello} Date: {new Date().toLocaleDateString()}
      </Text>
      {hello2}

      {isLogin && <Text>Welcome</Text>}
      {
        isLogin ?
        (<Text>Welcome Mary</Text>) :
        (<Text>GTFO Mary</Text>)
      }
    </View>
  )
}

export default AppFooter

const styles = StyleSheet.create({
  myText: {
    color: "red"
  }
})