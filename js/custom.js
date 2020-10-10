$(document).ready(function() {


    let readURL = function(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    };


    $(".file-upload").on('change', function(){
        readURL(this);
    });

    $(".upload-button").on('click', function() {
        $(".file-upload").click();
    });


    $(".brand-logo .slider-items").owlCarousel({
        items: 8,
        itemsDesktop: [1024, 4],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: [320, 1],
        navigation: !0,
        navigationText: ['<a class="flex-prev"></a>', '<a class="flex-next"></a>'],
        slideSpeed: 500,
        pagination: !1
    });

    // custom width stepper-active
    const widthHidden = $('.step-item').width();
    $('.stepper-range').css({
        width: `calc( 100% - ${widthHidden}px)`,
        left: widthHidden/2
    });
});
