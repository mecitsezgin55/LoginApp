import React from "react";
import { View,Text,StyleSheet } from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign'

const Splash = () => {
    return(
        <View style={myStyle.container}>
            <AntDesign 
                name='twitter'
                size={45}
                color='#fff'
            />
        </View>
    );
}

const myStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#1DA1F2',
        justifyContent:'center',alignItems:'center'
        
    }
})

export {Splash};