import React from 'react'

export default function Hero2() {
  return (
    <div className="heroBg flex flex-col h-screen w-screen">
      <div className="pt-24 pl-12 lg:pl-24 text-white">
        <p className="fixed heading animation1 font-bold">Hi, </p>
        <h1 className="fixed heading animation2 font-bold">I'm &lt;<span className="text-emerald-400">Reuben</span> /&gt;</h1>
        <p className="fixed comment text-gray-300 italic text-xl pl-2">This is what I can do...</p>
      </div>
    </div>
  )
}
