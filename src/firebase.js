import {
  firebase
} from '@firebase/app'
import '@firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.APP_KEY,
  authDomain: "volla-landingpage.firebaseapp.com",
  databaseURL: "https://volla-landingpage.firebaseio.com",
  projectId: process.env.PRJ_ID,
  storageBucket: "volla-landingpage.appspot.com",
  messagingSenderId: process.env.MSG_ID,
  appId: process.env.APP_ID,
})

export const db = firebaseApp.firestore()
