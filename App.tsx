import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{fontWeight: 'bold'}}>Open up App.tsx to start working on your app!</Text>
      <Text>I should have been at SkyFest, what am I doing? TT</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fec',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
