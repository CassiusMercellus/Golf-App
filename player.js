document.addEventListener('DOMContentLoaded', function() {
    // Header Functions
    // chev vars
    const chevs = document.querySelectorAll(".bi-chevron-left, .bi-chevron-right");
    let swap = 'table1';

    // option vars

    const options = document.querySelectorAll(".bi-list, .bi-x-lg");
    let optionMenu = 'closed';

    chevs.forEach(function(chev) {
        chev.addEventListener("click", function () {
        
            const table1 = document.getElementsByClassName('table1')[0]; // Accessing first element by index
            const table2 = document.getElementsByClassName('table2')[0]; // Accessing first element by index
            
            if (swap === 'table1') {
                swap = 'table2';
                table1.style.display = "none";
                table2.style.display = "flex";
            } else {
                swap = 'table1';
                table2.style.display = "none";
                table1.style.display = "flex";
            }
        });
    });


    options.forEach(function(option) {
        option.addEventListener("click", function () {
        
            const optionStatus = document.getElementsByClassName('options')[0]; // Access first element by index
            
            if (optionMenu === 'open') {
                optionMenu = 'closed';
                optionStatus.style.display = "none";
                
            } else {
                optionMenu = 'open';
                optionStatus.style.display = "flex";
            }
        });
    });
    // Option Functions
    document.querySelector('.createPlayerButton').addEventListener('click', createPlayer);

    

    function createPlayer() {

        const playerName = document.querySelector('.insertPlayerName');
        const playerNameValue = playerName.value;

        const playerCoursesSelect = document.getElementById('playerCourses');
        const selectedOption = playerCoursesSelect.value;

        if (playerNameValue !== '' && selectedOption !== '') {
            console.log("Player name:", playerNameValue, "Course:", selectedOption);
        } else {
            console.log("nothin")
        }
    }
});

/* 
Option Functions (Options menu)
1. Create Player Function
 - Creates a new player
 - Ensures the player has a name and is added to a course 
 otherwise create player button will not work
 - Displays the player when the courses its added to is present

2. Delete player Function
 - Delete specific player button

*/