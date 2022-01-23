import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileList from './ProfileList';

const OrderListItem =({item})=>{

    return (
        <>
        <View style={styles.container}>
            <View style={{flexDirection:'column'}}>
                <Text >아이스아메리카노</Text>
                {/* <ProfileList item={item}/> */}
            </View>
            <View>
                <Text>6개</Text>
            </View>

        </View>

        </>
    );

}
const styles = StyleSheet.create({
   container:{
    flexDirection:'row',
    borderWidth:0,
    margin:12,
    backgroundColor:'#fff',
    fontFamily:'GodoM',

   }
})
export default OrderListItem;