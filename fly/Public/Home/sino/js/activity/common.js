/*// 半透明遮罩
$(function(){
	var expire = new Date().setMonth((new Date().getMonth()+1));
	var hours = new Date().setHours(new Date().getHours()+1);
	//alert(hours);
	window.setInterval(function(){
		window.setTimeout(function(){CookieUtil.set("activityCode", "", new Date(expire), "/");}, 1500)
		var activityCode = CookieUtil.get("activityCode");
		
		if(activityCode != "" && activityCode != null){
			//alert(activityCode);
			if(userCreatetime!="" && userCreatetime!=null){
				//alert(userCreatetime);
				//todate()时间转化工具类
				var timestamp2 = Date.parse(new Date(todate(userCreatetime,"-",false)));
				//alert(timestamp2);
				//2019-02-18 00:00:00的时间戳1550419200000
				//创建时间比较,true为新用户,false为老用户
				if(timestamp2>1550419200000){
					var count = CookieUtil.get("count");
					if(count!="" && count!=null){
						//判断5次
						if(count<5){
							CookieUtil.set("count", parseInt(count)+parseInt(1), "", "/");
						}else{
							//设置code为空
							return false;
						}
					}else{
						CookieUtil.set("count", 1, new Date(hours), "/");
					}
				}
			}
			
			if(activityCode == "queryprice"){
				//判断成功失败后积分,弹宝箱
				var length = $(".d_list").length;
				if(length > 0){
					activityCode = "querypriceconfirm";
				}
			}
			if(activityCode == "cargotrack"){
				//判断成功失败后积分,弹宝箱
				var length = $(".now").length;
				if(length > 0){
					activityCode = "cargotrackconfirm";
				}
			}
			if(activityCode == "queryport"){
				//判断成功失败后积分,弹宝箱
				var length = $("td[title='港口名称']").length;
				if(length > 0){
					activityCode = "queryportconfirm";
				}
			}
			if(activityCode == "queryaircompany"){
				//判断成功失败后积分,弹宝箱(页面中存在一个strong)
				var length = $("strong").length;
				if(length > 1){
					activityCode = "queryaircompanyconfirm";
				}
			}
			activityTRB(activityCode);
		}
	},2000);
	
	//运价查询触发
	$("#querybutton,#queryPriceSearch").click(function(){
		CookieUtil.set("activityCode", "queryprice|querypriceFail", expire, "/");
	});
	
	$("#port3QuerySearch").click(function(){
		CookieUtil.set("activityIdCode", "port3Query|port3QueryFail", expire, "/");
	});
	
	$("[accumulaterule]").click(function(){
		CookieUtil.set("activityCode", $(this).attr("accumulaterule"), new Date(expire), "/");
	});
	
	var allHeight=document.body.offsetHeight;
	var total = document.documentElement.clientHeight;
	if (total > allHeight) {
		$(".y_bg_gray").css({
	    	height: total
	    })
	}else{
		$(".y_bg_gray").css({
	    	height: allHeight
	    })
	}
})

var activityCodeFlag = true
function activityTRB(activityCode){
	if (activityCodeFlag){
		//alert("第一个flag:"+activityCodeFlag);
		activityCodeFlag = false;
		//alert("第二个flag:"+activityCodeFlag);
		$.ajax({
			type: 'post',
			dataType: "json",                                                                       
	        url: base+"/rest/activity/selectChance?activityCode="+activityCode,                                      
	        success: function (result) {
	        	//console.log(result);
	            if(result.state.success){
		        	if(result.data.data != null && result.data.data != ""){
						var chance = result.data.data.chancevalue*10;
						//alert(chance);
						//0-9的随机数
						var rand = parseInt(Math.random()*10);
							if(chance>rand){
								//显示宝箱
								$(".y_right_float_box").css("display","block");
								$("#goldCoin").val(activityCode);
							}
					}
	            }
	         }                                                                                                             
	     });
	}
}

// 关闭底部图片
$(".y_footer_img").on('click', '.y_foot_close', function() {
	$(this).parent('.y_footer_img').fadeTo(400,0);
	$(".y_bg_gray").fadeTo(400,0);
	$(".y_right_float").fadeIn(1000,0);
	$("#petalbox").fadeTo(400,0);
	$(".y_bg_gray").css("z-index",-99);
	$(this).parent('.y_footer_img').css("z-index",-99);
	
});
// 关闭右侧金币兑换京东卡图片
$(".y_right_float").on('click', '.y_right_close', function() {
	$(this).parent(".y_right_float").fadeTo(400,0);
	$(this).parent(".y_right_float").css("display","none");
});
//打开宝箱,积分
$('.y_right_float_box').on('click', '.y_right_box_close', function() {
	$(this).fadeTo(400,0);
	$(this).siblings('.y_right_box_open').show();
	layer.open({
      type: 1,
      title:false,
      closeBtn:false,
      skin: 'demo-class', //没有背景色
      shadeClose: false,
      content: $('.y_Gold'),
    });
	var activityCode = $("#goldCoin").val();
	$.ajax({
		type: 'post',
		dataType: "json",                                                                       
        url: base+"/rest/activity/getPoint?activityCode="+activityCode,                                      
        success: function (result) {
        	//alert(result);
        	$("#scoreJd").text(result);
            if(result.state.success){
            }
         }                                                                                                             
     });
});

// 关闭弹出层+隐藏已打开的宝箱
$('.y_Gold').on('click', '.y_boxlayer_close', function(event) {
	$(".y_right_float_box").css("display","none");
	$(".y_right_box_open").hide();
	layer.closeAll();
});

function todate(inputstr, showsplit, showweek) {
	    //Wed Mar 22 13:38:37 CST 2017
		//Thu Feb 21 09:50:07 CST 2019
        inputstr = inputstr + ""; //末尾加一个空格
        var date = "";
        var month = new Array();
        var week = new Array();
        
        month["Jan"] = 01; month["Feb"] = 02; month["Mar"] = 03; month["Apr"] = 04; month["May"] = 05; month["Jan"] = 06; 
        month["Jul"] = 07; month["Aug"] = 08; month["Sep"] = 09; month["Oct"] = 10; month["Nov"] = 11; month["Dec"] = 12;
        week["Mon"] = "一"; week["Tue"] = "二"; week["Wed"] = "三"; week["Thu"] = "四"; week["Fri"] = "五"; week["Sat"] = "六"; week["Sun"] = "日";
        
        str = inputstr.split(" ");
        
        date = str[5];
        date += showsplit + month[str[1]] + showsplit + str[2]+" "+str[3];
        if(showweek){
        date += "" + " 星期" + week[str[0]];
        }

        return date;
}

*/