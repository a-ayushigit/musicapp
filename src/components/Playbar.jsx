import React, {useState} from 'react'
import {songList} from '../constants.js'
import CoverImage from './CoverImage.jsx';
import useMusicStore from '../store/useMusicStore.js';
import music from '../assets/music.svg';

const Playbar = () => {
  const {selectedsong, setselectedSong} = useMusicStore();
  const handleselect = (song) => {
    setselectedSong(song);
  }

  return (
    <div className="w-full bg-transparent text-xs">
      <div>
        <CoverImage song={selectedsong}/>
      </div>
  <table className="w-full border-collapse">
  <thead>
    <tr className="bg-transparent text-left">
      <th className="p-4 ">#</th>
      <th className="p-4 ">TITLE</th>
      <th className="p-4 ">PLAYING</th>
      <th className="p-4 ">TIME</th>
      <th className="p-4 ">ALBUM</th>
    </tr>
  </thead>
  <tbody>
    {songList.map((song) => (
      <tr key={song.id} className={`hover:bg-red-950 hover:cursor-pointer ${selectedsong?.id === song.id ? "bg-red-950" : "bg-transparent" }`}  onClick={()=>{
       handleselect(song);
        console.log(song);
        }}>
        <td className="p-4 ">{selectedsong.id == song.id ? <img className="flex h-4 w-4" src={music} alt=""/> : song.id}</td>
        <td className="p-4 ">
          <div className="flex items-center gap-2">
            <img src={song.img1} className="h-5 w-5" alt="" />
            {song.title}
          </div>
        </td>
        <td className="p-4 ">{song.playing}</td>
        <td className="p-4 ">{song.time}</td>
        <td className="p-4 ">{song.album}</td>
      </tr>
    ))}
  </tbody>
</table>

      
      
    </div>
  )
}

export default Playbar
