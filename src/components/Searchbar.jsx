import React from 'react'
import search from '../assets/search.svg'

const Searchbar = () => {
  return (
    <div className="flex flex-grow border gap-2 justify-between rounded-full w-full bg-red-950 border-red-950 text-white items-center">
    <input type="text" className="flex flex-grow rounded-full bg-red-950 p-2 text-xs focus:outline-none" />
    <div className="flex flex-row p-2 items-center pr-3">
    <img src={search} alt="" className="h-4 w-4 "/>
    </div>
    
    </div>
  )
}

export default Searchbar
