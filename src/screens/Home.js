import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button } from 'react-native';

import LogoTitle from '../components/LogoTitle';

export default class Home extends Component {

    static navigationOptions = ({ navigation }) => {
        const { routeName } = navigation.state;
        return {
            headerTitle: <LogoTitle />,
            headerRight: (
                <Button
                    title='Info'
                    onPress={() => alert('You just clicked on the Info Button!')}
                    color='#fff' />
            ),
            headerLeft: (
                <Button onPress={() => navigation.navigate('MyModal')} title='Modal' color='#fff' />
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
    }
});
