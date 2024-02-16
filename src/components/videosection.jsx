import React, { useState } from 'react';
import videosData from './videosData/tokyo.mp4'; // Assuming you have an array of video data

const VideoSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrevVideo = () => {
    setCurrentVideoIndex(prevIndex =>
      prevIndex === 0 ? videosData.length - 1 : prevIndex - 1
    );
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex(prevIndex =>
      prevIndex === videosData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <video src={videosData[currentVideoIndex].src} controls />
      <div className="flex mt-4">
        <button onClick={handlePrevVideo} className="mr-2">
          Prev
        </button>
        <button onClick={handleNextVideo}>Next</button>
      </div>
    </div>
  );
};

export default VideoSection;
