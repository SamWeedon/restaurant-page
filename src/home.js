import removeAllChildren from './removeAllChildren.js';
export default function home() {
    const content = document.getElementById('content');
    removeAllChildren(content);
    
    const heading = document.createElement('h1');
    heading.textContent = "Freddy's Hamstaurant";

    const image = document.createElement('img');
    image.src = '../dist/ham.jpg';

    const paragraph = document.createElement('p');
    paragraph.textContent = "Come to Freddy's Hamstaurant for the world's thickest ham-slice sandwiches!";
    
    
    

    document.getElementById('content').appendChild(heading);
    document.getElementById('content').appendChild(image);
    document.getElementById('content').appendChild(paragraph);
}