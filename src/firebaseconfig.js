
import firebase from 'firebase';

import 'firebase/auth'

const firebaseConfig = {
  
}


const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()


export {auth}
