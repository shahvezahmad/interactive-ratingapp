const card_1 = document.querySelector('.card-1');
const card_2 = document.querySelector('.card-2');
const submit = document.querySelector('.submit');
const ratings = document.querySelector('ul');
const selectedRating = document.querySelector('#selected-ratings');
const ratingList = document.querySelectorAll('.rating');

let rating = 1;
submit.addEventListener('click', () => {
    card_2.classList.add('active');
    selectedRating.innerHTML = rating;
});

ratings.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        ratingList.forEach(element => {
            if (element.classList.contains('rating-clicked')) {
                element.classList.remove('rating-clicked')
            }
        });
        rating = e.target.innerText;
        e.target.classList.add('rating-clicked');
    }
});