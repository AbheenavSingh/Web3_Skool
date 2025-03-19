import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
      databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
    });
    console.log('Firebase Admin SDK initialized');
  } catch (error) {
    console.error('Firebase admin initialization error:', error);
  }
}

// Export the admin interfaces
export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();

export default admin; 