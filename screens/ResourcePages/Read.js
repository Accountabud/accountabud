import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Read() {
    return (
        <View style={styles.container}>
            <Text style={styles.page_title}>READ</Text>
            <ScrollView style={styles.list}>
              <Text style={styles.list_item} onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}>Resource #1</Text>
              <Text style={styles.list_item} onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}>Resource #2</Text>
              <Text style={styles.list_item} onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}>Resource #3</Text>
            </ScrollView>
        </View>
    )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  list: {
    // justifyContent: "space-around",
    height: "80%",
    padding: 20,

  },
  page_title: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 40,
  },
  list_item: {
    textDecorationLine: "underline",
    textDecorationColor: "#000",
    

  }

    
})