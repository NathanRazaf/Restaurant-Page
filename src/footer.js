import gitIcon from './github (1).svg';
function footer() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerText = document.createElement('p');
    footerText.textContent = 'Copyright © 2021 NathanRazaf';
    const gitLink = document.createElement('a');
    gitLink.href = "https://github.com/NathanRazaf";
    const icon = new Image();
    icon.src = gitIcon;
    icon.alt = "github";
    gitLink.appendChild(icon);
    footer.appendChild(footerText);
    footer.appendChild(gitLink);

    return footer;
}

export { footer };