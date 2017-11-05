require.config({
		paths:{
			'jquery':'../libs/jquery'
		}

});
require(['jquery'],function($) {
	console.log($);
	$(function(){
		//top部input
		$('.inp').focus(function(){
			$(this).css('width','200px');
		})
		$('.inp').blur(function(){
			$(this).css('width','200px');
		});
// 	移入移出
		$('.jb').mouseenter(function(){
			$('.me').css('display','none');
			$('.it').css('display','block');
		});
		$('.jb').mouseleave(function(){
				$('.me').css('display','block');
				$('.it').css('display','none');
		});
//热门城市推荐
$('.tbe li').mouseenter(function(){
	// console.log($(this).html());
	$(this).css('color','#000').css('borderBottom',' 2px solid #28b76c');
	$('.sloth ul').css('display','block').eq($(this).index()).css('display','block').siblings().css('display','none');

});
$('.tbe li').mouseleave(function(){
	$(this).css('borderBottom','');
})
// 目的主题
$('.tal li').mouseenter(function(){
	// console.log($(this).html());
	$(this).css('color','#000').css('borderBottom',' 2px solid #28b76c');
	$('.tab1 ul').css('display','block').eq($(this).index()).css('display','block').siblings().css('display','none');

});
$('.tal li').mouseleave(function(){
	$(this).css('borderBottom','');
});
// 月度推荐
$('.month li').mouseenter(function(){
	$('.potpourri ul').css('display','block').eq($(this).index()).css('display','block').siblings().css('display','none');
	$('.month li span').eq($(this).index()).css('borderRadius', '50%').css('color' ,'#fff').css('background','#21BF6A');
});
$('.month li').mouseleave(function(){
	$('.month li span').eq($(this).index()).css('borderRadius', '0%').css('color' ,'#929292').css('background','#fff');
});
// 国家列表

$('.nation li').mouseenter(function(){
	$(this).css('color','#000').css('borderBottom',' 2px solid #28b76c');
	$('.place ul').css('display','block').eq($(this).index()).css('display','block').siblings().css('display','none');

});
$('.nation li').mouseleave(function(){
	$(this).css('borderBottom','').css('color','#e5e5e5');
});
// 信息框
	$(window).scroll(function(){
		var $el = document.documentElement.scrollTop;
		var $bd = document.body.scrollTop;
		if ($el + $bd ==0) {
			$('.couple').css('display','none');
		}else if($el + $bd >=300){
			$('.couple').css('display','block');
		}
		// console.log($('.couple').scrollTop());
		});
// 点击事件
	var bol = true;
$('.couple').click(function(){
	if (bol) {
		$(this).css('right','0px');
		bol=!bol;
	}else{
		$(this).css('right','-246px');
		bol=!bol;
	}
});
// 返回顶部
$('.backtrack').hide();  //隐藏回页按钮
    $(window).scroll(function(){
    // console.log($(this).scrollTop());
      //当window的scrolltop距离大于1时，回页             
    if($(this).scrollTop() > 100){               
        $('.backtrack').fadeIn();            
    }else{                 
        $('.backtrack').fadeOut();
    }
});
$(".backtrack").click(function () {
        var speed=500;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);

        return false;
 });
$('.t1').click(function(){
	$('.xz').css('display','block');
});
$('.t1').blur(function(){
	$('.xz').css('display','none');
});











	})
	
});