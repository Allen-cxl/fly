<?php if (!defined('THINK_PATH')) exit();?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <title></title>
    <meta name="description"  content="空运舱提供真实有效的空运出口运费查询订舱，免费提供专业的HS编码查询，国外地址查询，三字代码查询，货物跟踪查询功能。" />
    <meta name="keywords"  content="空运舱,空运价格,国际空运费查询，三字代码查询，空运货物查询跟踪，HS编码查询" />
    <link href="/Public/Home/twentynineteen/css/index.css" rel="stylesheet"></head>
	<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?8f4fc4da7b5d82231a5007e08407d6c9";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
<body>
<style>
button{
outline:none !important;
}
input{
outline:none !important;
}
.button{
	outline:none !important;
}
</style>
<div id="carousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
		<?php if(is_array($banner)): foreach($banner as $key=>$vo): ?><li data-target="#carousel" data-slide-to="<?php echo ($key); ?>" class="<?php if(($key) == "0"): ?>active<?php endif; ?>"></li><?php endforeach; endif; ?>
        
    </ol>
    <div class="carousel-inner" id="carousel-inner">
				<?php if(is_array($banner)): foreach($banner as $key=>$vo): ?><div class="carousel-item <?php if(($key) == "0"): ?>active<?php endif; ?>">
                                <img class="d-block w-100" src="/<?php echo ($vo["pic"]); ?>" style="height:395px;" alt="">
                <div class="carousel-caption d-none d-md-block">
                    <div class="container">
                        <h5 style="color: #fff;"></h5>
                        <p></p>
                    </div>
                </div>
                            </div><?php endforeach; endif; ?>			
    </div>
</div>

<section class="ftco-section justify-content-end ftco-search">
    <div class="container" style="background:#fff; opacity:0.8; border-radius:30px;">
        <div class="row no-gutters">
            <div class="col-md-12">

                <div id="v-pills-tabContent">

                    <div  id="rates-search-content">
                        <div class="search-destination">
                            <div class="row">
                                <div class="col-md-2 align-items-end">
                                    <div class="form-group" style="margin-bottom: 0 !important">
                                        <div class="form-field input-group">
                                            <input type="text" class="form-control" placeholder="始发港" id="qyg" style=" border:none; box-shadow:none;">
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5 align-items-end">
                                    <div class="form-group" style="margin-bottom: 0 !important">
                                        <div class="form-field">
                                            <input type="text" class="form-control" placeholder="目的港丨输入城市、机场或三字代码" id="mdg" style="border:none; border-left:1px solid #ccc; box-shadow:none;">
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 align-items-end">
                                    <div class="form-group" style="margin-bottom: 0 !important">
                                        <div class="form-field">
                                            <input type="text" class="form-control" placeholder="航空公司丨输入航空公司或航司代码" id="hkgs" style="border:none; border-left:1px solid #ccc; border-right:1px solid #ccc;box-shadow:none; ">
                                            <div class="input-group-btn">
                                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                    <span class="caret"></span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-1 align-self-center">
                                    <div class="form-group" style="margin-bottom: 0 !important; cursor: pointer;">
                                        <div class="form-field1" id="search-rates1">                               
                                            <img  src="/Public/Home/twentynineteen/img/search.png" style="height:16px; line-height:50px;outline: none;"><span class="chax2">查询</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section" style="margin-top:120px;">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="intro text-center">
                    <p><img class="img-responsive" src="/Public/Home/twentynineteen/img/price.png"/></p>
                    <h3 class="text-center">一键报价</h3>
                    <p class="text-center">运价透明，节省99%询价时间<br>
                        智能匹配，比重价格一目了然</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="intro text-center">
                    <p><img class="img-responsive" src="/Public/Home/twentynineteen/img/booking.png"/></p>
                    <h3 class="text-center">在线订舱</h3>
                    <p class="text-center">线上下单，避免烦琐托书工作<br>
                        秒放地图，提升货物进仓时效</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="intro text-center">
                    <p><img class="img-responsive" src="/Public/Home/twentynineteen/img/service.png"/></p>
                    <h3 class="text-center">标准服务</h3>
                    <p class="text-center">标准服务，1对1贴心专业服务<br>
                        7*24小时，全程跟踪有问必答</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section" style="background:#f2f2f2;">
    <div class="container">
        <div class="row justify-content-center mb-3 pb-3">
            <div class="col-md-12 heading-section">
                <h2>国际空运特价</h2>
            </div>
        </div>                       
        <div class="row">
                            <div class="col-md-4">
                    <a href="<?php echo ($sys["url1"]); ?>" class="destination-entry img">
                        <img class="img-fluid img-thumbnail " src="/Public/Home/twentynineteen/img/th1.jpg" style="height:250px" alt="石家庄U6直飞列日LGG"/>
                        <div class="text text-center">
                            <h5 class="text-truncate"><?php echo ($sys["urln1"]); ?></h5>
                        </div>
                        
                    </a>
                </div>
                            <div class="col-md-4">
                    <a href="<?php echo ($sys["url2"]); ?>" class="destination-entry img">
                        <img class="img-fluid img-thumbnail" src="/Public/Home/twentynineteen/img/th2.jpg" style="height:250px" alt="福州MF直达LHR包机"/>
                        <div class="text text-center">
                            <h5 class="text-truncate"><?php echo ($sys["urln2"]); ?></h5>
                        </div>
                    </a>
                </div>
                            <div class="col-md-4">
                    <a href="<?php echo ($sys["url3"]); ?>" class="destination-entry img">
                        <img class="img-fluid img-thumbnail" src="/Public/Home/twentynineteen/img/th3.jpg" style="height:250px" alt="上海/武汉ET飞SCL/GRU"/>
                        <div class="text text-center">
                            <h5 class="text-truncate"><?php echo ($sys["urln3"]); ?></h5>
                        </div>
                    </a>
                </div>
                    </div>
    </div>
