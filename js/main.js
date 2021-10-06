$(function(){
  $(".num").counterUp({
    delay:30,
    time:8000
  });
  $(window).scroll(function(){
    if(this.scrollY >56){
      $("header").addClass("fixed");
    }else{
      $("header").removeClass("fixed");
    }
  });
  $(".click1").click(function(){
    $(".ber-left .line-bg").css({
      "height":"30%"
    });
   
  });
  $(".click2").click(function(){
    $(".ber-left .line-bg").css({
      "height":"40%"
      
    });
    // $(".span1 span").append("1");

  });
  $(".click3").click(function(){
    $(".ber-left .line-bg").css({
      "height":"60%"
    })
  });
  $(".click4").click(function(){
    $(".ber-left .line-bg").css({
      "height":"80%"
    })
  });
  $(".click5").click(function(){
    $(".ber-left .line-bg").css({
      "height":"100%"
    })
  });
  $("#img-next").click(function(){
    $(".ber .line").css({
      "width":"+=33%"
    })
  });
  $("#img-perv").click(function(){
    $(".ber .line").css({
      "width":"-=33%"
    })
  });


// --------------------------------------------------------------------------------------
$('.cus-silder').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
          nav:false
      },
      800:{
        items:2,
        nav:false
      },
      1000:{
          items:3,
          nav:false,
          loop:false
      }
  }
});
var owl4 = $('.cus-silder');
owl4.owlCarousel();
$('.customNextBtn2').click(function() {
owl4.trigger('next.owl.carousel');
});

$('.customPrevBtn2').click(function() {

owl4.trigger('prev.owl.carousel', [300]);
});
// -------------------------------------------------------------------------------
  // strad img silder
  $('.spaces-silder').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        800:{
          items:2,
          nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
});
  var owl1 = $('.spaces-silder');
owl1.owlCarousel();
$('.customNextBtn1').click(function() {
  owl1.trigger('next.owl.carousel');
})

$('.customPrevBtn1').click(function() {

  owl1.trigger('prev.owl.carousel', [300]);
});
  // ************************************************************
  // strad silder service

$('.mohammeds').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
          nav:false
      },
      800:{
        items:2,
        nav:false
      },
      1000:{
          items:4,
          nav:false,
          loop:false
      }
  }
});
var owl2 = $('.mohammeds');
owl2.owlCarousel();
$('.ser-next').click(function() {
owl2.trigger('next.owl.carousel');
})

$('.ser-perv').click(function() {

owl2.trigger('prev.owl.carousel', [300]);
});
});




