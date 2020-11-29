import { AppLoading } from 'expo';
import React, { useState } from 'react'
import {StyleSheet ,View,Text, TouchableOpacity, FlatList} from 'react-native'

export default function District({route,navigation}){
    console.log("districts")
    const location=route.params;
    console.log(location);
    return(
        <View>
            <Text>
                hello2
            {location.location}
            </Text>
        </View>
    )
}