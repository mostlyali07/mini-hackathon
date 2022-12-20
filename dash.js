import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  collection,
  query,
  deleteDoc,
  getDocs,
  addDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmUZy2KYQO_UFn1VWdCfVjKbl5ov005Xw",
  authDomain: "attendance-app-7477.firebaseapp.com",
  projectId: "attendance-app-7477",
  storageBucket: "attendance-app-7477.appspot.com",
  messagingSenderId: "157105142963",
  appId: "1:157105142963:web:7ea435d8784d518cdc84c6",
  measurementId: "G-XFLHSGPV2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// firebase. initializeApp(config) ;
// const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true});

//*********************** Add Class Function ***********************//
const submit_stu = document.getElementById("create_stu");

submit_stu.addEventListener("click", (event) => {
  event.preventDefault();
  let teachers = document.getElementById("teachers").value;
  let class_timing = document.getElementById("class_timing").value;
  let classes_schedule = document.getElementById("classes_schedule").value;
  let sections = document.getElementById("sections").value;
  let courses = document.getElementById("courses").value;
  let batch = document.getElementById("batch").value;
  addDoc(collection(db, "Classes"), {
    teacher: teachers,
    class_timing: class_timing,
    classes_schedule: classes_schedule,
    sections: sections,
    courses: courses,
    batch: batch,
  });
});

//*********************** Add Student Function ***********************//
const create_student = document.getElementById("create_student");

create_student.addEventListener("click", (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let F_name = document.getElementById("F_name").value;
  let roll_no = document.getElementById("roll_no").value;
  let cont_no = document.getElementById("cont_no").value;
  let cnic = document.getElementById("cnic").value;
  let customFile = document.getElementById("customFile").value;
  let stu_courses = document.getElementById("stu_courses").value;
  addDoc(collection(db, "Student"), {
    name: name,
    F_name: F_name,
    roll_no: roll_no,
    cont_no: cont_no,
    cnic: cnic,
    customFile: customFile,
    stu_courses: stu_courses,
  });
});

const docRef = doc(db, "Classes", "daA7gqoDrgBHnmH7Hnys");
getDoc(docRef).then((doc) => {
  console.log(doc.data(), doc.id);
  const DataPri = (doc.data(), doc.id);
  document.getElementById("class_details").innerHTML = DataPri;
});

//*********************** Edit Function ***********************//
// const create_edit = document.getElementById("create_edit");
// create_edit.addEventListener("click", (event) => {
//     event.preventDefault()
//     let teachers = document.getElementById("teachers").value;
//     let class_timing = document.getElementById("class_timing").value;
//     let classes_schedule = document.getElementById("classes_schedule").value;
//     let sections = document.getElementById("sections").value;
//     let courses = document.getElementById("courses").value;
//     let batch = document.getElementById("batch").value;

//     updateDoc(collection(db, "Classes"), {
//         teacher: teachers,
//         class_timing: class_timing,
//         classes_schedule: classes_schedule,
//         sections: sections,
//         courses: courses,
//         batch: batch
//     });
// });
var log_out = document.getElementById("log_out");
log_out.addEventListener("click", (event) => {
  event.preventDefault();
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
    });
  window.location.href = "index.html";
});

//*********************** Delete Function ***********************//
// const create_del = document.getElementById("create_del");

// create_del.addEventListener("click", (event) => {
//     event.preventDefault()
//     let teachers = document.getElementById("teachers").value;
//     let class_timing = document.getElementById("class_timing").value;
//     let classes_schedule = document.getElementById("classes_schedule").value;
//     let sections = document.getElementById("sections").value;
//     let courses = document.getElementById("courses").value;
//     let batch = document.getElementById("batch").value;

//     deleteDoc(collection(db, "Classes"), {
//         teacher: teachers,
//         class_timing: class_timing,
//         classes_schedule: classes_schedule,
//         sections: sections,
//         courses: courses,
//         batch: batch
//     });
// });
