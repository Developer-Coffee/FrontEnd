import React, {useState, useCallback, useEffect} from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import OrderList from '../../components/order/OrderList';
import TabHeader from '../../components/TabHeader';
import OrderButton from '../../components/order/OrderButton';

const OrderListScreen =({route, navigation})=>{
    let boardId = route.params.item._id
    let title = route.params.item.shop.name;
    const onpress = useCallback(() => {
        navigation.navigate('MenuChoiceScreen', {navigation});
    }, [navigation]);

    return(
        <View style = {{flexDirection:'column', height:'100%'}}>
            <TabHeader title = {title}/>
            <OrderList boardId = {boardId}/>

            <View style={{position:'absolute',bottom:"5%", alignSelf:'flex-end', width:'100%'}}>
                <Pressable onPress={onpress}>
                    <View style={styles.nextButton}>
                        <Text style={{fontFamily:'GodoM', alignSelf:'center'}}>나도 주문하기</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        alignItems: 'center',
    },
    textInput:{
        borderWidth:2,
    },
    nextButton:{
        // marginTop: "95%",
        width:'80%',
        height: 40,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor: '#ffd608'
    },
    addBoard:{
        flexDirection:'column',
        justifyContent:'space-around',
    },

  });

export default OrderListScreen;