import React, { useCallback, useRef, useMemo } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import TabHeader from '../../components/TabHeader';

import {StyleSheet} from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Search from '../../components/main/search';
import PlaceDropDown from '../../components/PlaceDropDown';
import OrderPlaceDropDown from '../../components/OrderPlaceDropDown';
import { useNavigation } from '@react-navigation/native';


const AddBoardScreen =({navigation})=>{

    //const bottomSheetRef = useRef<BottomSheet>(null);

    //ref
    //const bottomSheetRef = useRef(null);

    //variables
   // const snapPoints = useMemo(() => ['90%', '100%'], []);

    //callbacks
    // const handleSheetChanges = useCallback((index) => {
    //     console.log('handleSheetChanges', index);
    //   }, []);
    
      const onpress = useCallback(()=>{
        navigation.navigate('MenuChoiceScreen');
    }, [navigation]);

    
    return(

        <View style={styles.addBoard}>
            <TabHeader/>
            <View style={styles.contentContainer}>
                <View style={{flexDirection:'column', width:'90%'}}> 
                    <OrderPlaceDropDown/>
                    <PlaceDropDown/>
                </View>
            </View>
            <View style={{position:'absolute',bottom:20, alignSelf:'flex-end', width:'100%'}}>
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
        backgroundColor:'white'
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