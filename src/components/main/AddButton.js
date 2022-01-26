import React, {useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, ButtonGroup, withTheme } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';

const AddButton = ({}) => { 
    
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();


    const onPress = useCallback(() => {
        navigation.navigate('AddBoardScreen', {navigation});
    }, [navigation]);

    /*return (
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Button
                    title="글쓰기"
                    titleStyle={{ fontWeight: '600' }}
                    onPress={onPress}
                    buttonStyle={{
                        backgroundColor: 'rgba(199, 43, 98, 1)',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 80,
                        justifyContent:'center',
                        alignItems:'center',
                    }}/>
                <Pressable onPress={onPress} style={styles.writeButton}> 
                    <Text style={styles.text}>글쓰기</Text>
                </Pressable>      
                       
            </View>  
    )*/
    return(
        // <View style={{justifyContent:'center', alignItems:'flex-end', marginRight:20, position: 'absolute',}}>
        <View style={{position:'absolute',bottom:20, alignSelf:'flex-end', flexDirection:'row-reverse', width:'100%', padding: "5%"}}>
            <Pressable onPress={onPress} style={styles.writeButton}> 
                <Text style={styles.text}>+</Text>
            </Pressable>         
        </View>
    )
}

const styles = StyleSheet.create({
    writeButton:{
        //backgroundColor: 'rgba(199, 43, 98, 1)',
        backgroundColor: '#59B5FF',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 100,
        width:60,
        height:60,
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:20,
        marginTop:5,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        margin:2,
        fontSize: 16
    },
})
export default AddButton;