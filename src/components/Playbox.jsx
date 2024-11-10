import React, {useState , useEffect} from 'react'
import image from '../assets/images/image.png'
import repeat from '../assets/repeat.svg'
import play from '../assets/play.svg'
import rewind from '../assets/rewind.svg'
import forward from '../assets/forward.svg'
import random from '../assets/random.svg'
import pause from '../assets/pause.svg'
import {Howl, Howler} from 'howler';
import useMusicStore from '../store/useMusicStore.js'
import {songList} from '../constants.js'

const Playbox = () => {

  const {selectedsong , isPlaying , setselectedSong , togglePlayPause} = useMusicStore();
  const [howlInstance , setHowlInstance] = useState();
  const [present, setPresent] = useState(0);
  const [duration, setDuration] = useState(0);

  const playSong = (song) => {
    if(howlInstance) howlInstance.stop();

    const newHowl = new Howl({
      src:[song?.url],
      html5:true,
      onend:() => handlenext(),
      onload: () => setDuration(newHowl.duration())
    });
    console.log("url" , song.url);
    console.log("newhowl" , newHowl);
    setHowlInstance(newHowl);
    newHowl.play();
    // setDuration(newHowl.duration());
    if(!isPlaying) togglePlayPause();
    // togglePlayPause();

  };

  const handlePlayPause = () => {
    console.log("Hello world");
    console.log(isPlaying);
    console.log(howlInstance);
    if(isPlaying) howlInstance?.pause();
    else howlInstance?.play();
    togglePlayPause();
  }

  const handlenext = () => {
    const nextIndex = (selectedsong.id + 1) > songList.length? (selectedsong.id + 1) % songList.length : (selectedsong.id + 1);
    setselectedSong(songList[nextIndex - 1]);
  }

  const handleprevious = () => {
    const prevIndex = (selectedsong.id - 1 + songList.length) > songList.length?(selectedsong.id - 1 + songList.length) % songList.length : (selectedsong.id - 1 + songList.length);
    setselectedSong(songList[prevIndex - 1]);
  }
  useEffect(()=>{
  let interval;
  if(howlInstance && isPlaying){
    interval = setInterval(()=>{
      setPresent(howlInstance.seek());
    }, 1000)
  }

   return ()=>{
     if(interval) clearInterval(interval);
   };

  },[howlInstance,isPlaying])

  useEffect(()=>{
    if(selectedsong !== null && selectedsong !== undefined){
      playSong(selectedsong);
      console.log("duration ",duration);
      console.log("current" , (present/duration)*100);
      // console.log("Hello world")
    }
   

    return ()=>{
      if(howlInstance) howlInstance.unload();
    }
  },[selectedsong]);
  if(selectedsong)

  return (
    <div className="flex flex-col bg-red-700 h-[45vh] w-[15vw] p-4 m-4 self-center items-center text-sm font-semibold text-white gap-1 rounded-md">

      <h2>Now Playing</h2>
      {selectedsong? <img src={selectedsong?.img2} className="flex h-full w-full max-h-24" alt="" /> : <img src={image} alt=""/>}
      
      <p>{selectedsong?.title}</p>
      <p className="font-thin text-xs">{selectedsong?.artist}</p>
      <div className="flex flex-row gap-2 text-xs font-semibold w-[14vw] items-center">
      <p>{Math.floor(present/60)}:{("0" + Math.floor(present % 60)).slice(-2)}</p>
      <div className="w-[12vw] bg-gray-400 h-[0.6vh] opacity-65 rounded-full">
        <hr className={`h-[0.6vh] bg-white rounded-full`} style={{
          width:`${(present/duration)*100}%`
        }}/>
        </div>
      <p>{Math.floor(duration/60)}:{("0" + Math.floor(duration % 60)).slice(-2)}</p>
      </div>
      <div className="flex flex-row gap-3 justify-stretch items-center h-[10vh]">
        <img src={repeat} alt="" className="h-3 w-3"/>
        <div className="flex flex-row items-center justify-center gap-3">
        <img src={rewind} alt="" className="h-5 w-5" onClick={()=>handleprevious()}/>
        <div className="bg-red-950 p-2 rounded-md h-7 w-7 flex items-center justify-center"  onClick={()=>handlePlayPause()}>
        <img src={isPlaying ? play : pause} alt="" className="h-5 w-5 text-white" />
        </div>
        <img src={forward} alt="" className="h-5 w-5" onClick={()=>handlenext()}/>
        </div>
       
        <img src={random} alt="" className="h-3 w-3"/>

      </div>
     
    </div>
  )

  return (
    <></>
  )
}

export default Playbox
