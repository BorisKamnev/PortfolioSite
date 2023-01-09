$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true
	});
});

$(document).ready(function() {
    $('.works-load-btn').click(function(event) {
        $('.works').toggleClass('works-active');
        $('.works-grid-container').toggleClass('works-grid-container-active');
        $('.works-item-img-9').toggleClass('active');
        $('.works-item-img-10').toggleClass('active');
        $('.works-item-img-11').toggleClass('active');
        $('.works-item-img-12').toggleClass('active');
    });
});
