import { de } from "date-fns/locale";
import { Task, Project, ProjectList } from "./class";
import {list, setData} from "./management";
import '../tabs/tab.css';
import { parseJSON } from "date-fns";
import add from 'date-fns/add';

function addTaskBtnOnClick(addTaskBtn,  project) {
    addTaskBtn.addEventListener('click', () => {
        const taskForm = createTaskForm(project);
        const taskPopUp = document.getElementById('taskPopUp');
        taskPopUp.innerHTML = '';
        taskPopUp.appendChild(taskForm);
        if (! taskPopUp.classList.contains('active')) taskPopUp.classList.add('active');
        if (! taskForm.classList.contains('active')) taskForm.classList.add('active');
    })
}

function addStaticTask(task) {
    const allPrj = list.getProject('All')[0];
    const weekPrj = list.getProject('Week')[0];
    const todayPrj = list.getProject('Today')[0];
    if (allPrj) {
        for (let taskk of allPrj.tasks) {
            console.log(taskk);
        }
    }
    else console.log('cc');
    allPrj.addTask(task);
    console.log('ok');

    const itemDate = new Date(task.date);
    itemDate.setHours(0, 0, 0, 0);
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    if (itemDate.getTime() === date.getTime()) {
      todayPrj.addTask(task);
    }

    const nextWeek = add(date, { days: 7 });
    const lastWeek = add(date, { days: -7 });
    if (lastWeek < itemDate && itemDate < nextWeek) {
      weekPrj.addTask(task);
    } 
    setData();
}

function removeStaticTask(task) {
    const allPrj = list.getProject('All')[0];
    const weekPrj = list.getProject('Week')[0];
    const todayPrj = list.getProject('Today')[0];


    allPrj.tasks.splice(allPrj.indexOf(task), 1);
    weekPrj.tasks.splice(weekPrj.indexOf(task), 1);
    todayPrj.tasks.splice(todayPrj.indexOf(task), 1);

}

function staticPrj(project) {
    if (project.title === 'Today') return true;
    if (project.title === 'Week') return true;
    if (project.title === 'All') return true;
    return false;
}

function displayTask(task, project) {  
    const newTask = document.createElement('div');
    newTask.classList.add('taskDisplay');

    const close = document.createElement('div');
    if (staticPrj(project) == false) {

        close.textContent = "☒";
        close.classList.add('closeBtn');

        close.addEventListener('click', () => {
            project.tasks.splice(project.indexOf(task), 1);
            removeStaticTask(task);
            setData();
            showProject(project);
        })
    }

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
    if (staticPrj(project) == false) {newTask.appendChild(close);}

    return newTask;
}

function renderTask(task, mainContent, project) {
    const curTask = displayTask(task, project);
    mainContent.appendChild(curTask);
}

function showProject(project) {  
    const mainContent = document.getElementById('projectContent');
    mainContent.innerHTML = '';
    for (let task of project.tasks) {
        renderTask(task, mainContent, project);
    }
}

function taskConfirmOnClick(taskForm, project) {
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
        taskPopUp.classList.remove('active');
        taskPopUp.innerHTML = '';
        project.addTask(newTask);
        addStaticTask(newTask);
        taskForm.reset();
        setData()
        showProject(project);
    }
}



function taskCancelOnClick(taskForm) {
    return function confirm() {
        taskForm.classList.remove('active');
        taskForm.reset();
        const taskPopUp = document.getElementById('taskPopUp');
        taskPopUp.classList.remove('active');
        taskPopUp.innerHTML = '';
        //showProject();
    }
}

function createTaskForm(project) {

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
    confirmBtn.addEventListener('click', taskConfirmOnClick(taskForm, project));
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

export {addTaskBtnOnClick, showProject};