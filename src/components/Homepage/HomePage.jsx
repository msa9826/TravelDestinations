import React, { useEffect } from 'react';
import './HomePage.css';
import ReactPlayer from "react-player";
import 'font-awesome/css/font-awesome.min.css';

function HomePage({ onExplore }) {
  useEffect(() => {
    // Define the event handler
    const handleExploreClick = () => {
      console.log('Explore button clicked');
      if (onExplore) {
        onExplore(); // Call the passed onExplore function
      }
    };

    // Add event listener to the button
    const exploreButton = document.querySelector('.explore-button');
    if (exploreButton) {
      exploreButton.addEventListener('click', handleExploreClick);
    }

    // Clean up: Remove the event listener on component unmount
    return () => {
      if (exploreButton) {
        exploreButton.removeEventListener('click', handleExploreClick);
      }
    };
  }, [onExplore]); // Depend on onExplore to make sure it gets updated correctly

  return (
    <div className="homepage">
      <div className="video-background">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=qy0vb4V3B-4"
          playing
          loop
          muted
          controls={false}
          width="100vw" // Full viewport width
          height="100vh" // Full viewport height
        />
      </div>
      <div className="homepage-content">
        <div className="bg-box">
          <h1>Discover Your Next Adventure with Us</h1>
          <p className="description">Explore the world’s most luxurious destinations.</p>
          <button className="explore-button">Explore</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
