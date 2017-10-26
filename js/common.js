// Step Wizard hero banner scripts
$(document).ready(function () {

    $('.fw-hero-banner-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        startPosition: 0,
        margin: 10,
        items: 1,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 750,
        //animateOut: 'slideInRight',
        // animateIn: 'slideInRight',
        navText: ["<img src='images/fw-chevron-prev.png' />", "<img src='images/fw-chevron-next.png' />"],
        onTranslated: steps,
    });

    function steps(event) {
        if ($('.owl-item.active .item').length) {
            var steps = $('.owl-item.active .item').attr('id').match(/\d+$/);
            //console.log(parseInt(steps));
            $('.fw-steps').html(steps);
        }
    }


    // FEATURE SLIDER CUSTOM SCRIPTS
    var NavDotClicked = "";
    $('.cascade-slider_nav li').click(function (e) {
        e.preventDefault();
        NavDotClicked = $(this).attr('id');
        //  console.log(NavDotClicked);
        selectFeature();
    })

    $('#feature-slider').cascadeSlider({});

    // Manually added on thumbnail click to rotate
    if ($('.cascade-slider_item').hasClass('now')) {
        var defaultSlideName = $('.cascade-slider_item.now').attr('data-nav');
        // RSS FIRST
        if (defaultSlideName == 'rss-slider') {
            $('.fw-feature-items .fw-feature-item.rss-item').addClass('active');
        }
    }
    var cascadeSlideNav = "";
    $('.cascade-slider_slides .cascade-slider_item').click(function () {
        cascadeSlideNav = $(this).attr('data-nav');

        console.log(cascadeSlideNav);
        $("#" + cascadeSlideNav).click();
        selectFeature();
    });

    function selectFeature() {
        if (cascadeSlideNav == 'rss-slider' || NavDotClicked == 'rss-slider') {
            $('.fw-feature-items .fw-feature-item.rss-fb-item, .fw-feature-items .fw-feature-item.rss-item').addClass('active').show();
            $('.fw-feature-items .fw-feature-item.fb-item,.fw-feature-items .fw-feature-item.gcal-item').removeClass('active').hide();

        } else if (cascadeSlideNav == 'fb-slider' || NavDotClicked == 'fb-slider') {
            $('.fw-feature-items .fw-feature-item.rss-fb-item,.fw-feature-items .fw-feature-item.fb-item').addClass('active').show();
            $('.fw-feature-items .fw-feature-item.rss-item,.fw-feature-items .fw-feature-item.gcal-item').removeClass('active').hide();

        } else {
            $('.fw-feature-items .fw-feature-item.gcal-item').addClass('active').show();
            $('.fw-feature-items .fw-feature-item.rss-fb-item,.fw-feature-items .fw-feature-item.fb-item,.fw-feature-items .fw-feature-item.rss-item').removeClass('active').hide();

        }
    }


});
