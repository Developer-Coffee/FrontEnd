
import {Alert, Button, Component, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import loginImg from "../assets/Images/kakao.png";
import KakaoSDK from "@actbase/react-kakaosdk";
import CheckBox from "@react-native-community/checkbox";
import axios from "axios";
import mainLogo from '../assets/Images/mainLogo.png'

const Login = ({setAppUser}) => {

  //const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const kakaoLogin = async () => {
    try {
      await KakaoSDK.init("9420c103010e89f52554c97682117caf");
      const tokens = await KakaoSDK.login();
      console.log('@@')
      console.log(tokens);
      console.log('@@')

      
      const loginToken = await axios({
        url: "http://192.249.18.141:80/api/auth/login",
        method: 'post',
        data: {
          access_token: tokens.access_token
        }
      }).then(response => {
        console.log(response.data);
        if(response.data.success === true){
          setAppUser(true);
        }
      })
      return tokens;

    } catch (e) {
      console.log(e);
    }
  };

  return (
      <>
        <TouchableOpacity onPress={kakaoLogin} style={styles.loginButtonHolder}>
          <Image source={loginImg} style={styles.loginButton} />
        </TouchableOpacity>
      </>
  )
}


const styles = StyleSheet.create({
  loginButtonHolder: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    resizeMode: 'contain',
    width: '60%',
    height:1000

  },
});

export default Login;