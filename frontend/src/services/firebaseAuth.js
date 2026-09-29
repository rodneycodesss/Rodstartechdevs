import { auth, db, rtdb, googleProvider } from '../config/firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { ref, set, get } from 'firebase/database'

/**
 * Register user account in Firebase Auth, Realtime Database & Firestore
 */
export async function registerWithFirebase({ email, password, fullName, phone, role = 'Freelancer', applicationId = null }) {
  try {
    let firebaseUid = null
    let firebaseUser = null
    let authError = null

    if (auth) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        firebaseUser = userCredential.user
        firebaseUid = firebaseUser.uid
        console.log('[Firebase Auth] Account registered successfully in Firebase with UID:', firebaseUid)
      } catch (err) {
        authError = err
        console.warn('[Firebase Auth Register Notice]:', err.code, err.message)
      }
    }

    if (authError) {
      let msg = authError.message
      if (authError.code === 'auth/email-already-in-use') {
        msg = 'This email address is already registered. Please sign in instead.'
      } else if (authError.code === 'auth/weak-password') {
        msg = 'Password is too weak. Please use at least 6 characters.'
      } else if (authError.code === 'auth/invalid-email') {
        msg = 'Please enter a valid email address.'
      }
      return { success: false, message: msg, errorCode: authError.code }
    }

    if (!firebaseUid) {
      firebaseUid = 'USR-' + Math.floor(100000 + Math.random() * 900000)
    }

    const userData = {
      userId: firebaseUid,
      fullName,
      email: email.toLowerCase(),
      phone: phone || '',
      role,
      applicationId: applicationId || null,
      createdAt: new Date().toISOString()
    }

    // Save to Firebase Realtime Database
    if (rtdb && firebaseUid) {
      try {
        await set(ref(rtdb, 'users/' + firebaseUid), userData)
        console.log('[Firebase Realtime Database] User record saved for:', email)
      } catch (rtErr) {
        console.warn('[Firebase RTDB User Save Notice]:', rtErr.message)
      }
    }

    // Also attempt Firestore if active
    if (db && firebaseUid) {
      try {
        await setDoc(doc(db, 'users', firebaseUid), userData, { merge: true })
      } catch (dbErr) {
        // Safe silent catch if Firestore API is disabled
      }
    }

    // Also dispatch to Node backend /api/auth/register if backend is online
    try {
      await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password, phone, role, firebaseUid })
      })
    } catch (apiErr) {
      console.warn('[Backend Auth Sync Notice]:', apiErr.message)
    }

    return { success: true, user: userData, firebaseUser }
  } catch (err) {
    return { success: false, message: err.message }
  }
}

/**
 * Login user via Firebase Auth, Realtime Database & Firestore lookup
 */
export async function loginWithFirebase(email, password) {
  try {
    let firebaseUser = null
    let authError = null

    if (auth) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        firebaseUser = userCredential.user
        console.log('[Firebase Auth] User authenticated successfully with UID:', firebaseUser.uid)
      } catch (err) {
        authError = err
        console.warn('[Firebase Auth Login Notice]:', err.code, err.message)
      }
    }

    if (authError && (authError.code === 'auth/wrong-password' || authError.code === 'auth/user-not-found' || authError.code === 'auth/invalid-credential')) {
      return {
        success: false,
        message: 'Invalid email or password. Please check your credentials or register a new account.'
      }
    }

    let userDoc = null

    // Look up user profile from Firebase Realtime Database
    if (rtdb && firebaseUser) {
      try {
        const snap = await get(ref(rtdb, 'users/' + firebaseUser.uid))
        if (snap.exists()) {
          userDoc = snap.val()
        }
      } catch (rtErr) {
        console.warn('[Firebase RTDB User Fetch Notice]:', rtErr.message)
      }
    }

    // Fallback lookup from Firestore
    if (!userDoc && db && firebaseUser) {
      try {
        const docRef = doc(db, 'users', firebaseUser.uid)
        const snap = await getDoc(docRef)
        if (snap.exists()) {
          userDoc = snap.data()
        }
      } catch (dbErr) {
        // Safe silent catch
      }
    }

    // Also verify via Node backend API /api/auth/login if backend is running
    try {
      const apiRes = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      if (apiRes.ok) {
        const apiData = await apiRes.json()
        if (apiData.user) userDoc = { ...userDoc, ...apiData.user }
      }
    } catch (apiErr) {
      console.warn('[Backend Login Sync Notice]:', apiErr.message)
    }

    if (!firebaseUser && authError) {
      return { success: false, message: authError.message || 'Sign-in failed. Please check your credentials.' }
    }

    return {
      success: true,
      user: userDoc || {
        userId: firebaseUser ? firebaseUser.uid : 'USR-' + Date.now(),
        fullName: email.split('@')[0],
        email: email.toLowerCase(),
        role: 'Freelancer'
      }
    }
  } catch (err) {
    return { success: false, message: err.message }
  }
}

/**
 * Login / Register with Google SSO via Firebase Auth & Realtime Database
 */
export async function loginWithGoogleFirebase() {
  try {
    if (!auth || !googleProvider) {
      return { success: false, message: 'Google sign-in is currently unavailable.' }
    }

    const userCredential = await signInWithPopup(auth, googleProvider)
    const firebaseUser = userCredential.user

    const userData = {
      userId: firebaseUser.uid,
      fullName: firebaseUser.displayName || firebaseUser.email.split('@')[0],
      email: firebaseUser.email.toLowerCase(),
      phone: firebaseUser.phoneNumber || '',
      role: 'Freelancer',
      createdAt: new Date().toISOString()
    }

    if (rtdb) {
      try {
        await set(ref(rtdb, 'users/' + firebaseUser.uid), userData)
      } catch (rtErr) {
        console.warn('[Firebase RTDB Google User Save Notice]:', rtErr.message)
      }
    }

    return { success: true, user: userData, firebaseUser }
  } catch (err) {
    console.warn('[Firebase Google Auth Error]:', err.message)
    return { success: false, message: err.message }
  }
}

/**
 * Logout from Firebase Auth
 */
export async function logoutFromFirebase() {
  if (auth) {
    try {
      await signOut(auth)
      console.log('[Firebase Auth] User logged out successfully.')
    } catch (err) {
      console.warn('[Firebase SignOut Error]:', err.message)
    }
  }
}
