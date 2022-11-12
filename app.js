import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import {
    doc,
    setDoc,
    getFirestore,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    addDoc,
    onSnapshot,
    Timestamp,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCmUZy2KYQO_UFn1VWdCfVjKbl5ov005Xw",
    authDomain: "attendance-app-7477.firebaseapp.com",
    projectId: "attendance-app-7477",
    storageBucket: "attendance-app-7477.appspot.com",
    messagingSenderId: "157105142963",
    appId: "1:157105142963:web:7ea435d8784d518cdc84c6",
    measurementId: "G-XFLHSGPV2M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);







const register = () => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            let uid = userCredential.user.uid;
            let firDoc = doc(db, "users", uid);
            await setDoc(firDoc, {
                name: name.value,
                email: email.value,
                password: password.value,
            });
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};

const btn = document.getElementById("register-btn");

btn.addEventListener("click", register);

const login = () => {
    const email = document.getElementById("l-email");
    const password = document.getElementById("l-password");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            // console.log("user", user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", login);

window.onload = async () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (!user.emailVerified) {
                // sendEmailVerification(auth.currentUser)
                //   .then(() => {
                //     console.log("Email sent");
                //   })
                //   .catch((err) => console.log(err));
            }
            getUserFromDataBase(user.uid);
        } else {
            console.log("not login");
        }
    });
};

