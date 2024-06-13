import './globals.css';
import React from 'react';

export const metadata = {
  title: 'samdak (dom) | favorite songs',
  description: 'my personal platform for my favorite songs',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className='bg-black'>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
