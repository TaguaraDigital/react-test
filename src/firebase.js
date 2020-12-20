import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID

  // apiKey: "AIzaSyDIAtlKUVPAVf91GrrWL1U8ztAm8mrZH24",
  // authDomain: "taguara-digital-portfolio.firebaseapp.com",
  // databaseURL: "https://taguara-digital-portfolio.firebaseio.com",
  // projectId: "taguara-digital-portfolio",
  // storageBucket: "taguara-digital-portfolio.appspot.com",
  // messagingSenderId: "768996275583",
  // appId: "1:768996275583:web:8988961fadae89602c164a"
});

export const auth = app.auth();
export default app;