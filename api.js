document.addEventListener('DOMContentLoaded', function () {
  //fetchAndProcessData(thanksGivingPointApiUrl, 'ThanksGiving Point');
  //fetchAndProcessData(foxHollowApiUrl, 'Fox Hollow');
  //fetchAndProcessData(spanishOaksApiUrl, 'Spanish Oaks');

  const courses = document.querySelectorAll('.daCourse'); // Use class selector
  const courseSelect = document.querySelector('#courses'); // Select the <select> element

  courseSelect.addEventListener('change', function () {
    const selectedValue = this.value;
    
    if  (selectedValue === "thanksgivingPoint" || selectedValue === "foxHollow" || selectedValue === "spanishOaks") {
      const row2ElementsRemove = document.querySelectorAll('.row2');
      const row3ElementsRemove = document.querySelectorAll('.row3');
      const row4ElementsRemove = document.querySelectorAll('.row4');
      row2ElementsRemove.forEach((element) => {
        const removeH3 = element.querySelectorAll('h3');
        removeH3.forEach((removeH3) => {
          removeH3.remove();
        });
      });
      row3ElementsRemove.forEach((element) => {
        const removeH3 = element.querySelectorAll('h3');
        removeH3.forEach((removeH3) => {
          removeH3.remove();
        });
      });
      row4ElementsRemove.forEach((element) => {
        const removeH3 = element.querySelectorAll('h3');
        removeH3.forEach((removeH3) => {
          removeH3.remove();
        });
      });

      const reAdd2 = document.querySelectorAll('.reAdd2');
      reAdd2.forEach((element) => {
        const addH3 = document.createElement('h3');
        addH3.textContent = 'Yardage';
        element.appendChild(addH3);
      });
      const reAdd3 = document.querySelectorAll('.reAdd3');
      reAdd3.forEach((element) => {
        const addH3 = document.createElement('h3');
        addH3.textContent = 'Par';
        element.appendChild(addH3);
      });
      const reAdd4 = document.querySelectorAll('.reAdd4');
      reAdd4.forEach((element) => {
        const addH3 = document.createElement('h3');
        addH3.textContent = 'Handicap';
        element.appendChild(addH3);
      });

      const reAdd2T = document.querySelectorAll('.reAdd2T');
      reAdd2T.forEach((element) => {
        const addH3 = document.createElement('h3');
        addH3.classList.add('r2o');
        element.appendChild(addH3);
      });
      const reAdd3T = document.querySelectorAll('.reAdd3T');
      reAdd3T.forEach((element) => {
        const addH3 = document.createElement('h3');
        addH3.classList.add('r3o');
        element.appendChild(addH3);
      });
      const reAdd4T = document.querySelectorAll('.reAdd4T');
      reAdd4T.forEach((element) => {
        const addH3 = document.createElement('h3');
        addH3.classList.add('r4o');
        element.appendChild(addH3);
      });
    }

    if (selectedValue === 'thanksgivingPoint') {
      fetchAndProcessData(thanksGivingPointApiUrl, 'ThanksGiving Point');
    } else if (selectedValue === 'foxHollow') {
      fetchAndProcessData(foxHollowApiUrl, 'Fox Hollow');
    } else if (selectedValue === 'spanishOaks') {
      fetchAndProcessData(spanishOaksApiUrl, 'Spanish Oaks');
    } else if (selectedValue === '') {
      const row2ElementsRemove = document.querySelectorAll('.row2');
      const row3ElementsRemove = document.querySelectorAll('.row3');
      const row4ElementsRemove = document.querySelectorAll('.row4');
      row2ElementsRemove.forEach((element) => {
        const removeH3 = element.querySelectorAll('h3');
        removeH3.forEach((removeH3) => {
          removeH3.remove();
        });
      });
      row3ElementsRemove.forEach((element) => {
        const removeH3 = element.querySelectorAll('h3');
        removeH3.forEach((removeH3) => {
          removeH3.remove();
        });
      });
      row4ElementsRemove.forEach((element) => {
        const removeH3 = element.querySelectorAll('h3');
        removeH3.forEach((removeH3) => {
          removeH3.remove();
        });
      });

      const reAdd2 = document.querySelectorAll('.reAdd2');
      reAdd2.forEach((element) => {
        const addH3 = document.createElement('h3');
        addH3.textContent = 'Yardage';
        element.appendChild(addH3);
      });
      const reAdd3 = document.querySelectorAll('.reAdd3');
      reAdd3.forEach((element) => {
        const addH3 = document.createElement('h3');
        addH3.textContent = 'Par';
        element.appendChild(addH3);
      });
      const reAdd4 = document.querySelectorAll('.reAdd4');
      reAdd4.forEach((element) => {
        const addH3 = document.createElement('h3');
        addH3.textContent = 'Handicap';
        element.appendChild(addH3);
      });

      const reAdd2T = document.querySelectorAll('.reAdd2T');
      reAdd2T.forEach((element) => {
        const addH3 = document.createElement('h3');
        addH3.classList.add('r2o');
        element.appendChild(addH3);
      });
      const reAdd3T = document.querySelectorAll('.reAdd3T');
      reAdd3T.forEach((element) => {
        const addH3 = document.createElement('h3');
        addH3.classList.add('r3o');
        element.appendChild(addH3);
      });
      const reAdd4T = document.querySelectorAll('.reAdd4T');
      reAdd4T.forEach((element) => {
        const addH3 = document.createElement('h3');
        addH3.classList.add('r4o');
        element.appendChild(addH3);
      });
    } else {
      alert("Error: Course Not Found.");
    }
  });
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
const foxHollowApiUrl = 'https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course18300.json';
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
  //console.log('Golf Course:', courseName);
  //console.log(data);
  currentCol = 1;
  totalYards = 0;
  totalPar = 0;
  totalHandicap = 0;
  for (let i = 0; i < data.holes.length; i++) {
    const holeInfo = data.holes[i];
    var holeNumber = holeInfo.hole;

    // Get Average Of The Four Yards.
    const tees = holeInfo.teeBoxes;
    var yardsArray = tees.map((tee) => tee.yards);
    var yardsAverage = getAverage(...yardsArray);

    const changeLocation = holeInfo.teeBoxes[0];
    var par = changeLocation.par;
    var handicap = changeLocation.hcp;

    // Show Data In Html.
    if (currentCol === holeNumber) {
      // YARDS
      const row2Elements = document.querySelectorAll('.row2');
      const withoutH3Yards = Array.from(row2Elements).find((element) => !element.querySelector('h3'));
      if (withoutH3Yards) {
        var newh3 = document.createElement('h3');
        newh3.textContent = yardsAverage;
        withoutH3Yards.appendChild(newh3);
      }

      // PAR
      const row3Elements = document.querySelectorAll('.row3');
      const withoutH3Par = Array.from(row3Elements).find((element) => !element.querySelector('h3'));
      if (withoutH3Par) {
        var newh3 = document.createElement('h3');
        newh3.textContent = par;
        withoutH3Par.appendChild(newh3);
      }

      // Handicap
      const row4Elements = document.querySelectorAll('.row4');
      const withoutH3Handicap = Array.from(row4Elements).find((element) => !element.querySelector('h3'));
      if (withoutH3Handicap) {
        var newh3 = document.createElement('h3');
        newh3.textContent = handicap;
        withoutH3Handicap.appendChild(newh3);
      }
      currentCol += 1;
      totalYards += yardsAverage;
      totalPar += par;
      totalHandicap += handicap;

      // Update Totals
      const r2o = document.querySelectorAll('h3.r2o');
      r2o.forEach((element) => {
        element.textContent = totalYards;
      });
      const r3o = document.querySelectorAll('h3.r3o');
      r3o.forEach((element) => {
        element.textContent = totalPar;
      });
      const r4o = document.querySelectorAll('h3.r4o');
      r4o.forEach((element) => {
        element.textContent = totalHandicap;
      });
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
