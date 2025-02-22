import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url, data = null, method = 'GET') => {
  // State to track the API response, loading status, and error
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make the API call when the hook is triggered
    const makeApiCall = async () => {
      setLoading(true); // Set loading to true before making the request
      setError(null);   // Reset error state

      const config = {
        method, // Request type: GET, POST, PUT, DELETE, etc.
        url,    // API URL
        data,   // Body data for POST, PUT requests
      };

      try {
        // Make the request and set the response
        const res = await axios(config);
        setResponse(res.data); // Store the response data
      } catch (err) {
        setError(err.response ? err.response.data : err.message); // Set error message if the request fails
      } finally {
        setLoading(false); // Set loading to false when the request is complete
      }
    };

    if (url) {
      makeApiCall(); // Trigger the API call if URL is provided
    }
  }, [url, data, method]); // Re-run the hook when URL, data, or method changes

  return { response, loading, error };
};

export default useApi;
