import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAbsVIJ9lLUX0aFo4A8acn1yYyW5oilf5M",
    authDomain: "drive--project.firebaseapp.com",
    projectId: "drive--project",
    storageBucket: "drive--project.appspot.com",
    messagingSenderId: "69899052508",
    appId: "1:69899052508:web:cac4e1ad6d91f951f81b19"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const store = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,store,auth,provider};