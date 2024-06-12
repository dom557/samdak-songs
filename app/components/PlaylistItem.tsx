// components/PlaylistItem.tsx
import React from 'react';

interface PlaylistItemProps {
  song: string;
  onClick: () => void;
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({ song, onClick }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 hover:bg-gray-200 cursor-pointer">
      <span>{song}</span>
      <button className="text-blue-500" onClick={onClick}>Play</button>
    </div>
  );
};

export default PlaylistItem;
