import React, { useState, useEffect } from 'react'
import Navbar from './navbar.js'
import StarryBg from './starryBg.js'
import Head from 'next/head'
import Planet from './Components/planet.js'
export default function SolarSystem() {

  const [ isMobile, setIsMobile ] = useState(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024 ? true : false);
    window.addEventListener('resize', () => {setIsMobile(window.innerWidth < 1024 ? true : false)});
  }, [])

  function renderPlanetLinks() {
    if (!isMobile) {
      return (
      <div className="flex fixed navBg top-[93vh] w-full px-[5vw] py-[1vh] justify-around text-white z-20">
        <a className="p-2 hover:navHover" href="#Mercury">Mercury</a>
        <a className="p-2 hover:navHover" href="#Venus">Venus</a>
        <a className="p-2 hover:navHover" href="#Earth">Earth</a>
        <a className="p-2 hover:navHover" href="#Mars">Mars</a>
        <a className="p-2 hover:navHover" href="#Jupiter">Jupiter</a>
        <a className="p-2 hover:navHover" href="#Saturn">Saturn</a>
        <a className="p-2 hover:navHover" href="#Uranus">Uranus</a>
        <a className="p-2 hover:navHover" href="#Neptune">Neptune</a>
      </div>
      )
    }
  }

  return (
    <div className="bg-black min-h-screen min-w-screen h-full w-full">
      <Head><title>Solar System</title></Head>
      <Navbar active={'SolarSystem'}/>
      <StarryBg />
      {renderPlanetLinks()}
      <div className="flex flex-col items-center min-h-screen h-full mt-32">
        <div className="w-full h-full flex justify-center" id="Mercury">
          <Planet plnt={'mercury'}/></div>
        <div className="w-full h-full flex justify-center" id="Venus">
          <Planet plnt={'venus'}/></div>
        <div className="w-full h-full flex justify-center" id="Earth">
          <Planet plnt={'earth'}/></div>
        <div className="w-full h-full flex justify-center" id="Mars">
          <Planet plnt={'mars'}/></div>
        <div className="w-full h-full flex justify-center" id="Jupiter">
          <Planet plnt={'jupiter'}/></div>
        <div className="w-full h-full flex justify-center" id="Saturn">
          <Planet plnt={'saturn'}/></div>
        <div className="w-full h-full flex justify-center" id="Uranus">
          <Planet plnt={'uranus'}/></div>
        <div className="w-full h-full flex justify-center" id="Neptune">
          <Planet plnt={'neptune'}/></div>
      </div>
    </div>
  )
}
