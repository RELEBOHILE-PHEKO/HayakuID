import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import admin from "firebase-admin";
import biometricRoutes from './biometrics/biometricRoutes.js'; // Import biometric routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Sample API Endpoint
app.get("/", (req, res) => {
  res.send("HayakuID Backend is Running!");
});

// Use biometric routes
app.use("/api", biometricRoutes); // This will allow routes like /api/biometrics

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});