function makeTodayTab(curTab) {
    curTab.classList.add('active');
    const content = document.createElement('div');
    content.classList.add('todayContent');

    const heading = document.createElement('p');
    heading.textContent = "Today";
    heading.classList.add('contentHeading');

    curTab.appendChild(heading);
    curTab.appendChild(content);
    return curTab;
}

export default makeTodayTab;