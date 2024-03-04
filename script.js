console.log("jo mama");

// Function to fetch data from an API
async function fetchData(apiUrl) {
    try {
      // Use the fetch function to make a GET request to the API
      const response = await fetch(apiUrl);
  
      // Check if the request was successful (status code 200 OK)
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      // Parse the response body as JSON
      const data = await response.json();
  
      // Return the data
      return data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      // You can handle the error in an appropriate way here
    }
  }
  
  // Example usage
  const apiUrl = 'https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course11819.json';
  fetchData(apiUrl)
    .then((data) => {
      // Do something with the retrieved data
      console.log('Data:', data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error('Fetch error:', error);
      //
    });