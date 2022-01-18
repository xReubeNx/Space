import React from 'react'

export default function Glass({ yOffset, top, left, scroll, scale}) {
  return (
    <div className={`absolute border border-white top-[${top}%] left-[${left}%]
    w-[20vw] h-[10vh] rounded-full`}
    style={{transform: `translateY(${yOffset * scroll}px)`}}>
   </div>
  )
}
