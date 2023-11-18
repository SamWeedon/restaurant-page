import removeAllChildren from './removeAllChildren.js';

export default function loadMenu() {
    const content = document.getElementById('content');
    removeAllChildren(content);

    const item1 = document.createElement('p');
    item1.textContent = 'Hamwich ~ $10';
    content.appendChild(item1);

    const item2 = document.createElement('p');
    item2.textContent = 'Ham Salad ~ $8';
    content.appendChild(item2);

    const item3 = document.createElement('p');
    item3.textContent = 'Ham Steak ~ $15';
    content.appendChild(item3);
}