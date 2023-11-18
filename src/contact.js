import removeAllChildren from './removeAllChildren.js';

export default function loadContact() {
    const content = document.getElementById('content');
    removeAllChildren(content);

    const number = document.createElement('p');
    number.textContent = '1-800-HAM-TALK';
    content.appendChild(number);

    const email = document.createElement('p');
    email.textContent = 'johnnyham@email.com';
    content.appendChild(email);
}