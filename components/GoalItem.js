import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from 'react-redux'
import { addedGoal, deletedGoal, completedGoal } from '../redux/actions'



function SwipeGoals(props) {

  const completeRow = (rowMap, rowKey) => {
    // closeRow(rowMap, rowKey);
    props.completedGoal(rowKey);
  
  };

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    props.deletedGoal(rowKey); 
    // closeRow(rowMap, rowKey);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = data => {
    if (!data.item.completed) {
      return (
    
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'#AAA'}
        >
            <View>
                <Text style={styles.goalText}>{data.item.goal} </Text>
            </View>
        </TouchableHighlight>
      )

    } 

    if ( data.item.completed) {
        return (
          <TouchableHighlight
          onPress={() => console.log('You touched me')}
          style={styles.completedGoal}
          underlayColor={'#AAA'}
      >
          <View>
              <Text style={styles.goalText}>{data.item.goal} </Text>
          </View>
      </TouchableHighlight>
        )
      }
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      
      {/* complete goal */}
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backLeftBtnLeft]}
          onPress={() => completeRow(rowMap, data.item.id)}
        >
          <Text>Done!</Text>
        </TouchableOpacity>


        {/* close goal item */}
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={() => {
              console.log(rowMap, 'here is the rowmap')
              closeRow(rowMap, data.item.id-1)
              console.log(data.item.id-1)
            }
            }
        >
            <Text style={styles.backTextWhite}>Close</Text>
        </TouchableOpacity>


        {/* delete goal item */}
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => deleteRow(rowMap, data.item.id)}
        >
            <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
    </View>
  );
    
    return (
      <View style={styles.container}>
        <SwipeListView
          data={props.goals}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-150}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          onRowDidOpen={onRowDidOpen}
        />
      </View>
    );
  }

  const mapStateToProps = state => {
    return({
      goals: state.goals
    })
  }

  const mapDispatchToProps = dispatch => {
    return ({
      addedGoal: (goalString) => {dispatch(addedGoal(goalString))},
      deletedGoal: (goalId) => {dispatch(deletedGoal(goalId))},
      completedGoal: (goalId) => {dispatch(completedGoal(goalId))}
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SwipeGoals)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
},
backTextWhite: {
    color: '#FFF',
},
rowFront: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 80,
},
rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
},
backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
},
backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
},
backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
},

backLeftBtnLeft: {
  backgroundColor: 'green',
    left: 0,
},
goalText: {
  fontSize:18,
  textTransform: "uppercase",
  letterSpacing: 1
},

completedGoal: {
  alignItems: 'center',
  backgroundColor: '#FBEEA4',
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  justifyContent: 'center',
  height: 80,
}

});


