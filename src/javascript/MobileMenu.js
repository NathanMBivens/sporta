import 'jquery';


module.exports.mobileMenu = () => {
  let options = {
    duration: 200,
    easing: 'swing'
  };
    $(".exit").hide();
    $(".mobile-nav").hide();
    $(".hamburger").click(function() {
      $(".mobile-nav").slideToggle("medium",
    function(){
      $(".navigation-title").fadeOut();
      $(".hamburger").fadeOut();
      $(".exit").fadeIn();

    });
  });

    $(".exit").click(function() {
      $(".mobile-nav").slideToggle("medium", function() {
        $(".navigation-title").fadeIn();
        $(".exit").fadeOut();
        $(".hamburger").fadeIn();
      });
    });

  }
