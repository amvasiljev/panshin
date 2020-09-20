$(function () {
  $('.lazy').Lazy();
});



// inputs
$(document).on('focus', 'input', function () {
  $(this).addClass('input_focus');
})
$(document).on('blur', 'input', function () {
  if (!$(this).val()) {
    $(this).removeClass('input_focus');
  }
})



$('input').each(function(){
  if($(this).attr('required')){
    $(this).prev('label').append($('<span class="required">*</span>'))
  }
})


$('.order__input_phone').mask('+7 (000) 000-00-00', {
  placeholder: "+7 (___) ___-__-__"
});

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




$(document).scroll(function () {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > 0) {
   
    $('.header__contacts').addClass('header__contacts_hide');
    $('.header__inner').addClass('header__inner_scroll');
  } else {
   
    $('.header__contacts').removeClass('header__contacts_hide');
    $('.header__inner').removeClass('header__inner_scroll');
  }
})



//mobile menu


$('.nav__link_mobile svg path').each(function(){
  if($(this).attr('stroke')){
    $(this).addClass('recolor')
  }
})



// slider 
var arrow_next = '<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16.5L6.875 9.625L0 2.75L1.375 0L11 9.625L1.375 19.25L0 16.5Z" fill="white" fill-opacity="0.5"/></svg>'
var arrow_prev = '<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 16.5L4.125 9.625L11 2.75L9.625 0L0 9.625L9.625 19.25L11 16.5Z" fill="white" fill-opacity="0.5"/></svg>'




$('.slider_main').slick({
  lazyload: 'ondemand',
  // infinite: false,
  fade: true,
  cssEase: 'linear',
  nextArrow: '<div class="slider__arrow slider__arrow_next slider__arrow_next_main">' + arrow_next + '</div>',
  prevArrow: '<div class="slider__arrow slider__arrow_prev slider__arrow_prev_main">' + arrow_prev + '</div>',
  appendArrows: $('.section__arrows'),
  dots: true,
  appendDots: $('.section__dots')
})

if($('.slider_main').slick("getSlick").slideCount == 1){
  $('.section__dots').hide()
}

$('.slider_result').slick({
  lazyload: 'ondemand',
  // infinite: false,
  fade: true,
  cssEase: 'linear',
  nextArrow: '<div class="slider__arrow slider__arrow_next slider__arrow_next_result">' + arrow_next + '</div>',
  prevArrow: '<div class="slider__arrow slider__arrow_prev slider__arrow_prev_result">' + arrow_prev + '</div>',
  appendArrows: $('.slider__arrows'),
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