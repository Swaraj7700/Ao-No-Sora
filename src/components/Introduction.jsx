import React, { useEffect, useRef } from 'react';
import tokyo from './videosData/tokyo.mp4'; // Import the video file
//import paperplanes from './paperplanes.mp4'

const Introduction = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Adjust the height of the video container when the page is loaded
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
      const windowHeight = window.innerHeight;
      videoContainer.style.height = `${0.85 * windowHeight}px`; // Set the height to 85% of the viewport height
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
          <div className="text-white text-2xl font-semibold opacity-75 hover:opacity-100 transition duration-300">
            OpenAI
          </div>
          <nav className="space-x-6">
            <a href="#" className="text-white text-lg hover:text-gray-300 hover:underline">Home</a>
            <a href="#" className="text-white text-lg hover:text-gray-300 hover:underline">About</a>
            <a href="#" className="text-white text-lg hover:text-gray-300 hover:underline">Services</a>
            <a href="#" className="text-white text-lg hover:text-gray-300 hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <div className="flex-grow relative">
        <div className="video-container relative h-full">
          {/* Use the imported video file */}
          <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted>
            <source src={tokyo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-6xl font-semibold mb-6">
                Exploring Tokyo
              </div>
              <div className="text-2xl whitespace-normal">
                <p>Discover the vibrant streets and rich culture of Tokyo.</p>
                <p>Let's embark on an adventure!</p>
              </div>
            </div>
          </div>
          <button
            className="absolute right-10 bottom-9 text-white bg-gray-800 py-4 px-7 rounded-full transition duration-300 ease-in-out opacity-75 hover:opacity-100 hover:bg-gray-500"
            onClick={handleTogglePlay}
          >
            {videoRef.current && videoRef.current.paused ? (
              <>
                <span className="mr-2">&#9658;</span> Play
              </>
            ) : (
              <>
                <span className="mr-2">&#9646;&#9646;</span> Pause
              </>
            )}
          </button>

        </div>
      </div>
    </div>
  );
}

export default Introduction;
