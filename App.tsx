import { View, Text, TextInput, Button, Alert } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import { stylesLogin } from './styles/styles'
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onButtonClick = () => {
    if(name === '') {
      Alert.alert("Please Enter Name");
    } else if (email === '') {
      Alert.alert("Please Enter Email");
    } else {
      Alert.alert("Success");
    }
  }
  return (
    <View>
      <ProfileScreen/>

      <View style={[stylesLogin.container, {}]}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
       <Button title="Submit" 
      onPress={onButtonClick}/>
      </View>
    </View>
  )
}

export default App