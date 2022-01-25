import React, {useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, ButtonGroup, withTheme } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';

const OrderButton = ({}) => { 
    
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const onPress = useCallback(() => {
        navigation.navigate('MenuChoiceScreen', {navigation});
    }, [navigation]);
    // , {position: 'absolute', left: 12, right: 12, bottom: 10}
 
    return(
 
        // <View style={{position:'absolute',bottom:20, alignSelf:'flex-end', width:'100%'}}>
        //     <Pressable onPress={onPress} style={styles.writeButton}> 
        //         <Text style={styles.text}>나도 주문하기</Text>
        //     </Pressable>         
        // </View>
    <View style={{position:'absolute',bottom:20, alignSelf:'flex-end', width:'100%'}}>
        <Pressable onPress={onPress}>
            <View style={styles.nextButton}>
                <Text style={{fontFamily:'GodoM', alignSelf:'center'}}>결제하기</Text>
            </View>
        </Pressable>
    </View>

    )
}

const styles = StyleSheet.create({
    nextButton:{
        width:'80%',
        height:40,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor: '#ffd608'
    },
    writeButton:{
        //backgroundColor: 'rgba(199, 43, 98, 1)',
        backgroundColor: '#59B5FF',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 10,
        width:120,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
        marginTop:5,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        margin:2,
        fontSize: 16
    },
})
export default OrderButton;