function options() {
    const options = document.createElement('div');
    options.classList.add('options');

    const home = document.createElement("button");
    home.id = 'homeBtn';
    home.textContent = 'Home';
    const menu = document.createElement("button");
    menu.id = 'menuBtn';
    menu.textContent = 'Menu';
    const about = document.createElement("button");
    about.id = 'aboutBtn';
    about.textContent = 'About Us';

    options.appendChild(home);
    options.appendChild(menu);
    options.appendChild(about);

    return options;

}
function header() {
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.textContent = 'ZUTOMAYO FoodCourt';

    header.appendChild(title);
    header.appendChild(options());

    return header;
}

export { header };