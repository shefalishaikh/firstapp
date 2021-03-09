import React from 'react'
import { View, Text, TextInput, onPress, TouchableOpacity } from "react-native";
import { useState } from "react";
import StyleSheetContainer from "../StyleSheetContainer";
import AsyncStorage from '@react-native-async-storage/async-storage'
import RadioButton from 'react-native-radio-button'
const SignupScreen = ({ navigation }) => {


    const EMAIL_KEY = '@save_email';
    const PASSWORD_KEY = '@save_passwprd';
    const GENDER = '@gender';
    const MOBILE = '@mobile';
    const FIRST_NAME = '@first_name';
    const LAST_NAME = '@last_name';

    const CONFIRM_PASSWORD = '@confirm_password';
    const [UserFirstName, setUserFirstName] = useState('');
    const [UserLastName, setUserLastName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserPassword, setUserPass] = useState('');
    const [UserMobile, setUserMobile] = useState('');
    const [UserGender, setUserGender] = useState('');
    const [UserConfirmPass, setUserConfirmPass] = useState('');
    const [Female, setChecked] = useState([
        { id: 1, value: true, name: "Female", selected: false },
        { id: 2, value: false, name: "Male", selected: false }
    ]);
    //  const [Male, setUnCheked]
    const saveData = async () => {

        try {
            await AsyncStorage.setItem(EMAIL_KEY, UserEmail);
            await AsyncStorage.setItem(FIRST_NAME, UserFirstName);
            await AsyncStorage.setItem(PASSWORD_KEY, UserPassword);
            await AsyncStorage.setItem(LAST_NAME, UserLastName);
            await AsyncStorage.setItem(MOBILE, UserMobile)
            await AsyncStorage.setItem(PASSWORD_KEY, UserPassword);
            await AsyncStorage.setItem(CONFIRM_PASSWORD, UserConfirmPass);
            await AsyncStorage.setItem(GENDER, UserGender);
            alert("Data Save ");
            console.log("Data Successfully Save", UserFirstName, UserLastName);
        } catch (error) {
            alert("Not  save Data", error)
            console.log("Error value===", error);
        }
    }
    const onRadioBtnClick = (item) => {
        let updatedState = Female.map((femaleItem) =>
            femaleItem.id === item.id
                ? { ...femaleItem, selected: true }
                : { ...femaleItem, selected: false }
        );
        setIsLiked(updatedState);
    };

    return (
        <View style={StyleSheetContainer.containersign}>
            {/* <Text style={StyleSheetContainer.signtext}> Sign up  </Text> */}
            <TextInput style={StyleSheetContainer.signfirstname}
                placeholder="Enter First Name"
                placeholderTextColor='blue'
                onChangeText={(Value) => setUserFirstName(Value)}
                value={UserFirstName} />
            <TextInput style={StyleSheetContainer.signfirstname}
                placeholder="Enter Last Name"
                onChangeText={(value) => setUserLastName(value)}
                value={UserLastName}
                placeholderTextColor='blue'
                returnKeyType='next' />
            <TextInput style={StyleSheetContainer.signfirstname}
                placeholder="Enter Email"
                onChangeText={(value) => setUserEmail(value)}
                value={UserEmail}
                placeholderTextColor='blue'
                returnKeyType='next' />
            <TextInput style={StyleSheetContainer.signfirstname}
                placeholder="Enter Phone Number"
                onChangeText={(value) => setUserMobile(value)}
                value={UserMobile}
                placeholderTextColor='blue'
                returnKeyType='next' />
            <TextInput style={StyleSheetContainer.signfirstname}
                placeholder="Enter Passsword"
                placeholderTextColor='blue'
                onChangeText={(value) => setUserPass(value)}
                value={UserPassword}
                returnKeyType='next' />
            <TextInput style={StyleSheetContainer.signfirstname}
                placeholder="Confirm  Passsword"
                onChangeText={(value) => setUserConfirmPass(value)}
                value={UserConfirmPass}
                placeholderTextColor='blue'
                returnKeyType='next' />
            <TouchableOpacity style={StyleSheetContainer.buttonsign}
                onPress={() => {
                    console.log("data save----", UserFirstName);
                    {
                        saveData();
                        navigation.navigate('Login');
                        //  navigation('Login')
                    }
                }}>

                <Text style={StyleSheetContainer.signbtntext}
                >Signup </Text>
            </TouchableOpacity>
            <Text style={StyleSheetContainer.notaccounttxt}
                onPress={() => navigation.navigate('Login')}>Already Have an account!Login</Text>
            {/* <TouchableOpacity style={StyleSheetContainer.radioButton}
                onPress={() => onRadioBtnClick(item)} >
                <Text style={StyleSheetContainer.radioButtonText}>Female</Text>
            </TouchableOpacity> */}
            {/* <View style={StyleSheetContainer.radioButtonContainer}>
                <RadioButton  style={StyleSheetContainer.radioButton}
                
                    Female={true} >
                    <Text> Female</Text>
                </RadioButton>
            </View> */}
            {/* <RadioButton
                value="Male"
                status={checked === 'Male' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Male')}
            /> */}

        </View>
    )
}
export default SignupScreen;