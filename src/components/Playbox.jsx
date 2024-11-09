import React from 'react'
import image from '../assets/images/image.png'
import repeat from '../../public/repeat.svg'
import play from '../../public/play.svg'
import rewind from '../../public/rewind.svg'
import forward from '../../public/forward.svg'
import random from '../../public/random.svg'
const Playbox = () => {
  return (
    <div className="flex flex-col bg-red-700 h-[45vh] w-[15vw] p-4 m-4 self-center items-center text-sm font-semibold text-white gap-1 rounded-md">

      <h2>Now Playing</h2>
      <img src={image} alt="" />
      <p>Beat it</p>
      <p className="font-thin text-xs">Michael Jackson</p>
      <div className="flex flex-row gap-2 text-xs font-semibold w-[14vw] items-center">
      <p>2:15</p>
      <div className="w-[12vw] bg-gray-400 h-[0.6vh] opacity-65 rounded-full">
        <hr className="w-[50%] h-[0.6vh] bg-white rounded-full" />
        </div>
      <p>4:18</p>
      </div>
      <div className="flex flex-row gap-3 justify-stretch items-center h-[10vh]">
        <img src={repeat} alt="" className="h-3 w-3"/>
        <div className="flex flex-row items-center justify-center gap-3">
        <img src={rewind} alt="" className="h-5 w-5"/>
        <div className="bg-red-950 p-2 rounded-md h-7 w-7 flex items-center justify-center">
        <img src={play} alt="" className="h-5 w-5"/>
        </div>
        
        <img src={forward} alt="" className="h-5 w-5"/>
        </div>
       
        <img src={random} alt="" className="h-3 w-3"/>

      </div>
     
    </div>
  )
}

export default Playbox
