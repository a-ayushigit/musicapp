import React from 'react'
import home from '../../public/home.svg'
import trends from '../../public/trends.svg'
import library from '../../public/library.svg'
import discover from '../../public/discover.svg'

const Navbar = () => {
  return (
    <div className="flex flex-col p-4 gap-1 mt-1">
    <p className="text-xs">Menu</p>
    <ul>
        <li>
          <p className="flex text-sm gap-3 items-center p-1">
          <img src={home} alt="" />
          Home
          </p>
          </li>
          <li>
          <p className="flex text-sm gap-3 items-center p-1">
          <img src={trends} alt="" />
          Trends
          </p>
          </li>
          <li>
          <p className="flex text-sm gap-3 items-center p-1">
          <img src={library} alt="" />
          Library
          </p>
          </li>
          <li>
          <p className="flex text-sm gap-3 items-center p-1">
          <img src={discover} alt="" />
          Discover
          </p>
          </li>
    </ul>
    </div>
  )
}

export default Navbar
