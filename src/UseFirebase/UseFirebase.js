import { useEffect, useState } from "react"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase.init';

const useFirebase = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})


    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    })

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { });
    }

    return { user, signInWithGoogle, handleSignOut };
}
export default useFirebase;