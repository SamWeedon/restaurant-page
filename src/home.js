import removeAllChildren from './removeAllChildren.js';
import hamImage from './ham.jpg';

export default function loadHome() {
    const content = document.getElementById('content');
    removeAllChildren(content);

    const image = new Image();
    image.src = hamImage;
    image.style.width = '400px';
    content.appendChild(image);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Come to Freddy's Hamstaurant for the world's thickest ham-slice sandwiches!";
    content.appendChild(paragraph);
}