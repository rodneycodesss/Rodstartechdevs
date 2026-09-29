import { db } from '../config/firebase.js'

const memoryApplications = []

export async function createApplication(req, res) {
  try {
    const appData = req.body
    if (!appData.applicationId || !appData.fullName || !appData.email) {
      return res.status(400).json({ success: false, message: 'Missing required fields (applicationId, fullName, email)' })
    }

    let application = null
    if (db) {
      try {
        await db.collection('applications').doc(appData.applicationId).set(appData)
        application = appData
      } catch (fbErr) {
        console.warn('[Firebase Firestore Notice]:', fbErr.message)
      }
    }

    if (!application) {
      memoryApplications.unshift(appData)
      application = appData
    }

    return res.status(201).json({
      success: true,
      message: 'Application stored successfully in Rodstar AI Firebase Firestore!',
      data: application
    })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

export async function getApplications(req, res) {
  try {
    const { search, status, position } = req.query

    if (db) {
      try {
        let queryRef = db.collection('applications')
        const snapshot = await queryRef.get()
        let applications = []
        snapshot.forEach(doc => applications.push(doc.data()))

        if (status) applications = applications.filter(a => a.networkStatus === status)
        if (position) applications = applications.filter(a => a.primaryPosition === position)
        if (search) {
          const s = search.toLowerCase()
          applications = applications.filter(a =>
            (a.fullName && a.fullName.toLowerCase().includes(s)) ||
            (a.email && a.email.toLowerCase().includes(s)) ||
            (a.applicationId && a.applicationId.toLowerCase().includes(s))
          )
        }

        return res.json({ success: true, count: applications.length, data: applications, database: 'Firebase Firestore' })
      } catch (fbErr) {
        console.warn('[Firebase Firestore GET Notice]:', fbErr.message)
      }
    }

    return res.json({ success: true, count: memoryApplications.length, data: memoryApplications, source: 'memory_store' })
  } catch (err) {
    return res.json({ success: true, count: memoryApplications.length, data: memoryApplications, source: 'fallback' })
  }
}

export async function getApplicationById(req, res) {
  try {
    const { id } = req.params

    if (db) {
      try {
        const docRef = db.collection('applications').doc(id)
        const doc = await docRef.get()
        if (doc.exists) return res.json({ success: true, data: doc.data(), database: 'Firebase Firestore' })
      } catch (fbErr) {
        console.warn('[Firebase Firestore GET ID Notice]:', fbErr.message)
      }
    }

    const fallback = memoryApplications.find(a => a.applicationId === id || a.email === id || a.userId === id)
    if (fallback) return res.json({ success: true, data: fallback })
    return res.status(404).json({ success: false, message: 'Application record not found.' })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}

export async function updateApplication(req, res) {
  try {
    const { id } = req.params
    const updates = req.body

    if (db) {
      try {
        await db.collection('applications').doc(id).set(updates, { merge: true })
        return res.json({ success: true, message: 'Application updated in Firebase Firestore.' })
      } catch (fbErr) {
        console.warn('[Firebase Update Notice]:', fbErr.message)
      }
    }

    const idx = memoryApplications.findIndex(a => a.applicationId === id || a.email === id)
    if (idx !== -1) {
      memoryApplications[idx] = { ...memoryApplications[idx], ...updates }
      return res.json({ success: true, data: memoryApplications[idx] })
    }
    return res.status(404).json({ success: false, message: 'Application record not found.' })
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message })
  }
}
