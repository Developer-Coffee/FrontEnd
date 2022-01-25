import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, View, Text} from 'react-native';
import TransparentHeader from './TransparentHeader';


export default function TabHeader({title}) {

    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
                <TransparentHeader style={styles.backIcon}/> 
                <Text style = {styles.title}>{title}</Text>
                {/* <Search style={styles.searchIcon} category={category}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily:'GodoM',
        backgroundColor: '#fff', 
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '10%'
    },
    backIcon:{
        alignItem:'center',
        height:'6%',
        justifyContent: 'flex-start',
    },
    searchIcon:{
        alignItem:'center',
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily:'GodoM',
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
        alignItem:'center',
        justifyContent: 'center'
    },
    column: {
        flexDirection: 'column',  
        justifyContent: 'center',
        margin: 12,
    },
    row: {
        flexDirection: 'row',  
        justifyContent: 'space-between',
        margin: 12,
    },
    article: {
        marginRight: 8
    },
    title: {
        fontFamily:'GodoM',
        fontSize: 20,
        marginRight: 8,
    },    
})