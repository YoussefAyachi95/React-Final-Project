import { useContext, useCallback } from 'react'
import {auth} from '../firebase/config'
import { signInWithEmailAndPassword } from "firebase/auth";

import UserContext from '../context/UserContext'


export default function useUser() {
    const {user, setUser} = useContext(UserContext)

    const login = useCallback(() => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error.message)
            })
        setUser('text')    
    }, [setUser])

    const logout = useCallback(() => {
        setUser(null)    
    }, [setUser])

    return {
        isLogged: Boolean(user),
        login,
        logout
    }
}
