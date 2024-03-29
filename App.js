import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'
import { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import MainNavigator from './src/Navigation/MainNavigator'
// import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    useEffect(() => {
        if (Platform.OS === 'android') SplashScreen.hide();
    }, [])
    return (
        // <NavigationContainer>
            <MainNavigator />
        // </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
});

export default App