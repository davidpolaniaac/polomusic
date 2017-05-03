
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyDCbNQDP0O_ecSlO5hQBcHxgg5JOWQFmX4",
    authDomain: "platzimusic-c1ebd.firebaseapp.com",
    databaseURL: "https://platzimusic-c1ebd.firebaseio.com",
    projectId: "platzimusic-c1ebd",
    storageBucket: "platzimusic-c1ebd.appspot.com",
    messagingSenderId: "972316072097"
  };
firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();

export const firebaseDatabase = firebase.database();

export default firebase