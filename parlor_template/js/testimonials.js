var testimonials = {};

testimonials.slider = (function(){
  var currentItemIndex = 0,
      prevBtn = $('.prev-testimonial'),
      nextBtn = $('.next-testimonial'),
      items = (function(){
        var items = [];
        $('.testimonial').each(function(){
          items.push($(this));
        });
        return items;
      })();
  
  function getCurrent(){
    $('.testimonial').each(function(index){
      $(this).removeClass('current');
    });
    $('.testimonial').eq(currentItemIndex).addClass('current');
  }
  
  function greyOut(prevBtn, nextBtn){
    if($(prevBtn).hasClass('grey-out')){
      $(prevBtn).removeClass('grey-out');
    }
    if($(nextBtn).hasClass('grey-out')){
      $(nextBtn).removeClass('grey-out');
    }
    if(currentItemIndex == 0){
      $(prevBtn).addClass('grey-out');
    }
    if(currentItemIndex == items.length -1){
      $(nextBtn).addClass('grey-out');
    }
  }

  	return{
    init: function(prevBtn, nextBtn){
      items[currentItemIndex].addClass('current');
      greyOut(prevBtn, nextBtn);
      $(prevBtn).click(function(){
        if(currentItemIndex > 0){
          currentItemIndex--;
        }
        getCurrent();
        greyOut(prevBtn, nextBtn);
      });
      $(nextBtn).click(function(){
        if(currentItemIndex < items.length - 1){
          currentItemIndex++;
        }
        getCurrent();
        greyOut(prevBtn, nextBtn);
      });
    }
  };
  
})();

testimonials.slider.init('.prev-testimonial', '.next-testimonial');