import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

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
const analytics = getAnalytics(app);