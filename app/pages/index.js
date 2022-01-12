import Navbar from './navbar'
import Hero from './hero'
export default function Home() {
  return (
    <div>
      <Navbar active={"Home"}/>
      <Hero />
    </div>
  )
}
