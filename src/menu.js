import gif from './ztmy-gif.gif';
import item1 from './foodIcons/ztmy-food-1.jpg';
import item2 from './foodIcons/ztmy-food-2.jpeg';
import item3 from './foodIcons/ztmy-food-3.png';
import item4 from './foodIcons/ztmy-food-4.png';

function menuTitle() {
    const menuTitle = document.createElement('div');
    menuTitle.id = 'menuTitle';
    const img = document.createElement('img');
    img.src=gif;
    img.alt="ztmy-gif";
    const textTitle = document.createElement('h1');
    textTitle.textContent = 'Menu';
    menuTitle.appendChild(img);
    menuTitle.appendChild(textTitle);
    menuTitle.appendChild(img.cloneNode(true));
    return menuTitle;
}

function menuItem(img, name, price, description, rating) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const itemTitle = document.createElement('div');
    itemTitle.classList.add('itemTitle');
    const itemImg = new Image();
    itemImg.src = img;
    const itemName = document.createElement('h2');
    itemName.textContent = name;
    itemTitle.appendChild(itemName);
    itemTitle.appendChild(itemImg);
    menuItem.appendChild(itemTitle);

    const descriptionP = document.createElement('p');
    descriptionP.classList.add('description');
    descriptionP.textContent = description;
    menuItem.appendChild(descriptionP);

    const itemBottom = document.createElement('div');
    itemBottom.classList.add('itemBottom');
    const itemPrice = document.createElement('p');
    itemPrice.classList.add('itemPrice');
    itemPrice.textContent = "$" + price;
    itemBottom.appendChild(itemPrice);
    const starIcon = '★';
    const emptyStarIcon = '☆';
    const filledStars = starIcon.repeat(rating);
    const emptyStars = emptyStarIcon.repeat(5 - rating);
    const itemRating = document.createElement('p');
    itemRating.classList.add('itemRating');
    itemRating.textContent = filledStars + emptyStars;
    itemBottom.appendChild(itemRating);
    menuItem.appendChild(itemBottom);
    return menuItem;
}
function menu() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    container.appendChild(menuTitle());

    const menuItem1 = menuItem(item1, "Nira's favourite ramen brand",
        10,
        "This delicious (premade) ramen was inspired by ZUTOMAYO's featuring with" +
        "Mori Calliope, in their collab song 'Kira Killer'. The favourite dish of every fan.",
        5);
    const menuItem2 = menuItem(item2, "Nira's (other) favourite ramen brand",
        12,
        "As you can see, Nira is really a fan of ramen. This one comes directly from ZUTOMAYO's" +
        "music video for 'Mabushii DNA Dake'.",
        5);
    const menuItem3 = menuItem(item3, "Unigiri's famous hotdog",
        8,
        "This hotdog is the favourite food of Unigiri, the mascot of ZUTOMAYO."+
        "It's a... hotdog. Yea, Unigiri has simple tastes.",
        4);
    const menuItem4 = menuItem(item4, "A random bowl of rice with a fried egg",
        9,
        "I kinda ran out of ideas with this one. ZUTOMAYO doesn't display"+
        " a lot of food in their MVs.",
        3)
    container.appendChild(menuItem1);
    container.appendChild(menuItem2);
    menuItem2.style.alignSelf = 'flex-end';
    container.appendChild(menuItem3);
    container.appendChild(menuItem4);
    menuItem4.style.alignSelf = 'flex-end';

}

export { menu };