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
import Payment from '../../components/main/Payment';

const PaymentScreen = () => {

    return (
        <View>
            <TabHeader/>
            <Payment/>
        </View>
    );
}
export default PaymentScreen;