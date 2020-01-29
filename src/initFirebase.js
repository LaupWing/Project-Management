  import firebase from 'firebase'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDycSVxJj--IRY68BmPPjcXyzxlAzQ94ps",
    authDomain: "projectmanagement-be41a.firebaseapp.com",
    databaseURL: "https://projectmanagement-be41a.firebaseio.com",
    projectId: "projectmanagement-be41a",
    storageBucket: "projectmanagement-be41a.appspot.com",
    messagingSenderId: "197703493954",
    appId: "1:197703493954:web:ca25f33f1182e791c700db",
    measurementId: "G-8Y4W7X6W3Y"
  };
  // Initialize Firebase
  const firebaseApp  =firebase.initializeApp(firebaseConfig);
  
  export default firebaseApp.firestore()