import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDAcOlc2fiXneXRSmf5ece-GwRfi_TSi3Q",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "rodstarfreelancers.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://rodstarfreelancers-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "rodstarfreelancers",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "rodstarfreelancers.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "926072923215",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:926072923215:web:fbde6ba23da6676526763a",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-9Y41FJXVMM"
}

let app = null
let auth = null
let db = null
let rtdb = null
let googleProvider = null

try {
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  try {
    db = getFirestore(app)
  } catch (fsErr) {
    console.warn('[Firebase Firestore Init Notice]:', fsErr.message)
  }
  try {
    rtdb = getDatabase(app)
    console.log('[Firebase Realtime Database] Initialized successfully at:', firebaseConfig.databaseURL)
  } catch (rtErr) {
    console.warn('[Firebase Realtime DB Notice]:', rtErr.message)
  }
  googleProvider = new GoogleAuthProvider()
  console.log('[Firebase Client] Initialized Firebase Web SDK successfully with project:', firebaseConfig.projectId)
} catch (err) {
  console.warn('[Firebase Client Notice]: App initializing with safe fallback store.', err.message)
}

export { app, auth, db, rtdb, googleProvider, firebaseConfig }
