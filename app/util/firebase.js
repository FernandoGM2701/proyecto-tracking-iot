import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDan8CNrHLXwIcYpMOOPbNID3nNa1lUcLo",
    authDomain: "tracking-iot-e7f9b.firebaseapp.com",
    databaseURL: "https://tracking-iot-e7f9b.firebaseio.com",
    projectId: "tracking-iot-e7f9b",
    storageBucket: "tracking-iot-e7f9b.appspot.com",
    messagingSenderId: "59886252216",
    appId: "1:59886252216:web:e45ef1b02617056b83044d"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);