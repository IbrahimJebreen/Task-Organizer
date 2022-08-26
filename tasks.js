//  ======================== Don't delete this please 4 -7 =========================

// if(!localStorage.getItem('currentUser')){
//     alert('Please Login First');
//     location.href = 'index.html'
// }

let form = document.getElementById("tasks-form");
// let button = document.getElementById("delete-button");
const log = console.log;

// create an empty array to append all tasks to it... and append it (array) to local storage 
let allTasks = [];


// This must be to check if the array is empty or not and get the old way of calling items to the row/// items 
if (getDataFromLocal()) {

    allTasks = getDataFromLocal();
}


// ===================This constructor is for the login and signup form
function userTasks(title, description, priority,userID) {
    this.title = title
    this.description = description
    this.priority = priority

    this.userID=userID

} 

// ========================= This is the event listener 
form.addEventListener("submit", TaskCreator);



// ========================== This is the task creator function and save to local 
function TaskCreator(event) {

    

    event.preventDefault();

    let taskTitle = event.target.title.value;
    let taskDescription = event.target.description.value;
    let taskPriority = event.target.priority.value;
    let userID=JSON.parse(localStorage.getItem("currentUser")).userID;


    let newTask = new userTasks(taskTitle, taskDescription, taskPriority,userID);

    allTasks.push(newTask);

    log(allTasks);

    saveToLocal();

    addRowNumer();

    TableRow(event);

    form.reset(' ');

    /////////// TasksCard() creator for tasks card ///////

}

// ========================== getting the data from local 
function getDataFromLocal(){

    return JSON.parse(localStorage.getItem("Tasks"));
}


// ========================== saving the data to local 
function saveToLocal() {

    let tasksString = JSON.stringify(allTasks);

    localStorage.setItem("Tasks", tasksString);
}

////////  Calling the all the elemensts that required to append the table to the main section //////////////////

let divTable1 = document.getElementById("table-section");
let divTable2 = document.getElementById("backg");

divTable2.appendChild(divTable1);

let divTable3 = document.getElementById("div3");

divTable3.appendChild(divTable2);

let divTable4 = document.getElementById("div4");

divTable4.appendChild(divTable3);

let divTable5 = document.getElementById("div5")

divTable5.appendChild(divTable4);

let divTable6 = document.getElementById("div6");

divTable6.appendChild(divTable5);

let table1 = document.getElementById("tasks-table");

divTable1.appendChild(table1);

let tableBody = document.getElementById("table-body");

table1.appendChild(tableBody);


// counter to each row of the table 
let counter = 0;
function addRowNumer() {

    return counter = counter + 1;
}

// old way of calling items to the row///

// let rowsArray = [];

// ============================ this is the constructor for the table rows 
function TableRow(event) {
      
    let rowTitle1 = event.target.title.value;
    let rowTitle2 = event.target.description.value;
    let rowTitle3 = event.target.priority.value;
    // debugger
    let indexNumber = getDataFromLocal().length;

    createRow(rowTitle1, rowTitle2, rowTitle3, indexNumber);

}

function genrateRowData(){




    let tasks = getDataFromLocal().filter((task)=>task.userID==JSON.parse(localStorage.getItem("currentUser")).userID)


    if(tasks){
        tasks.forEach((task, index) => {
            
            createRow(task.title, task.description, task.priority,index+1);

        });
    }
}

// create the row
function createRow(rowTitle1, rowTitle2, rowTitle3, number){
// creating the new row 
let newRow = document.createElement("tr");
tableBody.appendChild(newRow);

let tableHead = document.createElement("th");
tableHead.textContent = number;
newRow.appendChild(tableHead);


let td1 = document.createElement("td");
td1.textContent = rowTitle1;
newRow.appendChild(td1);

let td2 = document.createElement("td");
td2.textContent = rowTitle2;
newRow.appendChild(td2);

let td3 = document.createElement("td");
td3.textContent = rowTitle3;
newRow.appendChild(td3);

let td4 = document.createElement("td");
newRow.appendChild(td4);

let select1 = document.createElement("select");
td4.setAttribute("id", "mySelect");
td4.appendChild(select1);
select1.style.borderRadius = "20";

var option0 = document.createElement("option");
var t0 = document.createTextNode("Select status");
option0.setAttribute("id", "main-select");
option0.appendChild(t0);
select1.appendChild(option0);


var option1 = document.createElement("option");
option1.setAttribute("value", "Completed");
var t1 = document.createTextNode("Completed");
option1.appendChild(t1);
select1.appendChild(option1);


var option2 = document.createElement("option");
option2.setAttribute("value", "Incomplete");
var t2 = document.createTextNode("Incomplete");
option2.appendChild(t2)
select1.appendChild(option2);


let button = document.createElement("button");
let td5 = document.createElement("td");
td5.appendChild(button);
button.textContent = "Delete";
button.className = "btn btn-danger";
button.type = "submit";

newRow.appendChild(td5);
}

genrateRowData();

let logout = document.getElementById("logout");
logout.addEventListener('click', (event) => {
     let logout = confirm("Are you sure?");
    if (logout) { location.href = 'index.html' }
    else { location.href = 'tasks.html' }
})




