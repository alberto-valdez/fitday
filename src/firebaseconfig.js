
import firebase from 'firebase';

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA-8woKkdthYnbu3HSa75ZDUk2kFpxwUhI",
    authDomain: "fitday-1cba6.firebaseapp.com",
    projectId: "fitday-1cba6",
    storageBucket: "fitday-1cba6.appspot.com",
    messagingSenderId: "908445118329",
    appId: "1:908445118329:web:e7eb5e98a8f176092709a8"
}


const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()


export {auth}
