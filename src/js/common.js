const {
  each
} = require("jquery");

$(function () {
  $('.lazy').Lazy();
});



// inputs
$(document).on('focus', 'input,textarea', function () {
  $(this).addClass('input_focus');
})
$(document).on('blur', 'input,textarea', function () {
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
$('.feedback__input_phone').mask('+7 (000) 000-00-00', {
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


$('.navside__link_group').on('click', function (e) {
  e.preventDefault()
  var $this = $(this).next('.navside__submenu');
  $(this).parent().parent().find('.navside__submenu').not($this).slideUp()
  $this.slideToggle()

  $(this).toggleClass('navside__link_open')
  $(this).parent().parent().find('.navside__link_group').not($(this)).removeClass('navside__link_open')
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
$('.slider__box_reviews').slick({
  lazyload: 'ondemand',
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  dots: true,
  nextArrow: '<div class="slider__arrow slider__arrow_next slider__arrow_next_reviews">' + arrow_next + '</div>',
  prevArrow: '<div class="slider__arrow slider__arrow_prev slider__arrow_prev_reviews">' + arrow_prev + '</div>',
  appendArrows: $('.slider__arrows_reviews'),
  appendDots: $('.slider__dots_reviews'),

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

(function () {
  var youtube = $('.video__code');
  youtube.addClass('test');
  for (var i = 0; i < youtube.length; i++) {
    var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";
    var image = new Image();
    // image.src = source;
    image.setAttribute('class', 'lazy');
    image.setAttribute('data-src', source);
    image.setAttribute('data-lazy', source);
    image.addEventListener("load", function () {
      youtube[i].appendChild(image);
    }(i));

    youtube[i].addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=0");
      this.innerHTML = "";
      this.appendChild(iframe);
    });
  };
})();



// end video


// make 

$('.make__number').on('click',function(){
  var $this = $(this)
  var total = $this.parent().parent().find('.make__total')
  var price = $this.attr('data-price')
  
  $this.addClass('make__number_active')
  $('.make__number').not($this).removeClass('make__number_active')
  total.text(price)

})



const mediaQuery_767 = window.matchMedia('(max-width: 767px)')
const mediaQuery_1023 = window.matchMedia('(max-width: 1023px)')


function breadCrumbsChange(e) {
  if (e.matches) {
    breadcrumbs(0)
  } else {
    breadcrumbs(45)
  }
}

function makeButtonMove(e){
  if (e.matches) {
    $('.make .button').appendTo($('.make'))
  } else {
    $('.make .button').appendTo($('.make__content'))
  }
}

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

    $('.section__box_steps .case__wrapper').addClass('case__wrapper_mobile').show()
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


function reviewButtonMove(e) {

  $('.review .button_red').each(function () {
    if (e.matches) {
      $(this).prependTo($(this).parent().parent())
    } else {
      $(this).parent().find('.review__content').append($(this))
    }

  })

}

var tableStorage = $('<div>').addClass('table__storage').appendTo($('body'))


function tableTransform(e) {


  if (e.matches) {
    $('.table').each(function (indx) {


      var table = $(this)
      $(this).attr('data-table', 'data-table_' + indx)
      var tempTable = $(this).clone()
      tempTable.attr('data-clone', 'data-table_' + indx).attr('data-table', '')
      tempTable.appendTo(tableStorage)

      var cellFirst = table.find('th')

      cellFirst.each(function (indx) {
        var elem = $(this).html();
        var index = indx;
        table.find('tr').each(function () {

          var cell = $(this).find('td');


          cell.each(function (indx) {

            if (indx == index && indx != 0) {
              var fake = $('<div>').addClass('table__cell_fake')

              if (table.hasClass('table_calc')) {
                if (indx > 1) {
                  var temp = $('<div>').addClass('table__cell_temp').text($(this).text())
                  $(this).text('')
                  temp.appendTo($(this))
                }
              } else {
                var temp = $('<div>').addClass('table__cell_temp').text($(this).text())
                $(this).text('')
                temp.appendTo($(this))
                $('<div style="clear: both;">').appendTo($(this))
              }


              fake.prependTo($(this))
              fake.append(elem)

            }
          })
        })

      })


      table.find('.table__row').eq(0).hide()
      table.find('tr').eq(0).hide()

    })
    
  } else {
   
    tableStorage.find('.table').each(function (indx) {

      var clone = $(this)
      var attr = clone.attr('data-clone')

      $('.table').not($(this)).each(function () {
        var table = $(this)
        if (table.attr('data-table') == attr) {

          clone.attr('data-clone', '')
          table.before(clone)
          table.remove()
        }
      })

    })
  }





}


mediaQuery_1023.addListener(tableTransform)
tableTransform(mediaQuery_1023)
mediaQuery_767.addListener(makeButtonMove)
makeButtonMove(mediaQuery_767)
mediaQuery_767.addListener(breadCrumbsChange)
breadCrumbsChange(mediaQuery_767)
mediaQuery_767.addListener(videoMobileSlider)
videoMobileSlider(mediaQuery_767)
mediaQuery_1023.addListener(reviewButtonMove)
reviewButtonMove(mediaQuery_1023)
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


$('.feedback__select').niceSelect();


$('.button-side__link').on('click', function () {
  var id = $(this).attr('data-link')
  var marker = $(id)
  $('html, body').animate({
    scrollTop: marker.offset().top - 150,
    easing: 'linear'
  }, 1000);
})





function breadcrumbs(padding) {
  var crumbs = $('.breadcrumbs')
  if (crumbs.length > 0) {
    var nextSection = crumbs.next('.section__inner')
    nextSection.css('padding-top', padding)
  }
}


