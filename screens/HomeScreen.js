import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Button,
  View,
  SafeAreaView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { fetchingGoals } from '../redux/actions';

import { MonoText } from '../components/StyledText';

const list = [
  {
    listItem: 'Hold yourself to being an active BLM ally',
  },
  {
    listItem: 'Create a long-term action plan',
  },
  {
    listItem: 'Find organized resources',
  },
  {
    listItem: 'Take realistic actions that day by day will lead to real change',
  },
];

function HomeScreen(props) {
  const renderRow = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item.listItem}</Text>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.personImage}
            resizeMode="stretch"
            source={require('../assets/images/mountainsicon.png')}
          />
        </View>
        <View styles={styles.logoimage}>
          <Text style={styles.headerTitle}>
            Accounta
            <Text style={{ color: 'black' }}>bud</Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.flatListContainer}>
      <FlatList
        ListHeaderComponent={renderHeader}
        style={styles.flatList}
        data={list}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return {
    goals: state.goals,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingGoals: () => {
      dispatch(fetchingGoals());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    color: '#007CFF',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 150,
    marginBottom: 20,
    textAlign: 'center',
  },
  listItem: {
    elevation: 1,
    borderRadius: 2,
    backgroundColor: '#007CFF',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 6,
  },
  listItemText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  flatListContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 400,
  },
  flatList: {
    marginTop: 14,
    alignSelf: 'stretch',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    position: 'absolute',
    right: 10,
    top: 0,
  },
  personImage: {
    width: 300,
    height: 200,
  },
});
