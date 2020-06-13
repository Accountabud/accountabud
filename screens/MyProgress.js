import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProgressScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.container}>My Progress</Text>
            <Text>My Progress</Text>
        </View>

    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
})