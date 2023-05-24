import './style.css';
import './tabs/tab.css';
import './forms/form.css';
import createStructure from './structure';
import { createTabBtn, createTab, addOnClick} from "./static-btntab";
import makeTodayTab from './tabs/today';
import makeWeekTab from './tabs/week';
import makeAllTab from './tabs/all';
import {setProjectForm} from './forms/project';
import { Project, ProjectList } from './forms/class';
import { setData, restore } from './forms/management';

createStructure();

const content= document.getElementById('content');
const todayBtn = createTabBtn('Today', 'static');
const weekBtn = createTabBtn('This week', 'static');
const allBtn = createTabBtn('All', 'static');

const todayTab = makeTodayTab(createTab('today'));
const weekTab = makeWeekTab(createTab('week'));
const allTab = makeAllTab(createTab('all'));

const todayPrj = new Project('Today');
const weekPrj = new Project('Week');
const allPrj = new Project('All');


const list = new ProjectList(restore());
console.log(list);
list.addProject(todayPrj);
list.addProject(weekPrj);
list.addProject(allPrj);
setData(list);

addOnClick(todayBtn, todayTab, todayPrj);
addOnClick(weekBtn, weekTab, weekPrj);
addOnClick(allBtn, allTab, allPrj);

content.appendChild(todayTab);


setProjectForm(list);

//restore();
//console.log(list.sz());
