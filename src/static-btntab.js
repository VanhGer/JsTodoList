import { ta } from "date-fns/locale";
import { showProject } from "./forms/task";

function createTabBtn(name, className) {
    const staticBtns = document.getElementById('staticBtns');
    const newBtn = document.createElement('button');
    newBtn.classList.add(className);
    newBtn.textContent = name;
    staticBtns.appendChild(newBtn);
    return newBtn;
}

function createTab(name) {
    const tmpTab = document.createElement('div');
    tmpTab.classList.add(name);
    tmpTab.classList.add('newTab');
    return tmpTab;
}


function addOnClick(btn, tab, project) {
    btn.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.innerHTML = '';
        content.appendChild(tab);

        showProject(project);
    });
}

export {createTabBtn, createTab, addOnClick};