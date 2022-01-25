/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView, StyleSheet} from 'react-native';
import screens from './src/screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Login from "./src/screens/login";

const {
  MainScreen,
  ...restScreens
} = screens;

const Stack = createStackNavigator();

const App = () => {

//   const onclick = () => {
//     //TODO: 버튼 클릭 이벤트
//   };

//   return (
//     <SafeAreaView style={styles.safeAreaView}>
//       <Login/>
//     </SafeAreaView>
//   );
// };

  const [appUser, setAppUser ] = useState(); // 유저 통과

  const MainTabComp = useCallback((props) => {
     return (
     <MainScreen {...props} setAppUser={setAppUser} />
      ) },[setAppUser]);

  const LoginComp = useCallback((props) => {
     return (
     <Login {...props} setAppUser={setAppUser}/>
      ) },[setAppUser]);
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={appUser ? "MainTab" : "Login"}>
          {/* 앱 유저가 true이면 메인탭 앱 유저가 false이면 로그인 */}
          {appUser ? <Stack.Screen name="MainTab" component={MainTabComp} options={{headerShown: false}}/> : <Stack.Screen name="Login" component={LoginComp} options={{headerShown: false}}/>}
            {Object.entries(restScreens).map(([name, component]) => (
              <Stack.Screen name={name} key={name} component={component} options={{headerShown: false}}/>
            ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider> 
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
