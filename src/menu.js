import removeAllChildren from './removeAllChildren.js';
export default function menu() {
    const content = document.getElementById('content');
    removeAllChildren(content);
    
    const item1 = document.createElement('p');
    item1.textContent = 'Hamwich';
    document.getElementById('content').appendChild(item1);
}