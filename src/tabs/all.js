

function makeAllTab(curTab) {


    curTab.setAttribute('id', 'allTab');

    const content = document.createElement('div');
    content.classList.add('projectContent');
    content.setAttribute('id', 'projectContent');

    const heading = document.createElement('p');
    heading.textContent = "All";
    heading.classList.add('contentHeading');

    curTab.appendChild(heading);
    curTab.appendChild(content);
    
    curTab.classList.remove('all');
    curTab.classList.add('allTab');

    return curTab;
}

export default makeAllTab;