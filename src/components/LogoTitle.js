import React, { Component } from 'react';
import { StyleSheet, Image, Platform } from 'react-native';

const marginHorizontal = Platform.select({
    ios: 0,
    android: '48%'
  });

export default class LogoTitle extends Component {
    render() {
        console.log(marginHorizontal);
        return (
            <Image
                source={require('./images/spiro.png')}
                style={styles.image}
            />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
        marginHorizontal: marginHorizontal
    }
});
