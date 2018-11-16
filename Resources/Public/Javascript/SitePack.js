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
    /*$(".slick-node[data-slick-focusable='1'] .slick-slide").on('click',function(e){
        var index = $(this).data('slick-index');
        var $slicknode = $(this).parents('.slick-node').first();
        if( $(this).hasClass('focused')) {
            var slidesToShow = $slicknode.data('slick-slidesToShow' );
            $(this).removeClass('focused');
            initSlickFromConfig($slicknode);
        } else {
            $slicknode.slick('unslick');
            $(this).addClass('focused');
        }
        e.preventDefault();
    });
    $("[data-component='SlickFocusable'] > button.slick-focusable-close").on('click',function(e){
        e.preventDefault();
    });*/

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

    let options = $(slicknode).data('slick-options');

    //if thumbnav
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