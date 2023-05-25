function makeWelcomeTab(curTab) {
    
    const heading = document.createElement('p');
    heading.textContent = "WELCOME TO YOUR TO-DO LIST";
    heading.classList.add('contentHeading');

    curTab.appendChild(heading);
    return curTab;
}

export default makeWelcomeTab;