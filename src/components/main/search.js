import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {
    const insets = useSafeAreaInsets();
    return (
        <>
        <View style={styles.inputContainer}>
            <Ionicons name="search" size={20} color="#ABABAB" style={styles.icon} />
            <TextInput 
            style={styles.input}
            placeholder="검색"
            placeholderTextColor="#ABABAB"
            // value={searchText}
            // onChangeText={(text) => 
            //     setSearchText(text)    
            // }
            />
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 12,
        marginRight: 12,
        borderWidth: 0,
        borderRadius: 8,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    },
    icon: {
        marginLeft: 10,
    },
    input: {
        height: 45,
        backgroundColor: '#ffffff',
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 20,
        width:280,
    }
});

export default Search;