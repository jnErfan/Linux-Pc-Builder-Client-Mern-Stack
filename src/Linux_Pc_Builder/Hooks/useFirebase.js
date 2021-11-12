import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/FirebaseInitialize";

FirebaseInitialize();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
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
        history.push(redirect);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        savedUserInfo(name, email, "POST");
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
        savedUserInfo(result.user?.displayName, result.user?.email, "PUT");
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
        savedUserInfo(result.user?.displayName, result.user?.email, "PUT");
        const redirect = location?.state?.from || "/";
        history.replace(redirect);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const facebookSignIn = (history, location) => {
    setError("");
    setIsLoading(true);
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        setUser(result?.user);
        savedUserInfo(result.user?.displayName, result.user?.email, "PUT");
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

  const savedUserInfo = (name, email, method) => {
    const position = "Customer";
    const date = new Date();
    const user = { name, email, date, position };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
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
    facebookSignIn,
    googleSignIn,
    githubSignIn,
    resetPassword,
    logOutAll,
    isLoading,
  };
};

export default useFirebase;
