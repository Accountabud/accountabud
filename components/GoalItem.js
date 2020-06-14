import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import { SwipeListView } from 'react-native-swipe-list-view';


// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}



export default function SwipeGoals() {
  const [listData, setListData] = useState(
    Array(20)
        .fill('')
        .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
);

const closeRow = (rowMap, rowKey) => {
  if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
  }
};

const deleteRow = (rowMap, rowKey) => {
  closeRow(rowMap, rowKey);
  const newData = [...listData];
  const prevIndex = listData.findIndex(item => item.key === rowKey);
  newData.splice(prevIndex, 1);
  setListData(newData);
};

const onRowDidOpen = rowKey => {
  console.log('This row opened', rowKey);
};

const renderItem = data => (
  <TouchableHighlight
      onPress={() => console.log('You touched me')}
      style={styles.rowFront}
      underlayColor={'#AAA'}
  >
      <View>
          <Text>I am {data.item.text} in a SwipeListView</Text>
      </View>
  </TouchableHighlight>
);

const renderHiddenItem = (data, rowMap) => (
  <View style={styles.rowBack}>
      <Text>Left</Text>
      <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => closeRow(rowMap, data.item.key)}
      >
          <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => deleteRow(rowMap, data.item.key)}
      >
          <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
  </View>
);


  
  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
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


    // <SafeAreaView style={styles.container}>
    //   <FlatList
    //     data={DATA}
    //     renderItem={({ item }) => <Item title={item.title} />}
    //     keyExtractor={item => item.id}
    //   />
    // </SafeAreaView>
  );
}

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
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
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

  // container: {
  //   flex: 1,
  //   marginTop: Constants.statusBarHeight,
  // },
  // item: {
  //   backgroundColor: '#f9c2ff',
  //   padding: 20,
  //   marginVertical: 8,
  //   marginHorizontal: 16,
  // },
  // title: {
  //   fontSize: 32,
  // },
});


// const GoalItem = () => {
//   return (
//     <TouchableOpacity style={styles.listItem}>
//       <View style={styles.listItemView}>
//         {/* <CheckBox/> */}
//         <Text style={styles.listItemText}>
//           Goal Title
//         </Text>
//         <Text 
//           style={styles.deleteItem}
//           >
//           X</Text>
//       </View>
//     </TouchableOpacity>
//   )
// }

// const styles = StyleSheet.create({
//   listItem: {
//     padding: 15,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderColor: '#eee',
//   },
//   listItemView: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   listItemText: {
//     fontSize: 18,
//   },
//   deleteItem: {
//     color: 'firebrick',
//     fontSize: 20,
//   }
  
// })

// export default GoalItem
