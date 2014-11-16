/*!
 * jQuery Mac Scroller
 * Author: @macdonaldr93
 * Version: 0.1.0
 * Licensed under GPL Version 2 license.
 *
 * Mac Scroller is a Lightweight jQuery plugin to enable 
 * a cross-browser flexible scroll to top function and 
 * adds smooth scrolling for internal links.
 *
 */
 
// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other plugins 
// that are not closed properly.
;(function($, window, document, undefined) {

    // Create the defaults once
    var pluginName = 'MacScroller',
        defaults = {
            background: "black",
            color: "white",
            transparency: 90,
            positionX: "right",
            positionY: "bottom",
            fadeSpeed: 200,
            offset: 100,
            smooth: true
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;

        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.toPercent();

        this.init();
    }

    // Convert given number to percentage
    Plugin.prototype.toPercent = function(number) {
        var result = number;

        if (isNaN(number)) {
            return result;
        } else {
            result = number / 100;
            return result;
        }
    };

    // Initialize plugin
    Plugin.prototype.init = function() {
        // add scroller element to page
        $('body').append('<a href="#" id="mac-scroller"><i class="fa fa-chevron-up fa-fw"></i></a>');

        // this scope = plugin object
        var plug = this,
            // scroller element ID
            el = $('#mac-scroller'),
            // scroller icon ID
			icon = $('#mac-scroller i');

        // setup option values
        el.css('display', 'none'); //in case the user forgot
        el.css('background-color', plug.options.background);
        icon.css('color', plug.options.color);
        el.css(plug.options.positionY, '5px');
        el.css(plug.options.positionX, '5px');
        el.css('opacity', plug.toPercent(plug.options.transparency));

        if (this.options.smooth) {
	        
	        // add smooth scroll to internal links
            $('body').find('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - plug.options.offset
                        }, 1000);
                        return false;
                    }
                }
            });
        }

        //listen for scroll and show scroller
        $(window).scroll(function() {
            //stupid IE hack
            if (!jQuery.support.hrefNormalized) {
                el.css({
                    'position': 'absolute',
                    'top': $(window).scrollTop() + $(window).height() - 50
                });
            }
            if ($(window).scrollTop() >= 1) {
                el.fadeIn(plug.options.fadeSpeed);
            } else {
                el.fadeOut(plug.options.fadeSpeed);
            }
        });

        // add smooth scroll to top on click
        el.click(function(e) {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");

            e.preventDefault();
        });


    };

    // Prevent against multiple instantiations
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);