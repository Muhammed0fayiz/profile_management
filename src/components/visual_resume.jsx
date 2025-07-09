'use client';
import React, { useEffect } from 'react';

export default function VisualResume({ user }) {
  useEffect(() => {
    console.log("📄 VisualResume received user:", user);
  }, [user]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6">Visual Resume</h1>

      <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-xl">

        <img
          src={
            user?.youtubeImage
              ? `http://localhost:5000/public${user.youtubeImage}`
              : '/your-thumbnail.png'
          }
          alt="Visual Resume"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = '/your-thumbnail.png';
          }}
        />

        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          <a
            href={user?.youtube || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-30 hover:bg-opacity-50 backdrop-blur-md text-white px-5 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 text-sm sm:text-base"
          >
            <span className="material-icons">play_arrow</span>
            <span>Watch the Full Video</span>
          </a>
        </div>

        <div className="absolute bottom-4 left-4 text-white text-sm font-medium flex items-center space-x-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 15l5.19-3L10 9v6zm12-3c0-1.38-.11-2.64-.32-3.68C21.23 6.13 20.42 5 19 5H5C3.58 5 2.77 6.13 2.32 8.32A19.9 19.9 0 002 12c0 1.38.11 2.64.32 3.68C2.77 17.87 3.58 19 5 19h14c1.42 0 2.23-1.13 2.68-3.32.21-1.04.32-2.3.32-3.68z" />
          </svg>
          <span>YouTube</span>
        </div>
      </div>
    </div>
  );
}
