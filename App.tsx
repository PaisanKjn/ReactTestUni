import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'

const App = (): React.JSX.Element => {
  return (
    <View style = {{flex:1, backgroundColor: "#121212"}}>
      <ProfileScreen/>
    </View>
  )
}

export default App