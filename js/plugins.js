
$(document).ready(function () { 
    checkScroll(); 
    $(window).scroll(checkScroll); 
});

function checkScroll() {
if ($(window).scrollTop() >= 50) { 
    $('.navbar').addClass('solid'); 
} else { 
    $('.navbar').removeClass('solid'); 
}
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('.navbar-toggler').addClass('collapsed');
    $('#navbarResponsive').removeClass('show');

    setTimeout(function () {
        $('nav.navbar').removeClass('solid-toggle');
    }, 300);

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});


$(function () { 
    function onScrollInit(items, trigger) { 
        items.each(function () { 
            var osElement = $(this), 
                osAnimationClass = osElement.attr('data-animation'), 
                osAnimationDelay = osElement.attr('data-delay'); 
  
            osElement.css({
                '-webkit-animation-delay': osAnimationDelay, 
                '-moz-animation-delay': osAnimationDelay, 
                'animation-delay': osAnimationDelay 
            });
  
            var osTrigger = (trigger) ? trigger : osElement; 
  
            osTrigger.waypoint(function () { 
                osElement.addClass('animated').addClass(osAnimationClass); 
            }, {
                    triggerOnce: true, //only once this animation should happen
                    offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
                });
        });
    }
  
    onScrollInit($('.os-animation')); //function call with only items
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
  });
  