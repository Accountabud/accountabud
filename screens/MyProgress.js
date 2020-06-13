import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function ProgressScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.page_title}>My Progress</Text>
            //Floating button to go to archive
            <View style={styles.box}> 
                <Text style={styles.stat_title}>CURRENT STREAK</Text>
                <Text style={styles.stat_number}>40</Text>
                <Text style={styles.stat_units}>DAYS</Text>
                <Text style={styles.stat_title}>TOTAL IMPACT</Text>
                <Text style={styles.stat_number}>600</Text>
                <Text style={styles.stat_units}>DAYS</Text>      
            </View>
            <Button title="Past Actions"/>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    page_title: {
        paddingTop: 20,
        textAlign: "center",
        fontSize: 40,
    },
    box:{
        margin: "auto",
        // width: "80%",
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'column',
    },
    stat_number:{
        fontSize: 150,
        textAlign: "center",
    },
    stat_title:{
        fontSize: 30,
        textAlign: "center"
    },
    stat_units:{
        fontSize: 40,
        textAlign: "center",
        paddingBottom: 35
    }
})