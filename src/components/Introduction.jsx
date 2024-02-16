import React, { useEffect, useRef } from 'react';
import tokyo from './tokyo.mp4'; // Import the video file
import paperplanes from './paperplanes.mp4'

const Introduction = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Adjust the height of the video container when the page is loaded
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
      const windowHeight = window.innerHeight;
      videoContainer.style.height = `${0.85 * windowHeight}px`; // Set the height to 80% of the viewport height
    }
  }, []);

  const handleTogglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col relative">
      <header className="bg-transparent absolute top-0 left-0 right-0 z-10 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-white text-xl font-bold">Logo</div>
          <nav className="space-x-6">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">About</a>
            <a href="#" className="text-white hover:text-gray-300">Services</a>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      <div className="flex-grow">
        <div className="video-container relative h-full">
          {/* Use the imported video file */}
          <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted>
            <source src={paperplanes} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <button
            className="absolute right-4 bottom-4 text-white hover:bg-gray-900 bg-gray-800 py-2 px-4 rounded-lg transition duration-300 ease-in-out opacity-75 hover:opacity-100"
            onClick={handleTogglePlay}
          >
            {videoRef.current && videoRef.current.paused ? 'Play' : 'Pause'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
