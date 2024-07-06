import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{fontWeight: 'bold'}}>Open up App.tsx to start working on your app!</Text>
      <Text> I love when I can sleep all day</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
