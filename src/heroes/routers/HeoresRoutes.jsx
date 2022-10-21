import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { DcPages } from '../pages/DcPages'
import { HeroPage } from '../pages/HeroPage'
import { MarvelPages } from '../pages/MarvelPages'
import { SearchPage } from '../pages/SearchPage'

export const HeoresRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'> 
            <Routes>
                    <Route path='marvel' element={<MarvelPages/>}/>
                    <Route path='dc' element={<DcPages/>}/>
                 
                    <Route path='search' element={<SearchPage/>}/>
                    <Route path='hero/:id' element={<HeroPage/>}/>

                    <Route path='/' element={<Navigate to='/marvel'/>}/>
            </Routes>
        </div>
          
    </>
  )
}
