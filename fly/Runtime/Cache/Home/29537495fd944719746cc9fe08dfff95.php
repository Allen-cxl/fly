<?php if (!defined('THINK_PATH')) exit();?>
<!doctype html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8" />
    <title>个人中心 - <?php echo ($sys["name"]); ?></title>
 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
	<link href="/Public/favicon.ico" type="image/x-icon" rel="shortcut icon">
	<link href="/Public/Home/twentynineteen/css/dhRecord.css" rel="stylesheet">
        <link href="/Public/Home/twentynineteen/css/dhrecordlist.css" rel="stylesheet">
        <link href="/Public/Home/twentynineteen/css/center.css" rel="stylesheet">
    <script type="text/javascript" src="/Public/Home/twentynineteen/js/center.js"></script>
        <script type="text/javascript" src="/Public/Home/twentynineteen/js/jquery-2.0.3.min.js"></script>
		<script type="text/javascript" src="/Public/Home/DatePicker/WdatePicker.js"></script>
    <script>
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?8f4fc4da7b5d82231a5007e08407d6c9";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
</head>
<body>
 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="/" style="margin:0px;">
            <img src="/<?php echo ($sys["logo"]); ?>" height="50" class="d-inline-block align-top" alt="空运舱">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item <?php if(($nav) == "1"): ?>active<?php endif; ?>" >
                    <a class="nav-link" href="/home/index/index">首页 <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item <?php if(($nav) == "2"): ?>active<?php endif; ?>">
                    <a class="nav-link" href="/home/index/index/y/tj">运价查询</a>
                </li>
				<li class="nav-item <?php if(($nav) == "3"): ?>active<?php endif; ?>">
                    <a class="nav-link" href="/home/index/index/y/line">推荐航线</a>
                </li>
                <li class="nav-item  dropdown <?php if(($nav) == "4"): ?>active<?php endif; ?>">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                        空运工具
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="/home/index/index/y/three">三字代码查询</a>
                        <a class="dropdown-item" href="/home/index/index/y/goods">空运货物查询</a>
                    </div>
                </li>
                <li class="nav-item <?php if(($nav) == "5"): ?>active<?php endif; ?>">
                    <a class="nav-link" href="/home/index/index/y/newslist">空运新闻</a>
                </li>
				<li class="nav-item <?php if(($nav) == "7"): ?>active<?php endif; ?>" >
                    <a class="nav-link" href="/home/index/index/y/about">公司介绍 <span class="sr-only">(current)</span></a>
                </li>
				<?php if(($islog) == "1"): ?><li class="nav-item <?php if(($nav) == "6"): ?>active<?php endif; ?> ">
						<a class="nav-link d-inline-block text-truncate" style="max-width: 150px;" href="/home/user/center"
						   id="header-user"><?php echo ($uarr["name"]); ?></a>
					</li>
					<li class="nav-item" onclick="javascript:window.location.href='/home/user/logout'">
						<a class="nav-link"><i class="fa fa-sign-out"></i></a>
					</li>
				<?php else: ?>
					<li class="nav-item <?php if(($nav) == "6"): ?>active<?php endif; ?> ">
						<a class="nav-link d-inline-block text-truncate" style="max-width: 150px;" href="/home/user/center"
						   id="header-user">我的账户</a>
					</li><?php endif; ?>
            </ul>
        </div>
    </div>
</nav>


<div id="loading"
     style="position: fixed;width: 100vw;height: 100vh;z-index: 999; background-color:rgba(0, 0, 0, 0.4); display: none;">
<div
            style="background-image: url(/Public/Home/twentynineteen/img/loading.gif);width: 90px;height: 90px;position: absolute;left: 50%;top: 30%;margin-left: -30px;border-radius: 50%;transform: rotateY(180deg);background-size: cover;background-repeat: no-repeat;box-shadow: 0 0 5px #ccc inset;">
    </div>
