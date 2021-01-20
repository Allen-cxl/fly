<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8" />
    <title><?php echo ($sys["title"]); ?></title>

<!-- All in One SEO Pack 3.2.3 由 Semper Fi Web Design 的 Michael Torbert 所开发[73,103] -->
<meta name="description"  content="<?php echo ($sys["title"]); ?>" />
<link href="/Public/favicon.ico" type="image/x-icon" rel="shortcut icon">
<meta name="keywords"  content="<?php echo ($sys["title"]); ?>" />

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">

        <link href="/Public/Home/twentynineteen/css/airtracking.css" rel="stylesheet">
        <script type="text/javascript" src="/Public/Home/twentynineteen/js/jquery-2.0.3.min.js"></script>

</head>
<body>
<div id="loading" style="position: fixed;top:62px;width: 100vw;height: 100vh;z-index: 999; background-color:rgba(255, 255, 255, 1); display: block;">
	<div style="background-image: url(/Public/Home/twentynineteen/img/loading.gif);width: 90px;height: 90px;position: absolute;left: 50%;top: 30%;margin-left: -30px;border-radius: 50%;transform: rotateY(180deg);background-size: cover;background-repeat: no-repeat;box-shadow: 0 0 5px #ccc inset;">
	</div>
</div>
 
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

<iframe id="mainFrame" frameBorder="0" scrolling="no" style="width:100%;border:0;overflow:hidden;" src=""></iframe>
<script type="text/javascript" src="/Public/Home/twentynineteen/js/airtracking.js"></script>

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
var $iFrame=$("#mainFrame");      
$iFrame.prop("src","/home/index/<?php echo ($y); ?>");    
$iFrame.load(function(){       
    initIframeHeight();
	$("#loading").hide();
});

function initIframeHeight(height){
	var userAgent = navigator.userAgent;
	var iframe = parent.document.getElementById("mainFrame");
	if(height){
		 $(iframe).height(height);
	}else{
		
		var subdoc = iframe.contentDocument || iframe.contentWindow.document;
		var subbody = subdoc.body;
		var realHeight;
		//谷歌浏览器特殊处理
		if(userAgent.indexOf("Chrome") > -1){
			realHeight = subdoc.documentElement.scrollHeight;
		}
		else{
			realHeight = subbody.scrollHeight;
		}
		if(realHeight < height){
			$(iframe).height(height);
		}
		else{
			$(iframe).height(realHeight);
		}
	}
}
 </script>
</body>
</html>