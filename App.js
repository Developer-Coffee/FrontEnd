/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import loginImg from './src/assets/Images/kakao.png';

const App = () => {
  const onclick = () => {
    //TODO: 버튼 클릭 이벤트
  };

  return (
    <SafeAreaView>
      <Pressable onClick={onclick}>
        <Image source={loginImg} style={styles.loginbutton} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginbutton: {
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
