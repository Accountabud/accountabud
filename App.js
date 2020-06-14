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
import GoalsScreen from './screens/GoalsScreen';
import {Provider} from 'react-redux'
import store from './redux/store'
import ReadHolder from './screens/ResourcePages/ReadHolder'
import ListenHolder from './screens/ResourcePages/ListenHolder'
import WatchHolder from './screens/ResourcePages/WatchHolder'
import DonateHolder from './screens/ResourcePages/DonateHolder'
import ShopHolder from './screens/ResourcePages/ShopHolder'

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
              <Stack.Screen name="ReadPage" component={ReadHolder} />
              <Stack.Screen name="ListenPage" component={ListenHolder} />
              <Stack.Screen name="WatchPage" component={WatchHolder} />
              <Stack.Screen name="DonatePage" component={DonateHolder} />
              <Stack.Screen name="ShopPage" component={ShopHolder} />
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
