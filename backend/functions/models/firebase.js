const { initializeApp } = require("firebase/app");
const {getDoc, getDocs, doc, addDoc, deleteDoc, getFirestore, collection, updateDoc, query, where, } = require("firebase/firestore")
require("dotenv").config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MSG_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

module.exports = {
    db,
    getDoc,
    getDocs,
    doc,
    addDoc,
    deleteDoc,
    collection,
    updateDoc,
    query, 
    where,
}