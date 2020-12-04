import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
   // Your web app's Firebase configuration
    apiKey: "AIzaSyDK0oSnexmMdMJkeC7BA5kVIdypP1MxiWo",
    authDomain: "portfolio-62910.firebaseapp.com",
    databaseURL: "https://portfolio-62910.firebaseio.com",
    projectId: "portfolio-62910",
    storageBucket: "portfolio-62910.appspot.com",
    messagingSenderId: "1080256278575",
    appId: "1:1080256278575:web:91640ae4f5c9280b5696da"
})

var db = firebaseApp.firestore()

export {db}