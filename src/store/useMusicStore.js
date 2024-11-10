import {create} from 'zustand';

 const useMusicStore = create((set) => ({

    selectedsong:null,
    isPlaying:false,

    setselectedSong: (song) => set({selectedsong: song , isPlaying:true}),
    togglePlayPause: ()=> set((state)=>({ isPlaying : !state.isPlaying})),
    setPlaying: (playing) => set({ isPlaying: playing}),
    clearSelectedSong: () => set({ selectedSong: null , isPlaying: false})

}));

export default useMusicStore;

