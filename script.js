let c=0;
function addTask(){
    let task=document.getElementById("task").value;  
    console.log(task);
    displayTask(task);
    clearInput();
    c++;


}

function displayTask(newTask){
    document.getElementById("task-list").innerHTML+=`<li id="${c}">${newTask} <button onclick="deleteTask(${c})">Delete </button> </li>`;

}


function clearInput(){
    document.getElementById("task").value="";
    document.getElementById("task").focus();
}

function deleteTask(taskID){
    console.log("Deleting task"+taskID);
    document.getElementById(taskID).remove();

}


