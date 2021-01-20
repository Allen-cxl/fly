<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8" />
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
        <link href="/Public/Home/twentynineteen/css/airtracking.css" rel="stylesheet">
        <script type="text/javascript" src="/Public/Home/twentynineteen/js/jquery-2.0.3.min.js"></script>

</head>
<body>

                <div class="jumbotron jumbotron-fluid"
                     style="background-image:url(/<?php echo ($sys["banner"]); ?>);height:347px;">
                    <div class="container">
                        <h1 class="display-4"></h1>
                        <p class="lead"></p>
                    </div>
                </div>

                
<div id="loading"
     style="position: fixed;width: 100vw;height: 100vh;z-index: 999; background-color:rgba(0, 0, 0, 0.4); display: none;">
<div
            style="background-image: url(/Public/Home/twentynineteen/img/loading.gif);width: 90px;height: 90px;position: absolute;left: 50%;top: 30%;margin-left: -30px;border-radius: 50%;transform: rotateY(180deg);background-size: cover;background-repeat: no-repeat;box-shadow: 0 0 5px #ccc inset;">
    </div>
</div>
	
<article id="post-3106" class="post-3106 page type-page status-publish hentry entry">
		<header class="entry-header">
		

	</header>
	
	<div class="entry-content">
		<section>
    <div class="container">
      <div class="row form-inline mb-5">
        <div class="form-group">
          <label for="hscode">运单号</label>
          <input type="text" id="z_code" class="form-control mx-sm-3" maxLength="3">
          <label for="hscode">——</label>
          <input type="text" id="z_num" class="form-control mx-sm-3">
        </div>
        <div class="form-group col-md-3">
          <button type="button" class="btn btn-primary " id='ky_search_btn'>查询</button>
        </div>
      </div>
    </div>
  </section>
  <section style='width:90%; margin:0 auto;'>
    <div class="container">
      <div class="alert alert-success" role="alert">
        <small>
          说明： 运单号两栏均必填，其中前面的为主单号为三位数
        </small>
      </div>
    </div>
  </section>
  <div class="container">
    <div id="left">

      <!-- InstanceBeginEditable name="aircargotrackingtop" -->
      <h1 style='font-size:24px; margin-top:40px;'>航空货运跟踪</h1>
      <!-- InstanceEndEditable --> <br>
      <span class="Stil1"></span>
      <p style='margin-top:10px;'><a href="#airlines001">Airlines001-099 </a> | <a href="#airlines100">Airlines
          100-199</a> | <a href="#airlines200">Airlines
          200-299 </a> | <a href="#airlines300">Airlines 300-599</a> | <a href="#airlines600">Airlines
          600-999 </a> | <a href="#top">TOP</a> </p>
		<a name="airlines001" id="airlines001"></a>
		<p>
	  <?php if(is_array($list)): foreach($list as $key=>$vo): if($vo["num"] < 100 and $vo["num"] > 0): echo ($vo["num"]); ?> <?php echo ($vo["code"]); ?> <a href="<?php echo ($vo["url"]); ?>" target="_blank" id='<?php echo ($vo["num"]); ?>'><?php echo ($vo["company"]); ?></a> <br><?php endif; endforeach; endif; ?>
		</p>
		 <p style='margin-top:10px;'><a href="#airlines001">Airlines001-099 </a> | <a href="#airlines100">Airlines
          100-199</a> | <a href="#airlines200">Airlines
          200-299 </a> | <a href="#airlines300">Airlines 300-599</a> | <a href="#airlines600">Airlines
          600-999 </a> | <a href="#top">TOP</a> </p>
		<a name="airlines001" id="airlines100"></a>
		<p>
	  <?php if(is_array($list)): foreach($list as $key=>$vo): if($vo["num"] < 200 and $vo["num"] > 99): echo ($vo["num"]); ?> <?php echo ($vo["code"]); ?> <a href="<?php echo ($vo["url"]); ?>" target="_blank" id='<?php echo ($vo["num"]); ?>'><?php echo ($vo["company"]); ?></a> <br><?php endif; endforeach; endif; ?>
		</p>
		 <p style='margin-top:10px;'><a href="#airlines001">Airlines001-099 </a> | <a href="#airlines100">Airlines
          100-199</a> | <a href="#airlines200">Airlines
          200-299 </a> | <a href="#airlines300">Airlines 300-599</a> | <a href="#airlines600">Airlines
          600-999 </a> | <a href="#top">TOP</a> </p>
		<a name="airlines001" id="airlines200"></a>
		<p>
	  <?php if(is_array($list)): foreach($list as $key=>$vo): if($vo["num"] < 300 and $vo["num"] > 199): echo ($vo["num"]); ?> <?php echo ($vo["code"]); ?> <a href="<?php echo ($vo["url"]); ?>" target="_blank" id='<?php echo ($vo["num"]); ?>'><?php echo ($vo["company"]); ?></a> <br><?php endif; endforeach; endif; ?>
		</p>
		 <p style='margin-top:10px;'><a href="#airlines001">Airlines001-099 </a> | <a href="#airlines100">Airlines
          100-199</a> | <a href="#airlines200">Airlines
          200-299 </a> | <a href="#airlines300">Airlines 300-599</a> | <a href="#airlines600">Airlines
          600-999 </a> | <a href="#top">TOP</a> </p>
		<a name="airlines001" id="airlines300"></a>
		<p>
	  <?php if(is_array($list)): foreach($list as $key=>$vo): if($vo["num"] < 600 and $vo["num"] > 299): echo ($vo["num"]); ?> <?php echo ($vo["code"]); ?> <a href="<?php echo ($vo["url"]); ?>" target="_blank" id='<?php echo ($vo["num"]); ?>'><?php echo ($vo["company"]); ?></a> <br><?php endif; endforeach; endif; ?>
		</p>
		 <p style='margin-top:10px;'><a href="#airlines001">Airlines001-099 </a> | <a href="#airlines100">Airlines
          100-199</a> | <a href="#airlines200">Airlines
          200-299 </a> | <a href="#airlines300">Airlines 300-599</a> | <a href="#airlines600">Airlines
          600-999 </a> | <a href="#top">TOP</a> </p>
		<a name="airlines001" id="airlines600"></a>
		<p>
	  <?php if(is_array($list)): foreach($list as $key=>$vo): if($vo["num"] < 1000 and $vo["num"] > 599): echo ($vo["num"]); ?> <?php echo ($vo["code"]); ?> <a href="<?php echo ($vo["url"]); ?>" target="_blank" id='<?php echo ($vo["num"]); ?>'><?php echo ($vo["company"]); ?></a> <br><?php endif; endforeach; endif; ?>
		</p>
      <p style='color:#a0a0a0;'>*某些航线或通过某些货运代理预订的航空货运跟踪<br>
        <br>
      </p>
		<br>
      <div id="photos"></div>
    </div>
  </div>	</div>

