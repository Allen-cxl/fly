$(document).ready(function() {
	// 二级导航
	$("#y_air").mouseover(function(){
		$(".y_air").show()
	})
	$("#y_air").mouseout(function(){
		$(".y_air").hide()
	})
	$(".y_air").mouseover(function(){
		$(".y_air").show()
	})
	$(".y_air").mouseout(function(){
		$(".y_air").hide()
	})


	$("#y_plane").mouseover(function(){
		$(".y_plane").show()
	})
	$("#y_plane").mouseout(function(){
		$(".y_plane").hide()
	})
	$(".y_plane").mouseover(function(){
		$(".y_plane").show()
	})
	$(".y_plane").mouseout(function(){
		$(".y_plane").hide()
	})


	$("#y_fba").mouseover(function(){
		$(".y_fba").show()
	})
	$("#y_fba").mouseout(function(){
		$(".y_fba").hide()
	})
	$(".y_fba").mouseover(function(){
		$(".y_fba").show()
	})
	$(".y_fba").mouseout(function(){
		$(".y_fba").hide()
	})


	$("#y_search_nav").mouseover(function(){
		$(".y_search_nav").show()
	})
	$("#y_search_nav").mouseout(function(){
		$(".y_search_nav").hide()
	})
	$(".y_search_nav").mouseover(function(){
		$(".y_search_nav").show()
	})
	$(".y_search_nav").mouseout(function(){
		$(".y_search_nav").hide()
	})


	$("#y_user").mouseover(function(){
		$(".y_user").show()
	})
	$("#y_user").mouseout(function(){
		$(".y_user").hide()
	})
	$(".y_user").mouseover(function(){
		$(".y_user").show()
	})
	$(".y_user").mouseout(function(){
		$(".y_user").hide()
	})
	
	// 首页-tab切换
	$(".y_banner_tab_ul li").click(function() {
		$(this).addClass('y_tab_on').siblings().removeClass('y_tab_on');
		var i=$(this).index();
		$('.y_banner_tab_txt').eq(i).show().siblings('.y_banner_tab_txt').hide();
	});	
}); 

//tab切换
$(".y_search_tab_name li").click(function() {
	$(this).addClass('y_tab_on').siblings().removeClass('y_tab_on');
	var i=$(this).index();
	$('.y_search_tab_txt').eq(i).show().siblings('.y_search_tab_txt').hide();
});



//右侧浮动导航
$(document).scroll(function() {
	var y_Width=$(window).width();
	var y_Height=$(window).height();
	var y_scroll=$(document).scrollTop(); 
	var y_This=$(".y_right_nav");
	/*y_This.css({
		top: y_Height/2-96+"px",
		left: (y_Width-1160)/2+1190+"px"
	});*/
	if(y_scroll>100){
		y_This.slideDown();

	}else{
		y_This.slideUp('1000')
	}
})


// 关于我们-手风琴切换文字内容
$(".y_pic_intro_con").on('mouseover', 'section', function(event) {
   // alert($(this).index())
   var pic_num=$(this).index();
   $(".y_pic_txt li").eq(pic_num).show();
   $(".y_pic_txt li").eq(pic_num).siblings('li').hide();
});