document.addEventListener("DOMContentLoaded", () => {
    // прокрутка до раздела из шапки

    const about = document.getElementById('About');
    const ingridients = document.getElementById('Ingridients');
    const reviews = document.getElementById('Reviews');
    const order = document.getElementById('Order');


    const scrollToAbout = document.getElementById('scrollToAbout');
    const scrollToIngridients = document.getElementById('scrollToIngridients');
    const scrollToReviews = document.getElementById('scrollToReviews');
    let scrollToOrders = document.querySelectorAll('.scrollToOrder');

    scrollToAbout.addEventListener('click', function(){
        about.scrollIntoView({behavior: "smooth"});
    } )

    scrollToIngridients.addEventListener('click', function(){
        ingridients.scrollIntoView({behavior: "smooth"});
    } )

    scrollToReviews.addEventListener('click', function(){
        reviews.scrollIntoView({behavior: "smooth"});
    } )

    scrollToOrders.forEach(scrollToOrder => {
        scrollToOrder.addEventListener('click', function(){
            order.scrollIntoView({behavior: "smooth"});
        } )
    });
    

    // слайдер

    let btns = document.querySelectorAll('.section-reviews__button');
    let courusel = document.querySelector('.section-reviews__items');
    let couruselItems = document.querySelectorAll('.section-reviews__item');

    

    // обратный отсчет

    let time = 1800;
    let countdown = document.getElementById('countdown');

    setInterval(updateCountdown, 1000);

    function updateCountdown(){
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        countdown.innerHTML = `${minutes}:${seconds}`;
        time --;
    }
})