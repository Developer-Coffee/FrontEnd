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
import axios from 'axios';

const tmp = {"access_token": "eejZolc4QPKxM-fWTqyaZq5ZeHifEMrBdeO6pworDKYAAAF-krQpnw", "expires_in": 43198, "refresh_token": "GqXdnAWlOM5J-LaOzNJGgZty7WTjYDgF0fqLCAorDKYAAAF-krQpng", "refresh_token_expires_in": 5183998, "scopes": ["profile_image", "profile_nickname"]};

const MainScreen = ({navigation}) => {
    const route = useRoute();
    const [searchText, setSearchText] = useState('');
    const[show, setShow] = useState(false);


    useEffect(() => {
        const fetchOrderList = async () => {
            try {
            const response = await axios.post(
                'http://192.249.18.141:80/api/auth/login',{   
                    access_token: "eejZolc4QPKxM-fWTqyaZq5ZeHifEMrBdeO6pworDKYAAAF-krQpnw"
            }).then(function(response){
                console.log(response.data.success);
            }); 
            } catch (e) {
                console.log(e)
            }
        };
        fetchOrderList();
    }, []);


    return (
        <View style={{marginTop:20}}>
            <Search ></Search>
            <MainList/>
            <AddButton></AddButton>
        </View>
    );
}
export default MainScreen;