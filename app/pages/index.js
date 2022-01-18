import Navbar from './navbar'
import Hero from './hero'
import Hero2 from './hero2'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {

  const [ isMobile, setIsMobile ] = useState(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024 ? true : false);
    window.addEventListener('resize', () => {setIsMobile(window.innerWidth < 1024 ? true : false)});
  }, [])

  return (
    <div>
      <Head>
        <title>Home</title>
        <head lang="en" />
      </Head>
      {isMobile && <Navbar active={'POTD'} />}
      {
      isMobile
      ? <Hero2 />
      : <Hero />
      }
    </div>
  )
}
