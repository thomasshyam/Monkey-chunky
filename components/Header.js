import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Platform,StatusBar } from 'react-native';

import colors from '../config/colors';

const Header = (props) => {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </SafeAreaView>
    );
    };

    const styles = StyleSheet.create({
        header: {
            height: 110,
            width: '100%', 
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            backgroundColor: colors.primary,
            alignItems: 'center',
            justifyContent: 'center'
        },
        headerTitle: {
            color: '#fff',
            fontSize: 22,
            paddingTop: 30,
        }
    });

    export default Header;