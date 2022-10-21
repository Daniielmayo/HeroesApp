import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

export const PriviteRoute = ({children}) => {
    
    const {logged} =useContext( AuthContext )
    const {pathname, search} = useLocation();

    const lasPath = pathname + search;
    localStorage.setItem('lasPath', lasPath)

    return ( logged )
        ? children
        : <Navigate to='/login'/>
}
