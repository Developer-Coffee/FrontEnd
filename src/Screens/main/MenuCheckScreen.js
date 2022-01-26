import React, { useEffect, useState, useCallback } from 'react';
import {View, Text, Pressable, Alert, Image,} from 'react-native';
import { StyleSheet, FlatList } from 'react-native';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import TabHeader from '../../components/TabHeader';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import Counter from "react-native-counters";

const MenuCheckScreen = ({navigation}) => {
    const route = useRoute();
    const orderList = _.get(route, 'params.orderList');
    const [count, setCount] = useState([]);

    let num=[];

    console.log(orderList);

    const onpress = useCallback(()=>{
        navigation.navigate('PaymentScreen');
    }, [navigation]);


    return (
        <>
            <TabHeader/>
            <View style={{backgroundColor:'white'}}>
                <FlatList
                    data={orderList}
                    renderItem={({item, index}) => (
                        <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                                <Avatar size={72}
                                        rounded
                                        source={{uri: item.item.menuImgUrl}}/>
                                <View style={styles.textbox}>    
                                    <Text style={styles.smalltext}>{item.item.name}</Text>
                                    <Text style={styles.smalltext}>{item.item.basicPrice}원</Text>
                                    <Counter start={1} onChange={(e) => {
                                        
                                        num[index] = parseInt(e);
                                        console.log(num[index]);
                                        setCount(num);
                                        console.log(count)
                                        console.log(Number(item.item.basicPrice));

                                    }}></Counter>
                                </View>
                                <View>
                                    <Text style={styles.totalText}> {Number(item.item.basicPrice)*count[index]}</Text>
                                </View>
                        </View>
                    )}
                />
            </View>

            {/* <View>
                <Text>배달비 한도</Text>
                <Counter start={500}/>

            </View> */}

            <View style={{backgroundColor:'#fff'}}>
                <Text style={styles.title}>총 결제금액</Text>
                <Text></Text>
            </View>
            {/* 버튼 */}
            <View style={{position:'absolute',bottom:20, alignSelf:'flex-end', width:'100%'}}>
                <Pressable onPress={onpress}>
                    <View style={styles.nextButton}>
                        <Text style={{fontFamily:'GodoM', alignSelf:'center'}}>결제하기</Text>
                    </View>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    textbox:{
        marginLeft:10,
    },
    totalText:{
        fontFamily:'GodoM',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
      imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButton:{
        width:'80%',
        height:40,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor: '#ffd608'
    },
    smalltext:{
        fontFamily:'GodoM',
        marginTop:5,
        marginBottom:5,
    },
    title:{
        fontFamily:'GodoM',
        fontSize: 20,
    }
  });

export default MenuCheckScreen;