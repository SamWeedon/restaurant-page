import removeAllChildren from './removeAllChildren.js';

export default function loadHome() {
    const content = document.getElementById('content');
    removeAllChildren(content);

    const image = document.createElement('img');
    image.src = '../dist/ham.jpg';
    content.appendChild(image);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Come to Freddy's Hamstaurant for the world's thickest ham-slice sandwiches!";
    content.appendChild(paragraph);
}