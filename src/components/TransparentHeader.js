import React, {useCallback} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';


export default function TransparentHeader() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.row}>
            <Pressable style={styles.closeButton} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={20} color="#59B5FF" />
            </Pressable>
        </View>
        
    )
}

const styles = StyleSheet.create({
    closeButton: {
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',  
        justifyContent: 'space-between',
        margin: 12,
    },
})