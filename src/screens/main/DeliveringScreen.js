import React, { useEffect, useState, useCallback } from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import { StyleSheet, FlatList } from 'react-native';

import {useRoute} from '@react-navigation/native';
import _ from 'lodash';

import { ProgressBar } from 'react-native-paper';
import TabHeader from '../../components/TabHeader';


const DeliveringScreen = () => {
    let message = '"10분 안에 안오면 내꺼"';
    let place = "N1 111호";
    let pickup_time = "5:30 pm"
    let finish_time = "5:40 pm"
    return (
    <View>
        <TabHeader/>
        <ProgressBar progress={0.2} color="#ffd608" 
            style={{width:'90%', height:30, backgroundColor:'#fff', marginTop:"4%", marginBottom:"16%", 
            alignSelf:'center', borderRadius:7}}/>

        <View style={styles.container1}>
            <View style = {{alignItems: 'center'}}>
                <Text style={styles.top}>{message}</Text>
            </View>
            <View style={{borderBottomColor: '#ababab', borderBottomWidth: 0.5}}/>
            <View>
                <Text style = {styles.smallText}>픽업지</Text>
                <Text style = {styles.bigText}>{place}</Text>
            </View>
            <View style = {{flexDirection:'row'}}>
                <View>
                    <Text style = {styles.smallText}>도착시간</Text>
                    <Text style = {styles.bigText}>{pickup_time}</Text>
                </View>
                <View>
                    <Text style = {styles.smallText0}>픽업마감시간</Text>
                    <Text style = {styles.bigText0}>{finish_time}</Text>
                </View>
            </View>
            <View style = {{alignItems: 'center'}}>
                <Text style = {styles.pickupButton}>픽업완료</Text>
            </View>
        </View>
        <View style={styles.container2}>
            <Text style = {styles.order}>주문내역</Text>
            {/* <View style={{borderRightolor: '#ababab', borderRightWidth: 0.5}}/> */}
            <Text style = {styles.delivery}>배달</Text>
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
    container1:{
        flexDirection:'column',
        borderRadius:20,
        // borderWidth:0,
        marginLeft:"5%",
        marginRight:"5%",
        // marginTop: "5%",
        backgroundColor:'#fff',
        height: "60%",
        // borderColor:'#ababab',
        // borderWidth: 0.7
    },
    container2:{
        flexDirection:'row',
        borderRadius:15,
        borderWidth:0,
        marginTop: "5%",
        marginLeft:"3%",
        marginRight:"3%",
        backgroundColor:'#fff',
        height: "8%"

        // borderColor:'#ababab',
        // borderWidth: 0.7
    },
    top:{
        fontSize:25, 
        fontWeight:'500', 
        fontWeight:'bold',
        marginTop: "13%",
        marginBottom: "11%",   
    },
    smallText:{
        fontFamily: 'GodoM',
        marginTop:20,
        marginLeft:40,
        marginRight:3,
        color:'#ababab',
        fontSize:16
    },
    bigText:{
        fontFamily: 'GodoM',
        marginLeft:40,
        marginBottom:10,
        marginRight:3,
        // color:'#ababab',
        fontSize:30,
        fontWeight:'bold',
    },
    smallText0:{
        fontFamily: 'GodoM',
        marginTop:20,
        marginLeft:70,
        marginRight:3,
        color:'#ababab',
        fontSize:16
    },
    bigText0:{
        fontFamily: 'GodoM',
        marginLeft:70,
        marginBottom:5,
        marginRight:3,
        // color:'#ababab',
        fontSize:30,
        fontWeight:'bold',
    },
    pickupButton:{
        fontSize: 20,
        fontWeight: 'bold',
        width: "80%",
        height: "26%",
        borderRadius:10,
        borderColor:'#ababab',
        borderWidth: 2,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop:20,
        marginBottom:10,
        backgroundColor: "#ffd608"
    },
    order:{
        // marginLeft:"13%",
        // textAlignVertical:'center',
        // fontSize: 25,
        // fontWeight: 'bold',
        textAlignVertical:'center',
        textAlign: 'center',
        fontSize: 25,
        width: "50%",
        fontWeight: 'bold',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius:15

    },
    delivery:{
        // marginLeft: "17%",
        marginRight: "10%",
        textAlignVertical:'center',
        textAlign: 'center',
        fontSize: 25,
        width: "50%",
        fontWeight: 'bold',
        backgroundColor: "#ffd608",
        borderTopRightRadius: 15,
        borderBottomRightRadius:15
    }
    
});

export default DeliveringScreen;