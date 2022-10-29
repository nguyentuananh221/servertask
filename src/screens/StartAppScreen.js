import React from "react"
import Backgroundview from "../components/BackgroundView";
import COLORS from '../constants/colors';
import { Image,SafeAreaView,StyleSheet, Text, TouchableProps, View } from "react-native";

export default function Startappscreen({navigation}) {
    
    return (
        <Backgroundview>
            <SafeAreaView style={styles.container}>
            <View style = {styles.logo}>
                <Image source={IMAGE.logo} style={styles.img}/>
            </View>
            <View style={styles.content}>
                <View>

                <Largetext>Discover your Dream Here</Largetext>
                <View style={styles.smallText}>
                    <Smalltext align={'center'}>Explore all the most exiting courses on your interest and study major</Smalltext>
                </View>
                </View>
                <View style={styles.btnContainer}>
                    <Custombutton btnTitle={'Register'}
                    btnWidth={'50%'} btnColor={'white'} btnHeight={50}
                    pdH={30} borderRadius={15} 
                    onPress={() => navigation.replace('RegisterScreen')}
                    />
                    <Custombutton btnTitle={'Sign In'}
                    btnWidth={'50%'}
                    pdH={30}
                    onPress={() => navigation.replace('LoginScreen')}/>
                </View>
            </View>
            </SafeAreaView>
        </Backgroundview>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    logo : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        marginHorizontal : 10,
    },
    img : {
        width : '100%',
        height : '100%',
        borderRadius : 30
    },
    content :{
        flex : 1,
        marginHorizontal : 20,
        marginVertical : 10,
        justifyContent : 'space-around'
    },
    smallText : {
        marginTop : 20
    },
    btnContainer : {
        width : '100%',
        borderWidth : 1,
        borderColor : COLORS.white,
        flexDirection : 'row',
        borderRadius : 15
    }
})
