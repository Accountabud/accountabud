import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
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
