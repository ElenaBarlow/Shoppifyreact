import { useContext, createContext, useEffect, useState} from "react";
import { GoogleAuthProvider, signInWithPopup, 
          signOut, onAuthStateChanged, signInWithEmailAndPassword, 
         GithubAuthProvider } from "firebase/auth";

import { auth } from '../components/Firebase'

const AuthContext = createContext() 


export const AuthContextProvider = ({children}) => {
      const [user, setUser] = useState({});
     
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
         signInWithPopup(auth, provider)
        // signInWithRedirect(auth, provider)
     }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          console.log('User', currentUser)
      })
      return () => {
        unsubscribe();
      };
    }, []) 
        
    const signInWithGithub = () => {
        const provider = new GithubAuthProvider()
        signInWithPopup(auth, provider)
    }  

    const signIn = () => {
        signInWithEmailAndPassword(auth)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        alert("this user has successfuly signed in")
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        alert(errorCode)
      });
    }

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, signInWithGithub, signIn,  user}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const UserAuth = () => {
    return useContext(AuthContext)
}