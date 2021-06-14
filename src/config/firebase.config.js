import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDHC1qznjNSuhpTwvpqU58LUs_nFWyWWL0",
    authDomain: "basketball-stats-719f8.firebaseapp.com",
    databaseURL: "https://basketball-stats-719f8.firebaseio.com",
    projectId: "basketball-stats-719f8",
    storageBucket: "basketball-stats-719f8.appspot.com",
    messagingSenderId: "14583157945",
    appId: "1:14583157945:web:f02f99001a944e446ff768",
    measurementId: "G-E1JG6KV7S9"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;