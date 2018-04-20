import React from 'react';
import firebase from 'firebase';



const config = {
    apiKey: "AIzaSyC0Yth5nhR9eRBp6WhjNGkQ8M1cJIKFTTs",
    authDomain: "portfoliovids-fb07e.firebaseapp.com",
    databaseURL: "https://portfoliovids-fb07e.firebaseio.com",
    projectId: "portfoliovids-fb07e",
    storageBucket: "portfoliovids-fb07e.appspot.com",
    messagingSenderId: "732048957174"
  };
  firebase.initializeApp(config);

const storage = firebase.storage();





export default storage;