import './style.css';
import './tabs/tab.css';
import './forms/form.css';
import createStructure from './structure';
import { createTabBtn, createTab, addOnClick} from "./static-btntab";
import makeTodayTab from './tabs/today';
import makeWeekTab from './tabs/week';
import makeAllTab from './tabs/all';
import setProjectForm from './forms/projectForm';

createStructure();

const content= document.getElementById('content');
const todayBtn = createTabBtn('Today', 'static');
const weekBtn = createTabBtn('This week', 'static');
const allBtn = createTabBtn('All', 'static');

const todayTab = makeTodayTab(createTab('today'));
const weekTab = makeWeekTab(createTab('week'));
const allTab = makeAllTab(createTab('all'));

addOnClick(todayBtn, todayTab);
addOnClick(weekBtn, weekTab);
addOnClick(allBtn, allTab);

content.appendChild(todayTab);
content.appendChild(weekTab);
content.appendChild(allTab);

setProjectForm();
