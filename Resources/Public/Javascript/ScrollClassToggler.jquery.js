(function($) {
    $.ScrollClassToggler = function(element, options) {
        var plugin = this;
        plugin.settings = {
            currentScrollPos: 0,
            lastScrollPos: 0,
            config: null
        };
        var $element = $(element), element = element;    // reference to the actual DOM element

        plugin.init = function() {
            plugin.settings = $.extend({}, options);
            $(window).on('scroll', function(){
                plugin.settings.currentScrollPos = $(window).scrollTop();
                $.each(plugin.settings.config, function(key,value){
                    if(plugin.settings.currentScrollPos > key ){
                        if(!$element.hasClass(value.class)){
                            $element.toggleClass(value.class);
                            //$element.trigger("ScrollClassToggler", ["Add" , value.class]);
                        }
                    } else {
                        if($element.hasClass(value.class)){
                            $element.toggleClass(value.class);
                        }
                    }
                    if(plugin.settings.currentScrollPos < plugin.settings.lastScrollPos && value.removeOnReverse ) {
                        $element.removeClass(value.class);
                        //$element.trigger("ScrollClassToggler", ["ReverseRemove" , value.class]);
                    }
                });
                plugin.settings.lastScrollPos = plugin.settings.currentScrollPos;
            });
        };
        plugin.init();
    };
    $.fn.ScrollClassToggler = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('ScrollClassToggler')) {
                var plugin = new $.ScrollClassToggler(this, options);
                $(this).data('ScrollClassToggler', plugin);
            }
        });
    };
})(jQuery);