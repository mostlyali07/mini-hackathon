import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
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



const submit_stu = document.getElementById("create_stu");


submit_stu.addEventListener("click", (event) => {
    event.preventDefault()
    let teachers = document.getElementById("teachers").value;
    let class_timing = document.getElementById("class_timing").value;
    let classes_schedule = document.getElementById("classes_schedule").value;
    let sections = document.getElementById("sections").value;
    let courses = document.getElementById("courses").value;
    let batch = document.getElementById("batch").value;
    addDoc(collection(db, "Students"), {
        teacher: teachers,
        class_timing: class_timing,
        classes_schedule: classes_schedule,
        sections: sections,
        courses: courses,
        batch: batch
    });
    updateDoc(collection(db, "Students"), {
        teacher: teachers,
        class_timing: class_timing,
        classes_schedule: classes_schedule,
        sections: sections,
        courses: courses,
        batch: batch
    });
});