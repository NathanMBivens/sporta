import 'jquery';

module.exports.servicesText = () => {

  $(document).ready(function () {

    var findPosition = function(element, time) {
      var offset = $(element).offset();
      var elementWidth = $(element).width();
      var newPosition = elementWidth/2;
      var iconWidth = ($('.arrow-icon').width()/2);
      console.log(iconWidth);
      var finalCoord = newPosition + offset.left -iconWidth;

      $('.arrow-icon').animate({
        left: finalCoord
      }, time);


    };

    $('.slide-container').click(function() {
      $('.services-slide').css({
        filter: 'brightness(.90) saturate(0)',
        transform: 'scale(1.00)'
      });
      $(this).find('.services-slide').css({
        filter: 'brightness(1.1) saturate(1)',
        transform: 'scale(1.02)'
      });
    });

      var initialArrowPosition = function() {

          var windowWidth = $(document).width();
          var arrowIconOffset = $('.arrow-icon').offset().left;
          console.log(arrowIconOffset);
          var arrowIconWidth = $('.arrow-icon').width();
          console.log(arrowIconWidth);
          var arrowPosition = ((windowWidth/2) - arrowIconOffset) - (22.8594/2);
          var arrowRealPosition = (22.8594/2);
          console.log(arrowPosition);

          $('.arrow-icon').css({
            left: arrowPosition
          })
          var resizeId;

        };

        initialArrowPosition();



        $('.arrow-content').text("Click Above To Hear About Our Many Services");
        $('.arrow-paragraph').text(
        "");

    $('.slide-container').click(function() {
      switch (true) {
        case ($(this).hasClass('sc1')):


          $('.arrow-content').animate({opacity:0}).queue(function() {
            $(this).text("Sports Therapy").dequeue()
          }).animate({opacity:1});

          $('.arrow-paragraph').animate({opacity: 0})
          .queue(function() {
            $(this).text(
            "Here at Sporta we help make you the best version of your athletic self. Our dedicated team of sport therapists have over 40 years of combined experience, working with over 25 types of different athletes. When you work with Sporta, you are assigned a personal therapist from start to finish, who custom-fits your therapy to maximize your time with us. We think you'll love it.").dequeue()
          }).animate({opacity:1});



          $('.slide-1').addClass('.active-click');
          findPosition('.slide-1');
          var resizeId;
          $(window).resize(function() {
            clearTimeout(resizeId);
            resizeId = setTimeout(findPosition('.slide-1', 0), 1000);
          });

          break;

        case ($(this).hasClass('sc2')):

          $('.arrow-content').animate({opacity:0}).queue(function() {
            $(this).text("Sports Training").dequeue()
          }).animate({opacity:1});

          $('.arrow-paragraph').animate({opacity: 0})
          .queue(function() {
            $(this).text(
            "Apart from our groundbreaking sport therapy, we have a team of ten trainers that have expertise in conditioning, body-building, various sport skill enhancing, strengthening, weight loss, and peak performance. Work with them for long, and you'll notice your improvements taking shape. Just like our therapy, our trainers are dedicated to you from start to finish, creating a custom training experience that gets your ready for the game.").dequeue()
          }).animate({opacity:1});



          $('.slide-2').addClass('.active-click');
          findPosition('.slide-2');

          var resizeId;
          $(window).resize(function() {
            clearTimeout(resizeId);
            resizeId = setTimeout(findPosition('.slide-2', 0), 1000);
          });
          break;

        case ($(this).hasClass('sc3')):

          $('.arrow-content').animate({opacity:0}).queue(function() {
            $(this).text("Complete Recovery").dequeue()
          }).animate({opacity:1});

          $('.arrow-paragraph').animate({opacity: 0})
          .queue(function() {
            $(this).text(
            "Working with our team, our Complete Recovery program is your tailored experience of complete injury recovery, and peak performance wrapped into one. Getting past the injury is one thing, but staying healthy afterwards is another matter. Our complete recovery process takes you from the beginning, and enforces a strict plan to get your healthy without any of risks. We want you better than you were before your injury.").dequeue()
          }).animate({opacity:1});


          $('.slide-3').addClass('.active-click');
          findPosition('.slide-3');

          var resizeId;
          $(window).resize(function() {
            clearTimeout(resizeId);
            resizeId = setTimeout(findPosition('.slide-3', 0), 1000);
          });
          break;

        case ($(this).hasClass('sc4')):

          $('.arrow-content').animate({opacity:0}).queue(function() {
            $(this).text("Nutrition Planning").dequeue()
          }).animate({opacity:1});

          $('.arrow-paragraph').animate({opacity: 0})
          .queue(function() {
            $(this).text(
            "The glue to keep you going is your diet. We have three top-tier nutritionists ready and waiting to examine your dietary needs, restrictions, and optimizations for getting you to the next level of your health and energy performance. We provide you with a regimented plan that is tailored to your needs for sport, weight, and personal fitness.").dequeue()
          }).animate({opacity:1});

          $('.slide-4').addClass('.active-click');
          findPosition('.slide-4');
          var resizeId;
          $(window).resize(function() {
            clearTimeout(resizeId);
            resizeId = setTimeout(findPosition('.slide-4', 0), 1000);
          });
          break;

      }
    });
});
};
