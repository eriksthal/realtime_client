import { push } from 'react-router-redux'
import firebase from 'firebase'

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAxzJaNrlpkq9AuCQ0YiWvVbFHvtk0A_Nc",
  authDomain: "plateau-b80c2.firebaseapp.com",
  databaseURL: "https://plateau-b80c2.firebaseio.com",
  storageBucket: "plateau-b80c2",
  messagingSenderId: "29970528702"
};
export const fire = firebase.initializeApp(config);

export const pushData = (route, object) => {
    /* Send the message to Firebase */
    fire.database().ref(route).push( object );
}

export const pushRoute = (context, route) => {
    context.props.dispatch(push(route));
};


