import React, { useState, useEffect } from 'react'
import Navbar from './navbar.js'
import StarryBg from './starryBg.js'
import Head from 'next/head'
import Planet from './Components/planet.js'
import plntInfo from './planetInformation.js'
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
        {
          Object.values(plntInfo).map((el) => {
            return <a className="p-2 hover:navHover" href={`#${el.name}`} key={`#${el.name}`}>{el.name}</a>
          })
        }
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
        {
          Object.values(plntInfo).map((el) => {
            return <Planet plnt={el.name.toLowerCase()} key={el.name}  />
          })
        }
      </div>
    </div>
  )
}
