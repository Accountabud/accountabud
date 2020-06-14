import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { withFirebaseHOC } from '../config/Firebase';

const AddGoalItem = ({ firebase }) => {
  const [goal, setGoal] = useState('');

  const handleGoalSubmit = async goal => {
    console.log('pressing', goal);
    try {
      const goals = await firebase.getGoals();
      console.log(goals);
      !goals
        ? await firebase.addGoals(goal)
        : await firebase.updateGoals(goals, goal);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View>
      <TextInput
        label="Goal"
        placeholder="Add a New Goal.."
        style={styles.input}
        onChangeText={text => {
          setGoal(text);
        }}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText} onPress={() => handleGoalSubmit(goal)}>
          {' '}
          Add Goal to List
        </Text>
      </TouchableOpacity>
    </View>
  );
};

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
});

export default withFirebaseHOC(AddGoalItem);
