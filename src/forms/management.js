import { Task, Project, ProjectList } from "./class";
import { showProjectList } from "./project";

let list = new ProjectList();
function setData() {  
    localStorage.removeItem('myList');
    localStorage.setItem('myList', JSON.stringify(list));
} 

function restore() {
    if (!localStorage.myList) {
        showProjectList();
    } else {
        let obj = JSON.parse(localStorage.getItem('myList'));
        obj.list = obj.list.map((item) => {
            return Project.createNew(item);
        });
        list = ProjectList.createNew(obj);
        showProjectList();
    } 
}

export {list, setData, restore};