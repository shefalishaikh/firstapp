import React from 'react'
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";

import { useState } from "react";
import StyleSheetContainer from '../StyleSheetContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ navigation }) => {
    const [UserEmail, setUserEmail] = useState('');
    const [userPassword, setuserPassword] = useState('');
    const NAME_KEY = 'user_name';
    const EMAIL_KEY = 'user_email';
    const PASSWORD_KEY = 'user_password';

    const storeData = async () => {
        console.log("working store data");
        try {
            await AsyncStorage.setItem('Email_key', UserEmail);
            await AsyncStorage.setItem('Pass_Key', userPassword);

            console.log("email===", UserEmail, "Pass==", userPassword)
            alert("Data save successfully: ", "email:", UserEmail, " Pass", userPassword);
        } catch (error) {
            alert("Not  save Data", error)
            console.log("Error value===", error);
        }
    };
    const getData = async () => {
        try {
            const Name = await AsyncStorage.getItem(EMAIL_KEY, UserEmail);
            const Pass = await AsyncStorage.getItem(PASSWORD_KEY, userPassword);
        } catch (error) {
            console.log('erore', error)
        }
    }
    const OnSubmitClick = () => {
        storeData();
        Alert.alert("user name:", UserEmail, userPassword);
        console.log('name===', UserEmail)
    }
    return (
        <View style={StyleSheetContainer.containersign}>
            <TextInput style={StyleSheetContainer.signfirstname}
                placeholder="Enter Email"
                onChangeText={(value) => setUserEmail(value)}
                value={UserEmail}
                returnKeyType='next' />
            <TextInput style={StyleSheetContainer.signfirstname}
                placeholder="Enter Passsword"
                onChangeText={(value) => setuserPassword(value)}
                value={userPassword}
                returnKeyType='go' />
            <TouchableOpacity style={StyleSheetContainer.buttonsign}
                onPress={() => {
                    // storeData();
                    navigation.push('Login');
                    //console.log("email====", UserEmail);
                }} >
                <Text style={StyleSheetContainer.signbtntext}>Login</Text>
            </TouchableOpacity>
            <Text style={StyleSheetContainer.notaccounttxt}
                onPress={() => navigation.navigate('signup')} >  Dont't Have an Account? Create one</Text>
            {/* </TouchableOpacity> */}
        </View>
    )
}
export default LoginScreen;