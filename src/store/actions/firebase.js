import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyA93kNUP_uhZz_NGeKNZ6h3NfQx_xz-vKA",
    authDomain: "rn-blooddonor.firebaseapp.com",
    projectId: "rn-blooddonor",
    storageBucket: "rn-blooddonor.appspot.com",
    messagingSenderId: "5163659268",
    appId: "1:5163659268:web:4cc6dbb800963db8e80551",
    measurementId: "G-9T26M0BGVF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
