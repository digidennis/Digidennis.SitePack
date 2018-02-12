/**
 * Created by digid on 22-12-2016.
 */

$(document).ready(function(){


    $(".slick-node").each(function () {
        initSlickFromConfig(this);
    });


    /**
     * event hooks for slick focusable buttons
     */
    $("[data-component='SlickFocusable'] > button.slick-focusable-focus").on('click',function(e){
        $(this).parent().addClass('focused');
        var $slicknode = $(this).parent().find(".slick-node").first();
        $slicknode.slick('unslick');
        initSlickForFocus($slicknode.get(0));
        e.preventDefault();
    });
    $("[data-component='SlickFocusable'] > button.slick-focusable-close").on('click',function(e){
        $(this).parent().removeClass('focused');
        var $slicknode = $(this).parent().find(".slick-node").first();
        $slicknode.slick('unslick');
        initSlickFromConfig($slicknode.get(0));
        e.preventDefault();
    });
    $(".digidennis-sitepack-siteheader").each(function(){
        var config = $(this).data('scrollclasstoggler-config');
        $(this).ScrollClassToggler({'config': config });
    });
    $(".digidennis-sitepack-siteheader .hamburger").each(function(){
        $(this).ClassToggler();
    });
    $(".digidennis-sitepack-submenu").each(function(){
        var config = $(this).data('scrollclasstoggler-config');
        $(this).ScrollClassToggler({'config': config });
    });
});

function initSlickFromConfig( slicknode ) {

    /**
     * setup wrapper if slick should be focusable and add buttons
     */
    if($(slicknode).data('slick-focusable') === '1' && $(slicknode).parent().parent("[data-component=SlickFocusable]").length === 0){
        $(slicknode).wrap('<div class="slick-focusable-inner"></div>');
        $(slicknode).parent().wrap('<div class="slick-focusable-wrap" data-component="SlickFocusable"></div>');
        $(slicknode).parent().parent().add('<button type="button" class="slick-focusable-focus" aria-label="Focus"><i class="fa fa-expand"></i></button>').appendTo($(slicknode).parent().parent());
        $(slicknode).parent().parent().add('<button type="button" class="slick-focusable-close" aria-label="Close"><i class="fa fa-close"></i></button>').appendTo($(slicknode).parent().parent());
    }

    var options = $(slicknode).data('slick-options');

    /**
     * if thumbnav
     */
    if($(slicknode).data('slick-thumbnav') === 1){
        options.customPaging = function(slider, i) {
            var thumb = $(slider.$slides[i]).children(0).data('thumb');
            return '<a><img src="' + thumb + '"></a>';
        }
    }

    if($(slicknode).data('slick-break') === 1 ){
        var maxSlidesToShow  = options.slidesToShow;
        if( maxSlidesToShow === 2 ) {
            options.responsive = [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ];
        } else if( maxSlidesToShow > 2 ){
            options.responsive = [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: maxSlidesToShow
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ];
        }
    }
    $(slicknode).slick(options);
}

function initSlickForFocus( slicknode ){
    $(slicknode).slick({
        arrows: true,
        fade: true,
        slidesToShow: 1,
        dots:true,
        infinite:true
    });
}