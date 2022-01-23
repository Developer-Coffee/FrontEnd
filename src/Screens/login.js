
import {Alert, Button, Component, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import loginImg from "../assets/Images/kakao.png";
import KakaoSDK from "@actbase/react-kakaosdk";
import CheckBox from "@react-native-community/checkbox";
import axios from "axios";

const Login = () => {


  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const kakaoLogin = async () => {

    try {
      await KakaoSDK.init("9420c103010e89f52554c97682117caf");
      const tokens = await KakaoSDK.login();
      console.log(tokens);
      const loginToken = await axios({
        url: "http://192.249.18.141:80/api/auth/login",
        method: 'post',
        data: {
          access_token: tokens.access_token
        }
      }).then(response => {
        console.log(response.data);
        //TODO: response.data 의 access_token을 local storage에 저장 후 로그인에 사용
      })
      return tokens;
    } catch (e) {
      console.log(e);
    }
  };

  return (
      <>
        <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <TouchableOpacity onPress={kakaoLogin} style={styles.loginButtonHolder}>
          <Image source={loginImg} style={styles.loginButton} />
        </TouchableOpacity>
      </>
  )
}


const styles = StyleSheet.create({
  loginButtonHolder: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    resizeMode: 'contain',
    width: '100%',
  },
});

export default Login;