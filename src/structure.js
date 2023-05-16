function createStructure() {
    const header = document.createElement('header');
    const title  = document.createElement('h1');
    title.textContent = "Todo List";
    header.appendChild(title);

    const mn = document.createElement('div');
    mn.classList.add('mainContent');


    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btnContainer');
    btnContainer.setAttribute('id', 'btnContainer');
    
    const staticBtns = document.createElement('div');
    staticBtns.classList.add('staticBtns');
    staticBtns.setAttribute('id', 'staticBtns');
    btnContainer.appendChild(staticBtns);

    const dynamicBtns = document.createElement('div');
    dynamicBtns.classList.add('dynamicBtns');
    dynamicBtns.setAttribute('id', 'dynamicBtns');
    //create heading
    const heading = document.createElement('p');
    heading.textContent = "Projects";
    heading.classList.add('dyHeading');
    dynamicBtns.appendChild(heading);
    //create add button
    const addBtn = document.createElement('button');
    addBtn.textContent = "＋ Add project";
    addBtn.classList.add('addBtn');
    addBtn.setAttribute('id', 'addBtn');
    dynamicBtns.appendChild(addBtn);
    btnContainer.appendChild(dynamicBtns); 

    mn.appendChild(btnContainer);

    const content = document.createElement('div');
    content.classList.add('content');
    content.setAttribute('id', 'content');
    //content.textContent = "content";
    mn.appendChild(content);

    const footer = document.createElement('footer');
    const titleF = document.createElement('h3');
    titleF.textContent = "Made by Vanhger";
    footer.appendChild(titleF);

    document.body.appendChild(header);
    document.body.appendChild(mn);
    document.body.appendChild(footer);
}

export default createStructure;