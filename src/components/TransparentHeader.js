import React, {useCallback} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';


export default function TransparentHeader() {
    // const navigation = useNavigation();
    
    return (
        <View>
            {/* <Pressable style={styles.closeButton} onPress={() => navigation.goBack()}> */}
                <Ionicons style = {styles.row} name="chevron-back-outline" size={28} color="#59B5FF" />
            {/* </Pressable> */}
        </View>
        
    )
}

const styles = StyleSheet.create({
    closeButton: {
        paddingLeft: 12,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    row: {
        // flexDirection: 'row',  
        // justifyContent: 'space-between',
        marginLeft: 0,
        marginTop: 17,
    },
})