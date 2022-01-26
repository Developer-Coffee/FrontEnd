import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView } from "react-native-gesture-handler";
import OrderListItem from './OrderListItem';


const OrderEndList=()=>{

    return(
        <>
            <ScrollView>
                <OrderEndListItem></OrderEndListItem>
            </ScrollView>
        </>
    );

}
export default OrderEndList;