import React, { Component } from 'react';
import Config from 'react-native-config';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        console.log('Look', Config)
        firebase.initializeApp({
            apiKey: Config.FIREBASE_KEY,
            authDomain: 'react-native-authenticat-7e7a1.firebaseapp.com',
            databaseURL: 'https://react-native-authenticat-7e7a1.firebaseio.com',
            projectId: 'react-native-authenticat-7e7a1',
            storageBucket: 'react-native-authenticat-7e7a1.appspot.com',
            messagingSenderId: '227335219447'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState( { loggedIn: true } );
            } else {
                this.setState( { loggedIn: false } );
            }
        });
    }

    renderContent = () => {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />
            default:
                return (
                    <View style={{alignSelf: 'center', alignContent: 'center'}}>
                        <Spinner size='large' />
                    </View>
                )
        }
    }

    render() {
        return (
            <View>
               <Header headerText="Authentication" />
               { this.renderContent() }
            </View>
        );
    }
}