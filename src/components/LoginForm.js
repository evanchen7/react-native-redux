import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
    state = { password: '', email: '' }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="example@example.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={ email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={ password => this.setState({ password })}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}