import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyBdlXjMAyLG9X-h8PJe0niJXtLLxBGd39U",
  authDomain: "old-lady-game.firebaseapp.com",
  projectId: "old-lady-game",
  storageBucket: "old-lady-game.appspot.com",
  messagingSenderId: "435972206230",
  appId: "1:435972206230:web:a75eed91d2c105edd55cb7",
  measurementId: "G-EN3BVE6Z4B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);