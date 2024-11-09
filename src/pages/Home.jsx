import React from 'react'
import Navbar from '../components/Navbar'
import Bottombar from '../components/Bottombar'
import TopBar from '../components/TopBar'
import Searchbar from '../components/Searchbar'
import CoverImage from '../components/CoverImage'
import Playbar from '../components/Playbar'
import logo from '../../public/logo.svg'

const Home = () => {
  return (
    <div className="grid grid-cols-8 min-h-screen">
    <div className="col-span-2 flex flex-col justify-between items-stretch bg-black text-white">
        <div>
        <div className="p-3 items-center justify-center ">
            <p className="text-2xl flex flex-row gap-2">
              <h1><img className="h-8" src={logo} alt="" /></h1>
              <p className="flex flex-row">
              <h1 className="text-red-500 font-semibold">Dream</h1><h1 className="font-semibold">Music</h1>
              </p>
              
              </p>
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
