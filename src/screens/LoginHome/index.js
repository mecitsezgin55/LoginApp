import React from "react";
import { View,Text,StyleSheet,Dimensions,TouchableOpacity,SafeAreaView } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LoginHome = () => {

    const nav = useNavigation();

    return(
        <SafeAreaView style={{flex:1, justifyContent:'space-between', backgroundColor:'#fff'}}>
            <View style={myStyle.logoStyle}>
                <AntDesign 
                    name='twitter'
                    size={width*0.06}
                    color='#1DA1F2'
                />
            </View>

            <View style={myStyle.centerStyle}>
                <Text style={myStyle.centerTextStyle}
                >
                    Şu anda dünyada{'\n'}olup bitenleri gör.
                </Text>

                <TouchableOpacity style={myStyle.centerButtonStyle}>
                    <Text style={myStyle.centerButtonTextStyle}>Hesap oluştur</Text>
                </TouchableOpacity>
            </View>

            <View style={myStyle.bottomStyle}>
                <Text style={myStyle.bottomTextStyle}>Zaten bir hesabın var mı?  </Text>
                <TouchableOpacity onPress={() => nav.navigate('Login')}>
                    <Text style={myStyle.loginButtonStyle} 
                    >Giriş yap</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const myStyle = StyleSheet.create({
    logoStyle:{
        alignItems:'center',
        marginTop: width*0.04
    },
    centerStyle:{
        alignItems:'center',
        justifyContent:'center'
    },
    centerTextStyle:{
        fontSize:32,
        fontWeight:'bold',
        marginRight:40,
        marginBottom: width*0.08
    },
    centerButtonStyle:{
        backgroundColor: '#1DA1F2',
        borderRadius:999,
        width: '75%',
        paddingVertical: height*0.005,
        alignItems:'center'
    },
    centerButtonTextStyle:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:25
    },
    bottomStyle:{
        flexDirection:'row',
        marginBottom: width * 0.08
    },
    bottomTextStyle:{
        color:'gray',
        fontSize:17,
        marginLeft: width* 0.1
    },
    loginButtonStyle:{
        color:'#1DA1F2',
        fontSize:17
    }
})

export {LoginHome};