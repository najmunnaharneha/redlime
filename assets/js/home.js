$(document).ready(function () {
   //Fleet area starts
   $(".fleet-contents").slick({
      centerMode: true,
      centerPadding: "200",
      slidesToShow: 3,
      prevArrow: true,
      nextArrow: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: "40px",
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: "40px",
               slidesToShow: 1,
            },
         },
      ],
   });
   //Fleet area ends
}); // Document.ready ends
