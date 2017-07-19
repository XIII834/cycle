$(document).ready(function(){
$( "section.b-head .cart .cart-wrapper" ).click(function() {
	   $("section.b-head .cart .drop-cart").toggle(300);
	  return false
});
$( "section.b-head .open-menu" ).click(function() {
	   $("section.b-head .menu-wrapper").toggleClass('active');
	  return false
});

$( ".main-prod .text-info .left-text-info .desc a.show-all" ).click(function() {
	   $(".main-prod .text-info .left-text-info .desc").toggleClass('active');
	  return false
});


	 $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('name');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());

        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+'][type="text"]').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+'][type="text"]').val(1);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('name');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());

        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+'][type="text"]').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+'][type="text"]').val(0);
        }
    });

$(".new-prod .prod-wrapper ").owlCarousel({
	 
		  items : 5,
		  loop:true,
		  autoWidth:false,
		  nav:true,
		  margin:0,
		  navText:["<i></i>","<i></i>"],
		  navRewind:true,
		  responsive : {
			  0 : {
					 items : 1,
			  },
			  765 : {
					 items : 3,
			  },
			  960 : {
					 items : 4,
			  },
			  1200 : {
					 items : 5,
			  },
		  }
	 
	});
	
	$(".prod-recomned .prod-wrapper ").owlCarousel({
	 
		  items : 3,
		  loop:true,
		  autoWidth:false,
		  nav:true,
		  margin:0,
		  navText:["<i></i>","<i></i>"],
		  navRewind:true,
		  responsive : {
			  0 : {
					 items : 1,
			  },
			  765 : {
					 items : 3,
			  },
			  960 : {
					 items : 4,
			  },
			  1200 : {
					 items : 3,
			  },
		  }
	 
	});

	
		
		jQuery('.asdal_stars_rating_action li.stars_rating').hover(function(e) {
				
				var rating = parseInt(jQuery(this).data('rating'));
				for(i=1; i<=5; i++) {
					jQuery('#stars-rating-'+i).removeClass('hover on');
					if (i <= rating) {
						jQuery('#stars-rating-'+i).addClass('hover');
					}
				}
			}, function(e) {
				
				var rating = parseInt(jQuery('#comments-form-rating').val());
				
				for(i=1; i<=5; i++) {
					jQuery('#stars-rating-'+i).removeClass('hover');
					if (i <= rating) {
						jQuery('#stars-rating-'+i).addClass('on');
					}
				}
			}
		);
		jQuery('.asdal_stars_rating_action li.stars_rating').click(function(e) {
			
			var rating = parseInt(jQuery(this).data('rating'));
			
			jQuery('#comments-form-rating').val(rating);
			jQuery('.asdal_stars_rating_action li.stars_rating').removeClass('hover on');
			
			for(i=1; i<=5; i++) {
				if (i <= rating) {
					jQuery('#stars-rating-'+i).addClass('on');
				}
			}
		});
		$('.media .imgages-wrappper').lightSlider({
			gallery:true,
			item:1,
			loop:true,
			thumbItem:3,
			adaptiveHeight:true,
			slideMargin:0,
			vThumbWidth:120,
			enableDrag: false,
			currentPagerPosition:'left', 
    });  
	$('.table-catalo-wrapper table').cardtable();
	$('.cart-table table').cardtable();
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  $(".nano").nanoScroller();
  
  
  jQuery('.user-forms .checkbox input').click(function() {
	    if( jQuery(this).is(':checked')) {
	        jQuery(".forms-bloks.org").show();
jQuery(this).addClass("check");
	    } else {
	        jQuery(".forms-bloks.org").hide();
jQuery(this).removeClass("check");
	    }
	});
function smartColumns() {


  var colWrap = $("section.b-head .menu-wrapper.open").height(); //определяем ширину строки

  $("section.main .wrapper .tops-sale").css({ 'min-height' : colWrap +35 }); //ставим точную ширину измененным столбцам
  
  $("section.main .wrapper .tops-sale ul li").css({ 'min-height' : colWrap / 2 - 33 - 3 });

}

smartColumns(); //запускаем функцию после загрузки страницы

$(window).resize(function () { //запускаем функцию после каждого изменения размера экрана
  smartColumns();
});
$('select').styler();
});

