import React, {useCallback, useEffect, useState} from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainListItem =({item})=>{
    const navigation = useNavigation();

    const onPress = useCallback((item)=>{
        navigation.navigate('OrderListScreen', {item});
    }, [navigation, item]);

    return(
        <Pressable onPress={onPress}>
            <View style={styles.container}>

                <View style={styles.outerColumn1, {justifyContent:'space-around', marginLeft:10}}>
                    <Text  style={{fontSize:20, fontWeight:'500'}} >N1</Text>
                    <Text>투썸 플레이스</Text>
                </View>

                <View style={styles.outerColumn2}>

                    <Text style={{fontSize:24}}>5000원</Text>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        <View style={styles.innerContainer}>
                            <Text style={styles.smalltext}>인원</Text>
                            <Text style={styles.smalltext}>6</Text>
                        </View>
                        <View style={styles.innerContainer}>
                            <Text style={styles.smalltext}>주문</Text>
                            <Text style={styles.smalltext}>8</Text>
                        </View>
                        <View style={styles.innerContainer}>
                            <Text style={styles.smalltext}>배달비</Text>
                            <Text style={styles.smalltext}>500원</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}
export default MainListItem;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderRadius:20,
        borderWidth:0,
        margin:12,
        backgroundColor:'#fff'
    },
    outerColumn1:{
        flexDirection:'column',
        padding:10,
        flex:1
    },
    outerColumn2:{
        flexDirection:'column',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    innerContainer:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
    },
    smalltext:{
        fontFamily: 'GodoM',
        marginBottom:6,
        marginRight:3,
        color:'#ababab',
        fontSize:10
    }
    
});