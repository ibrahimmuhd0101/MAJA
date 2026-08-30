import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUQm-3ullzFDRwn5Iu0Hg_7u0Mfiz688o4",
  authDomain: "maja-1fa6a.firebaseapp.com",
  projectId: "maja-1fa6a",
  messagingSenderId: "877281790124",
  appId: "1:877281790124:web:14f693dfd580451e3bb709"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
