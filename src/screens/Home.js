import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import LogoTitle from '../components/LogoTitle';

export default class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        const { routeName } = navigation.state;
        return {
            headerTitle: <LogoTitle />,
            headerRight: (
                <TouchableOpacity
                    onPress={() => alert('You just clicked on the Info Button!')} >
                    <Text style={styles.button}> Info </Text>
                </TouchableOpacity>
            ),
            headerLeft: (
                <TouchableOpacity onPress={() => navigate('MyModal')}>
                    <Text style={styles.button}> Modal </Text>
                </TouchableOpacity>
            )
        };
    };

    render() {
        return (
        <View style={styles.container}>
            <Text> Welcome to Home Screen </Text>
            <Button
                title='Go to Details'
                onPress={() => this.props.navigation.navigate('Details', { screenId: 0, screenName: 'Details' })} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        fontSize: 20,
        color: '#fff'
    }
});
