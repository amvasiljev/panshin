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

//mobile menu

var burger = $('.burger');
var mobileMenu = $('.nav').clone().html();
var closeMenu = $('<div>').addClass('nav__close');
var auth = $('.auth').clone().addClass('auth_mobile').removeClass('auth').append(closeMenu);
var contacts = $('.header__contacts').clone().addClass('header__contacts_mobile').removeClass('header__contacts')

auth.find('.auth__reg').addClass('auth__reg_mobile')
auth.find('.auth__log').addClass('auth__log_mobile')

contacts.find('.email').addClass('email_mobile')
contacts.find('.email__text').addClass('email__text_mobile')
contacts.find('.email__link').addClass('email__link_mobile')
contacts.find('.phone__text').addClass('phone__text_mobile')
contacts.find('.phone__link').addClass('phone__link_mobile')

burger.on('click', function () {
  if ($('.nav_mobile').length) {
    $('.nav_mobile').fadeIn(300);
  } else {
    $('<div>').addClass('nav_mobile').prependTo('body').append(mobileMenu);
    $('.nav_mobile').prepend(auth).append(contacts).find('.nav__item').addClass('nav__item_mobile')
  }
  $('body').addClass('stop_scrolling ')
})

closeMenu.on('click', function () {
  $('.nav_mobile').fadeOut(300);
  $('body').removeClass('stop_scrolling ')
})


$(document).on('click', '.nav__item', function () {
  closeMenu.trigger('click');
})


//mobile menu


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