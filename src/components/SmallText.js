import React from "react"
import { StyleSheet,Text } from "react-native"
import COLORS from '../constants/colors';
export default function Smalltext({children, align, color, bold}) {
    

    return (

        <Text style = {[styles.txt, {
            textAlign : !align ?'left' : align,
            color : !color ? COLORS.smallTxt : color,
            fontWeight : bold ? 'bold' : 'normal'
        }]}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    txt : {
        // fontWeight : 'bold',
        fontSize : 20,
        // textAlign : 'center'
    }
})
