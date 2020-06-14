import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import firebase from '../config/Firebase';



const AddGoalItem = () => {
  const [ goal, setGoal ] = useState('');

  const handleGoalSubmit = (goal) => {
    console.log('pressing', goal);
    firebase.setGoals(goal);
  }

  return (
    
    <View>
    <TextInput 
      label="Goal"
      placeholder="Add a New Goal.." 
      style={styles.input}
      onChangeText={text => {setGoal(text)}}
      />
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText} onPress={() => handleGoalSubmit(goal)}> Add Goal to List</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
})

export default AddGoalItem
