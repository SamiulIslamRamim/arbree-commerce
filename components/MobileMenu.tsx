"use client"
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
    const [IsSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
       <button onClick={() => setIsSidebarOpen(!IsSidebarOpen)}>
        <AlignLeft className='hover:text-dark-color hoverEffect md:hidden hover:cursor-pointer ' />
    </button>
    <div className='md:hidden'>
        <SideMenu 
        isOpen={IsSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        />
    </div>
    </>
  )
}

export default MobileMenu
