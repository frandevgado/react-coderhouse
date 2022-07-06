import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAITE1qmg-INfVwWmwrR8ClQbaGX8aV190",
  authDomain: "sport-shop-react.firebaseapp.com",
  projectId: "sport-shop-react",
  storageBucket: "sport-shop-react.appspot.com",
  messagingSenderId: "63308172119",
  appId: "1:63308172119:web:2c1a3d0906e95411c04c12",
  measurementId: "G-PZRQVJFDKY"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export function testDatabase(){
    console.log(appFirestore)
}

export async function getItems(){
  const sportItemsCollection = collection(appFirestore, "sport-shop-react")

  const sportItemsSnapshot = await getDocs(sportItemsCollection)

  let respuesta = sportItemsSnapshot.docs.map( doc => doc.data())

  return respuesta
}

export default appFirestore