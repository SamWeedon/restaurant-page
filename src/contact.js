import removeAllChildren from './removeAllChildren.js';

export default function loadContact() {
    const content = document.getElementById('content');
    removeAllChildren(content);

    const number = document.createElement('p');
    number.textContent = '000-000-0000';
    content.appendChild(number);
}