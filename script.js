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
const thanksGivingPointApiUrl = 'https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course11819.json';
const foxHollowApiUrl = 'https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course11819.json';
const spanishOaksApiUrl = 'https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course19002.json';
// Use Functions On Run Request.
// fetchAndProcessData(thanksGivingPointApiUrl, 'ThanksGivingPoint');
// fetchAndProcessData(foxHollowApiUrl, 'FoxHollow');
// fetchAndProcessData(spanishOaksApiUrl, 'SpanishOaks');

function fetchAndProcessData(apiUrl, courseName) {
  fetchData(apiUrl)
    .then((data) => {
      processCourseData(data, courseName);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error(`Fetch error for ${courseName}:`, error);
    });
}

function processCourseData(data, courseName) {
  // console.log('Golf Course:', courseName);

  for (let i = 0; i < data.holes.length; i++) {
    const holeInfo = data.holes[i];
    var holeNumber = holeInfo.hole;

    // Get Average Of The Four Yards.
    const tees = holeInfo.teeBoxes;
    var yardsArray = tees.map((tee) => tee.yards);
    var yardsAverage = getAverage(...yardsArray);

    const changeLocation = holeInfo.changeLocations[0];
    var par = changeLocation.par;
    var handicap = changeLocation.hcp;

    // console.log(`Hole: ${holeNumber}`);
    // console.log('Yards:', yardsAverage);
    // console.log('Par:', par);
    // console.log('Handicap:', handicap);
    // console.log('');
  }
}

function getAverage(...numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = Math.floor(sum / numbers.length);
  return average;
}