</div>

			
<article id="post-18" class="post-18 page type-page status-publish hentry entry">
		<header class="entry-header">
		

	</header>
	
	<div class="entry-content">
		<section>
    <div class="container mt-4 mb-4">
      <div class="row">

        <div class="col-md-2">
          <div class="row">
            <nav class="nav-sidebar" id="sidebar">
  <ul>
    <li class="<?php if(($unav) == "1"): ?>active<?php endif; ?>">
      <a href="#homeSubmenu" class="fa" data-toggle="collapse"
        aria-expanded="<?php if(($unav) == "1"): ?>true<?php else: ?>false<?php endif; ?>">
        <i class="fa fa-home"></i>我的订舱网
      </a>
      <ul class="<?php if(($unav) == "1"): else: ?>collapse<?php endif; ?>" id="homeSubmenu" data-parent="#sidebar">
        <li class="<?php if(($unav) == "1"): ?>active<?php endif; ?>"><a href="/home/user/center">订单列表</a>
        </li>
      </ul>
    </li>
	<!--
    <li class="<?php if(($unav) == "2"): ?>active<?php endif; ?>">
      <a href="#DcSubmenu" class="fa" data-toggle="collapse"
        aria-expanded="<?php if(($unav) == "2"): ?>true<?php else: ?>false<?php endif; ?>">
        <i class="fa fa-user"></i>我的订舱中心
      </a>
      <ul class="<?php if(($unav) == "2"): else: ?>collapse<?php endif; ?> " id="DcSubmenu" data-parent="#sidebar">
        <li class="<?php if(($unav) == "2"): ?>active<?php endif; ?>"><a href="/home/user/dhrecord">订单列表</a>
        </li>

      </ul>
    </li>
-->
    <li class="<?php if(($unav) == "3"): ?>active<?php endif; ?>">
      <a href="#ZhszSubmenu" class="fa" data-toggle="collapse"
        aria-expanded="<?php if(($unav) == "3"): ?>true<?php else: ?>false<?php endif; ?>">
        <i class="fa fa-gear"></i>账户设置
      </a>
      <ul class="<?php if(($unav) == "3"): else: ?>collapse<?php endif; ?>" id="ZhszSubmenu" data-parent="#sidebar">
        <li class="<?php if(($unav) == "3"): ?>active<?php endif; ?>"><a href="/home/user/changepwd.html">修改密码</a>
        </li>
      </ul>
    </li>

    <li>
      <a href="/home/user/logout" id="btn-logout">
        <i class="fa fa-envelope"></i>注销
      </a>
    </li>
  </ul>
</nav>
          </div>
        </div>

        <div class="col-md-10">

          <div class="card">
            <div class="card-header m-b-15">
              <h4>我的订单</h4>
            </div>
            <div data-v-ea40d754="" data-v-210b197d="" class="componentBox">
				<div data-v-c00843fa="" data-v-ea40d754="" id="exportBusiness" data-v-210b197d="">
					<div data-v-c00843fa="" id="exportHeader">
						<ul data-v-c00843fa="" class="operation-mod">
							<li data-v-c00843fa="" class="operation-mod-item <?php if(($s) == "0"): ?>active<?php endif; ?>">
							<a href="/home/user/center" style = "text-decoration: none" data-v-c00843fa="" class="operation-mod-item a <?php if(($s) == "0"): ?>active<?php endif; ?>">待操作</a>
								<!----></li>
							<li data-v-c00843fa="" class="operation-mod-item <?php if(($s) == "1"): ?>active<?php endif; ?>">
							<a  href="/home/user/center/s/1" style = "text-decoration: none" data-v-c00843fa="" class="operation-mod-item a <?php if(($s) == "1"): ?>active<?php endif; ?>">历史数据</a>
								<!----></li>
						</ul>
						<ul data-v-c00843fa="" class="query-mod">
							<li data-v-c00843fa="" class="warehouseCodeLi">
								<span data-v-c00843fa="">进仓编号</span>
								<div data-v-c00843fa="" class="warehouseCodeItem el-input el-input--mini">
									<!---->
									<input id="incode" type="text" autocomplete="off" class="el-input__inner">
									<!---->
									<!---->
									<!---->
									<!----></div>
							</li>
							<li data-v-c00843fa="" class="masterBillNo">
								<span data-v-c00843fa="">主提单号</span>
								<div data-v-c00843fa="" class="masterBillNoItem el-input el-input--mini">
									<!---->
									<input id="maincode" type="text" autocomplete="off" class="el-input__inner">
									<!---->
									<!---->
									<!---->
									<!----></div>
							</li>
							<li data-v-c00843fa="" class="sailDate">
								<span data-v-c00843fa="">开航日期</span>
								<div data-v-c00843fa="" class="el-date-editor sailDateStartItem el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--date">
									<!---->
									<input type="text" id="stime"   onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" readonly="readonly" autocomplete="off" name="" placeholder="选择日期" class="el-input__inner">
									<span class="el-input__prefix">
										<i class="el-input__icon el-icon-date"></i>
										<!----></span>
									<span class="el-input__suffix">
										<span class="el-input__suffix-inner">
											<i class="el-input__icon"></i>
											<!---->
											<!---->
											<!---->
											<!----></span>
										<!----></span>
									<!---->
									<!----></div>
								<span data-v-c00843fa="" class="until">至</span>
								<div data-v-c00843fa="" class="el-date-editor sailDateEndItem el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--date">
									<!---->
									<input type="text" id="etime"   onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" readonly="readonly" autocomplete="off" name="" placeholder="选择日期" class="el-input__inner">
									<span class="el-input__prefix">
										<i class="el-input__icon el-icon-date"></i>
										<!----></span>
									<span class="el-input__suffix">
										<span class="el-input__suffix-inner">
											<i class="el-input__icon"></i>
											<!---->
											<!---->
											<!---->
											<!----></span>
										<!----></span>
									<!---->
									<!----></div>
							</li>
							<li data-v-c00843fa="">
								<button data-v-c00843fa="" type="button" id="tosub" class="el-button confirm el-button--primary el-button--mini">
									<!---->
									<!---->
									<span>确定</span></button>
							</li>
						</ul>
					</div>
					<div data-v-c00843fa="" id="exportTable">
		
				</div>
			</div>
          </div>

        </div>
      </div>
    </div>
  </section>	</div><!-- .entry-content -->

