import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
    { label: 'N1', value: '1' },
    { label: 'N2', value: '2' },
    { label: 'N3', value: '3' },
    { label: 'N4', value: '4' },
    { label: 'N5', value: '5' },
];

const OrderPlaceDropDown = () => {

    const [value, setValue] = useState(null);

    const renderItem = (item) => {
      return (
        <View style={styles.item}>
            <Text style={styles.textItem}>{item.label}</Text>
            {item.value === value && (<Ionicons style={styles.icon} color="black" name="checkmark" size={20}/>)}
        </View>
    );
};

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="건물을 선택해주세요"
        searchPlaceholder="검색어를 입력하세요"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <Ionicons style={styles.icon} color="black" name="checkmark" size={20} />)}
        renderItem={renderItem}
      />
    );
  };
  export default OrderPlaceDropDown;

const styles = StyleSheet.create({
    dropdown: {
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
      height: 50,
      width:'90%',
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });