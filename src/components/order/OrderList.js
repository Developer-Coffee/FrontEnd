import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView } from "react-native-gesture-handler";
import OrderListItem from './OrderListItem';


const OrderList=()=>{

    return(
        <>
            <ScrollView>
                <OrderListItem></OrderListItem>
            </ScrollView>
        </>
    );

}
export default OrderList;