// cta-catch font-size: 14.8px; (max-width: 345px) btn--cta font-size: 14.8px; (max-width: 345px)
var mediaQuery1 = window.matchMedia('(max-width: 342px)');
function handleMediaQueryChange1(mediaQuery1){
    if(mediaQuery1.matches){
        $('.cta-catch').css('fontSize', 'max(14.8px, 4.6vw)');
        $('.btn--cta').css('fontSize', 'max(14.8px, 4.6vw)');
    } else{
        $('.cta-catch').css('fontSize', '');
        $('.btn--cta').css('fontSize', '');
    }
}
handleMediaQueryChange1(mediaQuery1);
mediaQuery1.addEventListener('change', handleMediaQueryChange1);

// accordion-----------------------------------------------------
$('.QA-item').on('click', function(e){
    e.preventDefault();
    $(this).find('.Aarea-wrapper').slideToggle();
    $(this).find('.Qarea-arrow').toggleClass('active');
});


// swiper----------------------------------------------------------------
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  // drawer---------------------------------------------------------
  $('.hamburger').on('click', function(){
    $(this).toggleClass('active');
    $('.drawer').toggleClass('active');
    $('html, body').toggleClass('no-scroll');
  });

  // smoothScroll-------------------------------------------------------
  $('a[href^="#"]').on('click', function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      scrollTop: position
    }, 300);
  });

  $('.drawer').find('a[href^="#"]').on('click', function(){
    $('.hamburger').toggleClass('active');
    $('.drawer').toggleClass('active');
    $('html, body').toggleClass('no-scroll');
  });


  // modal-----------------------------------------
  $('.open-js').on('click', function(){
    $('.modal').addClass('active');
    $('html, body').toggleClass('no-scroll');
  });
  $('.close-js').on('click', function(){
    $('.modal').removeClass('active');
    $('html, body').toggleClass('no-scroll');
  });

  // page-top------------------------------------------------
  $('.page-top').on('click', function(){
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });

  $('.page-top').hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('.page-top').fadeIn();
    } else{
      $('.page-top').fadeOut();
    }
  });

  // チェックボックスがクリックされる度テキストの色と下線の色を変える---------------------------
$('.checkbox').on('change', function(){
  $('.privacy-link').toggleClass('checked');
});


// differentセクションのテーブルのスクロールバー下のテキストをブラウザ幅650px以上になったら非表示にする方法----------------
var mediaQuery2 = window.matchMedia('(min-width: 650px)');
function handleMediaQueryChange2(mediaQuery2){
  if(mediaQuery2.matches){
    $('.different-table-scroll-text').css('display', 'none');
  } else{
    $('.different-table-scroll-text').css('display', '');
  }
}
handleMediaQueryChange2(mediaQuery2);
mediaQuery2.addEventListener('change', handleMediaQueryChange2);


//  about-description font-size: 15px; (max-width: 340px)-----------------------
var mediaQuery3 = window.matchMedia('(max-width: 340px)');
function handleMediaQueryChange3(mediaQuery3){
  if(mediaQuery3.matches){
    $('.about-description').css('fontSize', '15px');
  } else{
    $('.about-description').css('fontSize', '');
  }
}
handleMediaQueryChange3(mediaQuery3);
mediaQuery3.addEventListener('change', handleMediaQueryChange3);
