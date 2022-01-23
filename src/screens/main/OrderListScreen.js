import React, {useState, useCallback, useEffect} from 'react';
import { View } from 'react-native';
import OrderList from '../../components/order/OrderList';
import TabHeader from '../../components/TabHeader';

const OrderListScreen =({item})=>{

    return(
        <View>
            <TabHeader title = "N1 투썸플레이스"/>
            <OrderList></OrderList>
        </View>
    );
}
export default OrderListScreen;