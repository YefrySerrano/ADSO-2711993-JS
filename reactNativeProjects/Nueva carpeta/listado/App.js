import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/componentes/Main';
import Repos from './src/componentes/Repos';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Main/> */}
      <Repos/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
