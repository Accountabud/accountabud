import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import Firebase, { FirebaseProvider } from './config/Firebase';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MyProgressScreen from './screens/MyProgress';
import ResourcesScreen from './screens/ResourcesScreen';
import PastActionsScreen from './screens/PastActionsScreen'
import {Provider} from 'react-redux'
import store from './redux/store'

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <FirebaseProvider value={Firebase}>
        <Provider store = {store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
          <NavigationContainer linking={LinkingConfiguration}>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Links" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        </Provider>
      </FirebaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
