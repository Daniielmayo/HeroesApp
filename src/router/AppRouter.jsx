import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// import { DcPages, MarvelPages } from '../heroes'

import { LoginPage } from '../auth'
import { Navbar } from '../ui/components/Navbar'
import { HeoresRoutes } from '../heroes/routers/HeoresRoutes'
import { PriviteRoute } from './PriviteRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <>


            <Routes>
            <Route path='/login' element={
                    <PublicRoute>
                      <LoginPage/>
                    </PublicRoute>
                }/>

                <Route path='/*' element={
                    <PriviteRoute>
                      <HeoresRoutes/>
                    </PriviteRoute>
                }/>
      
                {/* <Route path='login' element={<LoginPage/>}/> */}
                {/* <Route path='/*' element ={<HeoresRoutes/> }/> */}
            </Routes>
    </>
  )
}
