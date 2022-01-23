import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Box=()=>{
    return(
        <View style={styles.box}><Text>Prof</Text></View>
    );
}
const ProfileList=()=>{

    return(
        <>
            <View style={{flexDirection:'row'}}>
                <Box/><Box/><Box/><Box/><Box/>
            </View>
        </>
    );
};
export default ProfileList;


const styles = StyleSheet.create({
    box:{
        width:50,
        height:50,
        borderRadius:20,
        borderwidth:2
    }
})