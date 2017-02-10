  $(document).ready(function () {
        var carousel = $("#slider").waterwheelCarousel({
          flankingItems: 1,
            keyboardNav: true,
            separation: 300,
          
            clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
          }
        });

        $('#leftArrow').bind('click', function () {
          carousel.prev();
          return false
        });

        $('#rightArrow').bind('click', function () {
          carousel.next();
          return false;
        });

     

      });