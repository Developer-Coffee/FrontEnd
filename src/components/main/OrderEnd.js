import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MainListItem from './MainListItem';
import dummy from '../../db/data.json';
import cafe from '../../assets/images/twosome_kaist.jpg'




const OrderEnd = () =>{
    const time = "15" + "분";
    const cost = "5000" + "원";
    return(
        <View>
            <View style={styles.container1}>
                <View style = {styles.image_content}>
                    <Image source = {cafe} style={styles.image}/>
                </View>
                <View style = {styles.content}>
                    <View>
                        <Text style = {styles.smallText}>예상 소요시간</Text>
                        <Text style = {styles.bigText}>{time}</Text>
                    </View>
                    <View>
                        <Text style = {styles.smallText}>배달비</Text>
                        <Text style = {styles.bigText}>{cost}</Text>
                    </View>
                    <View style = {{alignItems: 'center'}}>
                        <Text style = {styles.Button}>내가 배달가기
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.container2}>
                <Text style = {styles.order}>주문내역</Text>
                <Text style = {styles.delivery}>배달</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container1:{
        // flexDirection:'column',
        borderRadius:5,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
        // borderWidth:0,
        marginLeft:"7%",
        marginRight:"7%",
        marginTop: "4%",
        marginBottom: "1%",
        backgroundColor:'#fff',
        height: "78%",
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
    },
    image_content: {
        flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: "#474646",
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,

    },
    image: {
        width:"100%",
        height: "101%"
    },
    Button:{
        fontSize: 20,
        fontWeight: 'bold',
        width: "88%",
        height: "35%",
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop:"3%",
        marginBottom: "2%",
        backgroundColor: "#ffd608"
    },
    smallText:{
        fontFamily: 'GodoM',
        marginTop:20,
        marginLeft:40,
        marginRight:3,
        color:'#ffffff',
        fontSize:16
    },
    bigText:{
        fontFamily: 'GodoM',
        marginLeft:40,
        marginBottom:10,
        marginRight:3,
        color:'#ffffff',
        fontSize:30,
        fontWeight:'bold',
    },
    order:{
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

export default OrderEnd;