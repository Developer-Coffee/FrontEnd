
import React, { useEffect, useState, useCallback } from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import { StyleSheet, FlatList } from 'react-native';

import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
// import Input from '../../components/Input';
// import { ScrollView } from 'react-native-gesture-handler';
// import Add from '../../components/Add';
// import Search from '../../components/Search';

import MainList from '../../components/main/MainList';
import AddButton from '../../components/main/AddButton';
import Search from '../../components/main/search';
import OrderEnd from '../../components/main/OrderEnd';
import TabHeader from '../../components/TabHeader';


const OrderEndScreen = ({route, navigation}) => {

    // console.log(route.params.pin);
    let pin = route.params.pin;
    return (
        <View>
            <TabHeader/>
            <OrderEnd pin = {pin}/>
        </View>
    );
}
export default OrderEndScreen;