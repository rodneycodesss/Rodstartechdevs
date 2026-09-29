import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDAcOlc2fiXneXRSmf5ece-GwRfi_TSi3Q",
  authDomain: "rodstarfreelancers.firebaseapp.com",
  databaseURL: "https://rodstarfreelancers-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rodstarfreelancers",
  storageBucket: "rodstarfreelancers.firebasestorage.app",
  messagingSenderId: "926072923215",
  appId: "1:926072923215:web:fbde6ba23da6676526763a"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const timestamp = new Date().toISOString();

console.log("==================================================");
console.log("🧹 Purging Seed Data from Firebase Realtime Database...");
console.log("Database URL:", firebaseConfig.databaseURL);
console.log("==================================================");

async function cleanSeedData() {
  try {
    // 1. Remove all dummy/seeded users
    console.log("→ Purging seeded users...");
    await set(ref(db, "users"), null);

    // 2. Remove all dummy/seeded applications
    console.log("→ Purging seeded applications...");
    await set(ref(db, "applications"), null);

    // 3. Remove all dummy/seeded payments
    console.log("→ Purging seeded payments...");
    await set(ref(db, "payments"), null);

    // 4. Remove all dummy/seeded certificates
    console.log("→ Purging seeded certificates...");
    await set(ref(db, "certificates"), null);

    // 5. Reset metrics to zero (clean slate for real users)
    console.log("→ Resetting live metrics to zero...");
    await set(ref(db, "metrics"), {
      totalTalentRegistered: 0,
      activeApplications: 0,
      verifiedPayments: 0,
      totalOpportunities: 3,
      activeTrainingModules: 9,
      lastReset: timestamp
    });

    // 6. Update system status
    await update(ref(db, "system"), {
      mode: "Live Production - Real User Data Only",
      seedRemovedAt: timestamp
    });

    console.log("==================================================");
    console.log("✅ Seed data successfully removed from Firebase!");
    console.log("   • /users: Empty (Ready for real user registrations)");
    console.log("   • /applications: Empty (Ready for real candidate applications)");
    console.log("   • /payments: Empty (Ready for live Paystack verified payments)");
    console.log("   • /certificates: Empty (Ready for real verified graduates)");
    console.log("   • /metrics: Reset (totalTalent: 0, activeApplications: 0, verifiedPayments: 0)");
    console.log("==================================================");
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to clean seed data:", error);
    process.exit(1);
  }
}

cleanSeedData();
