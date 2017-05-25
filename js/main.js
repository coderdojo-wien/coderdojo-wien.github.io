(function($, window, document) {
    $(function() {

        var $window = $(window);
        setTimeout(function() {
            $('.page-loader').addClass('load-complete');
        }, 1500);

        'use strict';

        $.Scrollax();
        var $body = $('body');
        var $nav_menu = $('.navigation-bar');
        var $nav_menu_link = $('#navMenu ul li a');
        var $toggle_menu_button = $('.navTrigger');

        $nav_menu_link.on('click', function() {
            $nav_menu_link.parent().removeClass('current-menu-item');
            $(this).parent().addClass('current-menu-item');
            $nav_menu.removeClass('active');
            $toggle_menu_button.removeClass('active');
            $body.removeClass('no-scroll');
        });

        $toggle_menu_button.on('click', function() {
            $nav_menu.toggleClass('active');
            $body.toggleClass('no-scroll');
            $(this).toggleClass('active');
        });

        $window.on('resize', function() {
            $nav_menu.removeClass('active');
            $body.removeClass('no-scroll');
            $toggle_menu_button.removeClass('active');
        });

        var $filter_menu_item = $('.filter-menu ul li');
        var $portfolio_grid = $('.exercises-grid');
        var $portfolio_grid_item = $portfolio_grid.children(".item");
        var $overlay = $portfolio_grid.children("#overlay");
        var $img = '<img alt="Exercise Image" />';
        var $data_filters = null;

        $filter_menu_item.on('click', function() {
            $filter_menu_item.removeClass('current');
            $(this).addClass('current');
            $data_filters = $(this).data('filter');
            if ($data_filters == 'all') {
                $portfolio_grid_item.addClass('visible');
            } else {
                $portfolio_grid_item.removeClass('visible');
                $($data_filters).addClass('visible');
            }
        });

        $portfolio_grid_item.find(".item-expand").on('click', function(e) {
            e.preventDefault();
            var $src = $(this).attr("href");
            $overlay.append($img);
            $overlay.fadeIn(200).children("img").attr("src", $src);
            $body.toggleClass('no-scroll');
        });

        $overlay.on('click', function() {
            $(this).fadeOut(200);
            $overlay.children("img").remove();
            $body.toggleClass('no-scroll');
        });

        $window.scroll(function() {
            var $scrollTop = $window.scrollTop();
            var $windowHeight = $window.height();
            var $go_top = $('.go-to-top-button');
            if ($scrollTop > 600) {
                $go_top.addClass('active');
            } else {
                $go_top.removeClass('active');
            }

            function revealItem($container, $item) {
                if ($scrollTop > ($container.offset().top - $windowHeight / 1.3)) {
                    $item.each(function(i) {
                        setTimeout(function() {
                            $item.eq(i).addClass("is-showing");
                        }, 150 * (i + 1));
                    });
                }
            }
        });

        $("#team-members-carousel").owlCarousel({

            navigation : true, // Show next & prev buttons
            slideSpeed : 2000,
            paginationSpeed : 5000,
            rewindSpeed : 5000,
            singleItem: false,
            items: 3,
            itemsDesktop: [1199,3],
            itemsTablet: [991,2],
            itemsMobile: [768,1],
            autoPlay: 10000,
            stopOnHover: true,
            lazyLoad: true,
            navigationText: [
                "<i class='pe-7s-angle-left'></i>",
                "<i class='pe-7s-angle-right'></i>"
                ]
        });

        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

}(window.jQuery, window, document));