import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar({active}) {

  const [ isMobile, setIsMobile ] = useState(null);
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024 ? true : false);
    window.addEventListener('resize', () => {setIsMobile(window.innerWidth < 1024 ? true : false)});
  }, [])

  function conditionalNavbar() {
    if (isMobile) {
      return (
        <div className="fixed flex bg-zinc-500/95 h-14 w-screen justify-end z-10">
          <p className="p-3" onClick={() => setIsOpen(!isOpen)}><svg className="fill-white" viewBox="0 0 100 100" width="40" height="40">
            <rect width="100" height="15" rx="8"></rect>
            <rect y="30" width="100" height="15" rx="8"></rect>
            <rect y="60" width="100" height="15" rx="8"></rect>
          </svg></p>
          {conditionalDropDown()}
        </div>
      )
    } else {
      return (
        <div className="fixed flex h-14 w-screen mt-4 justify-end z-10">
          <ul className='flex navBg justify-evenly items-center w-1/2 rounded-l py-8 relative'>
            <Link href='/'>
              <li className="relative">
                {active === 'Home' && <span className="selected" />}
                <a className="nav-li text-white hover:cursor-pointer p-12 py-[1.375rem] hover:navHover">Home</a>
              </li></Link>
            <Link href='/APOD'>
              <li className="relative">
              {active === 'APOD' && <span className="selected" />}
                <a className="nav-li text-white hover:cursor-pointer p-12 py-[1.375rem] hover:navHover">APOD</a>
              </li></Link>
            <Link href='/solarSystem'>
            <li className="relative">
                {active === 'SolarSystem' && <span className="selected" />}
                <a className="nav-li text-white hover:cursor-pointer p-12 py-[1.375rem] hover:navHover">Solar System</a>
              </li></Link>
            <Link href='/search'>
            <li className="relative">
                {active === 'Search' && <span className="selected" />}
                <a className="nav-li text-white hover:cursor-pointer p-12 py-[1.375rem] hover:navHover">Search</a>
              </li></Link>
          </ul>
        </div>
      )
    }
  }

  function conditionalDropDown() {
    if (isOpen) {
      return (
        <div className="flex fixed mt-14 z-10">
          <ul className="flex fixed flex-col items-center bg-zinc-500/95 border-y border-black  top-14 mr-8 left-0 w-full text-white">
            <Link href='/'>
              <li className="p-4 font-bold">Home</li></Link>
            <Link href='/APOD'>
              <li className="p-4 font-bold border-t border-black">APOD</li></Link>
            <Link href='/solarSystem'>
              <li className="p-4 font-bold border-t border-black">Solar System</li></Link>
            <Link href='/search'>
              <li className="p-4 font-bold border-t border-black">Search</li></Link>
          </ul>
        </div>
      )
    }
  }

  return (
    <div>
      {conditionalNavbar()}
    </div>
  )
}
