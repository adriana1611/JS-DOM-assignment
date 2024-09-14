// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.


//initializing variable id to 0. (used to uniquely identify each row that you add to the table.)
let id = 0;

//adding event listener to the button element in the html file
document.getElementById('button').addEventListener("click", () => {

    let table = document.getElementById('table');
    let row = table.insertRow(-1);  // i put -1 so it can go to the bottom of the list
  
    
    row.insertCell(0).innerHTML = document.getElementById('new-movie').value; 
    row.insertCell(1).innerHTML = document.getElementById('tickets').value;
  
 //clears the value of the input field
    document.getElementById(`new-movie`).value= '';
    document.getElementById(`tickets`).value= '';
    id++;
});
//card body color
document.getElementById('card-body').style.backgroundColor = 'pink'
//border around table
table.style.border = '5px solid purple'


