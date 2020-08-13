$(function(){


    $('.slider__box').slick({

        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 29.1429L7.5 17L20 4.85714L17.5 0L0 17L17.5 34L20 29.1429Z" fill="white" fill-opacity="0.5"/></svg></button>',

        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 29.1429L12.5 17L0 4.85714L2.5 0L20 17L2.5 34L0 29.1429Z" fill="white" fill-opacity="0.5"/></svg></button>',
        dots: true,
        infinite: true,
        // autoplay:false,
        // autoplay:true,
        // fade: true,
        responsive: [
            {
              breakpoint: 860,
              settings: {
                arrows: false
               
              }
            }
          
        
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('input, select').styler();

    // $('.header__info-basket').on('click', function(){
    //     $('.header__basket-box').addClass('active');
    // });
    
    
    $(this)('.content__product-item').on('click', function(){
        $('.content__product-box').addClass('active');
    });

  


  

    
});