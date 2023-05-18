function makeWeekTab(curTab) {
    
    curTab.setAttribute('id', 'weekTab');

    const content = document.createElement('div');
    content.classList.add('weekContent');

    const heading = document.createElement('p');
    heading.textContent = "This week";
    heading.classList.add('contentHeading');

    curTab.appendChild(heading);
    curTab.appendChild(content);

    curTab.classList.remove('week');
    curTab.classList.add('weekTab');
    return curTab;
}

export default makeWeekTab;