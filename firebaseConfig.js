import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyD791zOoQOHESZw3hknHfeUK-Ymgt1ClF4',
  authDomain: 'icecap-sports-app-12-20.firebaseapp.com',
  databaseURL: 'https://icecap-sports-app-12-20.firebaseio.com',
  projectId: 'icecap-sports-app-12-20',
  storageBucket: 'icecap-sports-app-12-20.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:366611210126:ios:e725bd96dd09f7ae7d4edf',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
