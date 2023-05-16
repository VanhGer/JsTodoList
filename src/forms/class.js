class Task {
    constructor(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
    }
}

class Project {
    constructor(title) {
        this.tasks = [];
        this.title = title;
    }

    addTask(newTask) {
        if (!this.isAlreadyIn(newTask))  this.tasks.push(newTask);
        else alert("This task is already in your project.")
    }

    removeTask(title) {
        this.tasks = this.tasks.filter((task) => task.title !== title);
    }

    getTask(title) {
        return this.tasks.filter((task) => task.title === title);
    }

    isAlreadyIn(newTask) {
        return this.tasks.some((task) => task.title === newTask.title);
    }

    indexOf(task) {
        if (this.isAlreadyIn(task)) {
            return this.tasks.indexOf(task);
        }
    }

    copy(prj) {
        this.tasks = prj.tasks;
    }
}

class ProjectList {
    constructor() {
        this.list = [];
    }
    addProject(newProject) {
        if (!this.isAlreadyIn(newProject))  this.list.push(newProject);
        else alert("This project is already in your list.")
    }

    removeProject(title) {
        this.list = this.list.filter((project) => project.title !== title);
    }

    getProject(title) {
        return this.list.filter((project) => project.title === title);
    }

    isAlreadyIn(newProject) {
        return this.list.some((project) => project.title === newProject.title);
    }

    indexOf(project) {
        if (this.isAlreadyIn(project)) {
            return this.list.indexOf(project);
        }
    }

    copy(lst) {
        this.list = lst.list;
    }

    sz() {
        return this.list.length;
    }
}

export {Task, ProjectList, Project};