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

$('#demo-step-1').on({
  'click': function(){
      $('#demo-mobile').attr('src','src/images/howitworks-step-1@2x.png');
      $("#demo-steps-parent-div>div.demo-steps-div-active").removeClass("demo-steps-div-active");
      $(this).addClass('demo-steps-div-active');
  }
});

$('#demo-step-2').on({
  'click': function(){
      $('#demo-mobile').attr('src','src/images/howitworks-step-2@2x.png');
      $("#demo-steps-parent-div>div.demo-steps-div-active").removeClass("demo-steps-div-active");
      $(this).addClass('demo-steps-div-active');
  }
});

$('#demo-step-3').on({
  'click': function(){
      $('#demo-mobile').attr('src','src/images/howitworks-step-3@2x.png');
      $("#demo-steps-parent-div>div.demo-steps-div-active").removeClass("demo-steps-div-active");
      $(this).addClass('demo-steps-div-active');
  }
});

$('#demo-step-4').on({
  'click': function(){
      $('#demo-mobile').attr('src','src/images/howitworks-step-4@2x.png');
      $("#demo-steps-parent-div>div.demo-steps-div-active").removeClass("demo-steps-div-active");
      $(this).addClass('demo-steps-div-active');
  }
});