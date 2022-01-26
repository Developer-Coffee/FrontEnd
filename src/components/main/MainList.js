import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MainListItem from './MainListItem';
import axios from 'axios';



const MainList = () =>{
    const navigation = useNavigation();
    const [orderList, setOrderList] = useState([]);
    const [error, setError] = useState(null);


  
    useEffect(() => {
        const fetchOrderList = async () => {
            try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setOrderList([]);
            const response = await axios.get(
                'http://192.249.18.141:80/api/board/list'
            );
            setOrderList(response.data); // 데이터는 response.data 안에 들어있습니다.
            // console.log('!')
            // console.log(response.data);
            } catch (e) {
            setError(e);
            }
        };
        fetchOrderList();
    }, []);
  

    // if (error) return <div>에러가 발생했습니다</div>;
    if (!orderList) return null;

    return(
        <>
        <ScrollView>
            <View>
                {orderList.map((item)=>{
                    return(
                        <MainListItem item={item}/>
                    );
                })}
                
                {/* {orderList.map((item)=>{
                    console.log(searchText)
                    console.log(item.destination);
                    console.log(item.shop.name);
                    if( searchText && item.destination.indexOf(searchText) !==-1 || searchText && item.shop.name.indexOf(searchText) !== -1){
                        return null;
                    }
                    return(
                        <MainListItem item={item}/>
                    );
                })} */}

                {/* <MainListItem/> */}
            </View>
        </ScrollView>
        </>
    );
}
export default MainList;