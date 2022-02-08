import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Theme from './../../../Theme';
import { Feather } from '@expo/vector-icons';
let Input = (props) => {
    let [showPassword, setShowPassword] = useState(false)
    return (
        <>
            {props.passwordInput ?
                <>
                    {
                        props.passwordShowHidden ?
                            <View style={styles._password_input_main}>
                                <TextInput
                                    style={styles._password_textinput}
                                    placeholder={props.placeholder}
                                    placeholderTextColor={Theme.gray}
                                    value={props.value}
                                    onChangeText={props.onChangeText}
                                    secureTextEntry={showPassword ? true : false}
                                />
                                <TouchableOpacity style={styles._eye_icon_main} onPress={() => setShowPassword(!showPassword)}>
                                    {!showPassword ?
                                        < Feather name="eye" size={15} color={Theme.gray} />
                                        :
                                        <Feather name="eye-off" size={15} color={Theme.gray} />
                                    }
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={styles._input_main}>
                                <TextInput
                                    style={styles._textinput}
                                    placeholder={props.placeholder}
                                    placeholderTextColor={Theme.gray}
                                    value={props.value}
                                    onChangeText={props.onChangeText}
                                    secureTextEntry={true}
                                />
                            </View>
                    }
                </>

                :
                <View style={styles._input_main}>
                    <TextInput
                        style={styles._textinput}
                        placeholder={props.placeholder}
                        placeholderTextColor={Theme.gray}
                        value={props.value}
                        onChangeText={props.onChangeText}
                    />
                </View>
            }
        </>
    )
}
let styles = StyleSheet.create({
    _input_main: {
        borderBottomWidth: 1,
        borderBottomColor: Theme.grayLight,
        paddingBottom: 10,
        marginTop: 20
    },
    _textinput: {
        color: Theme.gray,
        fontFamily: Theme.medium,
        fontSize: 14
    },
    _password_input_main: {
        borderBottomWidth: 1,
        borderBottomColor: Theme.grayLight,
        paddingBottom: 10,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _password_textinput: {
        color: Theme.gray,
        fontFamily: Theme.medium,
        fontSize: 14,
        width: "80%"
    },
    _eye_icon_main: {
        width: 30,
        height: 30,
        alignItems: "center",
        borderRadius: 30 / 2,
        // backgroundColor:"red",
        justifyContent: "center"
    }
})
export default Input