import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, getDocs, query, where, collection, Timestamp, addDoc } from "firebase/firestore";

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



export async function getItems(){
  const sportItemsCollection = collection(appFirestore, "sport-shop-react")
  const sportItemsSnapshot = await getDocs(sportItemsCollection)
  
  let respuesta = sportItemsSnapshot.docs.map( doc =>{
    return(
    {...doc.data(),id: doc.id})}
  )
  return respuesta
}

export async function getItemsForCategory(categoryId) {
  const itemsCollection = collection(appFirestore, "sport-shop-react")
  const q = query(itemsCollection, (where("category", "==", categoryId )))
  const itemsSnapshot = await getDocs(q)
  let respuesta = itemsSnapshot.docs.map(
      doc => {
          return{
              ...doc.data(),
              id: doc.id
          }
      }
  ) 
  return respuesta
}

export async function getItem(id) {
  const docRef = doc(appFirestore, "sport-shop-react", id)
  
  const docData =  await getDoc(docRef)


  return{
      id:docData.id, ...docData.data()
  }
}

// -------

const ordersCollection = collection(appFirestore,'orders');

export async function createBuyOrder(dataOrder){

    const dateTimeStamp = Timestamp.now();
    const orderWithDate = {
        buyer:dataOrder.buyer,
        items: dataOrder.items,
        total: dataOrder.total,
        date: dateTimeStamp
    }
    
    const orderCreated = await addDoc(ordersCollection, orderWithDate);
    
    console.log(orderWithDate)

    return orderCreated
}

// --------


export default appFirestore