import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import NavBar from './src/components/NavBar';
import ToDoScreen from './src/screens/ToDoScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.screen}>
        <ToDoScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90'
  },
  screen: {
    flex: 1,
    marginTop: 100, 
    width: '100%',
    paddingHorizontal: 15,
  },
});
