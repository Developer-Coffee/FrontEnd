import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import TransparentHeader from './TransparentHeader';
import {useNavigation} from '@react-navigation/native';

export default function TabHeader({title}) {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    return (
        <Pressable onPress={() => navigation.goBack()}>
            <View style={styles.container}>
                        <TransparentHeader style={styles.backIcon}/>
                    <Text style = {styles.title}>{title}</Text>
                    {/* <Search style={styles.searchIcon} category={category}/> */}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        fontFamily:'GodoM',
        backgroundColor: '#fff', 
        // alignItems: 'center',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        height: 65
    },
    backIcon:{
        height:'10%',
        // textAlignVertical:'center',
        // textAlign: 'center',
        // justifyContent: 'flex-start',
        // backgroundColor: '#f00', 
    },
    title: {
        fontFamily:'GodoM',
        fontSize: 20,
        color: '#474646',
        fontWeight: 'bold',
        textAlignVertical:'center',
        textAlign: 'center',
        width: "50%",
        // textAlign:'center',
        // backgroundColor: "#f00",
        alignItems: 'center',
        marginLeft: "15%"
    },
})