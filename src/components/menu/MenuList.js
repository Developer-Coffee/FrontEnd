import React, { useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {MenuListItem} from './MenuListItem';
import dummy from '../../db/data.json';

const MenuList = ({}) =>{
    // const [orderList, setOrderList] = useState([]);

    return(
        <ScrollView>
            <View>
                <MenuListItem/>
            </View>
        </ScrollView>

    );
}
export default MenuList;