(function($){



//객체 타입 (object)
  $('.main-btn').on({
    mouseenter: function(){
      $('.main-btn').on('mouseenter',function(){
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);
    
        $('.main-btn').removeClass('on');
        $(this).addClass('on');
      })
    },
      //키보드 접근성 포커스인
    focusin: function(){
      $('.main-btn').focusin(function(){
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);
    
        $('.main-btn').removeClass('on');
        $(this).addClass('on');
    } );
    }
  });

    
  $('#nav').on({
    mouseleave:function(){
      $('.sub').stop().fadeOut(300);
      $('.main-btn').removeClass('on');
    }
  });
//ES5
  $('.main-btn').on({
    mouseenter:function(){

    },
    focusin:function(){

    }
  });
  //ES6
  $('.main-btn').on({
    mouseenter(){

    },
    focusin(){

    }

    
  });



  //메인슬라이드
  let cnt=0;
 

  //1.메인슬라이드 함수
  function mainSlide(){
    $('.slide-wrap').animate({top:-300*cnt},600,function(){
      cnt>2?cnt=0:cnt;
      cnt<0?cnt=2:cnt;
      $('.slide-wrap').animate({top:-300*cnt},0)
    });
  };

  //2.다음카운트함수
  function nextCount(){
    cnt++;
    mainSlide();
  };
  function prevCount(){
    cnt--;
    mainSlide();
  };
  //3.오토타이머 함수
  function autoTimer(){
    //setInterval(nextCount,3000);
    setInterval(prevCount,3000);
  };
  autoTimer();


  //공지사항 & 갤러리 탭메뉴 클릭 이벤트
  // 갤러리버튼 클릭

  $('.gallery-btn').on({
    click:function(){ //마우스는 클릭 키보드는 엔터(enter)
      $('.notice-btn').addClass('on');
      $('.gallery-btn').addClass('on');
      $('.notice-box').addClass('on');
      $('.gallery-box').addClass('on');
    }
  })

  // 공지사항버튼 클릭

  $('.notice-btn').on({
    click:function(){
      $('.notice-btn').removeClass('on');
      $('.gallery-btn').removeClass('on');
      $('.notice-box').removeClass('on');
      $('.gallery-box').removeClass('on');
    }
  })

  //팝업창(레이드팝업창)(모달창)

  $('.link-btn').on({
    click:function(){
      $('#modal').fadeIn(300);
    }
  });


  $('.close-btn').on({
    click:function(){
      $('#modal').fadeOut(300);
    }
  })

})(jQuery);