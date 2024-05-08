require("dotenv").config()
const { getFirestore, collection, getDocs, doc } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


let users = []
async function allUsers() {
  users = []
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      users.push(doc.data())
    });
    return users;
}

// console.log(allUsers());
async function getUser(idUser) {
  users = []
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach(doc => {
      // console.log(doc.data());
      if (doc.id === idUser) {
        users.push(doc.id)
      }
      console.log(users);
      return users
    });
}

module.exports =  {
  allUsers,
  getUser
}
