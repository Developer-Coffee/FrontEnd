import React, { useEffect, useState, useCallback } from 'react';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import TabHeader from '../../components/TabHeader';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Image,
    Text,
    Pressable
  } from 'react-native';
import MenuList from '../../components/menu/MenuList';

var orderList =[];

const MenuChoiceScreen = ({navigation}) => {

    const orderButton = useCallback(()=>{
        navigation.navigate('MenuCheckScreen',{orderList});
        orderList=[];
    }, [navigation, orderList]);

    const [Menu, setMenu] = useState([]);

    const fetchMenuList = async()=>{
        setMenu([]);
        const response = await axios.get(
            "http://192.249.18.141:80/api/shop/menu?shopId=61f050a272c68a4f8290e60c"
        );
        console.log(response.data);
        setMenu(response.data);
        console.log(Menu);
    } 

    useEffect( async()=>{
        fetchMenuList();
    },[]);


    const onPress = ({item}) => {
        orderList.push({item});
        console.log(orderList);
    };

    return (
        <>
        <TabHeader/>
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Menu}
                renderItem={ ({item}) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                        <Pressable onPress={()=> onPress({item})}>
                            <Image style={styles.imageThumbnail} source={{uri: item.menuImgUrl}} />
                            <Text>{item.name}</Text>
                            <Text>{item.basicPrice}</Text>
                        </Pressable>
                    </View>
                )}
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
        <View style={{position:'absolute',bottom:20, alignSelf:'flex-end', width:'100%'}}>
            <Pressable onPress={orderButton}>
                <View style={styles.nextButton}>
                    <Text style={{fontFamily:'GodoM', alignSelf:'center'}}>주문하기</Text>
                </View>
            </Pressable>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
      },
      imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
  
      },
    nextButton:{
        width:'80%',
        height:40,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor: '#ffd608'
    },
  });
export default MenuChoiceScreen;