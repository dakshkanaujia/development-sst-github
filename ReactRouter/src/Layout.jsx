import React from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import useGivenWindowSize from './Hooks/useGivenWindowSize.js'

function Layout() {
    console.log(useGivenWindowSize());
    
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout;
