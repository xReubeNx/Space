import React, { useState, useEffect } from 'react'
import Navbar from './navbar.js'
import { getPOTD } from './api/apiService.js'
import Head from 'next/head'

export default function APOD() {

 let [ picData, setPicData ] = useState({});
 const [ isMobile, setIsMobile ] = useState(null);

  async function getData() {
    let data = await getPOTD();
    setPicData(data);
  }

  useEffect(() => {
    getData();
    setIsMobile(window.innerWidth < 1024 ? true : false);
    window.addEventListener('resize', () => {setIsMobile(window.innerWidth < 1024 ? true : false)});
  }, [])

  function displayPOTD() {
    if (isMobile) {
      return (
        <div className="flex justify-center h-4/5 py-24">
          <div className="flex flex-col h-full w-4/5">
            <img className="w-full h-fit rounded-md shadow-black shadow-md" src={picData.url} alt="Picture of the day"/>
            <div className="flex flex-col w-full items-center py-8">
              {displayInfo()}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="flex justify-center h-4/5 py-24 pt-32">
          <div className="flex h-full w-4/5">
            <img className="w-1/2 h-fit rounded-md shadow-black shadow-md" src={picData.url} alt="Picture of the day"/>
            <div className="flex flex-col w-1/2 items-center py-8">
              {displayInfo()}
            </div>
          </div>
        </div>
      )
    }
  }
  function displayInfo() {
    return (
      <div className="flex flex-col items-center text-white w-4/5">
        <h1 className="font-bold pb-4 text-3xl">Astronomy Picture of the Day</h1>
        <h2 className="font-bold">{picData.title}</h2>
        <p>{picData.copyright}</p>
        <p>{picData.date}</p>
        <p className="pt-12 font-light text-sm self-end">{picData.explanation}</p>
      </div>
    )
  }

  return (
    <div className="heroBg h-full w-screen min-h-screen">
      <Head><title>Picture of the Day</title></Head>
      <Navbar active={"APOD"} />
      {displayPOTD()}
    </div>
  )
}
