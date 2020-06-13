import React, { useState } from 'react';
import { Image, TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Welcome</Text>
            <View style={styles.formContainer}>
                <TextInput
                    label={'Email'}
                    keyboardType='email-address'
                    placeholder='email'
                    style={styles.textInputStyle}
                    onChangeText={text => {
                        setEmail(text)
                    }}
                    />
            </View>
            <View style={styles.formContainer}>

                <TextInput
                    label={'Password'}
                    secureTextEntry
                    placeholder='password'
                    style={styles.textInputStyle}
                    onChangeText={text => {
                        setPassword(text)
                    }}
                    />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInButton} onPress={() => console.log('pressed', email, password)}>
                <Text style={styles.signInButtonText}>Login</Text>
             </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.signInButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>

    )
}

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 40
    },
    forgot: {
        color: 'black',
        fontSize: 11
    },
    signInButton: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBEEA4',
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 10

    },
    signInButtonText: {
        color: 'black'
    },
    formContainer: {
        width: '80%',
        backgroundColor: '#FBEEA4',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20
    },
    textInputStyle: {
        height: 50,
        color: 'white'
    }
})