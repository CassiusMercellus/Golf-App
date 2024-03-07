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
    // Option Vars
    let players = [];
    document.querySelector('.createPlayerButton').addEventListener('click', createPlayer);

    function createPlayer() {

        const playerName = document.querySelector('.insertPlayerName');
        const playerNameValue = playerName.value;

        const playerCoursesSelect = document.getElementById('playerCourses');
        const selectedOption = playerCoursesSelect.value;

        if (players.length >= 5) {
            console.log("to many players")
        } else {
            if (playerNameValue !== '' && selectedOption !== '') {

                const newPlayer = {
                    playerName: playerNameValue,
                    selectedOption: selectedOption
                };
                players.push(newPlayer);
                displayPlayers();
                displayPlayersMain();
                
                playerName.value = '';
                playerCoursesSelect.selectedIndex = '';

            } else {
                console.log("nothin")
            }
        }

    }

    const playerList = document.querySelector(".playerList");

    function displayPlayers() {
        playerList.innerHTML = '';
        players.forEach((player, index) => {
            const div = document.createElement('div');
            div.classList.add('playerTemplate');
            div.innerHTML = `
                <h4 class="playerCourse">${player.selectedOption}</h4>
                <p class="playerName">${player.playerName}</p>
                <button class="deletePlayer">Delete Player</button>
            `;
            playerList.appendChild(div);

            div.querySelector(".deletePlayer").addEventListener("click", function () {
                deletePlayer(index);
            });
            console.log(players)
        });
        displayPlayersMain();
        
    }
    
    function deletePlayer(index) {
        if(index !== -1) {
            players.splice(index, 1);
            displayPlayers();
            displayPlayersMain();
        } 
    }

    /* 
    Display on main card function
    - Align the lowest number in the players array or the first item WITH the
    right location item 
    - Take the ID from the HTML playerMainLists and align it with the player item

    - compare the two values of selected option main and each player item
    */

    const playerMainList = document.querySelector(".playerTable");

    function displayPlayersMain() {
        const playerCoursesSelectMain = document.getElementsByClassName('courses');
        const selectedOptionMain = playerCoursesSelectMain.value;
        
        playerMainList.innerHTML = '';
        players.forEach((player, index) => {
            const div = document.createElement('div');
            div.classList.add('playerMainList');
            div.innerHTML = `
                <h3>${player.playerName}</h3>
            `;
            playerMainList.appendChild(div);

            console.log(players)
        });
    }
    

});
