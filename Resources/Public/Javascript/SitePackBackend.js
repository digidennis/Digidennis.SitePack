if (typeof document.addEventListener === 'function') {
    document.addEventListener('Neos.PageLoaded', function(event) {
        $(".slick-node").each(function(){
            if($(this).data('slick-thumbnav') == '1'){
                $(this).slick({'customPaging': function(slider, i) {
                    var thumb = $(slider.$slides[i]).children(0).data('thumb');
                    return '<a><img src="'+thumb+'"></a>';
                }});
            } else {
                $(this).slick();
            }
            $(this).slick('slickSetOption', 'cssEase', 'ease 0.2s');
        });
    }, false);
}