// Task 2 - Create TourCard component with remove tour functionality

// Import React to enable the use of JSX and functional components.
import React from 'react';

// The TourCard component is responsible for rendering the details of a single tour. 
// It accepts two props: `tour`, which is an object containing details about the tour 
// (such as id, name, info, image, and price), and `onRemove`, which is a function 
// that handles the removal of the tour when the "Not Interested" button is clicked.
function TourCard({ tour, onRemove }) {
  // Destructure the tour object to extract its properties for easier access.
  const { id, name, info, image, price } = tour;

  return (
    // Render the tour card container with all its details.
    <div className="tour-card">
      {/* Display the tour image with an alt attribute for accessibility. */}
      <img src={image} alt={name} className="tour-card-img" />

      {/* Display the name of the tour as a title. */}
      <h3 className="tour-card-title">{name}</h3>

      {/* Display the description or information about the tour. */}
      <p className="tour-card-info">{info}</p>

      {/* Display the price of the tour. */}
      <p className="tour-card-price">Price: ${price}</p>

      {/* Render a button that allows the user to remove the tour. 
        When clicked, it calls the onRemove function with the tour's id. */}
      <button className="not-interested-button" onClick={() => onRemove(id)}>
        Not Interested
      </button>
    </div>
  );
}

// Export the TourCard component as the default export so it can be used in other parts of the application.
export default TourCard;