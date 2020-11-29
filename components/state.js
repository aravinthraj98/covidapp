import { AppLoading } from 'expo';
import React, { useState } from 'react'
import {StyleSheet ,View,Text, TouchableOpacity, FlatList} from 'react-native'



export default function({navigation}){
    const [state,setstate]=useState("")
    function getstate(){
        fetch("https://api.rootnet.in/covid19-in/stats/latest").then((response) => response.json()).then((data) => {

      setstate(data.data.regional);
      
      

    }).catch((e) => console.log(e))
}
function districtwise(loc){
    console.log(loc);
    
    navigation.navigate("District",{"location":loc});

}
if(state){
  console.log(state);
    return(
       
       
    <FlatList data={state} keyExtractor={(item)=>item.loc} renderItem={({item})=>(

        <TouchableOpacity style={{padding:10}} onPress={()=>(districtwise(item.loc))}>
             <Text style= {styles.state}>{item["loc"]}</Text>
        <View style={styles.cardview}>

            
       <View style={styles.statenumbers}>
        <Text style= {styles.statereport}>
            TotalConfirmed:
        <Text style={{fontSize:15}}> {item.totalConfirmed}</Text>
        </Text></View>
            <View style={styles.statenumbers}>

          <Text style={styles.statereport}>TotalDischarged:<Text style={{fontSize:15}}> {item.discharged}</Text></Text></View>

          <View style={styles.statenumbers}>
          <Text style={styles.statereport}>Total-Deaths: {item.deaths}</Text></View>
          
 <View style={styles.statenumbers}>
          <Text style={styles.statereport}>TotalActivecases:{parseInt(item.totalConfirmed) - parseInt(item.discharged) - parseInt(item.deaths)}</Text>
          </View>
          
          </View>
     </TouchableOpacity>
    )}/>
  

       
    )
}

    return(
    <AppLoading startAsync={getstate} onFinish={()=>console.log(state)}/>)

   

 

}

const styles = StyleSheet.create({
    touchable:{
        flex:1,
        backgroundColor:"white",
        padding:30
    },
    cardview:{
        padding:4,
        margin:5,
        borderColor:"lightgrey",
        borderWidth:1,
        borderStyle:"dotted",
        backgroundColor:"coral",
        
        borderRadius:25
    },
    state:{
       
       flex:1,
       fontSize:20,
       marginLeft:3,
       fontWeight:"bold",
       textAlign:"center"
       
       
    },
    statereport:{
        margin: 1, 
        flex:1,
        flexDirection:"column",
        color:"white",
        fontSize:16,
        fontWeight:"bold",marginLeft:2,
        padding:10
    },
    statenumbers:{

        backgroundColor:"coral",
        borderRadius:20
        
    }
    
})