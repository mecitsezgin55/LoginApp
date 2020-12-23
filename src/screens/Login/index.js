import React from "react";
import { View,Text,Dimensions,TouchableOpacity} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const header = () =>{
    return(
        <View>
            <TouchableOpacity>
                <Ionicons 
                    name={'arrow-back'}
                    color={'#1DA1F2'}
                    size={width * 0.07}
                />
            </TouchableOpacity>
        </View>
    )
}

const Login = () => {
 
    return(
        <View>
            {header()}
        </View>
    );
}

export {Login};