import React, { useEffect, useState, useCallback } from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import { StyleSheet, FlatList } from 'react-native';

import {useRoute} from '@react-navigation/native';
import _ from 'lodash';

import { ProgressBar } from 'react-native-paper';
import TabHeader from '../../components/TabHeader';
import DeliveryPlace from '../../components/main/DeliveryPlace';

const DeliveryPlaceScreen = () => {

    return (
    <View>
        <TabHeader/>
        <DeliveryPlace/>
    </View>
    );
}
const styles = StyleSheet.create({

});

export default DeliveryPlaceScreen;