import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import { getSearch } from './api/apiService'
import SearchItem from './Components/searchItem'

export default function Search() {

  const [ isMobile, setIsMobile ] = useState(null);
  const [ searchData, setSearchData ] = useState(null);
  const [ query, setQuery ] = useState(null);
  // const [ page, setPage ] = useState(null);
  const [ displayedData, setDisplayedData ] = useState(20);

  useEffect(() => {
    getData('pluto')
    setIsMobile(window.innerWidth < 1024 ? true : false);
    window.addEventListener('resize', () => {setIsMobile(window.innerWidth < 1024 ? true : false)});
  }, [])

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
          <div className="flex navBg items-center w-[15vw] rounded-bl-3xl py-4 relative">
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
        data.push(<SearchItem key={i} info={info} onClick={isMobile ? () => {console.log('mobile')} : () => {console.log('notMobile')}} />);
      }
      return data
    }
  }

  function displayCard(data) {
    console.log(data)
  }

  return (
    <div className="heroBg min-h-screen h-full w-full">
      <Head><title>Search</title></Head>
      <Navbar active={"Search"}/>
      {renderSearchBar()}
      <div className="flex flex-col h-full w-screen items-center">
        <div className="w-4/5 h-full relative grid grid-cols-custom-4 row-auto gap-6 py-24">
          {displaySearchItems()}
        </div>
          {
          displayedData < 100 &&
            <div className="text-white flex justify-center items-center w-[80vw] h-12 hover:bg-white/10 rounded-xl"
              onClick={()=>{setDisplayedData(displayedData + 20)}}>
              <p>show more</p>
            </div>
          }
      </div>
    </div>
  )
}
