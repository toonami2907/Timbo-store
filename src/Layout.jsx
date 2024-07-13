import React from 'react'
import { Navbar2 } from './components/Navbar2'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import MiniFooter from './components/MiniFooter'
import {Toaster} from 'react-hot-toast'

export default function Layout() {
  return (
    <div className='bg-gray-50'>
        <Toaster/>
        <Navbar2/>
        <div className='flex flex-col flex-grow'>
        <Outlet/>
        </div>
        <Footer/>
        <MiniFooter/>
    </div>
  )
}
