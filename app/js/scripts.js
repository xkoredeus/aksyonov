$(function() {
	$('.intro-text__slider').owlCarousel({
      nav: false,
      dots: true,
      items: 1,
	});
  $('.gallery__slider').owlCarousel({
      nav: true,
      dots: false,
      items: 1,
      center: true,
      loop: true,
      margin: 20,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
  });
  $('.rev__slider').owlCarousel({
      nav: true,
      dots: false,
      items: 1,
      navText: ["<img src='img/slider__arrow_prev.svg'>", "<img src='img/slider__arrow_next.svg'>"],
  });
  // tabs 
  $(document).ready(function () {
    $(".tabs__content-item:not(:first-child)").hide();
    $(".tabs__container div.tabs__content-item.active-tab").show();
    $('ul.tabs__list > li').click(function () {
      if (!($(this).hasClass('active'))) {
        var thisLi = $(this);
        var numLi = thisLi.index();
        thisLi.addClass('active').siblings().removeClass('active');
        thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
      }
    });
  });
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });
  // mobile menu
  if ( $(window).width() < 1200 ) {
    $(".header__hamburger").on('click',function() {
      $(this).toggleClass("active");
      $('.nav__wrp').toggleClass('active');
    });
  }
  
  //sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 4){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
  });
  //current section
  jQuery(window).scroll(function(){
  var $sections = $('section');
    $sections.each(function(i,el){
    var top  = $(el).offset().top-100;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
        $('a.here').removeClass('here');
        $('a[href="#'+id+'"]').addClass('here');
      }
    })
  });
  $(".nav").on("click","a", function (event) {
      event.preventDefault();
      $('.header__hamburger').removeClass('active');
      $('.nav__wrp').removeClass('active');
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 800);
  });

  //short items
  if ( $(window).width() < 576 ) {
    $('.intro-text__item').addClass('short');
    $('.rev__item-descr').addClass('short');
    $('.intro-text__item').on('click', function () {
      $(this).removeClass('short');
    });
    $('.rev__item-descr').on('click', function () {
      $(this).removeClass('short');
    });
  }
});
