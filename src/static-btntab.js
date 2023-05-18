import { ta } from "date-fns/locale";

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
    if (name === 'today')
        tmpTab.setAttribute('id', 'todayTab');
    return tmpTab;
}


function addOnClick(btn, tab, project = null) {
    btn.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.innerHTML = '';
        content.appendChild(tab);
        console.log("addon");
        /**
        if (tab.classList.contains('allTab')) 
            displayAll();
        else if (tab.classList.contains('weekTab'))
            displayWeek();
        else if (tab.classList.contains('todayTab'))
            displayToday();
        else 
            displayTask(project);
        */
    });
}

export {createTabBtn, createTab, addOnClick};