import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const header = document.getElementById('header');

const tabs = document.createElement('ul');
tabs.id = 'tabs';
const tab1 = document.createElement('li');
tab1.textContent = 'Home';
const tab2 = document.createElement('li');
tab2.textContent = 'Menu';
const tab3 = document.createElement('li');
tab3.textContent = 'Contact';

header.appendChild(tabs);
tabs.appendChild(tab1);
tabs.appendChild(tab2);
tabs.appendChild(tab3);

tab1.addEventListener('click', home);
tab2.addEventListener('click', menu);
tab3.addEventListener('click', contact);
