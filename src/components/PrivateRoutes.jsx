import React from 'react'
import {Navigate} from 'react-router-dom'
import {useAuth} from './AuthContext'



export const PrivateRoutes = ({children}) => {
  const {usuario} =  useAuth()

    if(!usuario)
    {
      return <Navigate to='/ManagerLogin'/>
    }
    return<>{children}</> 
}

export default PrivateRoutes