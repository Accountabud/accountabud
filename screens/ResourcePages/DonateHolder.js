import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import resources from './resources.json'
import Donate from './Donate'

export default function DonatePage() {

      return (
      // <View style={styles.container}>
      <View>
        <Text style={styles.page_title}>Donate</Text>
          <ScrollView >
            <Donate></Donate>
          </ScrollView>
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
  },
  list: {
    // height: "80%",
    padding: 20,
  },
  
  list_item: {
    textDecorationLine: "underline",
    textDecorationColor: "#000",
    backgroundColor: "pink",
    padding: 30,
    fontSize: 16
  },
  page_title: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 40,
},
    
})