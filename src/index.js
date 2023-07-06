import './style.css';
import { home } from './home';
import { menu } from './menu';
import { about } from './about';
import {header} from "./header";
import {footer} from "./footer";

window.onload
{
    const content = document.getElementById('content');
    content.classList.add('content-transition');
    content.appendChild(header());
    const container = document.createElement('div');
    container.id = 'container';
    content.appendChild(container);
    content.appendChild(footer());
    home();
}

const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', home);

const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', menu);

const aboutBtn = document.getElementById('aboutBtn');
aboutBtn.addEventListener('click', about);
