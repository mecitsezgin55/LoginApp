import React,{useState,useEffect} from "react";
import { View,Text,Dimensions,TouchableOpacity, StyleSheet,TextInput} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let input0Ref,input1Ref, nav;

const header = () =>{
    return(
        <View style={myStyle.headerStyle}>
            <TouchableOpacity onPress={() => nav.goBack()}>
                <Ionicons 
                    name={'arrow-back'}
                    color={'#1DA1F2'}
                    size={width * 0.07}
                />
            </TouchableOpacity>

            <View style={{ flex: 1 }} />

            <AntDesign 
                    name='twitter'
                    size={width*0.06}
                    color='#1DA1F2'
            />

            <TouchableOpacity style={{marginLeft:'10%',marginRight:'10%'}}>
                <Text style={{color:'#1DA1F2',fontWeight:'bold', fontSize:18}}>Kaydol</Text>
            </TouchableOpacity>

            <Entypo 
                    name='dots-three-vertical'
                    size={width*0.06}
                    color='#1DA1F2'
            />
        </View>
    )
}

const Login = () => {
    nav = useNavigation();

    const [focusedInput, setFocusedInput] = React.useState(-1);
    const [passwordShown, setPasswordShown] = React.useState(false);

    return(
        <View>
            {header()}

            <Text style={myStyle.twitterTextStyle}>Twitter'a giriş yap.</Text>

            <TouchableOpacity 
                style={[myStyle.inputContainer, focusedInput === 0 && { borderColor: '#1DA1F2' }]}
                onPress={() => input0Ref.focus()}
                activeOpacity={1}>

                <Text style={myStyle.text1Style}>Telefon, e-posta ya da kullanıcı adı</Text>

                <TextInput 
                    ref={d => { input0Ref = d }}
                    style={{padding: 0,marginVertical: 6}}
                    onFocus={() => setFocusedInput(0)}
                />
            </TouchableOpacity>
        </View>
    );
}

const myStyle = StyleSheet.create({
    headerStyle:{
        flexDirection : 'row',
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        justifyContent: 'space-between'
    },
    twitterTextStyle:{
        fontWeight:'bold',
        fontSize:25,
        marginLeft: '4%'
    },
    inputContainer: {
        borderBottomWidth: 2,
        borderColor: '#00000066',
        marginHorizontal: '2%',
        marginTop: '6%'
    },
    text1Style:{
        color:'gray',
        fontSize:16
    }
})
export {Login};