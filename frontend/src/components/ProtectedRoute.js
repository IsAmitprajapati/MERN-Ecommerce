import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const user = useSelector(state => state.user)
    
  return (
    <div>
        {
            user.data._id ? children : <Navigate to={"/signin"}/>
        }
    </div>
  )
}

export default ProtectedRoute