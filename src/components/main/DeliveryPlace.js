import React, { useEffect, useState, useCallback, useRef} from 'react';
import { StyleSheet, FlatList, Text, View, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import MainListItem from './MainListItem';
import dummy from '../../db/data.json';
import PinView from "react-native-pin-view";
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
    { label: '3분', value: '1' },
    { label: '5분', value: '2' },
    { label: '10분', value: '3' },  
];

const DeliveryPlace = () =>{
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const renderLabel = () => {
        if (value || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
              Dropdown label
            </Text>
          );
        }
        return null;
      };
    return(
        <View>    
            <View style={styles.header}>
                <Text style = {styles.delivery}>배달정보</Text>
                <Text style = {styles.order}>주문내역</Text>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.bigText}>픽업장소</Text>
                <TextInput style = {styles.smallText} placeholder = '픽업장소를 적어주세요' 
                underlineColorAndroid="#adb5bd" autoCorrect={false}></TextInput>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.bigText}>도착시간</Text>
                <TextInput style = {styles.smallText} placeholder = 'O시 O분으로 적어주세요' 
                underlineColorAndroid="#adb5bd" autoCorrect={false}></TextInput>
            </View>
            <View style = {styles.container}>
                {/* {renderLabel()} */}
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    // search
                    maxHeight={170}
                    labelField="label"
                    valueField="value"
                    placeholder="픽업 대기시간"
                    // searchPlaceholder="픽업 대기시간"
                    value={value}
                    onChange={item => {
                    setValue(item.value);
                    }}
                    // renderLeftIcon={() => (
                    // <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                    // )}
                />
            </View>
            <View style = {styles.container}>
                <Text style = {styles.bigText}>메세지</Text>
                <TextInput style = {styles.smallText} placeholder = '예시: 10분 안에 안오면 내꺼' 
                underlineColorAndroid="#adb5bd" autoCorrect={false}></TextInput>
            </View>
            <View style = {{alignItems: 'center'}}>
                <Text style = {styles.button}>확인</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        borderRadius:15,
        borderWidth:0,
        marginTop: "5%",
        marginLeft:"3%",
        marginRight:"3%",
        backgroundColor:'#fff',
        height: "8%"
    },
    container:{
        flexDirection: 'column',
        marginLeft: "10%",
        marginTop: "5%",

    },
    delivery:{
        textAlignVertical:'center',
        textAlign: 'center',
        fontSize: 20,
        width: "50%",
        fontWeight: 'bold',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius:15,
        backgroundColor: "#ffd608",
    },
    order:{
        marginRight: "10%",
        textAlignVertical:'center',
        textAlign: 'center',
        fontSize: 20,
        width: "50%",
        fontWeight: 'bold',
        borderTopRightRadius: 15,
        borderBottomRightRadius:15
    },
    bigText:{
        fontFamily: 'GodoM',
        // marginBottom: "2%",
        marginTop: "3%",
        // color: '#868e96',
        color: '#757575',
        fontSize: 20,
        fontWeight: 'bold',
    },
    smallText:{
        fontSize: 15,
        marginRight: "10%",
    },
    button:{
        fontSize: 20,
        fontWeight: 'bold',
        width: "25%",
        height: "23%",
        borderRadius:30,
        borderColor:'#ababab',
        borderWidth: 2,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop:20,
        marginBottom:10,
        backgroundColor: "#ffd608"
    },

    dropdown: {
        // margin: 16,
        height: 40,
        borderBottomColor: "#adb5bd",
        marginRight: "10%",
        borderBottomWidth: 0.5,
        marginTop: 10,
        marginBottom: 15
        
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 18,
        marginLeft: "2%",
        fontFamily: 'GodoM',
      },
      selectedTextStyle: {
        fontSize: 18,
        marginLeft: "2%",
        fontFamily: 'GodoM',
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
});

export default DeliveryPlace;