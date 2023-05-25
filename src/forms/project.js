import { Task, Project, ProjectList } from "./class";
import {list, setData}  from "./management";
import { addOnClick, createTab } from "../static-btntab";
import { addTaskBtnOnClick, removeStaticTask} from "./task";
//set active for form.
function setActive(popUp, projectForm) {
    return function active() {
        if (popUp.classList.contains('active') && projectForm.classList.contains('active')) {
            return;
        }
        if (! projectForm.classList.contains('active')) projectForm.classList.add('active');
        if (! popUp.classList.contains('active')) popUp.classList.add('active');
    }
}

function staticPrj(project) {
    if (project.title === 'Today') return true;
    if (project.title === 'Week') return true;
    if (project.title === 'All') return true;
    return false;
}
// show project list.
function showProjectList() {
    const dynamicBtns = document.getElementById('dynamicBtns');

    dynamicBtns.innerHTML = '';
    for (let project of list.list) {
        if (staticPrj(project)) {
            continue;
        }
        renderProject(project, dynamicBtns);
    }
}

// render project
function renderProject(project, dynamicBtns) {

    const newPrjBtn = document.createElement('div');
    newPrjBtn.classList.add('dynamicBtn');

    const newPrj = document.createElement('div');
    newPrj.classList.add('dynamic');

    const close = document.createElement('div');
    close.textContent = "☒";
    close.classList.add('closeBtn');
    newPrjBtn.appendChild(close);


    //close
    close.addEventListener('click', () => {
        list.list.splice(list.indexOf(project), 1);
        const content = document.getElementById('content');
        content.innerHTML = '';
        for (let task of project.tasks) {
            removeStaticTask(task);
        }
        setData();
        showProjectList();
    })

    const title = document.createElement('div');
    title.textContent = project.title;
    title.classList.add('projectTitle');
    newPrj.appendChild(title);
    newPrjBtn.appendChild(newPrj)
    dynamicBtns.appendChild(newPrjBtn);

    // link to new Tab
    const prjTab = createTab(project.title);
    const heading = document.createElement('p');
    heading.textContent = project.title;
    heading.classList.add('contentHeading');
    prjTab.appendChild(heading);

    const mainContent = document.createElement('div');
    mainContent.classList.add('projectContent');
    mainContent.setAttribute('id', 'projectContent')
    prjTab.appendChild(mainContent);

    addOnClick(newPrj, prjTab, project);

    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "＋ Add task";
    addTaskBtn.classList.add('addTaskBtn');
    prjTab.appendChild(addTaskBtn);
    addTaskBtnOnClick(addTaskBtn, project);
    
}


function projectConfirmOnClick(popUp, projectForm) {
    return function confirm() {
        const title = document.getElementById('project-title-input').value;
        if (title === '') {
            alert("please enter the title");
            return;
        }
        const newprj = new Project(title);
        popUp.classList.remove('active');
        projectForm.classList.remove('active');
        list.addProject(newprj); 
        projectForm.reset();
        setData()
        showProjectList();
    }
}

function projectCancelOnClick(form, project) {
    return function confirm() {
        project.classList.remove('active');
        form.classList.remove('active');
        project.reset();
        showProjectList();
    }
}

function setProjectForm() {
    //setTaskForm();
    const addBtn = document.getElementById('addBtn');

    const taskPopUp = document.createElement('div');
    taskPopUp.classList.add('popUp');
    taskPopUp.setAttribute('id', 'taskPopUp');
    taskPopUp.classList.add('inactive');

    const popUp = document.createElement('div');
    popUp.classList.add('popUp');
    popUp.setAttribute('id', 'popUp');
    popUp.classList.add('inactive');


    const projectForm = document.createElement('form');
    projectForm.classList.add('projectForm');
    projectForm.classList.add('inactive');
    projectForm.setAttribute('id', 'projectForm');
    
    const formTitle = document.createElement('div');
    formTitle.textContent = 'Add a project';
    formTitle.classList.add('form-title');
    projectForm.appendChild(formTitle);

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title');
    title.setAttribute('maxlength', '15');
    title.id = 'project-title-input';
    title.required = true;
    projectForm.appendChild(title);


    popUp.appendChild(projectForm);
    document.body.appendChild(popUp);
    document.body.appendChild(taskPopUp);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('form-btn-container');
    projectForm.appendChild(btnContainer);

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('form-confirm-btn');
    confirmBtn.setAttribute('type', 'button');
    confirmBtn.addEventListener('click', projectConfirmOnClick(popUp, projectForm));
    confirmBtn.textContent = 'Confirm';
    btnContainer.appendChild(confirmBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('form-cancel-btn');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.addEventListener('click', projectCancelOnClick(popUp, projectForm));
    cancelBtn.textContent = 'Cancel';
    btnContainer.appendChild(cancelBtn);


    addBtn.addEventListener('click', setActive(popUp, projectForm));
}

export {setProjectForm, showProjectList};