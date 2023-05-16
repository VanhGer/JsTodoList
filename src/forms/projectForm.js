import { Task, Project, ProjectList } from "./class";
import list from "./formManagement";

function setActive(form, project) {
    return function active() {
        if (form.classList.contains('active') && project.classList.contains('active')) {
            return;
        }
        if (! project.classList.contains('active')) project.classList.add('active');
        if (! form.classList.contains('active')) form.classList.add('active');
        console.log(form.classList);
        console.log(project.classList);
    }
}

function showProject() {
    
}

function projectConfirmOnClick(form, project) {
    return function confirm() {
        project.classList.remove('active');
        form.classList.remove('active');
        const title = document.getElementById('title-input').value;
        const newprj = new Project(title);
        list.addProject(newprj); 
        project.reset();
        //setData()
        showProject();
    }
}

function projectCancelOnClick(form, project) {
    return function confirm() {
        project.classList.remove('active');
        form.classList.remove('active');
        project.reset();
        showProject();
    }
}

function setProjectForm() {
    const addBtn = document.getElementById('addBtn');

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
    title.id = 'title-input';
    projectForm.appendChild(title);

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

    popUp.appendChild(projectForm);
    document.body.appendChild(popUp);

    addBtn.addEventListener('click', setActive(popUp, projectForm));
}

export default setProjectForm;