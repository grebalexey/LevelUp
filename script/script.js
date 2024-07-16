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

    // ввод только цифр в input

    const input = document.getElementById('phone');

    input.addEventListener('keydown', function(event) {
    
    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
        
        (event.keyCode == 65 && event.ctrlKey === true) ||
        
        (event.keyCode >= 35 && event.keyCode <= 39)) {
    
    return;
    } else {
        
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
        event.preventDefault();
    }
    }
    });
})