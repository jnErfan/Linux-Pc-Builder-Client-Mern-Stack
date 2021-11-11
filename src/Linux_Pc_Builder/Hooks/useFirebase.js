import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/FirebaseInitialize";

FirebaseInitialize();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();

  const emailPasswordSignUp = (
    email,
    password,
    image,
    name,
    history,
    location
  ) => {
    setIsLoading(true);
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result?.user);
        const redirect = location?.state?.from || "/";
        setUser(result?.user);
        history.push(redirect);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const emailPasswordLogin = (email, password, history, location) => {
    setError("");
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const redirect = location?.state?.from || "/";
        setUser(result?.user);
        console.log(result?.user);
        history.push(redirect);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const resetPassword = (email) => {
    setError("");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setError("Password Reset Email Sended, Please Check Email");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const googleSignIn = (history, location) => {
    setError("");
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result?.user);
        const redirect = location?.state?.from || "/";
        history.replace(redirect);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const githubSignIn = (history, location) => {
    setError("");
    setIsLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result?.user);
        const redirect = location?.state?.from || "/";
        history.replace(redirect);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logOutAll = () => {
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setIsLoading(false);
    });
  }, [auth]);

  return {
    user,
    error,
    setError,
    emailPasswordSignUp,
    emailPasswordLogin,
    googleSignIn,
    githubSignIn,
    resetPassword,
    logOutAll,
    isLoading,
  };
};

export default useFirebase;
