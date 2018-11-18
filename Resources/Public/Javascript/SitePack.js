/**
 * Created by digid on 22-12-2016.
 */

$(document).ready(function(){

    $(".slick-node").each(function () {
        initSlickFromConfig(this);
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

    var options = $(slicknode).data('slick-options');

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
