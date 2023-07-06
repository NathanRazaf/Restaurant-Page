import { header } from './header.js';
import { home } from './home.js';
import { menu } from './menu.js';
import { footer } from './footer.js';

function pageLoad() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(header());
    content.appendChild(footer());
}

function menuLoad() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(header());
    content.appendChild(menu());
    content.appendChild(footer());
}

export { pageLoad, menuLoad };