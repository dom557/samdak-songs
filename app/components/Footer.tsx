// Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-4 relative">
      {/* Backdrop */}
      <div className="absolute inset-0  bg-white/30 opacity-50 blur-sm"></div>
      
      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
        <p className="text-sm mt-1">
          Designed and developed with <span className="text-red-500">&hearts;</span> by Samdak ssi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
