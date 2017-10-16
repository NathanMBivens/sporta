import 'jquery';

module.exports.servicesText = () => {
  $(document).ready(function () {

        $('.arrow-content').text("Sports Therapy");
        $('.arrow-paragraph').text(
        "Here at Sporta we help make you the best version of your athletic self. Our dedicated team of sport therapists have over 40 years of combined experience, working with over 25 types of different athletes. When you work with Sporta, you are assigned a personal therapist from start to finish, who custom-fits your therapy to maximize your time with us. We think you'll love it.");
        
    $('.slide-container').click(function() {
      switch (true) {
        case ($(this).hasClass('sc1')):

          $('.arrow-content').text("Sports Therapy");
          $('.arrow-paragraph').text(
          "Here at Sporta we help make you the best version of your athletic self. Our dedicated team of sport therapists have over 40 years of combined experience, working with over 25 types of different athletes. When you work with Sporta, you are assigned a personal therapist from start to finish, who custom-fits your therapy to maximize your time with us. We think you'll love it.");

          break;

        case ($(this).hasClass('sc2')):
          $('.arrow-content').text("Sports Training");
          $('.arrow-paragraph').text(
          "Apart from our groundbreaking sport therapy, we have a team of ten trainers that have expertise in conditioning, body-building, various sport skill enhancing, strengthening, weight loss, and peak performance. Work with them for long, and you'll notice your improvements taking shape. Just like our therapy, our trainers are dedicated to you from start to finish, creating a custom training experience that gets your ready for the game.");
          break;

        case ($(this).hasClass('sc3')):
          $('.arrow-content').text("Complete Recovery");
          $('.arrow-paragraph').text(
          "Working with our team, our Complete Recovery program is your tailored experience of complete injury recovery, and peak performance wrapped into one. Getting past the injury is one thing, but staying healthy afterwards is another matter. Our complete recovery process takes you from the beginning, and enforces a strict plan to get your healthy without any of risks. We want you better than you were before your injury.");
          break;

        case ($(this).hasClass('sc4')):
          $('.arrow-content').text("Nutrition Planning");
          $('.arrow-paragraph').text(
          "The glue to keep you going is your diet. We have three top-tier nutritionists ready and waiting to examine your dietary needs, restrictions, and optimizations for getting you to the next level of your health and energy performance. We provide you with a regimented plan that is tailored to your needs for sport, weight, and personal fitness.");
          break;

      }
    });
});
};
