import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEsritDZ765CM-hShSHSBlBSAGOdCWG64",
    authDomain: "incseeuu.firebaseapp.com",
    databaseURL: "https://incseeuu-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "incseeuu",
    storageBucket: "incseeuu.appspot.com",
    messagingSenderId: "1011467433917",
    appId: "1:1011467433917:web:fdc6231682314b902984d4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
