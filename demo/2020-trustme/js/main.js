/**
 *
 * @authors Eric Hsiao
 *
 */

main = function () {

  //private menbers


  //private methods
  function init() {
    console.log('main is loaded.');
    // new WOW().init();
    AOS.init({
      easing: 'ease-out-back',
      duration: 800
    });

    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters      
      loop: true,
      autoplay: {
        delay: 5000,
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable :true
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }
    })

    var _data_txt= [
      '參考生活品質量表 ，分析使用者的生活質量',
      '時間內以睜開雙眼與閉上雙眼量化雙腳壓力，可測試平衡感與視覺反應',
      '屬於動態分析，模擬日常生活中的活動反應，分析身體在步行中的重心轉移與步行速度',
      '測試平衡感，也可評估高齡者的跌倒風險',
      '利用雙腳固定、只移動身體重心的自主運動，評估八個不同方向的最大移動範圍',
      '往八個不同方向傾斜，分析使用者行動最大限制與最大活動方向',
      '檢測在不同的位置，使用者的最大力量',
      '測試使用者協調動作的能力'
    ]

    for (let index = 0; index < 8; index++) {
      const _btn = $('.data__btn--' + (index+1));
      _btn.data('count',index);
      _btn.mouseover(function () { 
        $('.data__btn').removeClass('active');
        $(this).addClass('active');
        $('.text__area__content').text(_data_txt[$(this).data('count')]);
      });
    }

    $('.menu__container').css('display','flex');
    TweenMax.set('.menu__container',{y:-768,autoAlpha:0});

    $('.header__menu__btn').click(function (e) {     
      TweenMax.to('.menu__container',0.5,{y:0,autoAlpha:1});
    });

    $('.close__btn').click(function (e) {     
      TweenMax.to('.menu__container',0.3,{y:-768,autoAlpha:0});
    });

    $('a').click(function (e) {      
      var target = $(this).attr('href');
      if (target[0] == '#' && target.length > 1 && target != '#pills-Virtual' && target != '#pills-Physical') {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $(target).offset().top }, 1000);        
      }
      $('.close__btn').click();
    });
  }

  //constructor

  {
    $(document).ready(function () {
      init();
    });
  }

  //public

  return {

  };
};

var main = new main();
