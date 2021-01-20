<?php if (!defined('THINK_PATH')) exit();?>
<!doctype html>
<html lang="zh-CN" >
<head>
	<meta charset="UTF-8" />
    <title>个人中心 - <?php echo ($sys["name"]); ?></title>
 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
	<link href="/Public/Home/twentynineteen/css/dhRecord.css" rel="stylesheet">
        <link href="/Public/Home/twentynineteen/css/dhrecordlist.css" rel="stylesheet">
        <link href="/Public/Home/twentynineteen/css/center.css" rel="stylesheet">
		<link href="/Public/favicon.ico" type="image/x-icon" rel="shortcut icon">
    <script type="text/javascript" src="/Public/Home/twentynineteen/js/center.js"></script>

        <script type="text/javascript" src="/Public/Home/twentynineteen/js/jquery-2.0.3.min.js"></script>
		    <script type="text/javascript" src="/Public/Home/js/alert.js"></script>
			<script type="text/javascript" src="/Public/Home/DatePicker/WdatePicker.js"></script>
			<!--上传图片插件start-->

	<script type='text/javascript' src='/public/admin/uploade/jquery.form.js'></script>
	<form id='myupload' action='/home/index/uppic' method='post' enctype='multipart/form-data'>
		<input type="file" id="uploadphoto" name="uploadfile" value="请点击上传图片"  style="display:none;" />
	</form>
<script type="text/javascript">
$(document).ready(function(e) {
   var thisdiv;
   $(".addwt").click(function(){
		$("#uploadphoto").trigger('click');
		thisdiv=$(this);
   });
   $("#uploadphoto").change(function(){
  	 $("#myupload").ajaxSubmit({ 
  		dataType:  'json', //数据格式为json 
  		beforeSend: function() { //开始上传 
  			thisdiv.parent().find(".progress").show();
  			var percentVal = '0%';
  			thisdiv.parent().find(".progress-bar").width(percentVal);
  			//percent.html(percentVal);
  		}, 
  		uploadProgress: function(event, position, total, percentComplete) { 
  			var percentVal = percentComplete + '%'; //获得进度 
  			thisdiv.parent().find(".progress-bar").width(percentVal); //上传进度条宽度变宽 
  			//percent.html(percentVal); //显示上传进度百分比 
  		}, 
  		success: function(data) {
			 
			if(data.status == 1){
				var str='<tr><td><input name="wid" value="'+data.wid+'" type="hidden" />'+data.name+'</td><td>'+data.size+'</td><td>'+data.time+'</td><td><span class="delwt">删除</span></td></tr>';
				$("#nodata").hide();
				$("#wtshu").html(str);
			}else{
				$(".res").html(data.content);
			}
  			thisdiv.parent().find(".progress").hide();		
  		}, 
  		error:function(xhr){ //上传失败 
  		   alert("上传失败"); 
  		   thisdiv.parent().find(".progress").hide(); 
  		} 
  	}); 
   });
	$("#wtshu").on("click",".delwt",function(){
		$(this).parent().parent().remove();
	});
});
</script>
<!--上传图片插件end-->
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

.ivu-input {
    display: inline-block;
    width:300px;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
}
.ivu-button{
outline:none;
margin-right:10px;
width:120px;
text-align:right;
border:0px;
background-color:white;
}
.ivu-btn-primary {
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
}
.addwt{
display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 5px 15px 6px;
    font-size: 12px;
    border-radius: 4px;
    transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
    color: #515a6e;
    background-color: #fff;
    border-color: #dcdee2;
}
.ivu-table-header td{
    min-width: 0;
    height: 48px;
    box-sizing: border-box;
    text-align: center;
    text-overflow: ellipsis;
    vertical-align: middle;
	text-align:center;
	font-size:15px;
    border: 1px solid #e8eaec;
	}
 .ivu-table-header th {
    min-width: 0;
    height: 48px;
    box-sizing: border-box;
    text-align: center;
    text-overflow: ellipsis;
    vertical-align: middle;
	text-align:center;
	font-weight:400;
	background-color:#f1f1f1;
	font-size:15px;
    border: 1px solid #e8eaec;
	}
