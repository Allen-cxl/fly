<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="zh-CN" data-dpr="1" style="font-size:160px;">   
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=640,maximum-scale=1.0,user-scalable=no">
		<title></title>
        <link href="/Public/Home/static/css/chunk-vendors.e22b6a05.css" rel="stylesheet">
        <link href="/Public/Home/static/css/app.62f28f31.css" rel="stylesheet"> 
		<link href="/Public/Home/static/css/chunk-555a6593.052a8af9.css" rel="prefetch">		
        <link rel="stylesheet" type="text/css" href="/Public/Home/static/css/chunk-5abedab7.206eb240.css">
		 <script type='text/javascript' src='/Public/Home/js/jquery.1.9.js'></script>	
		  <script type="text/javascript" src="/Public/Home/js/alert.js"></script>
		  <script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?8f4fc4da7b5d82231a5007e08407d6c9";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
<style>
.ac_hide{
	display:none;
}
.ivu-checkbox-input{
	opacity: 1;
}
.selected_act{
	color:#ee352b;
	border-bottom-color: #ee352b !important;
}
.selected_act1{
	color:#ee352b;
	border-top-color: #ee352b !important;
}
.selected_act2:before {
	content: "\E630";
}
.selected_act3:before {
	content: "\E632";
}
</style>		
    </head>
    <body style="font-size: 12px;" style="background-color:white;">
        <div id="app">
            <div>
                <div id="freight_query_container">
                    <div id="freight_query_index">
                        <div class="freight_query_container">
                            <div class="query_condition">
                                <div class="condition_box1">
                                    <div class="box1_container w">
                                        <div class="ivu-row">
										<?php if(is_array($gt)): foreach($gt as $key=>$vo): ?><div class="ivu-col ivu-col-span-4">
                                                <div data-id="<?php echo ($vo["id"]); ?>" class="goodstype box1_container_content <?php if(($key) == "0"): ?>selected_bgc<?php endif; ?>">
                                                    <!-- <i  class=" ivu-icon ss-icon <?php echo ($ico[$vo['sort']]); ?>"></i> -->
                                                    <img class="ivu-icon" src="/Public/Home/twentynineteen/img/<?php echo ($ico[$vo['sort']]); ?>"/>
                                                    <!---->
                                                    <span><?php echo ($vo["name"]); ?></span></div>
                                            </div><?php endforeach; endif; ?>	
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="condition_box2 w">
                                    <div class="port_of_departure">
                                        <div class="departure_text">
                                            <span>始发港</span></div>
                                        <input type="text"  name="departure_input" id="departure_input" class="addport" disableautocomplete>
										<div></div>

                                    </div>
                                    <div class="destination_port">
                                        <div class="departure_text">
                                            <span>目的港</span></div>
                                
										<input type="text" name="destination_input" id="destination_input" class="addport" disableautocomplete>
                                        	<div></div>
                                    </div>
                                    <div class="destination_port">
                                        <div class="departure_text">
                                            <span>目的城市</span></div>
                                        <input type="text" name="destination_input" id="destination_input2" disableautocomplete=""></div>
                                    <div class="destination_port">
                                        <div class="departure_text">
                                            <span>区域代码</span></div>
                                        <select name="destination_input" id="destination_input3" placeholder="大洲代码（始发/目的）">
                                            <option value="">--- 全部 ---</option>
                                            <option value="AS">亚洲</option>
                                            <option value="OC">大洋洲</option>
                                            <option value="ME">中东&amp;西亚</option>
                                            <option value="IP">印巴</option>
                                            <option value="AF">非洲</option>
                                            <option value="EU">欧洲</option>
                                            <option value="SA">南美洲</option>
                                            <option value="NA">北美洲</option></select>
                                    </div>
                                    <div class="filter_search">
                                        <button type="button" class="ivu-btn" >
                                            <img class="ss-icon-sousuo1"  src="/Public/Home/twentynineteen/img/search1.png" style="height:16px; ">
                                            <span>查询</span></button>
                                    </div>
                                </div>
                                <div class="condition_box3 w">
                                    <div class="box3_up">
                                        <div class="airline_company">
                                            <div class="ac_title">航空公司</div>
                                            <ul class="ac_list">
												
                                                <?php if(is_array($cp)): foreach($cp as $key=>$vo): ?><li data-id="<?php echo ($vo["id"]); ?>" class="ac_item <?php if(($key) > "7"): ?>ac_hide<?php endif; ?>">
                                                    <div ><?php echo ($vo["cname"]); ?></div>
                                                    <div ><?php echo ($vo["ename"]); ?></div></li><?php endforeach; endif; ?>
                                            </ul>
                                        </div>
                                        <div class="ac_more">
                                            <button type="button" class="ivu-btn ivu-btn-default ivu-btn-circle ivu-btn-small">
                                                <!---->
                                                <!---->
                                                <span>
                                                    <i class="ivu-icon ivu-icon-ios-arrow-down" style="font-size: 18px;"></i><span>更多</span></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="box3_down">
                                        <div class="packaging_type">
                                            <div class="pt_title">包装类型</div>
                                            <div class="pt_content">
                                                <div class="ivu-checkbox-group ivu-checkbox-default">
                                                    <label class="ivu-checkbox-wrapper ivu-checkbox-group-item ivu-checkbox-default">
                                                        <span class="ivu-checkbox">
                                                            <span class="ivu-checkbox-inner"></span>
                                                            <input type="checkbox" class="ivu-checkbox-input packingtype" value="0"></span> 散货(Bulk)</label>
                                                    <label class="ivu-checkbox-wrapper ivu-checkbox-group-item ivu-checkbox-default">
                                                        <span class="ivu-checkbox">
                                                            <span class="ivu-checkbox-inner"></span>
                                                            <input type="checkbox" class="ivu-checkbox-input packingtype" value="2"></span> 散货/托盘(B/P)</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="arrive_days">
                                            <div class="ad_title">到达天数</div>
                                            <div class="ad_content">
                                                <div class="ivu-checkbox-group ivu-checkbox-default">
                                                    <label class="ivu-checkbox-wrapper ivu-checkbox-group-item ivu-checkbox-default">
                                                        <span class="ivu-checkbox">
                                                            <span class="ivu-checkbox-inner"></span>
                                                            <input type="checkbox" class="ivu-checkbox-input flytype" value="1"></span> 直达</label>
                                                    <label class="ivu-checkbox-wrapper ivu-checkbox-group-item ivu-checkbox-default">
                                                        <span class="ivu-checkbox">
                                                            <span class="ivu-checkbox-inner"></span>
                                                            <input type="checkbox" class="ivu-checkbox-input flytype" value="0"></span> 中转</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="condition_box4 w">
                                    <div class="box4_left">
                                        <div class="sort_box">
                                            <div class="sort_title">排序 :</div>
                                            <div class="sort_content">
                                                <ul class="sort_list">
                                                    <li data-i="0" class="sort_item sort_a selected_act">默认</li>
                                                    <li class="sort_item sort_item_price">
                                                        <span class="sort_price">价格</span>
                                                        <div class="sort_price_btns">
                                                            <div data-i="1" class="high_price sort_a "></div>
                                                            <div data-i="2" class="low_price sort_a "></div>
                                                        </div>
                                                    </li>
                                                    <li class="sort_item sort_item_price">
                                                        <span class="sort_price">航司</span>
                                                        <div class="sort_price_btns">
                                                            <div data-i="3" class="high_price sort_a "></div>
                                                            <div data-i="4" class="low_price sort_a "></div>
                                                        </div>
                                                    </li>
                                                    <li class="sort_item sort_item_price">
                                                        <span class="sort_price">始发港</span>
                                                        <div class="sort_price_btns">
                                                            <div data-i="5" class="high_price sort_a "></div>
                                                            <div data-i="6" class="low_price sort_a "></div>
                                                        </div>
                                                    </li>
                                                    <li class="sort_item sort_item_price">
                                                        <span class="sort_price">目的港</span>
                                                        <div class="sort_price_btns">
                                                            <div data-i="7" class="high_price sort_a "></div>
                                                            <div data-i="8" class="low_price sort_a "></div>
                                                        </div>
                                                    </li>
                                                    <li class="sort_item sort_item_icon">
                                                        <span>航程</span>
                                                        <i class="ivu-icon ss-icon ss-icon-cs-jt-xs-1-1" style="display: none;"></i>
                                                        <i data-i="9" class="ivu-icon ss-icon sort_a selected_act3"></i>
                                                    </li>
                                                    <li class="sort_item">
                                                        <div class="ivu-checkbox-group ivu-checkbox-default">
                                                            <label class="ivu-checkbox-wrapper ivu-checkbox-group-item ivu-checkbox-default selected_color" style="font-size: 15px;">
                                                                <span class="ivu-checkbox">
                                                                    <span class="ivu-checkbox-inner"></span>
                                                                    <input type="checkbox" class="ivu-checkbox-input specialPrice" value=""></span> 特价</label>
                                                            <label class="ivu-checkbox-wrapper ivu-checkbox-group-item ivu-checkbox-default" style="font-size: 15px;">
                                                                <span class="ivu-checkbox">
                                                                    <span class="ivu-checkbox-inner"></span>
                                                                    <input type="checkbox" class="ivu-checkbox-input hot" value=""></span><span> 热销</span></label>
                                                        </div>
                                                    </li>
                                                    <!----></ul>
                                            </div>
                                        </div>
                                        <div class="aircraft_cabin"></div>
                                    </div>
                                    <div class="box4_right">
                                        <div>共找到
                                            <span id="num">0</span>件商品</div></div>
                                </div>
                            </div>
                            <div class="query_result">
                                <div class="result_header">
                                    <div class="ivu-row result_header_row w">
                                        <div class="ivu-col ivu-col-span-10 result_header_left">
                                            <div class="header_left_departure">
                                                <Img class="tg_start"src="/Public/Home/twentynineteen/img/start.png"></Img>
                                                <span>始发港</span></div>
                                            <i class="ivu-icon ss-icon ss-icon-youjiantou"></i>
                                            <div class="header_left_destination">
                                                <Img class="tg_start"src="/Public/Home/twentynineteen/img/end.png"></Img>
                                                <span>目的港</span></div>
                                        </div>
                                        <div class="ivu-col ivu-col-span-14 result_header_right">
                                            <ul class="kg_list">
                                                <li class="kg_item">+45KG</li>
                                                <li class="kg_item">+100KG</li>
                                                <li class="kg_item">+300KG</li>
                                                <li class="kg_item">+500KG</li>
                                                <li class="kg_item">+1000KG</li>
                                                <li class="kg_item">+2000KG</li></ul>
                                        </div>
                                    </div>
                                </div>
                                <!---->
                                <div id="loading"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<div id="test"></div>
	
