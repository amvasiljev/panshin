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



$('input').each(function () {
  if ($(this).attr('required')) {
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

var windowHeight = $(document).innerHeight()


$('.nav__inner').hover(
  function () {
    $('.nav__hover').dequeue().stop(true, true).fadeIn(300).css('height', windowHeight - 200)

  },
  function () {
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


$('.nav__link_mobile svg path').each(function () {
  if ($(this).attr('stroke')) {
    $(this).addClass('recolor')
  }
})



// slider 
var arrow_next = '<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16.5L6.875 9.625L0 2.75L1.375 0L11 9.625L1.375 19.25L0 16.5Z" /></svg>'
var arrow_prev = '<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 16.5L4.125 9.625L11 2.75L9.625 0L0 9.625L9.625 19.25L11 16.5Z" /></svg>'




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

if ($('.slider_main').slick("getSlick").slideCount == 1) {
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


$('.slider__box_sertificate').slick({
  lazyload: 'ondemand',
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  nextArrow: '<div class="slider__arrow slider__arrow_next slider__arrow_next_sertificate">' + arrow_next + '</div>',
  prevArrow: '<div class="slider__arrow slider__arrow_prev slider__arrow_prev_sertificate">' + arrow_prev + '</div>',
  appendArrows: $('.slider__arrows_sertificate'),
  appendDots: $('.slider__dots_sertificate'),
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

      }
    }

  ]
})

$('.slider__box_case').slick({
  lazyload: 'ondemand',
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  nextArrow: '<div class="slider__arrow slider__arrow_next slider__arrow_next_case">' + arrow_next + '</div>',
  prevArrow: '<div class="slider__arrow slider__arrow_prev slider__arrow_prev_case">' + arrow_prev + '</div>',
  appendArrows: $('.slider__arrows_case'),
  appendDots: $('.slider__dots_case'),

})

$('.slider__box_result').slick({
  lazyload: 'ondemand',
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  nextArrow: '<div class="slider__arrow slider__arrow_next slider__arrow_next_result">' + arrow_next + '</div>',
  prevArrow: '<div class="slider__arrow slider__arrow_prev slider__arrow_prev_result">' + arrow_prev + '</div>',
  appendArrows: $('.slider__arrows_result'),

})

appendDots()
// slider 

// news
$('.news').last().addClass('news_final');
// news


// products
// if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//   var product = $('.product');
//   product.each(function (indx) {
//     if (indx >= 3) $(this).hide()
//   })
// }

//products


// video

// (function () {
//   var youtube = $('.video__code');
//   youtube.addClass('test');
//   for (var i = 0; i < youtube.length; i++) {
//       var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";
//       var image = new Image();
//       // image.src = source;
//       image.setAttribute('class', 'lazy');
//       image.setAttribute('data-src', source);
//       image.setAttribute('data-lazy', source);
//       image.addEventListener("load", function () {
//           youtube[i].appendChild(image);
//       }(i));

//       youtube[i].addEventListener("click", function () {
//           var iframe = document.createElement("iframe");
//           iframe.setAttribute("frameborder", "0");
//           iframe.setAttribute("allowfullscreen", "");
//           iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=0");
//           this.innerHTML = "";
//           this.appendChild(iframe);
//       });
//   };
// })();



// end video





const mediaQuery_767 = window.matchMedia('(max-width: 767px)')
const mediaQuery_1023 = window.matchMedia('(max-width: 1023px)')

function videoMobileSlider(e) {
  if (e.matches) {
    $('.section__box_video').slick({
      lazyload: 'ondemand',
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      nextArrow: '<div class="slider__arrow slider__arrow_next slider__arrow_next_video">' + arrow_next + '</div>',
      prevArrow: '<div class="slider__arrow slider__arrow_prev slider__arrow_prev_video">' + arrow_prev + '</div>',
      appendArrows: $('.slider__arrows_video'),
      appendDots: $('.slider__dots_video'),

    })
    $('.section__box_video').addClass('mobileSlick')
    appendDots()
  } else {
    if ($('.mobileSlick').length > 0) {
      $('.section__box_video').slick('unslick');
    }

  }
}


function stepsMobile(e) {

  if (e.matches) {
    $('.tabs__item').each(function (indx) {
      var $this = $(this).clone().addClass('tabs__item_mobile')

      var id = $this.attr('href')

      $(id).prepend($this)

    })
    var mobile = 'mobile'
    
    tabsChange(mobile)

    $('.case__wrapper').addClass('case__wrapper_mobile').show()
    $('.case_step').addClass('case_mobile')
    var activeCase = $('.tabs__item_active').next('.case')
    $('.section__box_steps .case_step').not(activeCase).slideUp()

  } else {
    $('.tabs__item_mobile').remove()
    $('.case__wrapper').removeClass('case__wrapper_mobile')
    $('.section__box_steps .case').show()
    $('.section__box_steps .case__wrapper:not(:first-child)').hide()
    $('.case_step').removeClass('case_mobile')
    
    tabsChange('')
  }
}

mediaQuery_767.addListener(videoMobileSlider)
videoMobileSlider(mediaQuery_767)
mediaQuery_1023.addListener(stepsMobile)
stepsMobile(mediaQuery_1023)


function appendDots() {
  $('.slider__dots').each(function () {
    $(this).insertAfter($(this).prev('.slider__arrows').find('.slider__arrow_prev'))
  })
}



function tabsChange(mobile) {

  $('.tabs__item').on('click', function (e) {
    e.preventDefault()
    var $this = $(this)
    var id = $this.attr('href')
    $this.addClass('tabs__item_active')

    $('.tabs__item').not($this).removeClass('tabs__item_active')

    if (mobile == 'mobile') {
      var activeCase = $(this).next('.case_mobile')
      activeCase.slideDown()
      $('.case_mobile').not(activeCase).slideUp()

    } else {
      $('.section__box_steps .case__wrapper').hide()
      $(id).show()
      
    }


  })


}


$('#feedback_file').on('change', function () {
  var arrayFiles = this.files, // массив с выбранными файлами
    formItem = this.parentNode, // родительский элемент, для того чтобы вставить список с файлами
    listFiles = document.createElement('ul'), // список с файлами
    li = ''; // файлы

  // Если список с файлами уже вставлен в ДОМ, то удаляем его
  if (formItem.querySelector('.feedback__filelist')) {
    formItem.querySelector('.feedback__filelist').remove();
  }

  listFiles.className = 'feedback__filelist'; // 

  for (var i = 0; i < arrayFiles.length; i++) {
    li += '<li>' + arrayFiles[i].name + '</li>'; // <li>Имя файла</li>
  }

  listFiles.innerHTML = li;

  formItem.appendChild(listFiles);
});