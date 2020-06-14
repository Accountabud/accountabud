import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import completedTasks from '../completedTasks.json';
// import { uuid } from 'uuidv4';

export default function PastActions() {
  return (
    <View style={styles.container}>
      <Text style={styles.page_title}>Action History</Text>
      <View style={styles.box}>
        {completedTasks.length === 0 ? (
          <Text>"No Completed Tasks"</Text>
        ) : (
          completedTasks.map(task => {
            return (
              <View>
                <Text>Completed:{task.date}</Text>
                <Text>Task:{task.task}</Text>
              </View>
            );
          })
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  page_title: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 40,
  },
  box: {
    margin: 'auto',
    // width: "80%",
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    flexDirection: 'column',
  },
  past_task: {
    fontSize: 20,
    textAlign: 'center',
  },
});
