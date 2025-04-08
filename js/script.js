$(document).ready(function(){

  var swiper = new Swiper(".mySwiper_1", {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
  });

  // section_1 end


  var swiper = new Swiper(".mySwiper_2", {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        clickable: true,
      },
  });

  // section_3 end


  var swiper = new Swiper(".mySwiper_3", {
    slidesPerView: 3.9,
    spaceBetween: 7,
    freeMode: true,
  });


  $(".tag>.swiper-slide").click(function(){
    $(".tag>.swiper-slide").removeClass("on");
    $(this).addClass("on");
  
  
    var a = $(this).index();
  
    $(".sec4_cons").hide();
    $(".sec4_cons").eq(a).show();
  
    return false;
  });

  // section_4 end


  var swiper = new Swiper(".mySwiper_4", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      clickable: true,
    },
});

// section_5 end


var swiper = new Swiper(".mySwiper_5", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      clickable: true,
    },
});

// section_6 end


var swiper = new Swiper(".mySwiper_6", {
    slidesPerView: 2,
    spaceBetween: 15,
    scrollbar: {
      el: ".swiper-scrollbar",
      clickable: true,
    },
});

// section_7 end


var swiper = new Swiper(".mySwiper_7", {
  slidesPerView: 1,
  spaceBetween: 15,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// section_8 end


$(".quick_menu").click(function(){

    $("html, body").animate({
        scrollTop: 0,
    }, 400);
    
});
    
// quick_menu end

}); //end