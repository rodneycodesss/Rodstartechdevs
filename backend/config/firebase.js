import admin from 'firebase-admin'

const firebaseAdmin = admin.default || admin

let db = null
let auth = null

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    if (!firebaseAdmin.apps || !firebaseAdmin.apps.length) {
      firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount)
      })
    }
    const { getFirestore } = await import('firebase-admin/firestore')
    const { getAuth } = await import('firebase-admin/auth')
    db = getFirestore()
    auth = getAuth()
    console.log('[Firebase Admin] Connected to Firebase Project:', serviceAccount.project_id)
  } catch (err) {
    console.warn('[Firebase Admin Service Account Notice]:', err.message)
  }
} else {
  console.log('[Firebase Admin Notice] No FIREBASE_SERVICE_ACCOUNT JSON provided in .env. API running with persistent memory store.')
}

export { db, auth, firebaseAdmin as admin }
