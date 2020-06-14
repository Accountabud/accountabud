import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MonoText } from '../components/StyledText';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function ResourcesScreen({navigation}) {


    return (
        <View style={styles.container}>

            <Text style={styles.page_title}>My Resources</Text>
            <View style={styles.button_group}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ReadPage')}
              >
                <Text style={styles.button_name}>READ</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ListenPage')}
              >
                <Text style={styles.button_name}>LISTEN</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('WatchPage')}
              >
                <Text style={styles.button_name}>WATCH</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DonatePage')}
              >
                <Text style={styles.button_name}>DONATE</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ShopPage')}
              >
                <Text style={styles.button_name}> SHOP</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabBarInfoContainer}>
       

        {/* <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}></MonoText>
        </View> */}
      </View>
        </View>
    )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "space-around",
    // paddingHorizontal: 10,

    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center'
  },
  button_group: {
    //justifyContent: "center"
    justifyContent: "space-around",
    height: "80%",
    paddingTop: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#EEE",
    padding: 10,
    borderWidth: 2,
    borderColor: '#2196f3',
    margin: 10, 
  },
  page_title: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 40,
},
button_name: {
  padding: 20,
  fontSize: 20
}

    
})