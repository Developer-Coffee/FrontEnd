
import {Alert, Button, Component, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import io from 'socket.io-client';



const SocketTest = () => {

	this.socket = io("http://192.249.18.141:80");
	this.socket.on("message", msg => {
		console.log("got msg: ", msg);
	});
	let count = 0;


	const onPress = () => {
		socket.on('connect', () => {
			console.log("connected!");
		})
		console.log("send message!: ", socket);
		socket.emit("message", "test message from clent" + count.toString());
		count = count + 1;
	}

	return (
		<TouchableOpacity onPress={onPress}>
			<Text>Send Message!</Text>
		</TouchableOpacity>
	)

}

export default SocketTest;