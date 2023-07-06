import gif from './ztmy-gif-1.gif';
import phone from './aboutIcons/phone.svg';
import email from './aboutIcons/email-open.svg';
import schedule from './aboutIcons/clock-time-nine.svg';
import mapMark from './aboutIcons/map-marker.svg';
import map from './aboutIcons/map.png';
function contact(icon, text) {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contactDiv');
    const img = new Image();
    img.src = icon;
    const txt = document.createElement('p');
    txt.textContent = text;
    contactDiv.appendChild(img);
    contactDiv.appendChild(txt);
    return contactDiv;
}
function about() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const aboutTitle = document.createElement('div');
    aboutTitle.id = 'aboutTitle';
    const img = document.createElement('img');
    img.src=gif;
    img.alt="ztmy-gif";
    const textTitle = document.createElement('h1');
    textTitle.textContent = 'About Us (me, actually)';
    aboutTitle.appendChild(img);
    aboutTitle.appendChild(textTitle);
    aboutTitle.appendChild(img.cloneNode(true));
    container.appendChild(aboutTitle);

    container.appendChild(contact(phone, '123-456-7890'));
    container.appendChild(contact(email, 'rick.roll@example.com'));
    container.appendChild(contact(schedule, 'Everyday : 9:00 AM - 5:00 PM'));
    container.appendChild(contact(mapMark, '1234 Rick Roll St'));

    const mapImg = new Image();
    mapImg.src = map;
    mapImg.id = 'map';
    container.appendChild(mapImg);
}

export { about };