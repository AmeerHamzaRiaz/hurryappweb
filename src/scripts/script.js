$(function() {
  $(document).scroll(function() {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$('.navbar-nav .nav-link').click(function(){
  $('.navbar-nav .nav-link').removeClass('active');
  $(this).addClass('active');
})

// $(window).scroll(function() {
//   var scrollDistance = $(window).scrollTop();
//   // console.log(scrollDistance);
//   // Show/hide menu on scroll
//   // if (scrollDistance >= 200) {
//   // 		$('nav').fadeIn("fast");
//   // } else {
//   // 		$('nav').fadeOut("fast");
//   // }

//   // Assign active class to nav links while scolling
//   $('.page-section').each(function(i) {
//     console.log(i);
//       if ($(this).position().top <= scrollDistance) {
//           $('.navbar-nav .nav-link').removeClass('active');
//           $('.navbar-nav .nav-link').eq(i).addClass('active');
//       }
//   });
// }).scroll();