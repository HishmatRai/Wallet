import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Theme from './../../../Theme';
import { Entypo } from '@expo/vector-icons';
let Button = (props) => {
    return (
        <TouchableOpacity style={[styles._btn, { marginTop: props.marginTop }]} onPress={() => alert("Comming Soon!")}>
            <Text style={styles._btn_text}>{props.ButtonText}</Text>
            <Entypo name="chevron-small-right" size={24} color={Theme.white} />
        </TouchableOpacity>
    )
}
let styles = StyleSheet.create({
    _btn: {
        backgroundColor: Theme.primary,
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    _btn_text: {
        color: Theme.white,
        fontSize: 14,
        fontFamily: Theme.medium
    }
})
export default Button