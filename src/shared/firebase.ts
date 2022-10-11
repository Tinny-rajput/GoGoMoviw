import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// });

const firebaseConfig = {
 apiKey: "AIzaSyBtfIyEIBXz3xn_AX_vEPcoeni55d5QU00",
  authDomain: "gogomoviw-7850d.firebaseapp.com",
  projectId: "gogomoviw-7850d",
  storageBucket: "gogomoviw-7850d.appspot.com",
  messagingSenderId: "932308925123",
  appId: "1:932308925123:web:19f14b22375c5682fdc076",
  measurementId: "G-DJHSVEXKZ9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });
export const auth = getAuth(app);
const analytics = getAnalytics(app);
