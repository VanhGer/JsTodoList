function makeTodayTab(curTab) {
    
    const content = document.createElement('div');
    content.classList.add('todayContent');

    const heading = document.createElement('p');
    heading.textContent = "Today";
    heading.classList.add('contentHeading');

    curTab.appendChild(heading);
    curTab.appendChild(content);

    curTab.classList.remove('today');
    curTab.classList.add('todayTab');
    return curTab;
}

export default makeTodayTab;