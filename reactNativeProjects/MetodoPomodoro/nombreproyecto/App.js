// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, StatusBar, Text, View, TouchableOpacity, } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import { Audio } from 'expo-av';
const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"]


export default function App() {
  const [isWorking, setWorking] = useState(false)
  const [time, setTime] = useState(25*60)
  const [currentTime, setCurrentTime] = useState("POMO"|"SHORT"|"BREAK")
  const [isActive, setIsActive] = useState();
  const handleStarStop = () =>{
    playSound();
    setIsActive(!isActive)
   
  }

  async function playSound(){
    const{sound} = await Audio.Sound.createAsync(require("./assets/sound.mp3"))
    await sound.playAsync()
  } 

  useEffect(() => {
    let interval = null
    if(isActive){
      interval = setInterval(() =>{
        setTime(time -1)
      },1000)
    }
    else{
      clearInterval(interval)
    }
    if(time === 0){
      setIsActive(false)
      setIsWorking(!isWorking)
      setTime(isWorking ? 300: 15000)
    }
    return () => clearInterval(interval);
    },[isActive,time]
  )

  return (
    <View style={[styles.container, {backgroundColor:colors[currentTime]}]}>
      <Text style={styles.text}>¡POMODORO!</Text>
      <StatusBar barStyle="dark" />
      <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime}/>
      <Timer time={time}/>
      <TouchableOpacity style={styles.button} onPress={handleStarStop}>
        <Text style={{color: "white", fontWeight: 'bold', fontSize: 26,}}>{isActive ? "STOP" : "START"} </Text>
      </TouchableOpacity>
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
  },
  button:{
    backgroundColor: "#333333",
    padding:15,
    marginTop:25,
    borderRadius:15,
    alignItems: 'center'
  }

});