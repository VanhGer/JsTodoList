import { Task, Project, ProjectList } from "./class";
import { showProjectList } from "./project";

function setData(list) {  
    localStorage.clear();
    localStorage.setItem('myList', JSON.stringify(list));
}

function restore() {
    if (!localStorage.myList) {
        return new ProjectList();
    } else {
        let obj = JSON.parse(localStorage.getItem('myList'));
        return obj;
    }
}

export { setData, restore};