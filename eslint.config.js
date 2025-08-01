import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  // your config here
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// To create a new user:
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up successfully
    const user = userCredential.user;
    console.log("User created:", user);
  })
  .catch((error) => {
    console.error(error.code, error.message);
  });

// To sign in an existing user:
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in successfully
    const user = userCredential.user;
    console.log("User signed in:", user);
  })
  .catch((error) => {
    console.error(error.code, error.message);
  });
