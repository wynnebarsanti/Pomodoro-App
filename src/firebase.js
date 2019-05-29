import firebase from "firebase";
const firebaseConfig = {
   apiKey: "AIzaSyCZTncFXTuOeFDf9M3cXGft_HkXDOoTXVw",
   authDomain: "pomodoro-data.firebaseapp.com",
   databaseURL: "https://pomodoro-data.firebaseio.com",
   projectId: "pomodoro-data",
   storageBucket: "pomodoro-data.appspot.com",
   messagingSenderId: "480608390123",
   appId: "1:480608390123:web:c8b17ae6e5047b1c"
 };

firebase.initializeApp(firebaseConfig);
export default firebase;