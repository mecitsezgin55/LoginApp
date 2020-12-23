import React, {useEffect,useState} from "react";
import { View,Text } from "react-native";

import { Splash } from "./screens";
import { Navigation } from "./Navigation";

const App = () => {
    const [splash, setSplash] = useState(true)

    // 1500 ms sonra splash false oluyor
    useEffect(() => { //componenDidMount
        setTimeout(() => setSplash(false),1500)
    },[])

    return(
        <View style={{flex:1}}>
            
            {/* koşul ? true ise yapılacak : false ise yapılacak*/}
            {/*açılışta Splash açılıyor, 1500 ms sonra diğer sayfa açılıyor*/}
            {splash ? <Splash /> : <Navigation />} 
        </View>
    );
}

export {App};