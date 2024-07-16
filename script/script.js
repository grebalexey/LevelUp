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

    // const courusel = document.querySelector('.section-reviews__items');
    // const btns = document.querySelectorAll('.section-reviews__button');
    // const firstReviewWidth = courusel.querySelector('.section-reviews__item').offsetWidth;

    // console.log (firstReviewWidth);

    // btns.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         console.log(btn.id);

    //         if (btn.id === 'leftBtn'){
    //             console.log('left0');
    //             courusel.style.transform = 'translateX(-' + `${firstReviewWidth}` + 'px)';
                
    //         } else {
    //             courusel.style.transform = 'translateX(' + `${firstReviewWidth}` + 'px)';
    //         }


    //         // courusel.scrollLeft += btn.id === 'leftBtn' ? -firstReviewWidth : firstReviewWidth;
    //     })
    // })


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