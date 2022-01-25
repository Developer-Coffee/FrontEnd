
import {Alert, Button, Component, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {io} from 'socket.io-client';



const SocketTest = () => {
	let count = 0;
	let socket = null;

	const onPress = () => {
		if(socket) {
			console.log("send message!");
			socket.emit("message", "test message from clent" + count.toString());
			count = count + 1;
		} else {
			console.log("no socket!");
		}
	}

	const connectSocket = () => {
		socket = io("http://192.249.18.141:80");
		socket.on('connect', () => {
			console.log("connected!");
		})
		socket.on("message", msg => {
			console.log("got msg: ", msg);
		});
	}

	const disconnectSocket = () => {
		if(socket) {
			console.log("disconnected!");
			socket.disconnect();
			socket.off();
			socket = null;
		} else {
			console.log("no socket!");
		}
	}

	return (
		<>
			<TouchableOpacity onPress={onPress}>
				<Text>Send Message!</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={connectSocket}>
				<Text>Connect Socket</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={disconnectSocket}>
				<Text>Disconnect Socket</Text>
			</TouchableOpacity>
		</>

	)

}

export default SocketTest;