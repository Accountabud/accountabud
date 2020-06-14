import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import { FlatList } from 'react-native-gesture-handler';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Firebase = {
  // auth
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  signOut: () => {
    return firebase.auth().signOut();
  },
  checkUserAuth: user => {
    return firebase.auth().onAuthStateChanged(user);
  },
  passwordReset: email => {
    return firebase.auth().sendPasswordResetEmail(email);
  },
  // firestore
  createNewUser: userData => {
    return firebase
      .firestore()
      .collection('users')
      .doc(`${userData.uid}`)
      .set(userData);
  },
  getGoals: () => {
    const user = firebase.auth().currentUser;
    // console.log(user);
    return firebase
      .firestore()
      .collection('goals')
      .doc(user.uid)
      .get()
      .then(function(doc) {
        let data = doc.data();
        return data ? data.goals : [];
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  getGoalsForAdd: () => {
    const user = firebase.auth().currentUser;
    // console.log(user);
    return firebase
      .firestore()
      .collection('goals')
      .doc(user.uid)
      .get()
      .then(function(doc) {
        let data = doc.data();
        return data ? data.goals : [];
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  addGoals: goalStr => {
    const user = firebase.auth().currentUser;
    const timestamp = firebase.firestore.Timestamp.now().toDate();
    return firebase
      .firestore()
      .collection('goals')
      .doc(user.uid)
      .set({
        goals: [
          {
            goal: goalStr,
            createdAt: timestamp,
            id: new Date().valueOf(),
            completed: false,
          },
        ],
      });
  },

  updateGoals: (goalarr, goalStr) => {
    const user = firebase.auth().currentUser;
    const timestamp = firebase.firestore.Timestamp.now().toDate();
    return firebase
      .firestore()
      .collection('goals')
      .doc(user.uid)
      .set({
        goals: [
          ...goalarr,
          {
            goal: goalStr,
            createdAt: timestamp,
            id: new Date().valueOf(),
            completed: false,
          },
        ],
      });
  },

  setCompleted: () => {
    const user = firebase.auth().currentUser;
    return firebase
      .firestore()
      .collection('goals')
      .doc(user.uid)
      .update({
        completed: true,
      })
      .catch(function(error) {
        console.log('Error creating documents: ', error);
      });
  },
};

export default Firebase;
