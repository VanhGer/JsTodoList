function makeAllTab(curTab) {

    const content = document.createElement('div');
    content.classList.add('allContent');

    const heading = document.createElement('p');
    heading.textContent = "All";
    heading.classList.add('contentHeading');

    curTab.appendChild(heading);
    curTab.appendChild(content);
    return curTab;
}

export default makeAllTab;