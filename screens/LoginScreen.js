import React, { useState } from 'react';
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { withFirebaseHOC } from '../config/Firebase';

const Login = ({ firebase, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //For input validation
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);

  //Validate Email
  const isValidEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async (email, password) => {
    //input validation
    if (!email) {
      setError('Email required');
      setValid(false);
      return;
    } else if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long');
      setValid(false);
      return;
    } else if (!isValidEmail(email)) {
      setError('Invalid Email!');
      setValid(false);
      return;
    }

    try {
      const response = await firebase.loginWithEmail(email, password);
      if (response.user) {
        console.log('there is a user');
        navigation.navigate('Links');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async (email, password) => {
    //input validation
    if (!email) {
      setError('Email required');
      setValid(false);
      return;
    } else if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long');
      setValid(false);
      return;
    } else if (!isValidEmail(email)) {
      setError('Invalid Email!');
      setValid(false);
      return;
    }

    try {
      const response = await firebase.signupWithEmail(email, password);
      if (response.user) {
        const { uid } = response.user;
        const userData = { uid, email, password };

        await firebase.createNewUser(userData);
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Welcome</Text>
      <View style={styles.formContainer}>
        <TextInput
          label={'Email'}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="email"
          style={styles.textInputStyle}
          onChangeText={text => {
            setValid(isValidEmail(text));
            setEmail(text);
          }}
          error={isValid}
        />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          label={'Password'}
          secureTextEntry
          placeholder="password"
          style={styles.textInputStyle}
          onChangeText={text => {
            setPassword(text);
          }}
          error={isValid}
        />
      </View>
      {error ? (
        <View style={styles.errorLabelContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => handleLogin(email, password)}
      >
        <Text style={styles.signInButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={styles.signInButtonText}
          onPress={() => handleSignUp(email, password)}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

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
    marginBottom: 40,
  },
  forgot: {
    color: 'black',
    fontSize: 11,
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
    marginBottom: 10,
  },
  signInButtonText: {
    color: 'black',
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#FBEEA4',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  textInputStyle: {
    height: 50,
    color: 'black',
  },
  errorLabelContainer: {
    width: '80%',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default withFirebaseHOC(Login);
