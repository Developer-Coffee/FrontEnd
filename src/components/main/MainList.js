import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MainListItem from './MainListItem';
import dummy from '../../db/data.json';

const MainList = ({search}) =>{
    const navigation = useNavigation();
    // const [orderList, setOrderList] = useState([]);

    useEffect(async()=>{
        setOrderList(dummy);
    }, [dummy]);

    return(
        <>
        <ScrollView>
            <View>
                {/* {orderList.map((item)=>{
                    
                    if( search && item.place.indexOf(search)==-1 || search && item.order_place.indexOf(search) == -1){
                        return null;
                    }
                    return(
                        <MainListItem item={item}/>
                    );
                })} */}

                <MainListItem/>
            </View>
        </ScrollView>
        </>
    );
}
export default MainList;