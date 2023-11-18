import removeAllChildren from './removeAllChildren.js';

export default function loadMenu() {
    const content = document.getElementById('content');
    removeAllChildren(content);

    const item1 = document.createElement('p');
    item1.textContent = 'Hamwich';
    content.appendChild(item1);
}