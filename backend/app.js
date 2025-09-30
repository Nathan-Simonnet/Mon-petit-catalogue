// Mongoose
// =========================================
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
// const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Express config
//  ==============================================
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
app.use(express.json());
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   next();
// });

// Sécuritas
app.use(helmet());
// Allow... EVERYTGHING!!!!
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content', 'Accept', 'Content-Type', 'Authorization']
}));

// Auth Routes
// ==================================
import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes)

// Books Routes
// ==================================
import bookRoutes from "./routes/bookRoutes.js";
app.use("/api/books", bookRoutes);

// Users Routes
// ==================================
import userRoutes from "./routes/userRoutes.js";
app.use("/api/user", userRoutes);

export default app;
