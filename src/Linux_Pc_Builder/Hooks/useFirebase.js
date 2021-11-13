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

//  Call FirebaseInitialized
FirebaseInitialize();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();

  //  Email And Password Create Account And Image Name Info
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
// Login Email And Password And Redirect
  const emailPasswordLogin = (email, password, history, location) => {
    setError("");
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const redirect = location?.state?.from || "/";
        setUser(result?.user);
        console.log(result?.user);
        if (location.pathname !== "/adminLogin") {
          history.replace(redirect);
        } else {
          history.replace("/");
          window.location.reload();
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Reset Login Email Password User  
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

  //  Google Sign In
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
//  Github Sign In
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
// Facebook Sign In
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

  // Log Out All
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

  //  Saved All Users Login Info In DataBase And This Is Jwt Token Secured
  const savedUserInfo = (name, email, method) => {
    const date = new Date();
    const userDetails = { name, email, date };
    fetch("https://linux-pc-builder-backend.herokuapp.com/users", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userDetails),
    });
  };

  // OnStateChange User Login Saved
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

  
    //  Get All User Login Information From Database
  useEffect(() => {
    fetch(`https://linux-pc-builder-backend.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data?.[0]));

  }, [user.email]);
  
  return {
    user,
    error,
    users,
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
