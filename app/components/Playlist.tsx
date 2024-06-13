"use client";

import React, { useState } from "react";
import Image from "next/image";
import { songs } from "@/app/data/songs.json";

const Playlist: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const [selectedSong, setSelectedSong] = useState(null);

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (song) => {
    setSelectedSong(song);
  };

  const handleClose = () => {
    setSelectedSong(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredSongs.map((song, index) => (
          <div
            key={index}
            className="playlist-card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 relative"
            onClick={() => handleCardClick(song)}
          >
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <Image
                src={song.cover}
                title={song.title}
                alt="Album Cover"
                layout="fill"
                objectFit="cover"
                className="playlist-card-image"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold mb-2 text-gray-800 truncate">
                {song.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {selectedSong && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-md w-full text-center playlist-modal">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 playlist-modal-close"
            >
              &times;
            </button>
            <div className="relative h-72 mb-4">
              <Image
                src={selectedSong.cover}
                title={selectedSong.title}
                alt="Album Cover"
                layout="fill"
                objectFit="cover"
                className="rounded-lg playlist-modal-image"
              />
            </div>
            <h2 className="text-xl font-semibold mt-2 mb-4 text-gray-800">
              {selectedSong.title}
            </h2>
            <audio
              className="w-full mt-2 controls playlist-modal-audio"
              src={selectedSong.song}
              controls
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Playlist;
