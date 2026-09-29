import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Your database URL from your project context
const firebaseConfig = {
  apiKey: "AIzaSyDAcOlc2fiXneXRSmf5ece-GwRfi_TSi3Q",
  authDomain: "rodstarfreelancers.firebaseapp.com",
  databaseURL: "https://rodstarfreelancers-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rodstarfreelancers",
  storageBucket: "rodstarfreelancers.firebasestorage.app",
  messagingSenderId: "926072923215",
  appId: "1:926072923215:web:fbde6ba23da6676526763a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Connecting to Firebase Realtime Database at:", firebaseConfig.databaseURL);

// Update the database
set(ref(db, 'serverStatus'), {
  lastUpdated: new Date().toISOString(),
  status: "Online from terminal script!"
})
.then(() => {
  console.log("Database updated successfully!");
  process.exit(0);
})
.catch((error) => {
  console.error("Error updating database: ", error);
  process.exit(1);
});
