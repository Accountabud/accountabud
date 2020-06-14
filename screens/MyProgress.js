import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux'

function ProgressScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.page_title}>My Progress</Text>
            <View style={styles.box}> 
                <Text style={styles.stat_title}>CURRENT STREAK</Text>
                <Text style={styles.stat_number}>40</Text>
                <Text style={styles.stat_units}>DAYS</Text>
                <Text style={styles.stat_title}>TOTAL IMPACT</Text>
                <Text style={styles.stat_number}>{props.goals.filter(p => p.completed).length}</Text>
                <Text style={styles.stat_units}>ACTIONS</Text>      
            </View>
            {/* <Button title="Past Actions"/> */}
        </View>
    )
} 

const mapStateToProps = state => {
    return({
      goals: state.goals
    })
  }

export default connect(mapStateToProps)(ProgressScreen)

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