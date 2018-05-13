import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button } from 'react-native';

export default class Details extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        console.log(navigationOptions);
        const { params, routeName } = navigation.state;
        return {
            title: params && params.screenName ? params.screenName : routeName,
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor
        };
    };

    render() {
        const { navigation } = this.props;
        //console.log(navigation);
        return (
        <View style={styles.container}>
            <Text> Welcome to Details Screen </Text>
            <Button title='Go to Details ... again' onPress={() => this.props.navigation.push('Details')} />
            <Button title='Go back to previous screen' onPress={() => this.props.navigation.goBack()} />
            <Button title='Go back to Home' onPress={() => this.props.navigation.popToTop()} />
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
