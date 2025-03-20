$(window).bind('scroll',function(e){
    parallaxScroll();
    animateBird();
    checkFadeIn();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
    
   $('.layer-1').css('top',(0-(scrolled*.25))+'px');
   $('.layer-2').css('top',(0-(scrolled*.5))+'px');
   $('.layer-3').css('top',(0-(scrolled*.75))+'px');
   $('.layer-4').css('top',(0-(scrolled*.85))+'px');  // New layer
   $('.layer-5').css('top',(0-(scrolled*.95))+'px');  // New layer
    
   $('.rock-1').css('top',(400-(scrolled*.8))+'px');
   $('.rock-2').css('top',(200-(scrolled*.6))+'px');
   $('.rock-3').css('top',(500-(scrolled*.4))+'px'); 
   $('.rock-4').css('top',(600-(scrolled*.5))+'px'); 
   $('.rock-5').css('top',(600-(scrolled*.7))+'px'); 
   $('.rock-6').css('top',(400-(scrolled*.7))+'px'); 
   $('.rock-7').css('top',(600-(scrolled*.5))+'px'); 
   $('.rock-8').css('top',(200-(scrolled*.2))+'px');
   $('.rock-9').css('top',(200-(scrolled*.4))+'px');
}

// New function for bird animation
function animateBird() {
    var scrolled = $(window).scrollTop();
    $('.bird').css({
        'transform': `translate(${scrolled * 0.5}px, ${Math.sin(scrolled * 0.01) * 50}px)`
    });
}

// New function for fade-in text
function checkFadeIn() {
    var scrolled = $(window).scrollTop();
    if (scrolled > 100) {
        $('.fade-in-text').addClass('visible');
    } else {
        $('.fade-in-text').removeClass('visible');
    }
}
