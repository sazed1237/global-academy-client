import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProviders = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const axiosPublic = useAxiosPublic()




    const googleSingIn = () => {
        setLoading(false)
        return signInWithPopup(auth, googleProvider)
    }

    const facebookSignIn = () => {
        setLoading(false)
        return signInWithPopup(auth, facebookProvider)
    }

    const logOut = () => {
        setLoading(false)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user ', currentUser)
            setUser(currentUser)

            if (currentUser) {
                // get token and set in localStorage
                const userInfo = { email: currentUser?.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data) {
                            console.log("token", res.data.token)
                            localStorage.setItem('access-token', res?.data?.token)
                            setLoading(false)
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        })
        return () => {
            return unsubscribe()
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        googleSingIn,
        facebookSignIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;