import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBLTYLC5GKgw_Zvb9ZixjgrhsxqYeCJg_o",
    authDomain: "fb-database-5deaa.firebaseapp.com",
    projectId: "fb-database-5deaa",
    storageBucket: "fb-database-5deaa.appspot.com",
    messagingSenderId: "7311270033",
    appId: "1:7311270033:web:84431670000f1fecb45f30"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  export default firebaseApp;