// JavaScript Document
	$(document).ready(function() {
		$('#main').imagesLoaded(function(){										//載入圖片
			$("#main").masonry({
				itemSelector:".box",
				isAnimated:true																//動畫		
			});
			$('.box').hide().fadeIn(800)
		/*	$('.box').hide().first().fadeIn(800,function(){
				$(this).next().fadeIn(800,arguments.callee)					//一個一個出現
			});*/
		});
		
		 $('a#fancybox').fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayColor': '#000'	,								//開啟背景的顏色
		'overlayOpacity': 0.7									//透明度
		/*'titlePosition': "inside"*/							//在相片裡面
		});
    });
