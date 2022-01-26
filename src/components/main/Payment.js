import React, { useEffect, useState, useCallback, useRef} from 'react';
import { StyleSheet, FlatList, Text, View, Image, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MainListItem from './MainListItem';
import dummy from '../../db/data.json';
import PinView from "react-native-pin-view";
import Icon from "react-native-vector-icons/AntDesign"



const Payment = () =>{
    const navigation = useNavigation();

    const ref = useRef(null)
    // const [showRemoveButton, setShowRemoveButton] = useState(false)
    const [enteredPin, setEnteredPin] = useState("")
    const [showCompletedButton, setShowCompletedButton] = useState(false)
    useEffect(() => {
        // if (enteredPin.length > 0) {
        //   setShowRemoveButton(true)
        // } else {
        //   setShowRemoveButton(false)
        // }
        if (enteredPin.length === 4) {
          setShowCompletedButton(true)
        } else {
          setShowCompletedButton(false)
        }
      }, [enteredPin])

      const onpress = useCallback(()=>{
        navigation.navigate('OrderEndScreen', {pin: enteredPin});
        console.log(enteredPin);
    }, [navigation, enteredPin]);
    
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
                onValueChange={value => setEnteredPin(value)}
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
                customRightButton={showCompletedButton ? <Icon.Button name={"login"} size={32} backgroundColor = {"#474646"} color={"#FFF"} onPress = {onpress}/> : undefined}
                
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