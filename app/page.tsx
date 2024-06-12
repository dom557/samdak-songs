"use client"

import Button from "./components/Button";
import PlaylistItem from "./components/PlaylistItem";
import ProgressBar from "./components/ProgressBar";
import { useState } from "react";


const songs = ['Song 1', 'Song 2', 'Song 3'];

export default  function Home() {
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);


  const playSong = (song: string) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const stopSong = () => {
    setCurrentSong(null);
    setIsPlaying(false);
    setProgress(0);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {songs.map((song, index) => (
          <PlaylistItem key={index} song={song} onClick={() => playSong(song)} />
        ))}
      </div>

      {currentSong && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Now Playing: {currentSong}</h2>
          <Button onClick={pauseSong}>Pause</Button>
          <Button onClick={stopSong}>Stop</Button>
        </div>
      )}

      <div className="mb-8">
        <ProgressBar value={progress} />
      </div>
    </main>
  );
};


