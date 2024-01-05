$(document).ready(function () {
$('#hero-slide').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    dots:false,
    nav:true,
    smartSpeed:1000,
    navText : ['prev','next'],
    responsive:{
        0:{
           
        },
        600:{
          
        },
        1000:{
           
        }
    }
})
    $('#project-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }

    })
            $('#review-slider').owlCarousel({
        loop: true,
        margin:10,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed:800,
            })
        });