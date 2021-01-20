<?php if (!defined('THINK_PATH')) exit();?>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="shortcut icon" type="image/x-icon" href="/images/logo.ico" media="screen" />
<title></title>

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta charset="utf-8" />
<meta name="viewport" content="width=1160, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />     
<meta name="apple-mobile-web-app-capable" content="yes" />    
<meta name="format-detection" content="telephone=no" />  

<meta name="Keywords" content="">
<meta name="Description" content="">

<script src="/Public/Home/sino/assets/js/jquery.js"></script>
	
	<link rel="stylesheet" type="text/css" href="/Public/Home/sino/css/style.css" />
	<script type="text/javascript" src="/Public/Home/sino/js/common.js"></script><!-- 表头下拉 -->
	

</head>
<body class="no-skin">
	<div class="main-container" id="main-container">
<!-- main -->
		<div class="main-content" style="background:#f2f2f2;">
			
<div class="y_banner" style="background:url('/<?php echo ($sys["banner"]); ?>') top center no-repeat #0072ff"></div>
<div class="y_con_all">
    <div class="y_fl y_con_fl">
        <!--<div class="y_con_nav">首页 》 用户中心 》 航璇资讯 》 物流新闻</div>-->
        <h1><?php echo ($data["title"]); ?></h1>
        <h2><?php echo ($data["subtitle"]); ?></h2>
        <span style="display: block;">
         
            <label>发布时间：<?php echo date("Y-m-d",$data["time"]);?></label>
        </span>
        <br>
        <p class="y_con_p">
        <?php echo ($data["content"]); ?>
		</p>
        <p class="y_tips">
            转载或内容合作请先<a href="#">联系我们</a> 违规转载法律必究。
        </p>
        <p class="y_page_change">
            上一篇：<a href="/home/index/news/id/<?php echo ($data1["id"]); ?>"><?php echo ($data1["title"]); ?></a>
        </p>
        <p class="y_page_change y_pre_page">
            下一篇：<a href="/home/index/news/id/<?php echo ($data2["id"]); ?>"><?php echo ($data2["title"]); ?></a>
        </p>

    </div>
    <ul class="y_fr y_con_fr">
	<?php if(is_array($list1)): foreach($list1 as $key=>$vo): ?><li><a href="/home/index/news/id/<?php echo ($vo["id"]); ?>"><img src="/<?php echo ($vo["pic"]); ?>" alt=""><span><?php echo ($vo["title"]); ?></span></a></li><?php endforeach; endif; ?>
	</ul>
</div>

		</div>
		<!-- main -->
	</div>
	<script>
window.parent.initIframeHeight($(document.body).height());
</script>
</body>
</html>