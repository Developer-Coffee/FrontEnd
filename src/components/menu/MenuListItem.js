import React, {useCallback} from 'react';
import { Image, StyleSheet, View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cafeimg from '../../images/cafe.jpg';

const MenuListItem =()=>{

    const onPress = useCallback(()=>{
    }, []);

    return(
        // main row 가로정렬
        <View style={styles.main}> 

            <Pressable onPress={onPress} style={{flex:1}}>
                {/* innerContainer colunm 세로정렬 */}
                <View style={styles.innerContainer}>
                    <View style={{flexDirection:'column', backgroundColor:'#ffffff'}}>
                        <Image source={cafeimg} style={{width:120, height:90}}></Image>
                        <Text style={styles.smalltext}>아이스아메리카노</Text>
                        <Text style={styles.smalltext}>4,500원</Text>    
                    </View>
                </View>
            </Pressable>

            <Pressable onPress={onPress} style={{flex:1}}>
                <View style={styles.innerContainer}>
                    <View style={{flexDirection:'column', backgroundColor:'#ffffff'}}>
                        <Image source={cafeimg} style={{width:120, height:90}}></Image>
                        <Text style={styles.smalltext}>아메리카노</Text>
                        <Text style={styles.smalltext}>4,000원</Text>    
                    </View>
                </View>
            </Pressable>

        </View>
    );
}
export default MenuListItem;

const styles = StyleSheet.create({
    main:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    innerContainer:{
        borderRadius:20,
        height:400,
        width: 100,
        flexDirection:'column',
        fontFamily:'GodoM',
    },
    container:{
        flexDirection:'row',
        borderRadius:20,
        borderWidth:0,
        margin:12,
        backgroundColor:'#fff'
    },
    outerColumn1:{
        flexDirection:'column',
        padding:10,
        flex:1
    },
    outerColumn2:{
        flexDirection:'column',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    innerContainer:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
    },
    smalltext:{
        fontFamily: 'GodoM',
        marginTop:6,
        marginLeft:6,
        marginBottom:6,
        color:'#000',
        fontSize:12
    }
    
});