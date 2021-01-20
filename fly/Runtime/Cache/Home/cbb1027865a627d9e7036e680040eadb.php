<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8" />
    <title>注册第一步 - <?php echo ($sys["name"]); ?></title>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">

        <link href="/Public/Home/twentynineteen/css/registerfirst.css" rel="stylesheet">
<link href="/Public/favicon.ico" type="image/x-icon" rel="shortcut icon">
        <script type="text/javascript" src="/Public/Home/twentynineteen/js/jquery-2.0.3.min.js"></script>
		 <script type="text/javascript" src="/Public/Home/js/alert.js"></script>
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

<article id="post-14" class="post-14 page type-page status-publish hentry entry">
		<header class="entry-header">
		

	</header>
	
	<div class="entry-content">
		<div class="clouds">
    <div class="cloud x1"></div>
    <!-- Time for multiple clouds to dance around -->
    <div class="cloud x2"></div>
    <div class="cloud x3"></div>
    <div class="cloud x4"></div>
    <div class="cloud x5"></div>
  </div>

  <form class="register" id="myform" onsubmit="comment()"  action="javascript:void(0)">
    <h2 class="title">注册</h2>
    <p>
      <span class="fa fa-envelope-o"></span>
      <input id="email" type="email" name="email" placeholder="用户邮箱" required />
    </p>
    <p>
      <span class="fa fa-user"></span>
      <input id="nickname" type="text" name="name" placeholder="用户昵称" required />
    </p>
    <p>
      <span class="fa fa-lock"></span>
      <input id="password" type="password" name="password" placeholder="用户密码" required />
    </p>
    <p>
      <span class="fa fa-clone"></span>
      <input id="repassword" type="password" name="repassword" placeholder="确认密码" required />
    </p>
    <p>
      <span class="fa fa-mobile"></span>
      <input id="phone" type="text" name="tel" placeholder="用户手机" required />
    </p>
    <p>
      <span class="fa fa-check-square-o"></span>
      <input id="vcode" type="text" name="vcode" autocomplete="off" placeholder="验证码" required />
    </p>
    <p class="vcode">
      <img id="img-vcode" src="/home/login/verify" alt="验证码">
      <a href="javascript:;" class="btn btn-link" id="change-vcocde"><small>换一张</small></a>
    </p>

    <p class="text-center">
      <input type="submit" id="do-register" class=" btn-block" style="background-color: #20407d;
    color: white;
    border: 0px;
    width: 300px;
    padding: 8px;
    outline: none;
    border-radius: 2px;" value="注册" />
    </p>
    <p class="text-center">

      <small>已有账号? </small>
      <a href="/home/login/login"><small>现在登录</small></a>
    </p>
    <div class="form-check form-check-inline checkbox checkbox-danger" style="margin-left: 48px;">
      <input class="form-check-input" type="checkbox" id="servicearticle" required>
      <label class="form-check-label" for="servicearticle"><small>已阅读</small></label>
      <a href="#"><small>网站服务条款</small></a>
    </div>
  </form>	</div><!-- .entry-content -->

</article><!-- #post-14 -->
<div style="display:none;" class="alertify  ajs-movable ajs-closable ajs-pinnable ajs-pulse"><div class="ajs-dimmer"></div><div class="ajs-modal" tabindex="0"><div class="ajs-dialog" tabindex="0"><button class="ajs-reset"></button><div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div><div class="ajs-header">错误信息</div><div class="ajs-body"><div class="ajs-content">用户不存在</div></div><div class="ajs-footer"><div class="ajs-auxiliary ajs-buttons"></div><div class="ajs-primary ajs-buttons"><button class="ajs-button ajs-ok">知道了</button></div></div><div class="ajs-handle"></div><button class="ajs-reset"></button></div></div></div>

<script>
$("#change-vcocde").click(function(){
	$("#img-vcode").attr("src","/home/login/verify?");
});
function comment(){

		$.post("/home/login/reg",$("#myform").serialize(),function(data){
				if(data.s=="1"){
					window.location.href="/home/login/login";
				}else{
					$(".ajs-content").html(data.msg);
					$(".alertify").show();
					$("#img-vcode").attr("src","/home/login/verify?");
				}
		},"json");
	}
	$(".ajs-close").click(function(){
	$(".alertify").hide();
});	
$(".ajs-ok").click(function(){
	$(".alertify").hide();
});	
</script>
</body>
    </html>