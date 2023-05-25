import './style.css';
import './tabs/tab.css';
import './forms/form.css';
import createStructure from './structure';
import { createTabBtn, createTab, addOnClick} from "./static-btntab";
import makeTodayTab from './tabs/today';
import makeWeekTab from './tabs/week';
import makeAllTab from './tabs/all';
import makeWelcomeTab from './tabs/welcome';
import {setProjectForm} from './forms/project';
import {list, restore, setData} from './forms/management';
import { Project } from './forms/class';

createStructure();
//localStorage.clear();
const content= document.getElementById('content');
const todayBtn = createTabBtn('Today', 'static');
const weekBtn = createTabBtn('This week', 'static');
const allBtn = createTabBtn('All', 'static');

const todayTab = makeTodayTab(createTab('today'));
const weekTab = makeWeekTab(createTab('week'));
const allTab = makeAllTab(createTab('all'));
const welcomeTab = makeWelcomeTab(createTab('welcome'));

restore();
let todayPrj = new Project('Today');
let weekPrj = new Project('Week');
let allPrj = new Project('All');
if (list.sz() == 0) {
    list.addProject(todayPrj);
    list.addProject(weekPrj);
    list.addProject(allPrj);
} else {
    allPrj = list.getProject('All')[0];
    weekPrj = list.getProject('Week')[0];
    todayPrj = list.getProject('Today')[0];
}
addOnClick(todayBtn, todayTab, todayPrj);
addOnClick(weekBtn, weekTab, weekPrj);
addOnClick(allBtn, allTab, allPrj);


content.appendChild(welcomeTab);


setProjectForm();
