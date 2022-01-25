import React, { useEffect, useState, useCallback } from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import { StyleSheet, FlatList } from 'react-native';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import TabHeader from '../../components/TabHeader';
import MenuList from '../../components/menu/MenuList';
import MenuListItem from '../../components/menu/MenuListItem';
import { useNavigation } from '@react-navigation/native';


const MenuCheckScreen = ({navigation}) => {

    const onpress = useCallback(()=>{
        navigation.navigate('MainScreen');
    }, [navigation]);


    return (
        <>
            <TabHeader/>
            <Text>투썸플레이스</Text>
            
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
    container: {
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        alignItems: 'center',
    },
    textInput:{
        borderWidth:2,
    },
    nextButton:{
        width:'80%',
        height:40,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor: '#ffd608'
    },
    addBoard:{
        flexDirection:'column',
        justifyContent:'space-around',
    },

  });

export default MenuCheckScreen;