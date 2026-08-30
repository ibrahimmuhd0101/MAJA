import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const firebaseConfig = {

  apiKey: "AIzaSyAEWIrc0uCIHvJ_RHYW3l8UTumzYWeNo-w",

  authDomain: "maja-a6299.firebaseapp.com",

  projectId: "maja-a6299",

  storageBucket: "maja-a6299.firebasestorage.app",

  messagingSenderId: "217642905179",

  appId: "1:217642905179:web:683d1c3e8c6fab3356997e"

};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export { auth, db };