</article><!-- #post-18 -->

 <!-- 引入尾部组件 -->
    <footer class="ftco-footer ftco-bg-dark ftco-section">
        <div class="container">
            <div class="row mb-4">
                <div class="col-md">
                    <div class="ftco-footer-widget mb-3">
                        <h2 class="ftco-heading-2"><?php echo ($sys["name"]); ?></h2>
                        <ul class="list-unstyled">
                            <li><a href="/home/index/index/y/tj" class="py-2 d-block">运价查询</a></li>
                            <li><a href="/home/index/index/y/line" class="py-2 d-block">推荐航班</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4 ml-md-3">
                        <h2 class="ftco-heading-2">空运工具</h2>
                        <ul class="list-unstyled">
                            <li><a href="/home/index/index/y/three" class="py-2 d-block">三字代码查询</a></li>
                            <li><a href="/home/index/index/y/goods" class="py-2 d-block">空运货物查询</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-3">
                        <h2 class="ftco-heading-2">服务支持</h2>
                        <ul class="list-unstyled">
                            <li><a href="#" class="py-2 d-block">电话：<?php echo ($sys["tel"]); ?></a></li>
                            <li><a href="#" class="py-2 d-block">QQ：<?php echo ($sys["qq"]); ?></a></li>
                            <li><a href="#" class="py-2 d-block">邮箱：<?php echo ($sys["email"]); ?></a></li>
                        </ul>
                    </div>
                </div>
             
 
            </div>

            <div class="row">
                <div class="col-md-12 text-center">
                    <p>
                       <?php echo ($sys["copyright"]); ?>
                    </p>
                </div>
            </div>
        </div>
    </footer>

<script>
$("#scrollDiv").scroll(function(){
	
	var that=document.getElementById("scrollDiv");
	var n1 = parseInt(that.scrollLeft);    //外层容器的右移长度

    var n2 = parseInt(that.clientWidth);    //外层容器的宽度

    var n3 = parseInt(that.scrollWidth);    //外层容器实际宽度，当没有滚动条时与clientWidth相等
	
	if(n1+n2==n3){
		$("#scrollDiv").removeClass("is-scrolling-left");
		$("#scrollDiv").addClass("is-scrolling-right");
	}else{
		$("#scrollDiv").removeClass("is-scrolling-right");
		$("#scrollDiv").addClass("is-scrolling-left");
	}
});
var s="<?php echo ($s); ?>";
var p=1;
var incode="";
var maincode="";
var stime="";
var etime="";
function loadlist(){
	 $.post("/home/user/getlist",{s:s,incode:incode,maincode:maincode,stime:stime,etime:etime,p:p},function(data){
       $("#exportTable").html(data);
    });
}
loadlist();
</script>
<script>
$("#exportTable").on('click','.topage',function(){
	p=$(this).data("p");
	loadlist();
});
function todel(id){
	$.post("/home/user/todel",{id:id},function(data){
       loadlist();
    });
}
</script>
</body>
    </html>