import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

let app: FirebaseApp | undefined;

export function getFirebaseApp() {
  if (!app) {
    const config = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    };
    if (!getApps().length) {
      app = initializeApp(config);
    } else {
      app = getApps()[0]!;
    }
  }
  return app!;
}

export const db = getFirestore(getFirebaseApp());
export const auth = getAuth(getFirebaseApp());
export const functions = getFunctions(getFirebaseApp());

export const api = {
  verifyTelegramInit: httpsCallable(functions, "verifyTelegramInit"),
  claimDaily: httpsCallable(functions, "claimDaily"),
  createWithdrawal: httpsCallable(functions, "createWithdrawal"),
  applyPromo: httpsCallable(functions, "applyPromo"),
};
