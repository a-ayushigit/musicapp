import React from 'react'
import logout1 from '../assets/logout1.svg'
import logout2 from '../assets/logout2.svg'
import settings from '../assets/settings.svg'
const Bottombar = () => {
  return (
    <div className="flex flex-col p-4 gap-1 mb-4">
      <p className="text-xs">General</p>
      <ul>
      <li>
          <p className="flex text-sm gap-3 items-center p-1">
          <img src={settings} alt="" />
          Settings
          </p>
          </li>
          <li>
          <p className="flex text-sm gap-3 items-center p-1">
            <p className="flex flex-row">
            <img src={logout1} alt="" />
            <img src={logout2} alt=""/>
            </p>
          
          Logout
          </p>
          </li>
      </ul>
    </div>
  )
}

export default Bottombar
