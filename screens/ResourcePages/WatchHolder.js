import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import resources from './resources.json'
import Watch from './Watch'
import BackButton from './BackButton'
//import { MonoText } from '.../components/StyledText';


export default function WatchPage() {

      return (
      // <View style={styles.container}>
      <View>
        <BackButton/>
        <Text style={styles.page_title}>Watch</Text>
          <ScrollView >
            <Watch></Watch>
          </ScrollView>
        {/* <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}></MonoText>
        </View> */}
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