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
    tmpTab.classList.add('newTab');
    tmpTab.classList.add(name);
    return tmpTab;
}

function onClick(tab) {
    return function switchTab () {
        if (tab.classList.contains('active')) {
            return;
        }
        document.querySelectorAll('.newTab').forEach((tab) => tab.classList.remove('active'));
        tab.classList.add('active');
    }
}

function addOnClick(btn, tab) {
    btn.addEventListener('click', onClick(tab));
}

export {createTabBtn, createTab, addOnClick};