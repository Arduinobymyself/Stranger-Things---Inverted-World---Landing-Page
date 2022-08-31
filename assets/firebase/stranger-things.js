

import app from '../firebase/app.js';
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToStrangerThings(subscription){
    console.log('Subscription', subscription);

    const db = getFirestore(app);
    const strangerThingsCollection = collection(db, 'StrangerThings');

    const docRef = await addDoc(strangerThingsCollection, subscription);

    return docRef.id;

}

export async function getSubscriptions(){
    const db = getFirestore(app);
    const strangerThingsCollection = collection(db, 'StrangerThings');
    const strangerThingsCollectionSnapshot = await getDocs(strangerThingsCollection);
    const subscriptions = strangerThingsCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}