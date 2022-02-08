import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Theme from './../../../../Theme';
import { Button, Input } from './../../../components';
import Logo from './../../../../assets/svg/logo.svg'
let SignIn = (props) => {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("")
    return (
        <SafeAreaView style={styles._container}>
            <View style={styles._logo_main}>
                <Logo width={159} height={159} fill={Theme.primary} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles._heading}>Sign In To Account</Text>
                <Text style={styles._sub_heading}>Sign in with username or email and password to use your account</Text>
                <Input
                    placeholder="Username or email"
                    value={userName}
                    onChangeText={(userName) => setUserName(userName)}
                />
                <TouchableOpacity style={styles._forgot_password_btn} onPress={() => alert("Comming Soon!")}>
                    <Text style={styles._forgot_password_btn_text}>Forget Password ?</Text>
                </TouchableOpacity>
                <Input
                    placeholder="Password"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    passwordInput={true}
                    passwordShowHidden={true}
                />
                <Button
                    ButtonText="Sign In"
                    marginTop={70}
                />
                <View style={styles._dont_account_main}>
                    <Text style={styles._dont_account_heading}>
                        Don’t have an account ?
                    </Text>
                    <TouchableOpacity style={styles._sign_up_btn} onPress={() => alert("Comming Soon!")}>
                        <Text style={styles._sign_up_text}>SIgn up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
let styles = StyleSheet.create({
    _container: {
        flex: 1,
        backgroundColor: Theme.white,
        paddingHorizontal: 20
    },
    _logo_main: {
        alignSelf: "center",
        marginTop: 50,
    },
    _heading: {
        color: Theme.blueLight,
        fontFamily: Theme.semiBold,
        fontSize: 24,
        textAlign: "center",
        marginTop: 20
    },
    _sub_heading: {
        color: Theme.grayLight,
        textAlign: "center",
        fontSize: 12,
        fontFamily: Theme.regular,
        marginTop: 10,
        marginBottom: 15
    },
    _forgot_password_btn: {
        alignSelf: "flex-end",
        marginTop: 5
    },
    _forgot_password_btn_text: {
        color: Theme.gray,
        fontSize: 10,
        fontFamily: Theme.medium
    },
    _dont_account_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
    },
    _dont_account_heading: {
        color: Theme.grayLight,
        fontFamily: Theme.regular,
        fontSize: 12
    },
    _sign_up_btn: {
        borderBottomWidth: 1,
        borderBottomColor: Theme.blueLight,
        marginLeft: 5
    },
    _sign_up_text: {
        color: Theme.blueLight,
        fontFamily: Theme.medium,
        fontSize: 12
    }
})
export default SignIn;