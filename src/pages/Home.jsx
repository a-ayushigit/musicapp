import React from 'react'
import Navbar from '../components/Navbar'
import Bottombar from '../components/Bottombar'
import TopBar from '../components/TopBar'
import Searchbar from '../components/Searchbar'
import CoverImage from '../components/CoverImage'
import Playbar from '../components/Playbar'

const Home = () => {
  return (
    <div className="grid grid-cols-8 min-h-screen">
    <div className="col-span-2 flex flex-col justify-between items-stretch">
        <div>
        <div className="p-3 items-center justify-center">
            <p className="text-lg">DreamMusic</p>
        </div>
        <div>
         <Navbar/>
        </div>
        </div>
        <div>
          <Bottombar/>
        </div>
       
    </div>
    <div className="flex flex-col items-stretch justify-around col-span-4">
        <div className="flex flex-row">
            <TopBar/>
            <Searchbar/>
            </div>
        <div>
          <CoverImage/>
        </div>
        <div>
            <Playbar/>
        </div>
    </div>
    <div className="flex flex-col col-span-2 items-center justify-end">
        3
    </div>
  </div>
  )
}

export default Home