</section>

<section class="ftco-section">
    <div class="container">
        <div class="row justify-content-center mb-3 pb-3">
            <div class="col-md-12 heading-section">
                <h2>国际空运专线</h2>
            </div>
        </div>
        <div class="row">
                            <div class="col-md-4">
                    <a href="<?php echo ($sys["url4"]); ?>" class="destination-entry img">
                        <img class="img-fluid img-thumbnail img-fld" src="/Public/Home/twentynineteen/img/zx_1.jpg" style="height:250px" alt="福州MF直飞YVR 航班周367"/>
                        <div class="text text-center  text-center2">
                            <h5 class="text-truncate"><?php echo ($sys["urln4"]); ?></h5>
                        </div>
                    </a>
                </div>
                            <div class="col-md-4">
                    <a href="<?php echo ($sys["url5"]); ?>" class="destination-entry img">
                        <img class="img-fluid img-thumbnail img-fld" src="/Public/Home/twentynineteen/img/zx_2.jpg" style="height:250px" alt="RQ直飞KBL 包机收货"/>
                        <div class="text text-center text-center2">
                            <h5 class="text-truncate"><?php echo ($sys["urln5"]); ?></h5>
                        </div>
                    </a>
                </div>
                            <div class="col-md-4">
                    <a href="<?php echo ($sys["url6"]); ?>" class="destination-entry img">
                        <img class="img-fluid img-thumbnail img-fld" src="/Public/Home/twentynineteen/img/zx_3.jpg" style="height:250px" alt="厦门MF直飞SVO2  每周26航班"/>
                        <div class="text text-center text-center2">
                            <h5 class="text-truncate"><?php echo ($sys["urln6"]); ?></h5>
                        </div>
                    </a>
                </div>
                    </div>
    </div>
</section>

<section>
    <div class="container">

    </div>
</section>

<script type="text/javascript" src="/Public/Home/twentynineteen/js/index.js"></script>
<script type='text/javascript' src='/Public/Admin/uploade/jquery-2.0.3.min.js'></script>	
<script>
$("#search-rates1").click(function(){
	var cport=$("#qyg").val();
	var mport=$("#mdg").val();
	var company=$("#hkgs").val();
	var lin="";
	if(cport!=""){
		lin+="&cp="+cport;
	}
	if(mport!=""){
		lin+="&mp="+mport;
	}
	if(company!=""){
		lin+="&pa="+company;
	}
	window.location.href="/home/index/tj?y=1"+lin;
});
</script>
</body>

</html>