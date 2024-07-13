import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

export default function App(): React.JSX.Element {

  const onClickMe = () => {
    Alert.alert("Hi", "Hello React.js");
  }
  const users = [
    { id: 1001, name: 'John' },
    { id: 1002, name: 'Nick' },
  ]

  return (
    <View style={styles.container}>
      <AppHeader title = "This is a Header" year={2002}/>
      <AppHeader title = "This is an another Header"/>

      <Text>Hello React Native!</Text>
      <View>
      {users.map((data, index) => {
        return (
          <Text key = {data.id}>
            No. {index} ID: {data.id} Name: {data.name}
          </Text>
        )
      })}
      </View>
      <Button
        title="Click Me"
        // onPress={() => {
        //   Alert.alert("HI", "React Native is SO fun!");
        // }}

        onPress={onClickMe}
        color="turquoise"
      />
      <StatusBar style="auto" />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
