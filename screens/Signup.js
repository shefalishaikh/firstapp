import React from 'react'
import { View, Text, TextInput, onPress, TouchableOpacity, onblur, Keyboard, ScrollView } from "react-native";
import { useState } from "react";
import StyleSheetContainer from "../StyleSheetContainer";
import AsyncStorage from '@react-native-async-storage/async-storage'
import RadioButton from 'react-native-radio-button'
import { color } from 'react-native-reanimated';
const SignupScreen = ({ navigation }) => {


    const EMAIL_KEY = '@save_email';
    const PASSWORD_KEY = '@save_passwprd';
    const GENDER_KEY = '@gender';
    const MOBILE_KEY = '@mobile';
    const FIRST_NAME = '@first_name';
    const LAST_NAME = '@last_name';

    const CONFIRM_PASSWORD = '@confirm_password';
    const [UserFirstName, setUserFirstName] = useState('');
    const [UserLastName, setUserLastName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserPassword, setUserPass] = useState('');
    const [UserMobile, setUserMobile] = useState('');
    // const [UserGender, setUserGender] = useState('');
    const [UserConfirmPass, setUserConfirmPass] = useState('');
    const [Female, setChecked] = useState([
        { id: 1, value: true, name: "Female", selected: false },
        { id: 2, value: false, name: "Male", selected: false }
    ]);
    const [email_error, setEmailError] = useState('');
    const [firstname_error, setFirestNameError] = useState('');
    const [lastname_error, setLastNameError] = useState('');
    const [password_error, setPasswordError] = useState('');
    const [confirm_error, setconfirmError] = useState('');
    const [mobile_error, setMobileError] = useState('');
    //  const [Male, setUnCheked]
    const isValidFirstName = () => {
        if (UserFirstName == '') {
            // setFirestNameError({ firstname_error: "Enter Valid Name" })
            setFirestNameError("Enter Valid Name");
            return false;
            //alert("Enter name ")
        } else {
            setFirestNameError('');
            //alert("name save ")
            return true;
        }
        return true;
    }
    const isValidMobile = () => {
        //    if (UserMobile == '' || UserMobile > 12 && UserMobile < 1) 
        if (UserMobile == '') {
            // setFirestNameError({ firstname_error: "Enter Valid Name" })
            setMobileError("Enter Mobile ");
            return false;
            //alert("Enter name ")
        } else {
            if (UserMobile.length == 10) {
                setMobileError('');
                //alert("name save ")
                return true;
            } else {
                setMobileError("Enter Valid Mobile ");
                return false;
            }
        }
        return true;
    }
    const isValidPassword = () => {
        if (UserPassword == '') {
            // setFirestNameError({ firstname_error: "Enter Valid Name" })
            setPasswordError("Enter Valid password");
            return false;
            //alert("Enter name ")
        } else {
            setPasswordError('');
            //alert("name save ")
            return true;
        }
    }
    const isValidcpnfirmPassword = () => {
        if (UserConfirmPass == '') {
            // setFirestNameError({ firstname_error: "Enter Valid Name" })
            setconfirmError("Enter Confirm Password");
            return false;
            //alert("Enter name ")
        }
        else {
            if (UserConfirmPass == UserPassword) {
                setconfirmError('');
                //alert("name save ")
                return true;
            }
            else {
                setconfirmError('Password not matched.');
                //alert("name save ")
                return false;
            }
        }

    }

    const isValidEmail = () => {
        if (UserEmail == '') {
            // setFirestNameError({ firstname_error: "Enter Valid Name" })
            setEmailError("Enter Valid Email");
            return false;
            //alert("Enter name ")
        } else {
            setEmailError('');
            //alert("name save ")
            return true;
        }
        return true;
    }


    const sigupvalid = () => {
        if (isValidFirstName() && isValidEmail() && isValidMobile() && isValidPassword() && isValidcpnfirmPassword()) {
            // alert("Data Save");
            saveData();
        }
    }

    const saveData = () => {

        try {
            AsyncStorage.setItem(FIRST_NAME, UserFirstName);
            AsyncStorage.setItem(LAST_NAME, UserLastName);
            AsyncStorage.setItem(EMAIL_KEY, UserEmail);
            AsyncStorage.setItem(PASSWORD_KEY, UserPassword);
            AsyncStorage.setItem(MOBILE_KEY, UserMobile);
            // AsyncStorage.setItem(PASSWORD_KEY, UserPassword);
            // await AsyncStorage.setItem(CONFIRM_PASSWORD, UserConfirmPass);
            AsyncStorage.getItem(EMAIL_KEY)
                .then((Email) => {
                    alert("Id successfully created with\n" + Email);
                })
            // alert("Data Save ");

            // console.log("Data Successfully Save", UserFirstName, UserLastName, UserMobile, UserEmail, UserPassword);
        }
        catch (error) {
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
    const KeyboardDismiss = () => {
        Keyboard.dismiss();
    }
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={StyleSheetContainer.containersign} ontPress={() => KeyboardDismiss()} >
                {/* <Text style={StyleSheetContainer.signtext}> Sign up  </Text> */}
                <TextInput style={StyleSheetContainer.signfirstname}
                    placeholder="Enter First Name"
                    autoCapitalize="words"
                    placeholderTextColor='blue'
                    onChangeText={(Value) => setUserFirstName(Value)}
                    value={UserFirstName} />
                <Text style={StyleSheetContainer.errrotText}> {firstname_error}</Text>
                {/* <Text style={StyleSheetContainer.errrotText} onblur={() => { setFirestNameError }} /> */}
                <TextInput style={StyleSheetContainer.signfirstname}
                    placeholder="Enter Last Name"
                    onChangeText={(value) => setUserLastName(value)}
                    value={UserLastName}
                    placeholderTextColor='blue'
                    returnKeyType='next' />
                <Text style={StyleSheetContainer.errrotText}> {firstname_error}</Text>
                <TextInput style={StyleSheetContainer.signfirstname}
                    placeholder="Enter Email"
                    autoCompleteType="email"
                    keyboardType="email-address"
                    autoCapitalize='none'
                    onChangeText={(value) => setUserEmail(value)}
                    value={UserEmail}
                    placeholderTextColor='blue'
                    returnKeyType='next' />
                <Text style={StyleSheetContainer.errrotText}> {email_error}</Text>
                <TextInput style={StyleSheetContainer.signfirstname}
                    placeholder="Enter Phone Number"
                    onChangeText={(value) => setUserMobile(value)}
                    value={UserMobile}
                    keyboardType='numeric'
                    placeholderTextColor='blue'
                    returnKeyType='next' />
                <Text style={StyleSheetContainer.errrotText}> {mobile_error}</Text>
                <TextInput style={StyleSheetContainer.signfirstname}
                    placeholder="Enter Passsword"
                    placeholderTextColor='blue'
                    onChangeText={(value) => setUserPass(value)}
                    value={UserPassword}
                    returnKeyType='next' />
                <Text style={StyleSheetContainer.errrotText}> {password_error}</Text>
                <TextInput style={StyleSheetContainer.signfirstname}
                    placeholder="Confirm  Passsword"
                    onChangeText={(value) => setUserConfirmPass(value)}
                    value={UserConfirmPass}
                    placeholderTextColor='blue'
                    returnKeyType='next' />
                <Text style={StyleSheetContainer.errrotText}> {confirm_error}</Text>
                <TouchableOpacity style={StyleSheetContainer.buttonsign}
                    onPress={() =>
                    // console.log("data save----", UserFirstName);
                    {

                        sigupvalid();
                        saveData();
                        // saveData();
                        // navigation.navigate('Login');
                        //  navigation('Login')

                    }}>

                    <Text style={StyleSheetContainer.signbtntext} >Signup </Text>
                </TouchableOpacity>

                <Text style={StyleSheetContainer.notaccounttxt}
                    onPress={() => navigation.navigate('Login')}>Already Have an account!Login</Text>
            </View>
        </ScrollView>

    )
}
export default SignupScreen;