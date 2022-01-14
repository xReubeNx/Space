import Navbar from './navbar'
import Hero from './hero'
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <head lang="en" />
      </Head>
      <Navbar active={"Home"}/>
      <Hero />
    </div>
  )
}
