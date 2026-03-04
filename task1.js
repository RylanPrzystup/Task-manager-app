
let tasks=[]//blank array; global array

function addTask(){
const input= document.getElementById('taskInput')/* sets the input var as the string entered from task input */
const task = input.value.trim()/* gets rid of spaces that are usless */  /* Takes the const of input and assings that as task var */

if(task!==""){/* if the task is not blank when submitted, run this loop */
    tasks.push(task)
    input.value='';
    console.log (tasks)
    displayTasks()/* is empty becuase we're not passing a value from function to funcion. this will just tell displayTasks function to run after addTask */
}
}

function displayTasks(){
const taskList = document.getElementById('taskList')/* assigns the tasklist var in js with the value from html element with id='tasklist' */
 let html = ""/* assigns html as a blank screen */
tasks.forEach((task, i) => {
    html += `
        <div class="trackItem">
        <span class="taskText">${i+1}. ${task}</span>
        </div>
        <div class="buttonGroup">
        <button class="editButton" onclick="editTask(${i})">Edit</button>
        <button class="deleteButton" onclick="deleteTask(${i})">Delete</button>
        </div>
    `;
}
)
    /* ${i+1}  becuase i starts at 0, this counts from 1*/
    /* ${tasks[i]} is writing in html the value of said postion in the array. if tasks[0]  and tasks["we, you, me, us]. In will type 'we' in html*/
    /* this loop continues through the array with each input becauase it is called by the add task function wich happens when we add a task */
    /* line 27-30 will add 2 buttons in the html */
    /* each will create a button on the page where, on click, will run that respective function */
    /* (${i}) in in the funtions so they pass hat index to the function */


taskList.innerHTML= html;
console.log(tasks)
}

/* edit function task which gets called by html addition from displayTasks function */

function editTask(index){ /* index will get replaced with value of i from html function */
    const newTask = prompt('Edit Task: ', tasks[index])/* replaces [index] with i, which then replaces with the text assigned value */


    if (newTask !== null && newTask.trim() !==""){
        /* null happens when there is not new input from promt. so the condition is that is not blank, and that there are no extra spaces due to .trim */

    tasks[index] = newTask;/* reassigns the task at the index/i in the array and replaceds it  */
    displayTasks();/* after running through, edit, runs back through display to update */

    }
    
}

function deleteTask(index){
    tasks.splice(index, 1)
    console.log(tasks)
    displayTasks()
}