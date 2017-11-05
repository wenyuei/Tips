require.config({
		paths:{
			'jquery':'../libs/jquery'
		}

});
require(['jquery'],function($){
	$(function(){
		var bol = true;
		$('.sp').click(function(){
			if (bol) {
				$('.i1').addClass('i2');
				$('.qui-select-content').css('display','block');
				bol=!bol;
			}else{
				$('.i1').removeClass('i2');
				$('.qui-select-content').css('display','none');
				bol=!bol;
			}
		});
	// 判断input
			$('.inp').click(function(){
				if ($('.inp').val()=='') {
				$('.frist span').css('display','block');
				$(this).css('borderColor', '#ff654c');
			}else{
				$('.frist span').css('display','none');
				$(this).css('borderColor', ' #ccc');
			}
			});
			$('.inp2').click(function(){
				if ($('.inp2').val()=='') {
				$('.frist1 span').css('display','block');
				$(this).css('borderColor', '#ff654c');
			}else{
				$('.frist1 span').css('display','none');
				$(this).css('borderColor', '#ccc ');
			}
			});
			$('.inp3').click(function(){
				if ($('.inp3').val()=='') {
				$('.frist2 span').css('display','block');
				$(this).css('borderColor', '#ff654c');
			}else{
				$('.frist2 span').css('display','none');
				$(this).css('borderColor', ' #ccc');
			}
			});
			$('.inp4').click(function(){
				if ($('.inp3').val()=='') {
				$('.frist3 span').css('display','block');
				$(this).css('borderColor', '#ff654c');
			}else{
				$('.frist3 span').css('display','none');
				$(this).css('borderColor', '#ccc ');
			}
			});
			$('.inp5').click(function(){
				if ($('.inp5').val()=='') {
				$('.frist4 span').css('display','block');
				$(this).css('borderColor', '#ff654c');
			}else{
				$('.frist4 span').css('display','none');
				$(this).css('borderColor', '#ccc ');
			}
			});
	// 判断信息框
			var bol =true;
			$('.lower').click(function(){
			if(bol){
				$(this).css('right','0px');
				bol=!bol;
			}else{
				$(this).css('right','-248px');
			}
			});
			
	});
});