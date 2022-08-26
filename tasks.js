// if(!localStorage.getItem('currentUser')){
//     alert('Please Login First');
//     location.href = 'index.html'
// }

let form = document.getElementById("tasks-form");
const log = console.log;
let allTasks = [];
// let table = document.getElementById("tasks-table");
let tableSection = document.getElementById("table-section");

// This must be to check if the array is empty or not and get the old items 
if (getDataFromLocal()) {

    allTasks = getDataFromLocal();
}

function userTasks(title, description, priority) {

    this.title = title
    this.description = description
    this.priority = priority
}

form.addEventListener("submit", TaskCreator);


function TaskCreator(event) {

    event.preventDefault();

    let taskTitle = event.target.title.value;
    let taskDescription = event.target.description.value;
    let taskPriority = event.target.priority.value;

    let newTask = new userTasks(taskTitle, taskDescription, taskPriority);

    allTasks.push(newTask);

    log(allTasks);

    saveToLocal();

    form.reset(' ');
    
    // rowCreator();



    // taking the first task to put inside the table test
    let tableTask = document.getElementById("task-name");
    tableTask.textContent = taskTitle ;

    // TaskCard()// creator for tasks
}

function getDataFromLocal() {

    return JSON.parse(localStorage.getItem("Tasks"));
}

function saveToLocal() {

    let tasksString = JSON.stringify(allTasks);

    localStorage.setItem("Tasks", tasksString);

}

// creating all table heads 

let table1 = document.createElement('table');
table1.className = "table1";
tableSection.appendChild(table1);

let tableHead = document.createElement("thead");
table1.appendChild(tableHead);

let tableData1 = document.createElement("th");
tableData1.textContent = "No.";
tableHead.appendChild(tableData1);

let tableData2 = document.createElement("th");
tableData2.textContent = "Todo item";
tableHead.appendChild(tableData2);

let tableData3 = document.createElement("th");
tableData3.textContent = "Status";
tableHead.appendChild(tableData3);

let tableData4 = document.createElement("th");
tableData4.textContent = "Actions";
tableHead.appendChild(tableData4);

function rowCreator(){

}


// let testDiv = document.createElement("div");

// tableSection.appendChild(testDiv);

// testDiv.className ="container py-5 h-100";
// testDiv.textContent = "Hellow world";

// testDiv.style.backgroundColor = "red";


let logout=document.getElementById("logout");
logout.addEventListener('click',(event)=>{
    event.preventDefault();
   let logout= confirm("Are you sure?");
if(logout){
    location.href = 'index.html'
}else{
    location.href = 'tasks.html'
}
})
