import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView } from "react-native-gesture-handler";
import OrderListItem from './OrderListItem';
import axios from 'axios';

const OrderList=({boardId})=>{

    const [orderList, setOrderList] = useState([]);
  
    useEffect(() => {
        const fetchOrderList = async () => {
            try {
            setOrderList([]);
            let tmp = [];
            const response = await axios.get(
                'http://192.249.18.141:80/api/board/orders?boardId='+ boardId +'&groupBy=menu'
            );
            console.log(response.data);
            response.data.map((item) =>{
                tmp.push({name: item.combinedName, num: item.count})
            })
            setOrderList(tmp);
            } catch (e) {
                console.log(e)
            }
        };
        fetchOrderList();
    }, []);

    return(
        <>
            <ScrollView>
                {orderList.map((item)=>{
                        return(
                            <OrderListItem item={item}/>
                        );
                    })}
            </ScrollView>
        </>
    );

}
export default OrderList;