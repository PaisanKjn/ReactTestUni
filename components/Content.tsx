import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

const Content = () => {
  return (
    <View style = {styles.content}>
      <Text style = {styles.text}>Content</Text>
      <Button title='Hello'/>
    </View>
  )
}

export default Content

const styles = StyleSheet.create({
    content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    text: {
    fontSize: 18,
    marginBottom: 20,
    },
    });
    