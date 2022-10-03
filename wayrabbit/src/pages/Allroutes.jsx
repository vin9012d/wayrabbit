import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './Dashboard'
import Homepage from './Homepage'
import { Login } from './Login'
import { Signup } from './Signup'

export const Allroutes = () => {
    return (
      
      <Routes>
          < Route path='/' element={<Homepage />}  />
          < Route path='/signup' element={<Signup />}  />
          < Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={ <Dashboard />} />
              
         
   </Routes>
  )
}
