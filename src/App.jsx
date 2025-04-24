// Task 1 - Setup tour data fetching logic with useEffect and state

// Import React and necessary hooks for state management and side effects
import React, { useState, useEffect } from 'react';

// Import the Gallery component to display the list of tours
import Gallery from './components/Gallery';

// Import the CSS file for styling the application
import './styles/styles.css';

function App() {
  // State to store the list of tours fetched from the API
  const [tours, setTours] = useState([]);

  // State to manage the loading state while fetching data
  const [loading, setLoading] = useState(true);

  // State to store any error messages during the data fetching process
  const [error, setError] = useState(null);

  // Function to fetch tours from the API
  const fetchTours = async () => {
    
    // Set loading to true to indicate data fetching is in progress
    setLoading(true);

    try {
      // Fetch data from the API using a proxy to avoid CORS issues
      const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');

      // Check if the response is not OK and throw an error
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }

      // Parse the JSON response to get the tour data
      const data = await response.json();

      // Update the tours state with the fetched data
      setTours(data);

      // Clear any previous error messages
      setError(null);
    
    } catch (err) {
      // Set the error state with the error message if an error occurs
      setError(err.message);
    
    } finally {
      // Set loading to false to indicate data fetching is complete
      setLoading(false);
    }
  };

  // Use useEffect to fetch tours when the component is first rendered
  useEffect(() => {
    fetchTours();
  }, []);

  // Function to remove a specific tour from the list
  const removeTour = (id) => {
    // Filter out the tour with the given ID and update the tours state
    setTours(tours.filter((tour) => tour.id !== id));
  };

  // Task 4 - Add conditional rendering for loading and error states
  
  if (loading) {
    // Display a loading message while the data is being fetched
    return <h2>Loading...</h2>;
  }

  if (error) {
    // Display an error message if there was an issue fetching the data
    return <h2>Error: {error}</h2>;
  }

  // Task 5 - Add refresh button to reload tours when the list is empty
  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No Tours Left</h2>
        
        {/* Button to reload the tours by calling the fetchTours function */}
        <button className="refresh-button" onClick={fetchTours}>
          Refresh
        </button>
      </div>
    );
  }

  // Render the Gallery component with the list of tours and the removeTour function
  return (
    <div>
      <h1>Tours</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
}

// Export the App component as the default export
export default App;