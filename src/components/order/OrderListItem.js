import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OrderListItem =({item})=>{

    return (
        <>
            <View style={styles.container}>
                    <Text style={styles.text}>아이스아메리카노</Text>
                    <Text style={styles.text}>6개</Text>
            </View>

            <View style={styles.container}>
                    <Text style={styles.text}>아메리카노</Text>
                    <Text style={styles.text}>3개</Text>
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