import React from 'react'
import { Navbar } from './routes/components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { HomeScreen } from './routes/HomeScreen'
import { AboutScreen } from './routes/AboutScreen'
import { ContactScreen } from './routes/ContactScreen'
import { Navigate } from 'react-router-dom'
import { UsuarioProvider } from './routes/context/UsuarioProvider'
import { LoginScreen } from './routes/LoginScreen'

export const App = () => {
  return (
    <UsuarioProvider>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={ <HomeScreen></HomeScreen> }></Route>
            <Route path='/login' element={<LoginScreen></LoginScreen>}></Route>
            <Route path='/about' element={ <AboutScreen></AboutScreen> }></Route>
            <Route path='/contact' element={ <ContactScreen></ContactScreen> }></Route>
            <Route path="/*" element={<Navigate to='/' />}></Route>
        </Routes>
    </UsuarioProvider>
  )
}
