import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {

        backgroundColor: 'orange',
        marginTop: 150,
        flex: 1,

    },
    signtext:
    {
        color: 'blue',
        //marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        fontFamily: 'bold',
        fontSize: 40,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signbtntext: {
        color: 'white',
        fontSize: 18

    },
    logtxt:
    {
        fontSize: 15,
        color: 'blue',
        alignItems: 'center',
        marginLeft: 80,
        marginTop: 40
    },
    textInput: {
        backgroundColor: 'white',
        borderWidth: 5,
        //borderColor: '#556cd6',
        borderColor: '#dadae8',
        borderRadius: 1
    },
    notaccounttxt:
    {
        marginTop: 25,
        marginLeft: 100,
        color: 'blue',
        fontSize: 15

    },

    loginform: {
        justifyContent: 'center',
        minHeight: 90
    },

    loginbackground: {
        justifyContent: 'center',
        minHeight: 30,
        padding: 50
    },
    nametext: {
        marginTop: 20,
        color: 'black',
        backgroundColor: 'grey',
        textShadowRadius: 50,
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        color: 'black',
        width: '90%',
        borderRadius: 27,
        backgroundColor: 'white',
        opacity: 1
    },
    passwordtext: {
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 1,
        backgroundColor: 'grey',
        color: 'black',
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: 50,
        borderColor: 'black',
        width: '90%',
        borderRadius: 27,
        backgroundColor: 'white',
        opacity: 1
    },
    btnlogin: {
        backgroundColor: 'orange',
        marginTop: 30,
        padding: 10, justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
        // borderTopRightRadius: 20,
        // borderBottomLeftRadius: 20,
        marginLeft: 50, marginRight: 50

    },

    buttontxt: {
        backgroundColor: 'orange',
        marginTop: 180,
        padding: 15, justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        marginLeft: 50, marginRight: 50
    },
    buttonsign: {
        backgroundColor: 'blue',
        marginTop: 45,
        padding: 15, justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        // borderTopRightRadius: 20,
        // borderBottomLeftRadius: 20,
        marginLeft: 50, marginRight: 50,
        borderRadius: 20
    },
    passtext: {
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 1,
        backgroundColor: 'grey',
        color: 'black',
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: 50,
        borderColor: 'black',
        width: '90%',
        borderRadius: 27,
        backgroundColor: 'white',
        opacity: 1
    },
    containersign: {
        flex: 1,
        // backgroundColor: 'blue',
        marginTop: 90,

        marginHorizontal: 10,
        // marginBottom: 40,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        //  backgroundColor: '#7BDCB5',

    },
    signfirstname: {
        borderRadius: 10,
        backgroundColor: '#E6E6E6',
        //marginTop: 50,
        // backgroundColor: 'grey',
        justifyContent: 'center',
        // marginStart: 10,
        // padding: 4,
        margin: 5,
        // marginEnd: 10,
        // borderRadius: 22,
        // borderWidth: 1,
        // position: 'absolute',
        // alignSelf: 'center',
        // zIndex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // display: 'flex',
        // color: 'black',
        // width: '90%',
        // borderRadius: 27,
        // backgroundColor: 'white',
        // opacity: 1

        // borderBottomWidth: 1,
        // borderStartWidth: 2,
        // borderTopWidth: 2,
        // borderColor: 'white',
        // borderTopLeftRadius: 2
    },
    radioButtonContainer: {
        //   marginTop: 400,

        flexDirection: "row",
        alignItems: "flex-end",
        marginRight: 10
    },
    radioButton: {
        marginLeft: 4,
        backgroundColor: "orange",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",

    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6"
    },
    radioButtonText: {
        fontSize: 16,
        marginTop: 400,
        backgroundColor: 'orange'

    }



}
)