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

    let nextBtn = document.querySelector('.section-reviews__button-right');
    let prevBtn = document.querySelector('.section-reviews__button-left');
    let slideIndex = 0;
    let slider = document.querySelector('.section-reviews__items');
    // let slides = document.querySelectorAll('.section-reviews__item');
    // let slideCount = slides.length;
    
    
    
    

    nextBtn.addEventListener('click',()=>{
        
        let slide = slider.firstElementChild;
        console.log(slide);
        let showSlide =slide.nextElementSibling;
        console.log(showSlide);
        let moveGap = showSlide.clientWidth;
        slide.style.transform = 'translateX(-' + `${moveGap}`+ 'px)';

        slide.style.order ++;
        // slides.forEach((slide)=>{
        //     let moveGap = slide.clientWidth;
        //     console.log(moveGap);
        //     slide.style.transform = 'translateX(-' + `${moveGap}`+ 'px)';
            
        //     // slide.previousSibling.classList.remove("section-reviews__item-show");
        // })
        
    })

    prevBtn.addEventListener('click',()=>{
        // slides.forEach((slide)=>{
        //     let moveGap = slide.clientWidth;
        //     slide.style.transform = 'translateX(' + `${moveGap}`+ 'px)';
            
        //     // slide.previousSibling.classList.remove("section-reviews__item-show");
        // })
        
    })


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