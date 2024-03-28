import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
    useEffect(() => {
        if (Platform.OS === 'android') SplashScreen.hide();
    }, [])
    return (
        <SafeAreaView>
            <Text style={styles.text}>App</Text>
        </SafeAreaView>
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