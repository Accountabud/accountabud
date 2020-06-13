import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
// import { CheckBox } from 'react-native-elements'

const GoalItem = () => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        {/* <CheckBox/> */}
        <Text style={styles.listItemText}>
          Goal Title
        </Text>
        <Text 
          style={styles.deleteItem}
          >
          X</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemText: {
    fontSize: 18,
  },
  deleteItem: {
    color: 'firebrick',
    fontSize: 20,
  }
  
})

export default GoalItem
