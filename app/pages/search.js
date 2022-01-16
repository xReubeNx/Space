import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import { getSearch } from './api/apiService'
import SearchItem from './Components/searchItem'

export default function Search() {

  const [ isMobile, setIsMobile ] = useState(null);
  const [ searchData, setSearchData ] = useState(null);
  const [ query, setQuery ] = useState(null);
  const [ displayedData, setDisplayedData ] = useState(20);
  const [ activeCard, setActiveCard ] = useState(null);
  const [ activeCardImage, setActiveCardImage ] = useState(null);

  useEffect(() => {
    getData('pluto')
    setIsMobile(window.innerWidth < 1024 ? true : false);
    window.addEventListener('resize', () => {setIsMobile(window.innerWidth < 1024 ? true : false)});
  }, [query])

  async function getData(query) {
    let data = await getSearch(query);
    setSearchData(data);
  }

  function renderSearchBar() {
    if (isMobile) {
      return (
        <div></div> //TODO: ---------------------------------------
      )
    } else {
      return (
        <div className="flex fixed h-14 w-[15vw] left-[85vw] mt-[5.125rem] justify-end z-10 searchSlideIn ">
          <div className="flex navBg items-center justify-center w-[15vw] rounded-bl-3xl py-4 relative">
            <form className="flex justify-center items-center w-full h-full searchReveal">
              <input type="text" className="w-4/5 p-2 rounded-xl heroBg opacity-80 text-white focus:outline-none hover:opacity-90 focus:opacity-90"/>
            </form>
          </div>
        </div>
      )
    }
  }

  function displaySearchItems() {
    if (searchData) {
      let data = [];
      for (let i = 0; i < displayedData; i++) {
        let info = searchData.collection.items[i];
        data.push(<SearchItem key={i} info={info} toggleActive={toggleActive} />);
      }
      return data
    }
  }

  function toggleActive(data, image) {
    if (activeCard) {
      setActiveCard(null);
      setActiveCardImage(null);
    } else {
      setActiveCard(data);
      setActiveCardImage(image);
    }
  }

  function renderActiveCard(data, image) {
    return (
      <div className=" fixed flex h-screen w-screen justify-center items-center z-10 backdrop-blur-lg"
      onClick={() => {toggleActive()}}>
        <div className="flex flex-col items-center rounded-3xl border border-white h-[90%] w-1/3 heroBg hover:cursor-pointer">
          <div className="w-full">
            <img className="rounded-t-3xl border-b border-white/50 max-h-[30vh] min-w-full" src={image}/>
          </div>
          <div className="flex flex-col w-[95%] h-full rounded-b-xl text-white overflow-scroll">
            <h1 className="self-center font-bold pt-4">{data.title}</h1>
            <br/>
            <p className="p-2 pb-5">{data.description}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="heroBg min-h-screen h-full w-full">
      <Head><title>Search</title></Head>
      <Navbar active={"Search"}/>
      {renderSearchBar()}
      {activeCard && renderActiveCard(activeCard, activeCardImage)}
      <div className="flex flex-col h-full w-screen items-center py-20">
        <div className="w-4/5 h-full relative grid grid-cols-custom-4 row-auto gap-6 py-20">
          {displaySearchItems()}
        </div>
          {
          displayedData < 100 &&
            <div className="text-white flex justify-center items-center w-[40vw] h-12 bg-white/5 hover:bg-white/10 rounded-3xl  hover:cursor-pointer"
              onClick={()=>{setDisplayedData(displayedData + 20)}}>
              <p className="font-sans font-bold text-xl">show more</p>
            </div>
          }
      </div>
    </div>
  )
}
