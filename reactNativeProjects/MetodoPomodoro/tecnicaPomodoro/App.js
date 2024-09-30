import { useState } from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import Header from './src/components/Header';

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]

export default function App() {
  const [isWorking, setWorking] = useState(false)
  const [time, setTime] = useState(25*60)
  const [currentTime, setCurrentTime] = useState("POMO"|"SHORT"|"BREAK")
  return (
    <View style={[styles.container, {backgroundColor:colors[currentTime]}]}>
      <Text style={styles.text}>¡POMODORO!</Text>
      <StatusBar barStyle="dark" />
      <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime}/>
      <Text>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "gray"
  },
  text:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#36ffff"
  }
});