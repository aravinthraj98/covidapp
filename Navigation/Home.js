import React from 'react'
import {createStackNavigator, HeaderBackground} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import Home from "../components/state"
import District from '../components/District'

export default function Navigatescreen(){
    const Stack = createStackNavigator()
    return(
        <NavigationContainer>
           <Stack.Navigator >
               
                <Stack.Screen   name="Home" component={Home} />
                <Stack.Screen name="District" component={District} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}