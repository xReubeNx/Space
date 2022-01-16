import React from 'react'
import plntInfo from '../planetInformation'

export default function Planet({plnt}) {

  let planet = plntInfo[plnt]

  return (
    <div className="w-full h-full flex justify-center" id={planet.name}>
      <div className="flex lg:flex-row flex-col w-[90%] h-[75vh] justify-around">
        <div className="relative flex place-content-center w-full h-full">
          <div className={`relative lg:top-[2vw] w-[35vh] h-[35vh] lg:w-[35vw] lg:h-[35vw] bg-cover planetShadow planet rounded-full bg-repeat ${"bg-[url('" + planet.img + "')]"}`} />
        </div>
        <div className="flex flex-col items-center justify-center w-full text-white">
          <p className="text-4xl py-10">{planet.name}</p>
          <p className="py-1"><span className="font-bold">Distance:</span> {planet.distance1} - {planet.distance2}</p>
          <p className="py-1"><span className="font-bold">Radius:</span> {planet.radius} / {planet.radiusInEarths}</p>
          <p className="py-1"><span className="font-bold">Mass:</span> {planet.mass} / {planet.massInEarths}</p>
          <p className="py-1"><span className="font-bold">Day Length:</span> {planet.dayLen}</p>
          <p className="py-1"><span className="font-bold">Year Length:</span> {planet.yearLen}</p>
        </div>
      </div>
    </div>
  )
}
