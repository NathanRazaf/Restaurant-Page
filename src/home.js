import gif from './asuca-zuto-mayo.gif';
import icon1 from './usersIcons/ztmy-1.jpg';
import icon2 from './usersIcons/ztmy-2.jpg';
import icon3 from './usersIcons/ztmy-3.jpg';
import icon4 from './usersIcons/ztmy-4.jpg';


function review(author, icon, content, rating) {
    const review = document.createElement('div');
    review.classList.add('review');

    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    const authorIcon = new Image();
    authorIcon.src = icon;
    const authorName = document.createElement('h3');
    authorName.textContent = author;
    authorDiv.appendChild(authorIcon);
    authorDiv.appendChild(authorName);


    review.appendChild(authorDiv);
    const reviewContent = document.createElement('p');
    reviewContent.classList.add('reviewContent');
    reviewContent.textContent = content;
    review.appendChild(reviewContent);

    const starIcon = '★';
    const emptyStarIcon = '☆';
    const filledStars = starIcon.repeat(rating);
    const emptyStars = emptyStarIcon.repeat(5 - rating);


    const reviewRating = document.createElement('p');
    reviewRating.textContent = filledStars + emptyStars;
    review.appendChild(reviewRating);
    return review;
}
function homeTitle() {
    const title = document.createElement('div');
    title.id = 'homeTitle';
    const img = document.createElement('img');
    img.src=gif;
    img.alt="asuca-zuto-mayo";
    title.appendChild(img);
    const textTitle = document.createElement('h1');
    textTitle.textContent = 'Welcome to ZUTOMAYO FoodCourt !';
    title.appendChild(textTitle);
    const img2 = img.cloneNode(true);
    title.appendChild(img2);
    return title;
}
function home() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    container.appendChild(homeTitle());


    const description = document.createElement('p');
    description.id = 'homeDescription';
    description.textContent = "This is a fan-made website for ZUTOMAYO fans to buy custom ZUTOMAYO foods." +
        " Which, when you think about it really hard, just sounds like a 19yo teenager's dream. Yes, my dream.";
    container.appendChild(description);
    const review1 = review('Kanade', icon1,
                                    "I love the food here, it's so good !", 5);
    const review2 = review('Tanaka', icon2,
                                    "The purple burger looked strange but was amazing !", 4);
    const review3 = review('Sakura', icon3,
                                    "I'm just here for the background music, it rocks !", 4);
    const review4 = review('Kazuki', icon4,
                                    "Very kind staff and delicious food !", 5);
    container.appendChild(review1);
    container.appendChild(review2);
    review2.style.alignSelf = 'flex-end';
    container.appendChild(review3);
    container.appendChild(review4);
    review4.style.alignSelf = 'flex-end';

}

export { home };