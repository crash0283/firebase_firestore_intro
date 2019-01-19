import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDBk8xnFfeht53KO4fK9V0cu4JyItwSgvQ",
  authDomain: "web-2-intro-project.firebaseapp.com",
  databaseURL: "https://web-2-intro-project.firebaseio.com",
  projectId: "web-2-intro-project",
  storageBucket: "web-2-intro-project.appspot.com",
  messagingSenderId: "458918322036"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default db;
