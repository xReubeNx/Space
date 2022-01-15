import React, { useEffect, useState } from 'react'
import { getSearchImage } from '../api/apiService'

export default function searchItem(props) {
  let data = props.info.data[0]
  let imgSrc = props.info.href

  const [ image, setImage ] = useState(null);
  const [ isMobile, setIsMobile ] = useState(null);
  const [ isActive, setIsActive ] = useState(false);

  useEffect(() => {
    getImage(imgSrc)
    setIsMobile(window.innerWidth < 1024 ? true : false);
    window.addEventListener('resize', () => {setIsMobile(window.innerWidth < 1024 ? true : false)});
  }, [])

  async function getImage(src) {
    let img = await getSearchImage(src);
    setImage(img);
  }

  return (
    <div className="flex flex-col items-center rounded-xl border border-white
     lg:border-white/50 lg:hover:border-white h-[45vh] shadow-black shadow-lg
     overflow-hidden hover:shadow-white/30 hover:cursor-pointer"
    onClick={isMobile ? ()=>{} : () => {setIsActive(!isActive)}}>
      <div className="w-full">
        <img className="rounded-t-xl border-b border-white/50 max-h-[30vh] min-w-full" src={image}/>
      </div>
      <div className="flex flex-col w-[95%] h-full rounded-b-xl text-white">
        <h1 className="self-center font-bold pt-4">{data.title}</h1>
        <br/>
        <p className="">{data.description}</p>
      </div>
    </div>
  )
}