<script>
var company=new Array();
var sort1=0;
var goodstype=<?php echo ($gt[0]["id"]); ?>;
var mport="";
var cport="";
var city="";
var region="";
var packingtype=new Array();
var flytype=new Array();
var special="";
var hot="";
var page=1;
var cp="<?php echo ($cp1); ?>";
var mp="<?php echo ($mp); ?>";
var pa="<?php echo ($pa); ?>";
$(".addport").click(function(){
				$(".vue-city-picker").remove();
				var that=$(this);
				var id=$(this).attr("id");
				$.post("/home/index/getport",{id:id,c:0},function(result){
					that.next().html(result);
				});
			});
$(".ac_more").click(function(){
	if($(this).find(".ivu-icon").hasClass("ivu-icon-ios-arrow-down")){
		$(this).find(".ivu-icon").removeClass("ivu-icon-ios-arrow-down");
		$(this).find(".ivu-icon").addClass("ivu-icon-ios-arrow-up");
		$(this).find(".ivu-icon").next().html("收起");
		$(".ac_hide").show();
	}else{
		$(this).find(".ivu-icon").addClass("ivu-icon-ios-arrow-down");
		$(this).find(".ivu-icon").removeClass("ivu-icon-ios-arrow-up");
		$(this).find(".ivu-icon").next().html("更多");
		$(".ac_hide").hide();
	}
});	

	
loadlist1();
function loadlist(){
	 $.post("/home/index/gettj",{sort1:sort1,goodstype:goodstype,mport:mport,cport:cport,company:company,city:city,region:region,packingtype:packingtype,flytype:flytype,special:special,hot:hot,page:page},function(data){
       $("#loading").html(data);

	   window.parent.initIframeHeight($(document.body).height());
    });
}
function loadlist1(){
	 $.post("/home/index/gettj",{cp:cp,mp:mp,pa:pa,page:page},function(data){
       $("#loading").html(data);

	   window.parent.initIframeHeight($(document.body).height());
    });
}
//删除数组元素
function delValInArr(value,array){
           var pos=$.inArray(value,array);
           array.splice(pos,1);
}
$(".ac_item").click(function(){
	var that=$(this);
	if(that.hasClass("selected_ac_item")){
		that.removeClass("selected_ac_item");
		delValInArr(that.data("id"),company);
	}else{
		that.addClass("selected_ac_item");
		company.push(that.data("id"));
		
	}
	loadlist();
});	
$(".sort_a").click(function(){
	var i=$(this).data("i");
	
	$(".sort_a").removeClass("selected_act");
	$(".sort_a").removeClass("selected_act1");
	if(i=="2" || i=="4" || i=="6" || i=="8"){
		$(this).addClass("selected_act1");
	}else if(i=="9"){
		if($(this).hasClass("selected_act3")){
			$(this).removeClass("selected_act3");
			$(this).addClass("selected_act2");
		}else{
			$(this).removeClass("selected_act2");
			$(this).addClass("selected_act3");
			i="10";
		}
	}else{
		$(this).addClass("selected_act");
	}
	sort1=i;
	loadlist();
});
$(".goodstype").click(function(){
	goodstype=$(this).data("id");
	$(".goodstype").removeClass("selected_bgc");
	$(this).addClass("selected_bgc");
	loadlist();
});
$(".specialPrice").change(function(){
	if($(this).is(':checked')){
		special=1;
	}else{
		special="";
	}
	loadlist();
});
$(".hot").change(function(){
	if($(this).is(':checked')){
		hot=1;
	}else{
		hot="";
	}
	loadlist();
});
$(".ivu-btn-error").click(function(){
	cport=$("#departure_input").val();
	mport=$("#destination_input").val();
	city=$("#destination_input2").val();
	region=$("#destination_input3").val();
	loadlist();
});
$(".packingtype").click(function(){
	var that=$(this);
	if($(this).is(':checked')){
		packingtype.push(that.val());
	}else{
		delValInArr(that.val(),packingtype);
	}
	loadlist();
});
$(".flytype").click(function(){
	var that=$(this);
	if($(this).is(':checked')){
		flytype.push(that.val());
	}else{
		delValInArr(that.val(),flytype);
	}
	loadlist();
});
$("#loading").on("click",".page-lin",function(){
	if($(this).data("p")!="0"){
		page=$(this).data("p");
		loadlist();
	}
});
function detail(id){
	window.location.href="/home/index/xq/id/"+id; 
}
var islog="<?php echo ($islog); ?>";
function pay(id){
	if(islog=="0"){
		$.MsgBox.Confirm("提示","请先登陆", function(){
            window.parent.location.href="/home/user/center";
        });
	}else{
		window.parent.location.href="/home/user/topay/id/"+id; 
	}
	
}
</script>
     </body> 
</html>