</article>
<div class="alertify  ajs-movable ajs-closable ajs-pinnable ajs-pulse ajs-hidden">
    <div class="ajs-dimmer"></div>
    <div class="ajs-modal" tabindex="0">
        <div class="ajs-dialog" tabindex="0">
            <button class="ajs-reset"></button>
            <div class="ajs-commands">
                <button class="ajs-pin"></button>
                <button class="ajs-maximize"></button>
                <button class="ajs-close"></button>
            </div>
            <div class="ajs-header">提示</div>
            <div class="ajs-body">
                <div class="ajs-content">请输入运单号！</div></div>
            <div class="ajs-footer">
                <div class="ajs-auxiliary ajs-buttons"></div>
                <div class="ajs-primary ajs-buttons">
                    <button class="ajs-button ajs-ok">知道了</button></div>
            </div>
            <div class="ajs-handle"></div>
            <button class="ajs-reset"></button>
        </div>
    </div>
</div>
<script>
$("#ky_search_btn").click(function(){
	var code=$("#z_code").val();
	var num=$("#z_num").val();
	if(code=="" || num==""){
		$(".ajs-content").html("请输入运单号！");
		$(".alertify").removeClass("ajs-hidden");
	}else{
		if($("#"+code)[0]){
			window.location.href="#"+code;
		} else {
			$(".ajs-content").html("你好，没有收录代码为："+code+"的航空公司信息！");
			$(".alertify").removeClass("ajs-hidden");
		}
	}
});
$(".ajs-close").click(function(){
	$(".alertify").addClass("ajs-hidden");
});
$(".ajs-ok").click(function(){
	$(".alertify").addClass("ajs-hidden");
});
</script>
    </html>