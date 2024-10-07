import React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';

export default function Header(){

        return(
            <View style={styles.container}>

                <View style={styles.leftcontainer} >

                    <Text style={styles.title}>Explore</Text>
               
                </View>

               <View style={styles.rightcontainer}>
                <Image source={require('../../../assets/nasa.png')} style={styles.Image}></Image>
               
               </View>
               
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',

    }
    ,
    leftcontainer:{
        flex:1,
        alignItems: 'flex-start'
    },
    rightcontainer:{
        flex:1,
        alignItems: 'flex-end'
    },
    title:{
        fontSize:24,
        color:'#fff'
    }
    ,
    Image:{
        width:100,
        height:100
    }
})