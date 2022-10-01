import React from 'react'
import {useState} from 'react'
import {app} from "../firebase"
import { useNavigate} from 'react-router-dom'
import {useAuth} from './AuthContext'
import './login.css'

const ManagerLogin = () => {

    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    
    const {login, usuario} = useAuth()
    console.log(usuario)
   
    const onSend = async(values) =>
    {   
        console.log(values)
        try
        {
            await login(values) 
            navigate("/ManagerPanel")
        }
        catch(error)
        {
            setError(error.message)   
        }
        
    }
  return (
    <>
    
    
    <div class="container container-manager-login">
        <div><h1>Admin Panel</h1></div>
        <div><h3>Welcome to the Admin Login</h3></div>
        <div><h5>Email: test@gmail.com</h5></div>
        <div><h5>Password: 1234567</h5></div>
        <div><h5 class="error">{error && <p>{error}</p>}</h5></div>
        <div class="input-group mb-3">
            <span class="input-group-text">Usuario</span>
            <input class="form-control" type='text' placeholder='Correo' onChange={(e)=>{setCorreo(e.target.value)}}/>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Correo</span>
            <input class="form-control" type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button class="btn btn-form" onClick={() => onSend({correo,password})}>Send</button>
        </div>
    </div>
    </>
  )
}

export default ManagerLogin