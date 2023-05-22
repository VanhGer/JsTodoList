import { de } from "date-fns/locale";
import { Task, Project, ProjectList } from "./class";
import list from "./management";
import '../tabs/tab.css';


function addTaskBtnOnClick(addTaskBtn, tab,  project) {
    addTaskBtn.addEventListener('click', () => {
        const taskForm = createTaskForm(project, tab);
        const taskPopUp = document.getElementById('taskPopUp');
        taskPopUp.innerHTML = '';
        taskPopUp.appendChild(taskForm);
        if (! taskPopUp.classList.contains('active')) taskPopUp.classList.add('active');
        if (! taskForm.classList.contains('active')) taskForm.classList.add('active');
    })
}

function displayTask(task) {  
    const newTask = document.createElement('div');
    newTask.classList.add('taskDisplay');

    const head = document.createElement('p');
    head.classList.add('taskHeader');
    head.textContent = task.title;

    const des = document.createElement('p');
    des.classList.add('taskDes');
    des.textContent = task.description;

    const date = document.createElement('p');
    date.classList.add('taskDate');
    date.textContent = task.date;

    const content = document.createElement('div');
    content.classList.add('taskContent');
    content.appendChild(head);
    content.appendChild(des);
    newTask.appendChild(content);
    newTask.appendChild(date);

    return newTask;
}

function renderTask(task, mainContent) {
    const curTask = displayTask(task);
    mainContent.appendChild(curTask);
}

function showProject(tab, project) {  
    const mainContent = document.getElementById('projectContent');
    mainContent.innerHTML = '';
    for (let task of project.tasks) {
        renderTask(task, mainContent);
    }
}

function taskConfirmOnClick(taskForm, tab, project) {
    return function confirm() {
        const title = document.getElementById('task-title-input').value;
        const description = document.getElementById('task-description-input').value;
        const date = document.getElementById('task-date-input').value;

        if (title === '') {
            alert("please enter the title");
            return;
        }

        if (date === '') {
            alert("please choose the date");
            return;
        }

        const newTask = new Task(title, description, date);
        const taskPopUp = document.getElementById('taskPopUp');
        taskForm.classList.remove('active');
        taskPopUp.remove('active');
        project.addTask(newTask);
        taskForm.reset();
        //setData()
        showProject(tab, project);
    }
}



function taskCancelOnClick(taskForm) {
    return function confirm() {
        taskForm.classList.remove('active');
        taskForm.reset();
        const taskPopUp = document.getElementById('taskPopUp');
        taskPopUp.remove('active');
        //showProject();
    }
}

function createTaskForm(project, tab) {

    const taskForm = document.createElement('form');
    taskForm.classList.add('taskForm');
    taskForm.classList.add('inactive');
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
    title.id = 'task-title-input';
    taskForm.appendChild(title);

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('placeholder', 'Description (Optional)');
    description.setAttribute('maxlength', '50');
    description.id = 'task-description-input';
    taskForm.appendChild(description);

    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.id = 'task-date-input';
    taskForm.appendChild(date);

    //set button
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('form-btn-container');
    taskForm.appendChild(btnContainer);

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('form-confirm-btn');
    confirmBtn.setAttribute('type', 'button');
    confirmBtn.id = "task-confirmBtn";
    confirmBtn.addEventListener('click', taskConfirmOnClick(taskForm, tab, project));
    confirmBtn.textContent = 'Confirm';
    btnContainer.appendChild(confirmBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('form-cancel-btn');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.addEventListener('click', taskCancelOnClick(taskForm));
    cancelBtn.textContent = 'Cancel';
    btnContainer.appendChild(cancelBtn);

    return taskForm;
}

export {addTaskBtnOnClick};