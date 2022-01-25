import React, { useEffect, useState, useCallback, useRef} from 'react';
import { StyleSheet, FlatList, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MainListItem from './MainListItem';
import PinView from "react-native-pin-view";



const Payment = () =>{
    const ref = useRef(null);
    return(
        <View style = {styles.main}>
            <PinView
                inputSize = {48}
                buttonSize={60}             
                pinLength={4}
                inputBgColor="#888888"
                inputActiveBgColor="#ffd90d" 
                buttonBgColor="#ffffff"
                buttonTextColor="black"
                ref = {ref}
                inputViewStyle={{
                    marginBottom: "18%",
                    marginTop: "15%"
                }}
                inputViewEmptyStyle={{
                    backgroundColor: "transparent",
                    borderWidth: 1,
                    borderColor: "#FFF",

                }}
                inputViewFilledStyle={{
                    backgroundColor: "#FFF",
                }}
                buttonTextStyle={{
                    fontSize: 40,
                    color: "#fff"
                }}
                
            />
        </View>
    );
}
// style = {{backgroundColor: "#474646"}}

const styles = StyleSheet.create({
    main: {
        height:"100%",
        backgroundColor: "#474646"
    }
    
});

export default Payment;