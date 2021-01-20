<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8" />
    <title></title>

<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">

        <link href="/Public/Home/twentynineteen/css/threeCode.css" rel="stylesheet">
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

<article id="post-3073" class="post-3073 page type-page status-publish hentry entry">
    <header class="entry-header"></header>
    <div class="entry-content">
        <section>
            <div class="container">
                <div class="form-inline" style="width: 600px; margin:0 auto 50px auto;">
                    <div class="form-group">
                        <label for="aircode">三字代码查询</label>
                        <input type="text" id="aircode"  class="form-control mx-sm-3">
                        <button type="button" class="btn btn-primary ml-5" id="search_bd_button2">查询</button></div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="alert alert-success" role="alert">
                    <small>提示：您可输入国家、三字码或者机场名称</small></div>
				
				<div class="table-box2">
					<table class="table table-bordered">
						<tbody>
							<tr>
								<td class="td-head">三字代码</td>
								<td class="td-content"><?php echo ($data['threecode']); ?></td>
								<td class="td-head">ICAO</td>
								<td class="td-content"><?php echo ($data["icao"]); ?></td></tr>
							<tr>
								<td class="td-head">机场名</td>
								<td class="td-content"><?php echo ($data["airport"]); ?></td>
								<td class="td-head">城市</td>
								<td class="td-content"><?php echo ($data["city"]); ?></td></tr>
							<tr>
								<td class="td-head">区域</td>
								<td class="td-content"><?php echo ($data["quyu"]); ?></td>
								<td class="td-head">国家/地区</td>
								<td class="td-content"><?php echo ($data["country"]); ?></td></tr>
							<tr>
								<td class="td-head">时区</td>
								<td class="td-content"><?php echo ($data["shiqu"]); ?></td>
								<td class="td-head">洲</td>
								<td class="td-content"><?php echo ($data["zhou"]); ?></td></tr>
							<tr>
								<td class="td-head">机场类型</td>
								<td class="td-content"><?php echo ($data["jitype"]); ?></td>
								<td class="td-head">银行作息</td>
								<td class="td-content"><?php echo ($data["bank"]); ?></td></tr>
						</tbody>
					</table>
				</div>
            </div>
        </section>
    </div>
 </article>
	</body>
<script>
var code="<?php echo ($code); ?>";
$("#search_bd_button2").click(function(){
	var code=$("#aircode").val();
	window.location.href="/home/index/three/code/"+code;
});
$("#first2").click(function(){
	var code=$("#aircode").val();
	var p=$(this).data("p");
	window.location.href="/home/index/three/code/"+code+"/p/1";
});
$("#prev2").click(function(){
	var code=$("#aircode").val();
	var p=$(this).data("p");
	window.location.href="/home/index/three/code/"+code+"/p/1";
});
$("#next2").click(function(){
	var code=$("#aircode").val();
	var p=$(this).data("p");
	window.location.href="/home/index/three/code/"+code+"/p/1";
});
$("#last2").click(function(){
	var code=$("#aircode").val();
	var p=$(this).data("p");
	window.location.href="/home/index/three/code/"+code+"/p/1";
});
window.parent.initIframeHeight($(document.body).height());
</script>
    </html>