(function($) {

  'use strict';

  var $window = $(window);
  var $document = $(document);
  var $header = $("header");
  var $home = $("#home");
  var $toggleBtn = $(".toggle-btn");
  var $nav = $(".nav");
  var $navBtn = $(".nav__list");
  var $navLink = $navBtn.find("a");
  var $linkBtn = $("a[href^='#']");
  var $scrollDownBtn = $(".home__btn");
  var $galleryOption = $(".gallery__option");

  function initPreloader() {
    $window.on('load', function() {
      $('.preloader').delay(350).fadeOut('slow');
    });
  }

  function initNavbar() {
    $navLink.on("click", function(e) {
      $nav.find(".nav__list--active").removeClass("nav__list--active");
      $(this).parent().addClass("nav__list--active");
    });
  
    $window.on("scroll", function () {
      // Header
      var scrollPos = $(window).scrollTop();
      var homeHeight = $home.height();
  
      $header.toggleClass("header--fixed", (scrollPos > homeHeight));
  
      // Navigation
      $navLink.each(function () {
        var currentLink = $(this);
        var sectionID = $(currentLink.attr("href"));
  
        if ( (sectionID.position().top <= scrollPos) && (sectionID.position().top + sectionID.height() > scrollPos) ) {
          $nav.find(".nav__list--active").removeClass("nav__list--active");
          currentLink.parent().addClass("nav__list--active");
        }
      });
    });
  
    $toggleBtn.on("click", function() {
      $nav.toggleClass('nav--show');
    });
  }

  function initScrollDown() {

    $scrollDownBtn.on("click", function() {

      var parentHeight = $(this).parent().height();
      $("html, body").animate({scrollTop: parentHeight}, 450);
  
      // Set Header to fixed
      setTimeout(function() { $header.addClass("header--fixed"); }, 450);
  
      return false;
    });

  }

  function initSmoothLink() {
    $linkBtn.on("click", function(e) {
      e.preventDefault();
      $(document).off("scroll");
      
      var target = this.hash;
      $("html, body").stop().animate({
        scrollTop: $(target).offset().top + 2
      }, 900, 'swing', function() {
        // window.location.hash = target;
      });
    });
  }

  function initScrollTop() {
    var btn = $('.scrollup__btn');

    function backToTop() {
      if ($window.scrollTop() > 700) {
        btn.addClass('scrollup__btn--show');
      } else {
        btn.removeClass('scrollup__btn--show');
        
        $('.nav__list').removeClass('nav__list--active');
        $('.navbar__list:first-child').addClass('nav__list--active');
      }
    }

    backToTop();

    $window.on('scroll', function() { backToTop(); });

    btn.on('click', function() {
      $("html, body").animate({ scrollTop: 0 }, 450);
      return false;
    });

  }

  function initGallery() {
    $galleryOption.on("click", function() {
      var container = $(".gallery__list");
      var activeBtn = $(this);
      var value = activeBtn.data('value');
  
      $(".gallery__options").find(".gallery__option").removeClass("gallery__option--active");
      activeBtn.addClass("gallery__option--active");
  
      container.find(".gallery__item--hide").removeClass("gallery__item--hide");
      if (value !== "all") container.find(".gallery__item:not([data-group='"+value+"'])").addClass("gallery__item--hide");
    });
  
  }

  function init() {
    initPreloader();
    initNavbar();
    initScrollDown();
    initSmoothLink();
    initScrollTop();
    initGallery();
  }

  $document.ready(function() {
    init();
  });

})(jQuery);

