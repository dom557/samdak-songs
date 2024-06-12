// components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className="w-full h-4 bg-gray-300 rounded overflow-hidden">
      <div className="h-full bg-blue-500" style={{ width: `${value}%` }} />
    </div>
  );
};

export default ProgressBar;
