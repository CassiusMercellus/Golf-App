document.addEventListener('DOMContentLoaded', function () {
  //fetchAndProcessData(thanksGivingPointApiUrl, 'ThanksGiving Point');
  fetchAndProcessData(foxHollowApiUrl, 'Fox Hollow');
});


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
// fetchAndProcessData(thanksGivingPointApiUrl, 'ThanksGiving Point');
// fetchAndProcessData(foxHollowApiUrl, 'Fox Hollow');
// fetchAndProcessData(spanishOaksApiUrl, 'Spanish Oaks');

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
  currentCol = 1;
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

    // Show Data In Html.
    if (currentCol === holeNumber) {
      // YARDS
      const row2Elements = document.querySelectorAll('.row2');
      const withoutH3Yards = Array.from(row2Elements).find((element) => !element.querySelector('h3'));
      if (withoutH3Yards) {
        const newh3 = document.createElement('h3');
        newh3.textContent = yardsAverage;
        withoutH3Yards.appendChild(newh3);
      }

      // PAR
      const row3Elements = document.querySelectorAll('.row3');
      const withoutH3Par = Array.from(row3Elements).find((element) => !element.querySelector('h3'));
      if (withoutH3Par) {
        const newh3 = document.createElement('h3');
        newh3.textContent = par;
        withoutH3Par.appendChild(newh3);
      }

      // Handicap
      const row4Elements = document.querySelectorAll('.row4');
      const withoutH3Handicap = Array.from(row4Elements).find((element) => !element.querySelector('h3'));
      if (withoutH3Handicap) {
        const newh3 = document.createElement('h3');
        newh3.textContent = handicap;
        withoutH3Handicap.appendChild(newh3);
      }
      currentCol += 1;
    } else {
      console.error("The Data Cannot Be Shown Because The Data From The Api And The Html Could Not Be Matched.")
    }

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
