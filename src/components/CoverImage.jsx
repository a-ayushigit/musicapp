import React from 'react'
import image from '../assets/images/image.png'
const CoverImage = ({song}) => {
  
  return (
    <div className="flex items-center justify-center ">

      <img src={(song !== null ) && (song !== undefined)? song.img1:null} alt="" className="flex h-[60vh] rounded-md"/>
    </div>
  )
  
}

export default CoverImage
