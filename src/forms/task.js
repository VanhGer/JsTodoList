import { de } from "date-fns/locale";
import { Task, Project, ProjectList } from "./class";
import list from "./management";
import '../tabs/tab.css';


function displayTask(project, tab) {
    const mainContent = tab.getElementById('projectContent');
}

function addTaskBtnOnClick(addTaskBtn, project) {
    addTaskBtn.addEventListener('click', () => {
        const popUp = document.getElementById('popUp');
        const taskForm = document.getElementById('taskForm');
        const projectForm = document.getElementById('projectForm');
        if (projectForm.classList.contains('active')) {
            projectForm.classList.remove('active');
        }
        if (popUp.classList.contains('active') && taskForm.classList.contains('active')) {
            return;
        }
        if (! taskForm.classList.contains('active')) taskForm.classList.add('active');
        if (! popUp.classList.contains('active')) popUp.classList.add('active');
    })
}

function createConfirmEvent(project) {
    const confirmBtn = document.getElementById('task-confirmBtn');
    confirmBtn.replaceWith(confirmBtn.cloneNode(true));

    confirmBtn.addEventListener('click', taskConfirmOnClick(popUp, taskForm, project));
} 

function taskConfirmOnClick(popUp, taskForm, project) {
    return function confirm() {
        const title = document.getElementById('title-input').value;
        const description = document.getElementById('title-input').value;
        const date = document.getElementById('date-input').value;
        
        //check
        console.log(project.title);
        console.log(date);


        if (title === '') {
            alert("please enter the title");
            return;
        }

        if (date === '') {
            alert("please choose the date");
            return;
        }

        const newTask = new Task(title, description, date);
        taskForm.classList.remove('active');
        popUp.classList.remove('active');
        project.addTask(newTask);
        taskFormt.reset();
        //setData()
        //showProject();
    }
}



function taskCancelOnClick(popUp, taskForm) {
    return function confirm() {
        popUp.classList.remove('active');
        taskForm.classList.remove('active');
        taskForm.reset();
        //showProject();
    }
}

function setTaskForm() {

    const popUp = document.createElement('div');
    popUp.classList.add('popUp');
    popUp.setAttribute('id', 'popUp');
    popUp.classList.add('inactive');


    const taskForm = document.createElement('form');
    taskForm.classList.add('taskForm');
    taskForm.classList.add('inactive');
    console.log(taskForm.style.display); 
    taskForm.setAttribute('id', 'taskForm');
    
    //set attribute for form
    const formTitle = document.createElement('div');
    formTitle.textContent = 'Add a task';
    formTitle.classList.add('form-title');
    taskForm.appendChild(formTitle);

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title');
    title.setAttribute('maxlength', '20');
    title.id = 'title-input';
    taskForm.appendChild(title);

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('placeholder', 'Description (Optional)');
    description.setAttribute('maxlength', '50');
    description.id = 'description-input';
    taskForm.appendChild(description);

    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.id = 'date-input';
    taskForm.appendChild(date);

    //set button
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('form-btn-container');
    taskForm.appendChild(btnContainer);

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('form-confirm-btn');
    confirmBtn.setAttribute('type', 'button');
    confirmBtn.id = "task-confirmBtn";
    //confirmBtn.addEventListener('click', taskConfirmOnClick(popUp, taskForm));
    confirmBtn.textContent = 'Confirm';
    btnContainer.appendChild(confirmBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('form-cancel-btn');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.addEventListener('click', taskCancelOnClick(popUp, taskForm));
    cancelBtn.textContent = 'Cancel';
    btnContainer.appendChild(cancelBtn);

    popUp.appendChild(taskForm);
    document.body.appendChild(popUp);
}

export {setTaskForm, addTaskBtnOnClick};