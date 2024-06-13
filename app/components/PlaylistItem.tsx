import React from "react";
import Image from "next/image";
import { songs } from "@/app/data/songs.json";

const Playlist = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {songs.map((song, index) => (
        <div className="w-full sm:w-1/2 md:w-1/3 p-4" key={index}>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={song.cover}
              title={song.title}
              alt="Album Cover"
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
              width={400}
              height={400}
            />
          </div>
          <h2 className="mt-2 text-lg font-semibold">{song.title}</h2>
          <audio
            className="mt-2"
            controls
            itemType="audio/mp3"
            src={song.song}
          />
        </div>
      ))}
    </div>
  );
};

export default Playlist;
