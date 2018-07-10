import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBTgTolRU9WNZYQXVqLkyHEQqfDEDIN8Ok',
            authDomain: 'react-native-authenticat-7e7a1.firebaseapp.com',
            databaseURL: 'https://react-native-authenticat-7e7a1.firebaseio.com',
            projectId: 'react-native-authenticat-7e7a1',
            storageBucket: 'react-native-authenticat-7e7a1.appspot.com',
            messagingSenderId: '227335219447'
        });
    }
    render() {
        return (
            <View>
               <Header headerText="Authentication" />
               <LoginForm />
            </View>
        );
    }
}