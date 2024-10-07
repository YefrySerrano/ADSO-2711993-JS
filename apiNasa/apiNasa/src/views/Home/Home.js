
import { View, StyleSheet, Image, Text } from 'react-native';
import Header from '../../components/header/Header'
import React, {useEffect , useState} from 'react';
import fetchApi from '../../utils/fetch'

function Home(){
    const [image, setImage] = useState([])
    useEffect(()=>{

        const loadTodayImage = async()=>{
            try {
                const loadTodayImage = await fetchApi()
                setImage(loadTodayImage.url)
                console.log(loadTodayImage.url)
            } catch (error) {
                console.log("se profujo el siguiente error", error)
                
            }
        }
        loadTodayImage().catch(null);
    },[])
    return (
        <View style={styles.container}>
            <Header/>
            <Text>{image.title}</Text>
            <Image source={{uri:image}} style={styles.img}></Image>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingHorizontal:18,
        paddingTop:95,
    },
    img:{
        with:60,
        height:60,

    }
})