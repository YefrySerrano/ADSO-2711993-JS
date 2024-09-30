import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const options = ["Pomodoro", "Short Break", "Long Break"]

export default function Header({ currentTime, setCurrentTime, setTime }) {
    function handlePress(index) {
        const newTime = index === 0 ? 25: index === 1 ? 5: 15;
        setCurrentTime(index);
        setTime = (newTime * 60)
    }
    return (
        <View style={styles.view}>
            {options.map((item, index) => (
                <TouchableOpacity key={index} style={styles.itemStyles}>
                    <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
    itemStyles: {
        textAlign: 'center',
        padding: 10,
    },
    text: {
        padding: 5,
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 5,
        textAlign: "center",
        color: "#36ffff"
    }
})
