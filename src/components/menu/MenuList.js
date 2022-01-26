import React, { useEffect, useState, useCallback } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {MenuListItem} from './MenuListItem';
import axios from 'axios';
import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Image,
    Text,
    Pressable
  } from 'react-native';

// const MenuList = ({}) =>{
//     // const [orderList, setOrderList] = useState([]);

//     return(
//         <ScrollView>
//             <View>
//                 <MenuListItem/>
//             </View>
//         </ScrollView>

//     );
// }
// export default MenuList;


const MenuList = ({Menu, setMenu}) =>{

    // const [Menu, setMenu] = useState([]);
    const fetchMenuList = async()=>{
        setMenu([]);
        const response = await axios.get(
            "http://192.249.18.141:80/api/shop/menu?shopId=61f050a272c68a4f8290e60c"
        );
        console.log(response.data);
        setMenu(response.data);
        console.log(Menu);
    } 

    useEffect( async()=>{
        fetchMenuList();
    },[]);

    var orderList =[];

    const onPress = ({item}) => {
        orderList.push({item});
        console.log(orderList);
    };

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Menu}
                renderItem={ ({item}) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                        <Pressable onPress={onPress}>
                            <Image style={styles.imageThumbnail} source={{uri: item.menuImgUrl}} />
                            <Text>{item.name}</Text>
                            <Text>{item.basicPrice}</Text>
                        </Pressable>
                    </View>
                )}
                //Setting the number of column
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,

    },
    nextButton:{
        width:'80%',
        height:40,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor: '#ffd608'
    },
  });

export default MenuList;