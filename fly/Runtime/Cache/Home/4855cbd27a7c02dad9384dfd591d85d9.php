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
				<?php if(($page) != "0"): ?><div class="table-box2">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th>城市</th>
                                <th>三字代码</th>
                                <th>机场名</th>
                                <th>国家/地区</th></tr>
							<?php if(is_array($list)): foreach($list as $key=>$vo): ?><tr>
                                <td><?php echo ($vo["city"]); ?></td>
                                <td><?php echo ($vo["threecode"]); ?>
                                    <span class="hg">
                                        <em>海关</em></span>
                                    <span class="cs">
                                        <em>城市</em></span>
                                </td>
                                <td>
                                    <a href="/home/index/three1/id/<?php echo ($vo["id"]); ?>" data-code="HKD" onclick=""><?php echo ($vo["airport"]); ?></a></td>
                                <td><?php echo ($vo["country"]); ?></td></tr><?php endforeach; endif; ?>
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation example" id="pages2" style="display: table; width: auto; margin-left: auto; margin-right: auto; margin-top: 40px;">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link">共
                                <span id="totalpage2"><?php echo ($page["zong"]); ?></span>页，当前第
                                <span id="curpage2"><?php echo ($page["now"]); ?></span>页</a></li>
                        <li class="page-item">
                            <a class="page-link" data-p="1"  id="first2">首页</a></li>
                        <li class="page-item">
                            <a class="page-link" data-p="<?php echo ($page["tou"]); ?>" id="prev2">上一页</a></li>
                        <li class="page-item">
                            <a class="page-link" data-p="<?php echo ($page["wei"]); ?>" id="next2">下一页</a></li>
                        <li class="page-item">
                            <a class="page-link" data-p="<?php echo ($page["zong"]); ?>" id="last2">尾页</a></li>
                    </ul>
                </nav><?php endif; ?>

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