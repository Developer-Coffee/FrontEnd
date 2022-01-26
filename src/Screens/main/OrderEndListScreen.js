import React, {useState, useCallback, useEffect} from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import OrderList from '../../components/order/OrderList';
import TabHeader from '../../components/TabHeader';
import OrderButton from '../../components/order/OrderButton';

const OrderListScreen =()=>{

    const onpress0 = useCallback(() => {
        navigation.navigate('OrderEnd', {navigation});
    }, [navigation]);




    return(
        <View>
            <TabHeader title = "N1 투썸플레이스"/>
            <OrderList/>

            {/* <View style={styles.container2}>
                <Text style = {styles.order}>주문내역</Text>
                <Pressable onPress={onpress0} style = {styles.delivery}>
                <Text style = {styles.text}>배달</Text>
                </Pressable>
                
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: 'grey',
    },
    container2:{
        flexDirection:'row',
        borderRadius:15,
        borderWidth:0,
        marginTop: "93%",
        marginLeft:"3%",
        marginRight:"3%",
        backgroundColor:'#fff',
        height: "8%"
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
    addBoard:{
        flexDirection:'column',
        justifyContent:'space-around',
    },
    order:{
        textAlignVertical:'center',
        textAlign: 'center',
        fontSize: 25,
        width: "50%",
        fontWeight: 'bold',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius:15
    },
    text:{
        paddingTop: "4%",
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 25,
        // width: "50%",
        fontWeight: 'bold',
        // borderTopLeftRadius: 15,
        // borderBottomLeftRadius:15
    },
    delivery:{
        // marginLeft: "17%",
        marginRight: "10%",
        textAlignVertical:'center',
        textAlign: 'center',
        fontSize: 25,
        width: "50%",
        fontWeight: 'bold',
        backgroundColor: "#ffd608",
        borderTopRightRadius: 15,
        borderBottomRightRadius:15
    }

  });

export default OrderListScreen;