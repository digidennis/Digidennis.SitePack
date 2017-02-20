(function($) {
    $.ClassToggler = function(element, options) {
        var plugin = this;
        var $element = $(element), element = element;    // reference to the actual DOM element
        plugin.init = function() {
            $element.on('click',function(){
                $element.toggleClass($element.data('active-class'));
                $("html").toggleClass($element.data('document-active-class'));
                $( $element.data('target-selector')).toggleClass($element.data('target-active-class'));
            })
        };
        plugin.init();
    };
    $.fn.ClassToggler = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('ClassToggler')) {
                var plugin = new $.ClassToggler(this, options);
                $(this).data('ClassToggler', plugin);
            }
        });
    };
})(jQuery);