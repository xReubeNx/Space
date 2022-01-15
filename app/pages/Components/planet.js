import React from 'react'
import plntInfo from '../planetInformation'

export default function Planet({plnt}) {

  function image() {
    if (plnt === 'mercury') {return <div className="relative lg:top-[2vw] w-[35vh] h-[35vh] lg:w-[35vw] lg:h-[35vw] bg-cover planetShadow planet rounded-full bg-repeat bg-[url('https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg')]"></div>}
    else if (plnt === 'mars') {return <div className="relative lg:top-[2vw] w-[35vh] h-[35vh] lg:w-[35vw] lg:h-[35vw] bg-cover planetShadow planet rounded-full bg-repeat bg-[url('https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg')]"></div>}
    else if (plnt === 'earth') {return <div className="relative lg:top-[2vw] w-[35vh] h-[35vh] lg:w-[35vw] lg:h-[35vw] bg-cover planetShadow planet rounded-full bg-repeat bg-[url('https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg')]"></div>}
    else if (plnt === 'venus') {return <div className="relative lg:top-[2vw] w-[35vh] h-[35vh] lg:w-[35vw] lg:h-[35vw] bg-cover planetShadow planet rounded-full bg-repeat bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_texture.jpg')]"></div>}
    else if (plnt === 'jupiter') {return <div className="relative lg:top-[2vw] w-[35vh] h-[35vh] lg:w-[35vw] lg:h-[35vw] bg-cover planetShadow planet rounded-full bg-repeat bg-[url('https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg')]"></div>}
    else if (plnt === 'saturn') {return <div className="relative lg:top-[2vw] w-[35vh] h-[35vh] lg:w-[35vw] lg:h-[35vw] bg-cover planetShadow planet rounded-full bg-repeat bg-[url('https://www.solarsystemscope.com/images/textures/full/2k_saturn.jpg')]"></div>}
    else if (plnt === 'uranus') {return <div className="relative lg:top-[2vw] w-[35vh] h-[35vh] lg:w-[35vw] lg:h-[35vw] bg-cover planetShadow planet rounded-full bg-repeat bg-[url('https://img00.deviantart.net/957c/i/2017/165/4/9/uranus_texture_map_by_jcpag2010-db7yjwb.png')]"></div>}
    else if (plnt === 'neptune') {return <div className="relative lg:top-[2vw] w-[35vh] h-[35vh] lg:w-[35vw] lg:h-[35vw] bg-cover planetShadow planet rounded-full bg-repeat bg-[url('https://img00.deviantart.net/f068/i/2017/165/b/c/neptune_texture_map_by_jcpag2010-dbcjcv5.png')]"></div>}
  }
  let planet = plntInfo[plnt]

  return (
    <div className="flex lg:flex-row flex-col w-[90%] h-[75vh] justify-around">
    <div className="flex place-content-center w-full h-full">
      {image()}
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
  )
}
