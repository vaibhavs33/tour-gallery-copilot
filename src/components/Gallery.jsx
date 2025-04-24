// Task 3 - Implement Gallery component that displays list of tours

// Import React to use JSX and functional components
import React from 'react';

// Import the TourCard component to display individual tour details
import TourCard from './TourCard';

// Define the Gallery component. Props include tours, an array of tour objects to display, 
// and onRemove, a function to handle the removal of a specific tour.
function Gallery({ tours, onRemove }) {
  return (
    // Render a container for the gallery
    <div className="gallery">
      
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard 
          
          // Unique key for each tour to help React identify elements
          key={tour.id} 
          
          // Pass the tour object as a prop to the TourCard component
          tour={tour} 
          
          // Pass the onRemove function to handle tour removal
          onRemove={onRemove} 
        />
      ))}
    </div>
  );
}

// Export the Gallery component as the default export
export default Gallery;