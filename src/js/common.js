$(function () {
  $('.lazy').Lazy();
});



// inputs
$(document).on('focus', 'input[type="text"]', function () {
  $(this).addClass('input_focus');
})
$(document).on('blur', 'input[type="text"]', function () {
  $(this).removeClass('input_focus');
})

// inputs


$('.header__cities_arrow').on('click', function () {
  $('.header__cities a').eq(0).trigger('click')
})

cityChoice()


function cityChoice() {
  $('.header__cities').on('click', 'a', function (e) {
    e.preventDefault()
    $('.header__city').not($(this)).toggleClass('header__city_active')
    var currentCity = $('.header__city_active').attr('href')
  
    if (!$(this).attr('data-key')) {
      $('.header__city').attr('data-key', 'key').prependTo($('.header__cities'))
  
      $('.header__cities').addClass('header__cities_open')
      $('.header__cities_arrow').addClass('header__cities_arrow_rotate')
    } else {
      $('.header__cities').removeClass('header__cities_open')
      $('.header__cities_arrow').removeClass('header__cities_arrow_rotate')
      $('.header__city').removeAttr('data-key')
      $(this).prependTo($('.header__cities'))
      $('.header__phones a').each(function () {
        if ($(this).attr('data-city') == currentCity) {
          $(this).addClass('header__phone_active')
        } else {
          $(this).removeClass('header__phone_active')
        }
      })
    }
  })
}


$('.nav__item_group').hover(
  function () {
    $(this).find('.nav__link_group').addClass('nav__link_hover')
    $(this).find('.nav_level2').dequeue().stop(true, true).fadeIn(300).css('display', 'flex')
    
  },
  function () {
    $(this).find('.nav__link_group').removeClass('nav__link_hover')
    $(this).find('.nav_level2').dequeue().stop(true, true).fadeOut(300)
   
  }
)

var windowHeight = $(window).innerHeight()


$('.nav__inner').hover(
  function(){
    $('.nav__hover').dequeue().stop(true, true).fadeIn(300).css('height',windowHeight - 200)
  }
  ,
  function(){
    $('.nav__hover').dequeue().stop(true, true).fadeOut(300);
  }
)



//mobile menu

var mobileNav = $('<div>').addClass('nav_mobile');
var mobileItems = $('.nav__inner').html();
var mobileWrapper = $('<div>').addClass('nav_outer').prependTo('body');
var burger = $('.burger');
var closeButton = $('<div>').addClass('nav_close');
var mobileFake = $('<div>').addClass('nav__fake').prependTo('body');


mobileWrapper.append(mobileNav);
mobileNav.append(closeButton);
mobileNav.append(mobileItems);
mobileNav.find('.nav__link').addClass('nav__link_mobile');

var mobileLinks = $('.header__links').clone().appendTo(mobileWrapper).addClass('header__links_mobile');



burger.on('click', function () {
  mobileWrapper.animate({
    right: 0
  }, 300).addClass('nav_active');
  $('body').addClass('stop_scrolling');
  $(this).attr('data-key', '');
  mobileFake.show();
})

closeButton.on('click', function () {
  mobileWrapper.animate({
    right: '-287px'
  }, 500).removeClass('nav_active');

  $(this).attr('data-key', 'key');
  mobileFake.hide();
  setTimeout(function () {
    $('body').removeClass('stop_scrolling');
  }, 300)
})


mobileFake.on('click', function () {
  closeButton.trigger('click')
})


$('.nav_mobile .nav__link_group').on('click', function (e) {
  e.preventDefault()
  var $this = $(this).next('.nav_level2');
  $(this).parent().parent().find('.nav_level2').not($this).slideUp()
  $this.slideToggle()

  $(this).toggleClass('nav__link_open')
  $(this).parent().parent().find('.nav__link_group').not($(this)).removeClass('nav__link_open')
})



//mobile menu


$('.nav__link_mobile svg path').each(function(){
  if($(this).attr('stroke')){
    $(this).addClass('recolor')
  }
})



// slider 


$('.slider__box').slick({
  lazyload: 'ondemand',
  // infinite: false,
  fade: true,
  cssEase: 'linear',
  nextArrow: '<div class="slider__arrow slider__arrow_next">',
  prevArrow: '<div class="slider__arrow slider__arrow_prev">',
  // appendArrows: $('.slider__arrows'),
})


// slider 

// news
$('.news').last().addClass('news_final');
// news


// products
if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  var product = $('.product');
  product.each(function (indx) {
    if (indx >= 3) $(this).hide()
  })
}

//products