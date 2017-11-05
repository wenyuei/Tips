require.config({
		paths:{
			'jquery':'../libs/jquery',
			'swiper1':'../libs/swiper.min'
		},

});

require(['jquery','swiper1'],function($,swiper1){
	$(function(){
		// swiper
		var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // spaceBetween: 30,
        paginationType : 'fraction',
        effect: 'fade',
        noSwiping : true,
        autoplay: 2500
    });
		console.log(swiper1);
		// 滚动条
			$(window).scroll(function(){
				var $el = document.documentElement.scrollTop;
				var $bd = document.body.scrollTop;
				if ($el + $bd ==0) {
					$('.bar').css('display','none');
				}else if($el + $bd >=300){
					$('.bar').css('display','block');
				}
				console.log($('.bar').scrollTop());
				});
		// 判断信息框
			var bol =true;
			$('.bar').click(function(){
			if(bol){
				$(this).css('right','0px');
				bol=!bol;
			}else{
				$(this).css('right','-246px');
			}
			});
		// input框切换
			$('.start a').click(function(){
				console.log($(this).index());
				var $a = $(this).index();
				$('.cap .tab1').eq($a).css('display','block').siblings().css('display','none');
			});
		// 聚焦失焦
			$('.val11').blur(function(){
					$('.s2').css('display','none');
				});
				$('.val11').focus(function(){
					$('.s2').css('display','block');
				});
		//top部input
		$('.inp').focus(function(){
			$(this).css('width','200px');
		})
		$('.inp').blur(function(){
			$(this).css('width','0px');
		})
		// 小型轮播
			var index = 0;
			var timer=setInterval(function () {
				index++;
				if(index>=5){
					index =0;
				}
			    $('.samll ul')[0].style.left = index* -60 + 'px';
			},2000); 
		// luno
			$('.tle1 li').mouseenter(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.tle2 div').css('display','block').eq($(this).index()).css('display','block').siblings().css('display','none');
			});
		// 时间
			function count_down(o){
		        var datatime=/^[\d]{4}-[\d]{1,2}-[\d]{1,2}( [\d]{1,2}:[\d]{1,2}(:[\d]{1,2})?)?$/ig,str='',conn,s;
		        if(!o.match(datatime)){
		                alert('参数格式为2020-01-01[ 01:01[:01]].\r其中[]内的内容可省略');
		                return false;
		        }
		        var sec=(new Date(o.replace(/-/ig,'/')).getTime() - new Date().getTime())/1000;
		        if(sec > 0){
		                conn='距离';
		        }else{
		                conn='距离';
		                sec*=-1;
		        }
		        s={'天':sec/24/3600,'小时':sec/3600%24,'分':sec/60%60,'秒':sec%60};
		        for(i in s){
		                if(Math.floor(s[i])>0 ) str += Math.floor(s[i]) + i;
		        }
		        if(Math.floor(sec)==0){ str='0秒'; }
		        document.getElementById('show').innerHTML = conn +'<u>' + str + '</u>';
		        setTimeout(function(){count_down(o)},1000);
			}
			count_down('2017-11-08 00:00:00');
		// 今日推荐
		
	// json请求
		$.getJSON('../static/index.json', function(json){
			// console.log(json.data);
			$.each(json.data, function(index, val) {
				if (json.data[index].type == 'login') {
					$('.section-2').html($('.section-2').html() + '<div class="exhibition"><div class="top-green"><h3>让我们更懂你</h3><p>拥有穷游账号，获得更准确的推荐</p><a href="index2.html">立即注册</a><span>已有账号？</span><a href ="https://passport.qyer.com/login?ref=http%3A%2F%2Fwww.qyer.com%2F" class="a4">登录</a><br><a href="https://passport.qyer.com/oauth?using=qq&ref=http%3A%2F%2Fhome.qyer.com%2F"><i class="iconfont">&#xe622;</i></a><a href="https://passport.qyer.com/oauth?using=weibo&ref=http%3A%2F%2Fhome.qyer.com%2F"><i class="iconfont">&#xe637;</i></a><a href="https://passport.qyer.com/oauth?using=weixin&ref=http%3A%2F%2Fhome.qyer.com%2F"><i class="iconfont">&#xe610;</i></a></div></div>');
				}else{
					if(json.data[index].type == 'bbs'){
						$('.section-2').html($('.section-2').html() + '<div class="exhibition"><div class="exh"><a href="'+json.data[index].data.href+'"><img src="'+json.data[index].data.pic+'"></a><div class="tag"><span class="bt">'+json.data[index].data.type+'</span></div></div><div class="info clearFix"><p>'+json.data[index].data.subject+'</p><span>'+json.data[index].data.username+'</span><span>'+json.data[index].data.views+'人浏览过</span></div></div>');
					}else{
						if (json.data[index].type == 'lm') {
							$('.section-2').html($('.section-2').html() + '<div class="exhibition"><div class="exh"><a href="'+json.data[index].data.href+'"><img src="'+json.data[index].data.pic+'"></a><div class="tag"><span class="bt">折扣</span></div></div><div class="info clearFix"><p>'+json.data[index].data.subject+'</p><span>'+json.data[index].data.start_pos+'</span><span>'+json.data[index].data.price+'</span></div></div>');
						}else{
							if (json.data[index].type == 'mguide') {
								$('.section-2').html($('.section-2').html() + '<div class="exhibition"><div class="exh"><a href="'+json.data[index].data.href+'"><img src="'+json.data[index].data.pic+'"></a><div class="tag"><span class="bt">微锦囊</span></div></div><div class="info clearFix"><p>'+json.data[index].data.subject+'</p><span>'+json.data[index].data.username+'</span><span>推荐了'+json.data[index].data.item_count+'个目的地</span></div></div>');
							}
						}
					}
				}
			});
		});
	// json请求2
		$('.main-shop1 .main-dian a').mouseenter(function(){
			$(this).css('background','#fff').siblings().css('background','');
			$('.main-shop2 ul').eq($(this).index()).css('display','block').siblings().css('display','none');
		})
		$.getJSON('../static/1509798991799.json', function(json) {
			// console.log(json.data.item);
			var $item = json.data.item;
			$.each($item, function(index, val) {
				// console.log(json.data.item[index].title);
					$('.shop2-ul1 li').eq(index).html('<div class="main-kj"><a href="'+$item[index].url+'"><img src="'+ $item[index].imgsrc +'"></a><div class="inner"><p>'+ $item[index].title+'</p><div class="dt"><span class="dt-r"><a href="##">'+ $item[index].datetime+'</a></span><span class="dt-l"><a href="##">'+ $item[index].tag+'</a></span></div><div class="price"><span class="price-1"><em>'+$item[index].price +'</em></span></span></div></div></div>')

			})
		});

	// 热门
	$.getJSON('../static/1509899570635.json', function(json) {
			// b++;
			console.log(json.data);
			var $data = json.data;
			for(var i = 0;i < 8;i++){
				(function(index){
						$('.section-tu1').html($('.section-tu1').html() + '<li><div class="pic1"><a href="'+json.data[0][index].url+'"><img class="avatar" src="'+ json.data[0][index].pic  +'"><span><i class="iconfont">&#xe503;</i>'+json.data[0][index].total_views+'</span></a></div><div class="inner-1"><div class="pic2 clearFix"><a href="'+json.data[0][index].auth.user_url+'"><img src="'+  json.data[0][index].auth.avatar+'"></a><div class="section-txt clearFix"><span class="txt"><a href="##">'+ json.data[0][index].username+'</a></span></div><div class="caption"><a href="'+json.data[0][index].url+'">'+ json.data[0][index].title +'</a></div></div></div></li>')
						$('.section-tu2').html($('.section-tu2').html() + '<li><div class="pic1"><a href="'+json.data[1][index].url+'"><img class="avatar" src="'+ json.data[1][index].pic  +'"><span><i class="iconfont">&#xe503;</i>'+json.data[1][index].total_views+'</span></a></div><div class="inner-1"><div class="pic2 clearFix"><a href="'+json.data[1][index].auth.user_url+'"><img src="'+  json.data[1][index].auth.avatar+'"></a><div class="section-txt clearFix"><span class="txt"><a href="##">'+ json.data[1][index].username+'</a></span></div><div class="caption"><a href="'+json.data[1][index].url+'">'+ json.data[1][index].title +'</a></div></div></div></li>')
						$('.section-tu3').html($('.section-tu3').html() + '<li><div class="pic1"><a href="'+json.data[2][index].url+'"><img class="avatar" src="'+ json.data[2][index].pic  +'"><span><i class="iconfont">&#xe503;</i>'+json.data[2][index].total_views+'</span></a></div><div class="inner-1"><div class="pic2 clearFix"><a href="'+json.data[2][index].auth.user_url+'"><img src="'+  json.data[2][index].auth.avatar+'"></a><div class="section-txt clearFix"><span class="txt"><a href="##">'+ json.data[2][index].username+'</a></span></div><div class="caption"><a href="'+json.data[2][index].url+'">'+ json.data[2][index].title +'</a></div></div></div></li>')
						$('.section-tu4').html($('.section-tu4').html() + '<li><div class="pic1"><a href="'+json.data[3][index].url+'"><img class="avatar" src="'+ json.data[3][index].pic  +'"><span><i class="iconfont">&#xe503;</i>'+json.data[3][index].total_views+'</span></a></div><div class="inner-1"><div class="pic2 clearFix"><a href="'+json.data[3][index].auth.user_url+'"><img src="'+  json.data[3][index].auth.avatar+'"></a><div class="section-txt clearFix"><span class="txt"><a href="##">'+ json.data[3][index].username+'</a></span></div><div class="caption"><a href="'+json.data[3][index].url+'">'+ json.data[3][index].title +'</a></div></div></div></li>')
						$('.section-tu5').html($('.section-tu5').html() + '<li><div class="pic1"><a href="'+json.data[4][index].url+'"><img class="avatar" src="'+ json.data[4][index].pic  +'"><span><i class="iconfont">&#xe503;</i>'+json.data[4][index].total_views+'</span></a></div><div class="inner-1"><div class="pic2 clearFix"><a href="'+json.data[4][index].auth.user_url+'"><img src="'+  json.data[4][index].auth.avatar+'"></a><div class="section-txt clearFix"><span class="txt"><a href="##">'+ json.data[4][index].username+'</a></span></div><div class="caption"><a href="'+json.data[4][index].url+'">'+ json.data[4][index].title +'</a></div></div></div></li>')
				})(i);
			}
				
		});
	$('.main-shop1 .main-dian a').mouseenter(function(){
			$(this).css('background','#fff').siblings().css('background','');
			$('.main-shop2 ul').eq($(this).index()).css('display','block').siblings().css('display','none');
		})
		$('.section .main-dian a').mouseenter(function(){
			$(this).css('background','#1ab05f').siblings().css('background','');
			$('.section-tu ul').eq($(this).index()).css('display','block').siblings().css('display','none');
		})
	});
});