</style>
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
    <div class="container mt-4 mb-4" style="box-shadow: 0 0 5px #afb0b1;border-radius:5px;">
		<form class="cd-form floating-labels" id="myform" onsubmit="comment()"  action="javascript:void(0)">
		<div style="width:100%;padding:20px;">
			
			<div style="width:100%;background-color:#333;color:white;border-radius:2px;padding:5px 10px;;font-size:14px;">
				<span class="ivu-alert-icon">
					 <i class="ivu-icon ivu-icon-ios-information-circle"></i>
				</span>
				<span class="ivu-alert-message">
					 <span class="select-count">航班信息</span></span>
				<span class="ivu-alert-desc"></span>
			</div>
			<div style="padding:20px;font-size:15px;color:gray;">
				
				<div style="margin-bottom:20px;">
					<button style="outline:none;" class="ivu-button">始发港</button><input readonly value="<?php echo ($data["cportcode"]); ?>" name="cport" class="ivu-input" type="text" /><input name="fid" class="ivu-input" type="hidden" value="<?php echo ($data["id"]); ?>"  />
					<button style="outline:none;" class="ivu-button">目的港</button><input readonly value="<?php echo ($data["mportcode"]); ?>" name="mport" class="ivu-input" type="text" />
				</div>
				<div style="margin-bottom:20px;">
					<button style="outline:none;" class="ivu-button">开航时间</button><input readonly  onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" name="ktime" class="ivu-input" type="text" required  />
					<button style="outline:none;" class="ivu-button">公司</button><input readonly  value="<?php echo ($data["companycode"]); ?>" name="company" class="ivu-input" type="text" required  />
					
				</div>
				
			</div>
			<div style="width:100%;background-color:#333;color:white;border-radius:2px;padding:5px 10px;;font-size:14px;">
				<span class="ivu-alert-icon">
					 <i class="ivu-icon ivu-icon-ios-information-circle"></i>
				</span>
				<span class="ivu-alert-message">
					 <span class="select-count">货物信息</span></span>
				<span class="ivu-alert-desc"></span>
			</div>
			<div style="padding:20px;font-size:15px;color:gray;">
				<div style="margin-bottom:20px;">
					<button style="outline:none;" class="ivu-button">货物总称</button><input name="goods" class="ivu-input" type="text" required  />
					
					<button style="outline:none;" class="ivu-button">预估件数(件)</button><input name="num" class="ivu-input" type="text" required  />
				</div>
				<div style="margin-bottom:20px;">
					<button style="outline:none;" class="ivu-button">预估重量(KG)</button><input name="weight" class="ivu-input" type="text" required  />
					<button style="outline:none;" class="ivu-button">预估体积(CBM)</button><input name="volume" class="ivu-input" type="text" required  />
					
				</div>
				<div style="margin-bottom:20px;vertical-align:middle; ">
					<button style="outline:none;" class="ivu-button">备注</button>
			
					
				</div>
				<div style="margin-bottom:20px;vertical-align:middle; ">
					<button style="outline:none;" class="ivu-button"></button>
					<textarea  name="remarks" class="ivu-input" style="height:100px;width:600px;"></textarea>
					
				</div>
				<div style="margin-bottom:20px;vertical-align:middle; ">
					<span style="outline:none;" class="addwt">上传委托书</span>
					<!--上传文件条-->
										<div class="uploadify-queue-item progress" style="display:none;"> <div class="cancel">	 <a href="javascript:">X</a></div><span class="fileName">文件名 大小</span><span class="data"></span><div class="uploadify-progress"><div class="uploadify-progress-bar progress-bar" style="width:20%"><!--Progress Bar--></div></div></div>
					<!--上传文件条-->
				</div>
			</div>
			<div class="ivu-table-header">
                         <table cellspacing="0" cellpadding="0" border="0" style="width: 1070px;">
                                   <thead>
                                          <tr>
                                              <th align="center;" class="ivu-table-column-center">
                                                                                   文件名
                                                                                </th>
                                                                                <th class="ivu-table-column-center">
                                                                                   文件大小
                                                                                </th>
                                                                                <th class="ivu-table-column-center">
                                                                                   上传时间
                                                                                </th>
                                                                                <th class="ivu-table-column-center">
                                                                                   操作
                                                                                </th>
                                                                             </tr>
										<tr>
                                             
                                                                               							 
                                                                        </thead>
								<tbody id="wtshu">
								 <td align="center;" id="nodata" colspan="4">
                                                                                   暂无数据
                                                                                </td>
								</tbody>										
                     </table>
              </div>
			<div class="submit_order_box" style="width:100%;text-align:center;border-top:1px dotted gray;padding-top:20px;">
				<!--<button style="width:200px;border:1px solid #2d8cf0;border-radius:10px;padding:6px;background-color:white;margin-right:30px;">取消</button>-->
				<input type="submit" value="保存并提交订单" style="width:200px;border:1px solid #2d8cf0;border-radius:10px;padding:6px;background-color:#2d8cf0;color:white;" />
			</div>
		</div>
		</form>
    </div>
  </section>	</div><!-- .entry-content -->

</article>

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
function comment(){
		$.post("/home/user/topay",$("#myform").serialize(),function(data){
			$.MsgBox.Confirm("提示","提交成功,是否退出",function(){
				window.location.href="/home/user/center";
			});
		});
	}
</script>
</body>
    </html>