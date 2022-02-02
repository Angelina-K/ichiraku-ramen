// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { collection, getDocs } from 'firebase/firestore';

export const firebaseService = {
  getCollection,
  getItem,
  addToCollection,
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBqQ3600hgeDUdGb9FIHkQsBe-2wrslIfc',
  authDomain: 'ichiraku-ramen-54b1e.firebaseapp.com',
  projectId: 'ichiraku-ramen-54b1e',
  storageBucket: 'ichiraku-ramen-54b1e.appspot.com',
  messagingSenderId: '21079649257',
  appId: '1:21079649257:web:93d7137c1774d770483978',
  measurementId: 'G-QHY2DJ8M1V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore(app);

async function getCollection(collectionName) {
  const querySnapshot = await getDocs(collection(firestore, collectionName));
  const items = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    // console.log(data);
    items.push(data);
  });
  return items;
}

async function addToCollection(collectionName, item) {
  const docref = doc(collection(firestore, collectionName));
  await setDoc(docref, item);
}

async function getItem(collectionName, id) {
  const snap = await getDoc(doc(firestore, collectionName, id));
  const item = snap.data();
  item.id = id;
  return item;
}
