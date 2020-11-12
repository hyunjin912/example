$(document).ready(function(){

	var myWin = $(window).width();
	var autAni = new TimelineLite(); 
	//s::20201023 수정
	if (myWin > 959) {
		autAni
			.append(TweenMax.to($('.set_01'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_02'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_03'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_04'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_05'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.main-visual_slogan'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.btn_slogan'), .5, {css:{opacity:1}}))
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
		
	}else { 
		autAni
			.append(TweenMax.to($('.main-visual_slogan'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_01'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_02'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_03'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_04'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.set_05'), .5, {css:{opacity:1}}))
			.append(TweenMax.to($('.btn_slogan'), .5, {css:{opacity:1}}))
			var controller = $.superscrollorama({
			triggerAtCenter: true
		});
	}
	//e::20201023 수정
	
	//Bean
	var controller = $.superscrollorama({
		triggerAtCenter: true
	});
	//s::20201023 수정
	if (myWin > 641) {
		
		var controller = $.superscrollorama();
		
		controller.addTween(10, TweenMax.to($('.bean_img_box'), .3, {css:{left:'-3.5%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.from($('.bean_img_box'), 2.0, {css:{left:'-100%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.to($('.bean_txt_box'), .3, {css:{right:'12%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.from($('.bean_txt_box'), 2.5, {css:{right:'-100%', opacity: 0}, ease: Quad.easeOut}), 1, 0);

	} else if (myWin <= 660) {
		controller.addTween(10, TweenMax.to($('.bean_img_box'), 1, {css:{top:'0', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.from($('.bean_img_box'), 2.5, {css:{top:'-50%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.to($('.bean_txt_box'), 1, {css:{bottom:'-3%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
		controller.addTween(10, TweenMax.from($('.bean_txt_box'), 2.5, {css:{bottom:'-50%', opacity: 0}, ease: Quad.easeOut}), 1, 0);
	}
	//e::20201023 수정
});