'use client'

import React, { useEffect, useState } from 'react'
import logo from '/app/assets/logo1.svg'
import { Icon } from '@iconify/react';
import Nav from './Nav';
import Image from 'next/image';
import MobileNav from './MobileNav';
import MobileNavSocials from './MobileNavSocials';

function Header() {
  const [burgerMenu, setBurgerMenu] = useState(true)
  const [theme, setTheme] = useState("light");
  const [mobileWidth, setMobileWidth] = useState(true)

  const handleMobileWidth = () => {
    window.innerWidth < 600 ? '' : setMobileWidth(!mobileWidth)
  }

  const handleBurgerMenu = () => {
    setBurgerMenu(!burgerMenu)
    handleMobileWidth()
  }

  useEffect(() => {
    if(theme === "dark")
    {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header className='fadeIn w-full h-36 sm:h-max px-6 sm:px-10% py-12 flex items-center justify-between text-darkBlack font-secondaryFont text-2xl absolute z-20'>
        <Image className='w-max h-12 z-20' style={theme === "dark" ? {filter:'invert(1)'} : {filter:'invert(0)'}} src={logo} alt="GP" />
        <Nav/>
        <button className='z-20' aria-label="Menu-Button">
          {burgerMenu ? <Icon className='hover:opacity-80 dark:text-slate-200' icon="ic:round-menu" height="2.5rem" onClick={handleBurgerMenu}/> : <Icon className='hover:opacity-80 text-slate-200 dark:text-slate-200 z-30 relative' icon="material-symbols:close" height="2.5rem" onClick={handleBurgerMenu}/>}
          {!burgerMenu && 
          <div className='absolute sm:p-10 py-16 px-10 z-10 sm:h-max min-h-screen h-max w-mobileNavWidth right-0 top-0 flex flex-col items-center justify-center gap-20 bg-lightestBlack text-white'>
            {/* precekiri ko se ne dela tko bi mogvo */}
            {mobileWidth ? <MobileNav MobileNavLinkClicked={() => burgerMenu}/> : ''}
            <div className='grid place-items-center gap-16'>
              <div className='text-slate-200 text-4xl w-full flex justify-center py-6 border-y-2 border-slate-200' typeof='button' onClick={handleTheme}>{theme === "light" ? <Icon icon="ph:moon-bold" /> : <Icon icon="mdi:lightbulb-outline" />}</div>
              <div className='flex gap-5 py-6 text-slate-200 text-4xl border-y-2 border-slate-200'>
                <h2>EN</h2>
                <h2>SLO</h2>
                <h2>DE</h2>
              </div>
              {mobileWidth ? <MobileNavSocials/> : ''}
            </div>
          </div>}
        </button>
    </header>
  )
}

export default Header