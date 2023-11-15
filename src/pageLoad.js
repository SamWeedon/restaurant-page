export default function pageLoad() {
    const heading = document.createElement('h1');
    const image = document.createElement('img');
    const paragraph = document.createElement('p');

    heading.textContent = "Freddy's Hamstaurant";
    image.src = '../dist/ham.jpg';
    paragraph.textContent = "Come to Freddy's Hamstaurant for the world's thickest ham-slice sandwiches!";

    document.getElementById('content').appendChild(heading);
    document.getElementById('content').appendChild(image);
    document.getElementById('content').appendChild(paragraph);
}