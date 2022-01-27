// ESLint is too dumb to understand that this dependency
// is already included. This is why TSLint is better
// but we can't have nice things.
/* eslint-disable import/no-extraneous-dependencies */
import { collection, getFirestore } from 'firebase/firestore';
import { getApp, initializeApp } from 'firebase/app';

export { getFirestore } from 'firebase/firestore';
/* eslint-enable import/no-extraneous-dependencies */

export function initFirebase() {
  try {
    return getApp();
  } catch (_) {
    return initializeApp({
      apiKey: FIREBASE_API_KEY,
      authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
      databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
      projectId: `${FIREBASE_PROJECT_ID}`,
      storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
      messagingSenderId: FIREBASE_MESSAGING_ID,
      appId: FIREBASE_APP_ID,
    });
  }
}

export function getFirestoreCollection(collectionName: string) {
  const db = getFirestore();
  return collection(db, collectionName);
}
