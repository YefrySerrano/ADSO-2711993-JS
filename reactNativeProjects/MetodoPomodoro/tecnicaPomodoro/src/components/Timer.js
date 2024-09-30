import { Text, View ,StyleSheet } from "react-native";

export default function Timer({time}) {
    const formattedTime = `${Math.floor(time/60).toString().padStart(2,"0")}:${(time % 60).toString().padStart(2,"0")}`
    return(
        <View style={styles.container}>
            <Text style={styles.time}>{formattedTime}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f2f2f2",
        padding:20,
        justifyContent:"center",
        alignItems:"center"
    },
    time:{
        fontSize:40,
        fontWeight:"bold"
    }
 
})