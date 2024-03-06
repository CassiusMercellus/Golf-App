document.addEventListener('DOMContentLoaded', function() {
    const tableSwap = document.addEventListener('click', tableSwap)

    function tableSwap() {
        let swap = 'tabel1';
        const table1 = document.getElementByClassName( 'table1' );
        const table2 = document.getElementByClassName( 'table2' );
        
        if (swap = 'table1') {
            swap =  'tabel2';
            table1.style.display = "none";
            table2.style.display = "flex";
            
        } else {
            swap =  'tabel1';
            table2.style.display = "none";
            table1.style.display = "flex";
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

3. Edit player Function
 - Edit specific player button (removes and adds courses/changes the name)

Header functions (main table)
1. Toggle Table Function
    - Simply swaps the display value for table 1 and 2 both chevrons 
    function the same
2. Options Menu function
 - Allows you to click on the options button and it will 
 bring up the options menu
 - Can click the X on the options menu to close the menu
*/