import React from 'react'
import useMusicStore from '../store/useMusicStore.js';
import music from '../assets/music.svg';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


const Song = ({song , index}) => {
    const {selectedsong, setselectedSong} = useMusicStore();
  const handleselect = (song) => {
    setselectedSong(song);
  }
  const id = song.id;
  const {attributes , listeners , setNodeRef , transform, transition} = useSortable({id});

  const style = {
    transition, 
    transform:CSS.Transform.toString(transform),
  }
  return (
    
     <tr  className={`hover:bg-red-950 hover:cursor-pointer ${selectedsong?.id === song?.id ? "bg-red-950" : "bg-transparent" }`}  onClick={()=>{
       handleselect(song);
        console.log(song);
        }} ref={setNodeRef} {...attributes} {...listeners} style={style} >
        <td className="p-4 ">{selectedsong?.id == song?.id ? <img className="flex h-4 w-4" src={music} alt=""/> : index+1}</td>
        <td className="p-4 ">
          <div className="flex items-center gap-2">
            <img src={song?.img1} className="h-5 w-5" alt="" />
            {song?.title}
          </div>
        </td>
        <td className="p-4 ">{song?.playing}</td>
        <td className="p-4 ">{song?.time}</td>
        <td className="p-4 ">{song?.album}</td>
      </tr>
    
  )
}

export default Song
