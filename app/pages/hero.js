import React, { useState, useEffect} from 'react'
import Link from 'next/link'

export default function Hero() {

  const [ yOffset, setYOffset ] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {window.removeEventListener('scroll', handleScroll);};
  }, [])

  function handleScroll() {
    setYOffset(window.pageYOffset);
  }

  return (
    <div className="heroGradient h-[500vh] w-screen">
      <div className="absolute border border-white/20 top-[280%] left-[35%]
       w-[45vw] h-[30vh] rounded-full glass flex items-center justify-center text-white
        text-[8rem] z-[3]"
       style={{transform: `translateY(${yOffset * -0.1}px)`}}>
         <h1><span className="text-emerald-400">
           Reuben</span></h1>
      </div>
      <div className="absolute border border-white/20 top-[135%] left-[17%]
       w-[20vw] h-[20vh] rounded-full glass flex items-center justify-center text-white
       text-[8rem] z-[2]"
       style={{transform: `translateY(${yOffset * 0.5}px)`}}>
         <p>Hi,</p>
      </div>
      <div className="absolute border border-white/20 top-[450%] left-[16%]
       w-[22vw] h-[22vh] rounded-full glass flex items-center justify-center text-white
       text-[8rem] z-[1]"
       style={{transform: `translateY(${yOffset * -0.8}px)`}}>
         <p>I'm</p>
      </div>
      <div className="absolute border border-white/20 top-[40%] left-[35%]
       w-[30vw] h-[15vh] rounded-full glass flex items-center justify-center text-white text-5xl animate-pulse"
       style={{transform: `translateY(${yOffset * -1.5}px)`}}>
         <p>Scroll down</p>
      </div>
      <div className="absolute border border-white/20 top-[120%] left-[25%]
       w-[25vw] h-[15vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * 0.3}px)`}}>
         <p>مرحبا</p>
      </div>
      <div className="absolute border border-white/20 top-[140%] left-[5%]
       w-[25vw] h-[15vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -1.3}px)`}}>
         <p>Բարեւ Ձեզ</p>
      </div>
      <div className="absolute border border-white/20 top-[130%] left-[70%]
       w-[20vw] h-[10vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * 0.3}px)`}}>
         <p>হ্যালো</p>
      </div>
      <div className="absolute border border-white/20 top-[120%] left-[60%]
       w-[25vw] h-[15vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * 0.2}px)`}}>
         <p>ဟယ်လို</p>
      </div>
      <div className="absolute border border-white/20 top-[150%] left-[40%]
       w-[22vw] h-[12vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * 0.4}px)`}}>
         <p>你好</p>
      </div>
      <div className="absolute border border-white/20 top-[370%] left-[3%]
       w-[20vw] h-[10vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -0.3}px)`}}>
         <p>Hej</p>
      </div>
      <div className="absolute border border-white/20 top-[118%] left-[10%]
       w-[20vw] h-[10vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -0.1}px)`}}>
         <p>Bonjour</p>
      </div>
      <div className="absolute border-r-0 border border-white/20 top-[190%] left-[92%]
       w-[8vw] h-[10vh] rounded-l-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -0.8}px)`}}>
         <p>Hei</p>
      </div>
      <div className="absolute border border-white/20 top-[160%] left-[-5%]
       w-[20vw] h-[10vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * 0.5}px)`}}>
         <p>Hallo</p>
      </div>
      <div className="absolute border-r-0 border border-white/20 top-[160%] left-[85%]
       w-[15vw] h-[10vh] rounded-l-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * 0.4}px)`}}>
         <p>aloha</p>
      </div>
      <div className="absolute border border-white/20 top-[260%] left-[45%]
       w-[20vw] h-[10vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * 0.2}px)`}}>
         <p>こんにちは</p>
      </div>
      <div className="absolute border border-white/20 top-[700%] left-[25%]
       w-[25vw] h-[15vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -1.1}px)`}}>
         <p>안녕하세요</p>
      </div>
      <div className="absolute border border-white/20 top-[400%] left-[70%]
       w-[25vw] h-[15vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -0.3}px)`}}>
         <p>Dia dhuit</p>
      </div>
      <div className="absolute border border-white/20 top-[370%] left-[60%]
       w-[25vw] h-[15vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -0.7}px)`}}>
         <p>Привет</p>
      </div>
      <div className="absolute border border-white/20 top-[180%] left-[50%]
       w-[25vw] h-[15vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -2.2}px)`}}>
         <p>Здраво</p>
      </div>
      <div className="absolute border border-white/20 top-[230%] left-[70%]
       w-[25vw] h-[15vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -1.3}px)`}}>
         <p>talofa</p>
      </div>
      <div className="absolute border border-white/20 top-[280%] left-[20%]
       w-[25vw] h-[15vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -0.7}px)`}}>
         <p>Olá</p>
      </div>
      <div className="absolute border border-white/20 top-[112%] left-[35%]
       w-[25vw] h-[12vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -0.1}px)`}}>
         <p>سلام</p>
      </div>
      <div className="absolute border border-white/20 top-[590%] left-[40%]
       w-[25vw] h-[15vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -1}px)`}}>
         <p>Hola</p>
      </div>
      <div className="absolute border border-white/20 top-[420%] left-[10%]
       w-[28vw] h-[13vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -0.3}px)`}}>
         <p>नमस्ते</p>
      </div>
      <div className="absolute border border-white/20 top-[200%] left-[30%]
       w-[30vw] h-[11vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -0.35}px)`}}>
         <p>ਸਤ ਸ੍ਰੀ ਅਕਾਲ</p>
      </div>
      <div className="absolute border border-white/20 top-[330%] left-[60%]
       w-[25vw] h-[10vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -1.3}px)`}}>
         <p>Buna ziua</p>
      </div>
      <div className="absolute border border-white/20 top-[380%] left-[4%]
       w-[25vw] h-[11vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -0.7}px)`}}>
         <p>Lumela</p>
      </div>
      <div className="absolute border border-white/20 top-[130%] left-[6%]
       w-[25vw] h-[13vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * 0.1}px)`}}>
         <p>habari</p>
      </div>
      <div className="absolute border border-white/20 top-[520%] left-[32%]
       w-[25vw] h-[10vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -1.7}px)`}}>
         <p>வணக்கம்</p>
      </div>
      <div className="absolute border border-white/20 top-[190%] left-[45%]
       w-[25vw] h-[11vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -1.2}px)`}}>
         <p>హలో</p>
      </div>
      <div className="absolute border border-white/20 top-[110%] left-[74%]
       w-[25vw] h-[8vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -0.2}px)`}}>
         <p>Сәлам</p>
      </div>
      <div className="absolute border border-white/20 top-[120%] left-[1%]
       w-[29vw] h-[17vh] rounded-full glass flex items-center justify-center text-white text-5xl"
       style={{transform: `translateY(${yOffset * -0.5}px)`}}>
         <p>Здрастуйте</p>
      </div>
      <Link href="/APOD">
      <div className="absolute border border-white/20 top-[355%] left-[25%]
       w-[50vw] h-[12vh] rounded-full glass flex items-center justify-center text-white text-5xl
       text-[2rem] italic animate-pulse"
       style={{transform: `translateY(${yOffset * 0.2}px)`}}>
         <p>Click to see what I can do...</p>
      </div>
      </Link >
      <div id="heroStars" style={{opacity:`${(yOffset-1500)/1500}`}}/>
      <div id="heroStars2" style={{opacity:`${(yOffset-1500)/1500}`}} />
      <div id="heroStars3" style={{opacity:`${(yOffset-1500)/1500}`}} />
    </div>
  )
}
