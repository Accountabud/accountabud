import React, { useState } from 'react';
import { Image, TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { withFirebaseHOC } from '../config/Firebase';


const Login = ({ firebase, navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async (email, password) => {
        try { const response = await firebase.loginWithEmail(email, password)
            if (response.user) {
                console.log('there is a user');
                navigation.navigate('Links');
            }
        }
        catch (error) {
            console.log(error.message);
        }
    };

    const handleSignUp = async (email, password) => {
        try { const response = await firebase.signupWithEmail(email, password)
            if (response.user.uid) {
                const { uid } = response.user;
                const userData = { uid, email, password };

                await firebase.createNewUser(userData);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Welcome</Text>
            <View style={styles.formContainer}>
                <TextInput
                    label={'Email'}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    placeholder='email'
                    style={styles.textInputStyle}
                    onChangeText={text => {
                        setEmail(text)
                    }}
                    onSubmit={() => console.log(text)}
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
            <TouchableOpacity style={styles.signInButton} onPress={() => handleLogin(email, password)}>
                <Text style={styles.signInButtonText}>Login</Text>
             </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.signInButtonText} onPress={() => handleSignUp(email, password)}>Sign Up</Text>
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
        color: 'black'
    }
})

export default withFirebaseHOC(Login);