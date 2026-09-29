import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rodstar_freelancers'

export async function connectDB() {
  try {
    // Disable buffering so un-connected operations fail instantly instead of blocking 10 seconds
    mongoose.set('bufferCommands', false)

    const conn = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 2000,
      connectTimeoutMS: 2000
    })
    console.log(`[MongoDB] Connected successfully to: ${conn.connection.host}/${conn.connection.name}`)
    return true
  } catch (error) {
    console.warn(`[MongoDB Notice] (${error.message}). Express API server running with instant fallback store.`)
    return false
  }
}

