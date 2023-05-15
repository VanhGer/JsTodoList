function makeWeekTab(curTab) {
    
    const content = document.createElement('div');
    content.classList.add('weekContent');

    const heading = document.createElement('p');
    heading.textContent = "This week";
    heading.classList.add('contentHeading');

    curTab.appendChild(heading);
    curTab.appendChild(content);
    return curTab;
}

export default makeWeekTab;