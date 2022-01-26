import React, { useCallback, useRef, useMemo, useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import TabHeader from '../../components/TabHeader';

import {StyleSheet} from 'react-native';
import { DrawerLayout, GestureHandlerRootView } from "react-native-gesture-handler";
import Search from '../../components/main/Search';
import PlaceDropDown from '../../components/PlaceDropDown';
import OrderPlaceDropDown from '../../components/OrderPlaceDropDown';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const AddBoardScreen =({})=>{
    const [place, setPlace] = useState('');
    const [cafe, setCafe] = useState('');
    const [boardId, setBoardId] = useState('')
    const navigation = useNavigation();
    // useEffect(() => {
    // })

    const createBoard = async () => {
        try {
        const response = await axios.post(
            'http://192.249.18.141:80/api/board/create',{   
                shop: cafe, destination: place
        }).then(function(response){
            setBoardId(response.data._id)
            navigate();
        }); 
        } catch (e) {
            console.log(e)
        }
    };
    
    const onpress = () =>{
        createBoard();
    }
    const navigate = useCallback(()=>{
        navigation.navigate('MenuChoiceScreen', {place: place, cafe: cafe, boardId: boardId});
    }, [navigation, place, cafe, boardId]);

    // const onpress = useCallback(()=>{
    //     createBoard();
    //     setTimeout(() => {
    //         navigation.navigate('MenuChoiceScreen', {place: place, cafe: cafe, boardId: boardId});
    //     }, 1)
    // }, [navigation, place, cafe, boardId]);

    return(
        <View style={styles.addBoard}>
            <TabHeader />
            <View style={styles.contentContainer}>
                <View style={{flexDirection:'column', width:'90%'}}> 
                    <OrderPlaceDropDown setPlace = {setPlace}/>
                    <PlaceDropDown setCafe = {setCafe}/>
                </View>
            </View>
            <View style={{position:'absolute',bottom:"5%", alignSelf:'flex-end', width:'100%'}}>
                <Pressable onPress={onpress}>
                    <View style={styles.nextButton}>
                        <Text style={{fontFamily:'GodoM', alignSelf:'center'}}>다음</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    addBoard:{
        flexDirection:'column',
        height:'100%',
        // backgroundColor:'white'
    },
    container: {
        padding: 24,
        backgroundColor: 'white',
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

  });

export default AddBoardScreen;