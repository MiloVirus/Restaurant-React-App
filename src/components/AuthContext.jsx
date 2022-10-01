import { createContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export const authContext = createContext()

const auth = getAuth()

export const useAuth = () => 
{
    const context = useContext(authContext)
    return context
}


export const AuthProvider = ({children}) => 
{
    const [usuario, setUsuario] = useState()
    

    const login = async(values) => {

        return await signInWithEmailAndPassword(auth, values.correo, values.password)
    }
    
        
    

    useEffect(() => {
        console.log('AuthProvider Loaded')
        onAuthStateChanged(auth, currentUser => 
            {
                setUsuario(currentUser)
            })
    }, [])


        return (
            <authContext.Provider value={{login, usuario}}>
                {children}
            </authContext.Provider>
        )
} 