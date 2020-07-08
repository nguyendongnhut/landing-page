$(document).ready(
    function(){

        // sticky nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == 'down'){
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '600px'
            }
        );

        // scroll
        $('a[href*=\\#]:not([href$=\\#])').click(function() {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });

        // mobile menu
        $('.mobile-menu-icon').click(
            function(){
                $('.main-nav').slideToggle("slow");

                if($('.mobile-menu-icon').hasClass('fa-bars')){
                    $('.mobile-menu-icon').addClass('fa-times');
                    $('.mobile-menu-icon').removeClass('fa-bars');
                    $('.main-nav').css('display', 'block');
                }else{
                    $('.mobile-menu-icon').addClass('fa-bars');
                    $('.mobile-menu-icon').removeClass('fa-times')
                }
            }
        )
    }
)
