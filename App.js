import React, {useState, useCallback} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider, useSafeAreaProvider} from 'react-native-safe-area-context';
import screens from './src/screens';


const {
  LoginScreen,
  MainScreen,
  ...restScreens
} = screens;

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const [appUser, setAppUser ] = useState(" "); // 유저 통과
  const MainTabComp = useCallback((props) => { return (<MainScreen {...props} setAppUser={setAppUser} />) },[setAppUser]);
  const LoginComp = useCallback((props) => { return (<MainScreen {...props} setAppUser={setAppUser} />) },[setAppUser]);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={appUser ? "MainTab" : "Login"}>
          {appUser ? <Stack.Screen name="MainTab" component={MainTabComp} options={{headerShown: false}}/> : <Stack.Screen name="Login" component={LoginComp} options={{headerShown: false}}/>}
            {Object.entries(restScreens).map(([name, component]) => (
              <Stack.Screen name={name} key={name} component={component} options={{headerShown: false}}/>
            ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;