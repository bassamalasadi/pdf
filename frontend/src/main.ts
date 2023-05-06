import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGgv2JjoyhmzygkheMvid4AybUAVDwyeg",
  authDomain: "pdfgenerate613.firebaseapp.com",
  databaseURL: "https://pdfgenerate613-default-rtdb.firebaseio.com",
  projectId: "pdfgenerate613",
  storageBucket: "pdfgenerate613.appspot.com",
  messagingSenderId: "507857430989",
  appId: "1:507857430989:web:fc67bcc352371f8cb23c84",
  measurementId: "G-6LYB4JQKH7"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appfirebase);

app.use(createPinia())
app.use(router)

app.mount('#app')
