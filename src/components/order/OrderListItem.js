import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileList from './ProfileList';
import axios from 'axios';

const OrderListItem =({item})=>{

    return (
        <>
            <View style={styles.container}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.num + "개"}</Text>
            </View>
        </>
    );

}
const styles = StyleSheet.create({
   container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderWidth:0,
    marginTop:12,
    marginLeft:12,
    marginRight:12,
    backgroundColor:'#fff',
    fontFamily:'GodoM',
    height:50,
    borderRadius:10
   },
   text:{
       fontFamily:'GodoM',
   }
})
export default OrderListItem;