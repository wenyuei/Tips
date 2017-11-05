require.config({
		paths:{
			'jquery':'../libs/jquery'
		}

});

require(['jquery'],function($){
	console.log($);
	// 轮播
	$(function(){

	
	bannerListFn(
    $(".banner"),
    $(".img-btn-list"),
    $(".left-btn"),
    $(".right-btn"),
    5000,
    true
	);

	function bannerListFn(a,b,c,d,e,f){
    var $bannerMaxWapDom=a;
    var windowWidth=$(window).width();
    var timeShow=0;
    var array=0;
    var timeOff=0;
    var imgPos=$bannerMaxWapDom.find("ul").find("li");
    var cloneOne=imgPos.first().clone();
    $bannerMaxWapDom.find("ul").append(cloneOne);
    $bannerMaxWapDom.find("li").width(windowWidth);
    var liWidth=imgPos.width();
    var liLength=$bannerMaxWapDom.find("li").length;
    $bannerMaxWapDom.find("ul").width(liWidth*(liLength+1));
    var $imgBtnList=b;
    setTimeout(function(i){
        timeShow++;
        (timeShow == 1) ? $bannerMaxWapDom.find("ul").fadeIn() : $bannerMaxWapDom.find("ul").hide();
    },20);
    (e === undefined) ? e=2000 : e=e;
    function imgListBtn (){
        for (var i=0; i < liLength-1; i++ ){
            $imgBtnList.append("<span></span>");
        }
        $imgBtnList.children().eq(0).addClass("current");
        $imgBtnList.children().mouseenter(function(){
            var index=$(this).index();
            array=index;
            bannerImgList(index);
            $imgBtnList.children().eq(array).addClass("current").siblings().removeClass("current");
        });
    }
    imgListBtn();
    function bannerImgList(a){
        $bannerMaxWapDom.find("ul").stop().animate({left: -a*windowWidth},400)
    }
    function setTime(){
        timeOff=setInterval(function(){
            array++;
            move();
        },e)
    }
    (f) ? setTime() : setTime;
    c.stop(true).click(function(){
        array--;
        move();
    });
    d.stop(true).click(function(){
        array++;
        move();
    });
    function move(){
        if (array == liLength){
            $bannerMaxWapDom.find("ul").css({left:0});
            array=1;
        }
        if (array == -1){
            $bannerMaxWapDom.find("ul").css({left:-liWidth*(liLength-1)});
            array=liLength-2
        }
        $bannerMaxWapDom.find("ul").stop(true).animate({
            left:-array*liWidth
        });
        (array == liLength-1) ? $imgBtnList.children().stop().eq(0).addClass("current").siblings().removeClass("current") : $imgBtnList.children().eq(array).addClass("current").siblings().removeClass("current");
    }
    $bannerMaxWapDom.hover(function(){
        clearInterval(timeOff);
    },function(){(f) ? setTime() : setTime;});
}

 // 时间
			function count_down(o){
		        var datatime=/^[\d]{4}-[\d]{1,2}-[\d]{1,2}( [\d]{1,2}:[\d]{1,2}(:[\d]{1,2})?)?$/ig,str='',conn,s;
		        if(!o.match(datatime)){
		                alert('参数格式为2020-01-01[ 01:01[:01]].\r其中[]内的内容可省略');
		                return false;
		        }
		        var sec=(new Date(o.replace(/-/ig,'/')).getTime() - new Date().getTime())/1000;
		        if(sec > 0){
		                conn='距申请结束:';
		        }else{
		                conn='距申请结束:';
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

// list
$(' .previous .icon').click(function(){
	$('.bt .list').css('display','block').eq($(this).index()).css('display','block').siblings().hide();
});

// 
$('.zx  h2').click(function(){
	$(this).addClass('cc').siblings().removeClass('cc');
})
$('.pres .iv').click(function(){
	$('.by .list1').css('display','block').eq($(this).index()).css('display','block').siblings().hide();
});
$('.pres h2').click(function(){
	$('.by .list1').css('display','block').eq($(this).index()).css('display','block').siblings().hide();
});
// json
$.getJSON('../static/1509587341307.json',function(json){

		var $item = json.data.content;
		$.each($item, function(index, val) {
			$('.list li').eq(index).html('<div class="bgimg"><a href="'+ $item[index].reportUrl+'"><img src="'+ $item[index].imgUrl+'" alt=""></a></div><a href="'+$item[index].reportUrl+'"><p class="title">'+ $item[index].title+'</p></a><p class="cz"><span class="sp1">'+$item[index].taste +' '+$item[index].price+'</span><span class="sp2">'+$item[index].cost+' '+$item[index].sendCount +'</span></p>');
		});
	
	});



// json
$.getJSON('../static/ly.json',function(json){
	var $cent = json.data.cont;
	// console.log(json.data.cont);
	$.each($cent, function(index, val) {
	$('.list1 li').eq(index).html('<div class="bgimg"><a href="'+$cent[index].reportUrl +'"><img src="'+$cent[index].imgUrl +'" alt=""></a></div><a href="'+$cent[index].reportUrl+'"><p class="title">'+$cent[index].title +'</p></a><p class="cz"><span class="sp1 sp-1"><img src="'+$cent[index].imgs+'" class="img1"> '+$cent[index].sendCount +'</span><span class="sp2"><img src="'+$cent[index].pic +'"> 1269</span></p>');
   });
});











	});
});