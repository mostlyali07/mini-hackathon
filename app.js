import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import {
    getFirestore
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



const login = (event) => {
    event.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = getAuth();
    if (email, password == "") {
        swal("Invalid!", "Field must be filled out!", "error");
        signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;
                console.log("user", user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    else{
        window.location.href="dashboard.html";
    }
};

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", login);


