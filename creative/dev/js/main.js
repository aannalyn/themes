(function($) {

  'use strict';

  var $window = $(window),
      $document = $(document),
      $elem = {
        links: $('a[href$="-page"]'),
        header: $('.c-masthead'),
        homePage: $('#home-page'),
        navItem: $('.c-nav__item')
      };

  function initSmoothLink() {
    $elem.links.on("click", function(e) {
      e.preventDefault();
      $document.off("scroll");
      
      var target = this.hash;
      $("html, body").stop().animate({
        scrollTop: $(target).offset().top + 2
      }, 800, 'swing', function() {
        // window.location.hash = target;
      });
    });
  }

  // function navInit() {
  //   $elem.navLink.on('click', function() {
  //     $elem.navItem.removeClass('nav__item--active');
  //     $(this).parent().addClass('nav__item--active');
  //   });
  // }
  
  $window.on('scroll', function() {
    var scrollPos = $window.scrollTop(),
        homePageHeight = $elem.homePage.height();

    $elem.header.toggleClass('c-masthead--fixed', (scrollPos > homePageHeight));

    // Navigation
    $elem.navItem.each(function () {
      var currentLink = $(this).find('a'),
          sectionID = $(currentLink.attr("href"));

      if ( (sectionID.position().top <= scrollPos) && (sectionID.position().top + sectionID.height() > scrollPos) ) {
        $elem.navItem.removeClass('c-nav__item--active');
        currentLink.parent().addClass("c-nav__item--active");
      }
    });
  });


  // function initPreLoader() {
  //   $window.on('load', function() {
  //     $elem.preloader.delay(350).fadeOut('slow');
  //   });
  // }
  


  function init() {
    // initPreLoader();
    initSmoothLink();
  }
  
  $document.ready(function() {
    init();
  });
  
  })(jQuery);