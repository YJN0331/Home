$(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    // scrollHorizontally: true,
    navigation: true,
    // fitToSection: true,
    // fitToSectionDelay: 500,
    // afterLoad: function(origin, destination, direction) {
    //   if(origin == 2) {
    //     console.log("second page loaded")
    //   }

    // }
  });

  // portfolio swiper
  var swiper = new Swiper(".swiper", {
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    effect: "cards",
    cardsEffect: {
      slideShadows: false,
    },
    observer: true, // 추가
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      activeIndexChange: function () {
        $(".port_txt").css({
          visibility: "hidden",
          opacity: "0",
        });
        $(".go_live").css({
          opacity: "0"
        }); 
        $(".more").css({
          display: "flex",
        });
      },
    },
    
  });

  $(".port_img").click(function () {
    $(this).find(".more").css({
      display: "none",
    });
    $(this).find(".go_live").css({
      opacity: "1",
    });
    $(this).next().css({
      visibility: "visible",
      opacity: "1",
    });
  });

  $(".swiper-button-prev, .swiper-button-next").click(function () {
    $(".port_txt").css({
      visibility: "hidden",
      opacity: "0",
    });
    $(".go_live").css({
      opacity: "0"
    });    
    $(".more").css({
      display: "flex",
    });
  });


});

