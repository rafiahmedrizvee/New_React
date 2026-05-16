
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuMEu0sOSdUBVZhL4ieVQJgS7En4JpoBM",
  authDomain: "new-react-web-77e42.firebaseapp.com",
  projectId: "new-react-web-77e42",
  storageBucket: "new-react-web-77e42.firebasestorage.app",
  messagingSenderId: "513887217136",
  appId: "1:513887217136:web:d631639431e34419e46935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export Auth
export const auth = getAuth(app);

export default app;