import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

const AddGoalItem = () => {
  return (
    <View>
    <TextInput 
      placeholder="Add Goal.." 
      style={styles.input}
  
      />
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}> + Add Item</Text>
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
