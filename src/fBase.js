import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6IDrDUscrBnxcaPKIk2t-fczqmWtf8Qw",
  authDomain: "memoring-63aff.firebaseapp.com",
  projectId: "memoring-63aff",
  storageBucket: "memoring-63aff.appspot.com",
  messagingSenderId: "243951415416",
  appId: "1:243951415416:web:ba3da23fa716575317bd8d",
  measurementId: "G-CNNFYE09MH",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
