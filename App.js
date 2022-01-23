/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Login from "./src/Screens/login";

const App = () => {
  const onclick = () => {
    //TODO: 버튼 클릭 이벤트
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Login/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
