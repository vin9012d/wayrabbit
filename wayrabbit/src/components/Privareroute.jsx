import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const Privareroute = ({ children }) => {
    const { isAuth } = useSelector((store) => store.Authreducer)

    if (!isAuth) {
        return <Navigate to='/login' />
    }
  return (
    children
  )
}
