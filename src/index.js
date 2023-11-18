import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const header = document.getElementById('header');
header.style.display = 'flex';
header.style.flexDirection = 'column';
header.style.justifyContent = 'center';
header.style.alignItems = 'center';

const heading = document.createElement('h1');
heading.textContent = "Freddy's Hamstaurant";
heading.style.margin = '5px';
header.appendChild(heading);
    
const tabs = document.createElement('ul');
tabs.style.display = 'flex';
tabs.style.listStyleType = "none";
tabs.style.gap = '15px';
tabs.style.padding = '0';
tabs.style.marginTop = '10px';
header.appendChild(tabs);

const tab1 = document.createElement('li');
tab1.textContent = 'Home';
const tab2 = document.createElement('li');
tab2.textContent = 'Menu';
const tab3 = document.createElement('li');
tab3.textContent = 'Contact';

tabs.appendChild(tab1);
tabs.appendChild(tab2);
tabs.appendChild(tab3);

for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].style.cursor = 'pointer';
}

tab1.addEventListener('click', loadHome);
tab2.addEventListener('click', loadMenu);
tab3.addEventListener('click', loadContact);

loadHome();