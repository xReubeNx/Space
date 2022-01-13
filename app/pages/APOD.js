import React, { useState, useEffect } from 'react'
import Navbar from './navbar.js'
import { getPOTD } from './api/apiService.js'

export default function APOD() {

 let [ picData, setPicData ] = useState({});
 const [ isMobile, setIsMobile ] = useState(null);

  async function getData() {
    let data = await getPOTD();
    console.log(data)
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
          <div className="flex flex-col h-full w-4/5 border-sky-800 border">
            {/* <div className="shadow-black shadow-lg bg-cover w-full" style={{backgroundImage: `url(${picData.url})`}}></div> */}
            <img className="w-full h-fit rounded-md shadow-black shadow-md" src="https://picsum.photos/200/300"/>
            {/* <img className="w-full" src={picData.url}/> */}
            <div className="flex flex-col w-full items-center py-8">
              <h1 className="text-white">Information</h1>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="flex justify-center h-4/5 py-24">
          <div className="flex h-full w-4/5">
            {/* <div className="shadow-black shadow-lg bg-cover w-full" style={{backgroundImage: `url(${picData.url})`}}></div> */}
            <img className="w-1/2 h-fit rounded-md shadow-black shadow-md" src="https://picsum.photos/200/300"/>
            {/* <img className="w-full" src={picData.url}/> */}
            <div className="flex flex-col w-1/2 items-center py-8">
              <h1 className="text-white">{picData.title}</h1>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="heroBg h-full w-screen">
      <Navbar active={"APOD"} />
      {displayPOTD()}
    </div>
  )
}
