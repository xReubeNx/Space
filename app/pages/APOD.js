import React, { useState, useEffect } from 'react'
import Navbar from './navbar.js'
import { getPOTD } from './api/apiService.js'

export default function APOD() {

 let [ picData, setPicData ] = useState({})

  async function getData() {
    let data = await getPOTD()
    console.log(data)
    setPicData(data)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="heroBg flex flex-col h-screen w-screen">
      <Navbar active={"APOD"}/>
      <div className="h-24 w-24 ">
        <img src={picData.url}/>
      </div>
    </div>
  )
}
