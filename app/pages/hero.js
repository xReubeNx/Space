import React from 'react'

export default function Hero() {
  return (
    <div className="heroBg flex flex-col h-screen w-screen">
      <div className="pt-28 pl-16 lg:pl-24">
        <h1 className="heading text-white font-bold">Hi, <br/> I'm &lt;<span className="text-emerald-400">Reuben</span> /&gt;</h1>
        <p className="text-gray-300 italic text-xl pl-2">This is what I can do...</p>
      </div>
    </div>
  )
}
