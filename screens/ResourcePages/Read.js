import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import resources from './resources.json'

export default function read() {

    
    const readResources = resources.resources.read
    return readResources.map(item => {
      return (
      <View style={styles.container}>
          <ScrollView style={styles.list}>
            <Text style={styles.list_item} onPress={() => WebBrowser.openBrowserAsync(item.link)}>{item.title}</Text>
          </ScrollView>
      </View>
  )
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    height: "80%",
    
  },
  
  list_item: {
    textDecorationLine: "underline",
    textDecorationColor: "#000",
    backgroundColor: "#FCE21A",
    padding: 20,
    margin: 10,
    fontSize: 14,
  }
    
})
