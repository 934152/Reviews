/* Requirements:
1. Need a list of reviews or create review object
2. Reviews need a title, content and reviewer
3. Reviews need to be displayed randomly on carousel
*/


//Need to setup variables to access review carousel
const title = document.getElementById('card_title');
const desc = document.getElementById('desc');
const author = document.getElementById('author');

const prevbtn = document.querySelector('.prev_btn');
const nextbtn = document.querySelector('.next_btn');

// Setup reviews array

const reviews = [
    {
        id: 1,
        title: "Dyson Vacuum",
        desc: "This Dyson vacuum would be better if you did not have to mount it.",
        author: "Courtney Dickerson",
    },
    {
        id: 2,
        title: "2nd Dyson Vacuum",
        desc: "Our original Dyson vacuum broke, so we had to buy another vacuum.",
        author: "Dillon Dickerson",
    },
    {
        id: 3,
        title: "Shark > Dyson",
        desc: "Shark vacuums are better than Dyson vacuums.",
        author: "Charlene Pfab",
    }
];


//Setup starting item

let currentItem = 0;

// load inital item
window.addEventListener('DOMContentLoaded', function(){
   showReview(currentItem);
});

//create click events for buttons
nextbtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    };
    showReview(currentItem);
});

prevbtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    };
    showReview(currentItem);
});

//create function to display items/reviews
function showReview(review){
    const item = reviews[review];
    title.textContent = item.title;
    desc.textContent = item.desc;
    author.textContent = `- ${item.author}`;
};