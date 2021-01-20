<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html style="font-size:190px;">
<head>
    <meta charset="UTF-8">
    <title><?php echo ($meta_title); ?>|lovevi管理平台</title>
    <link href="/Public/favicon.ico" type="image/x-icon" rel="shortcut icon">
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/base.css" media="all">
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/common.css" media="all">
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/module.css">
    <link rel="stylesheet" type="text/css" href="/Public/Admin/css/style.css" media="all">
	<link rel="stylesheet" type="text/css" href="/Public/Admin/css/<?php echo (C("COLOR_STYLE")); ?>.css" media="all">
     <!--[if lt IE 9]>
    <script type="text/javascript" src="/Public/static/jquery-1.10.2.min.js"></script>
    <![endif]--><!--[if gte IE 9]><!-->
    <script type="text/javascript" src="/Public/static/jquery-2.0.3.min.js"></script>
    <script type="text/javascript" src="/Public/Admin/js/jquery.mousewheel.js"></script>
    <!--<![endif]-->
    
	<style>
		.dragsort {
		    width:400px;
		}
	</style>

</head>
<body>
    <!-- 头部 -->
    <div class="header">
        <!-- Logo -->
        <span class="logo"></span>
        <!-- /Logo -->

        <!-- 主导航 -->
        <ul class="main-nav">
            <?php if(is_array($__MENU__["main"])): $i = 0; $__LIST__ = $__MENU__["main"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$menu): $mod = ($i % 2 );++$i;?><li class="<?php echo ((isset($menu["class"]) && ($menu["class"] !== ""))?($menu["class"]):''); ?>"><a href="<?php echo (U($menu["url"])); ?>"><?php echo ($menu["title"]); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
        </ul>
        <!-- /主导航 -->
	
		<div id="newsms" style="display:none">

</div>	

        <!-- 用户栏 -->
        <div class="user-bar">
            <a href="javascript:;" class="user-entrance"><i class="icon-user"></i></a>
            <ul class="nav-list user-menu hidden">
                <li class="manager">你好，<em title="<?php echo session('user_auth.username');?>"><?php echo session('user_auth.username');?></em></li>
                <li><a href="<?php echo U('User/updatePassword');?>">修改密码</a></li>
                <li><a href="<?php echo U('User/updateNickname');?>">修改昵称</a></li>
                <li><a href="<?php echo U('Public/logout');?>">退出</a></li>
            </ul>
        </div>
    </div>
    <!-- /头部 -->

    <!-- 边栏 -->
    <div class="sidebar">
        <!-- 子导航 -->
        
            <div id="subnav" class="subnav">
                <?php if(!empty($_extra_menu)): ?>
                    <?php echo extra_menu($_extra_menu,$__MENU__); endif; ?>
                <?php if(is_array($__MENU__["child"])): $i = 0; $__LIST__ = $__MENU__["child"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$sub_menu): $mod = ($i % 2 );++$i;?><!-- 子导航 -->
                    <?php if(!empty($sub_menu)): if(!empty($key)): ?><h3><i class="icon icon-unfold"></i><?php echo ($key); ?></h3><?php endif; ?>
                        <ul class="side-sub-menu">
                            <?php if(is_array($sub_menu)): $i = 0; $__LIST__ = $sub_menu;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$menu): $mod = ($i % 2 );++$i;?><li>
                                    <a class="item" href="<?php echo (U($menu["url"])); ?>"><?php echo ($menu["title"]); ?></a>
                                </li><?php endforeach; endif; else: echo "" ;endif; ?>
                        </ul><?php endif; ?>
                    <!-- /子导航 --><?php endforeach; endif; else: echo "" ;endif; ?>
            </div>
        
        <!-- /子导航 -->
    </div>
    <!-- /边栏 -->

    <!-- 内容区 -->
    <div id="main-content">
        <div id="top-alert" class="fixed alert alert-error" style="display: none;">
            <button class="close fixed" style="margin-top: 4px;">&times;</button>
            <div class="alert-content">这是内容</div>
        </div>
        <div id="main" class="main">
            
            <!-- nav -->
            <?php if(!empty($_show_nav)): ?><div class="breadcrumb">
                <span>您的位置:</span>
                <?php $i = '1'; ?>
                <?php if(is_array($_nav)): foreach($_nav as $k=>$v): if($i == count($_nav)): ?><span><?php echo ($v); ?></span>
                    <?php else: ?>
                    <span><a href="<?php echo ($k); ?>"><?php echo ($v); ?></a>&gt;</span><?php endif; ?>
                    <?php $i = $i+1; endforeach; endif; ?>
            </div><?php endif; ?>
            <!-- nav -->
            

            
	<script type="text/javascript" src="/Public/Home/DatePicker/WdatePicker.js"></script>

<link href="/Public/Home/static/css/chunk-5abedab7.206eb240.css" rel="stylesheet">
<script type="text/javascript" src="/Public/static/uploadify/jquery.uploadify.min.js"></script>
<!--上传图片插件start-->
   <script type='text/javascript' src='/Public/Admin/uploade/jquery-2.0.3.min.js'></script>
	<script type='text/javascript' src='/Public/Admin/uploade/jquery.form.js'></script>
	<form id='myupload' action='/admin.php?s=/index/uppic' method='post' enctype='multipart/form-data'>
		<input type="file" id="uploadphoto" name="uploadfile" value="请点击上传图片"  style="display:none;" />
	</form>
<script type="text/javascript">
$(document).ready(function(e) {
   var thisdiv;
   $(".uploadbtn").click(function(){
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
				var src = data.url;  
				thisdiv.parent().find(".inputpic").val(src);
				thisdiv.parent().find(".upload-pre-item").html('<img src="'+src+'">');
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

});
</script>
<!--上传图片插件end-->

	<!-- 标题栏 -->
	<div class="main-title cf">
		<h2>编辑航线</h2>
	</div>

	<!-- 修改密码表单 -->
	<form action="" method="post" class="form-horizontal">
	
		<div class="form-item cf">
			<label class="item-label">始发港<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" readonly value="<?php echo ($data["cport"]); ?>"  id="cport" name="cport" class="text input-large addport">
				<div></div>		
				<input type="hidden" value="<?php echo ($data["id"]); ?>" name="id" class="text input-large">
			</div>
		</div>
		<div class="form-item cf">
			<label class="item-label">始发港代码<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" value="<?php echo ($data["cportcode"]); ?>" name="cportcode" class="text input-large">
			</div>
		</div>
		<div class="form-item cf">
			<label class="item-label">目的港<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" readonly value="<?php echo ($data["mport"]); ?>"  id="mport" name="mport" class="text input-large addport">
				<div></div>	
				
			</div>
		</div>
		<div class="form-item cf">
			<label class="item-label">目的港代码<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" value="<?php echo ($data["mportcode"]); ?>" name="mportcode" class="text input-large">
			</div>
		</div>
		<!--id,mport,mportcode,hdata,cport,cportcode,ctime,time,remarks,isdel,company-->
		<div class="form-item cf">
			<label class="item-label">航空公司<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" value="<?php echo ($data["company"]); ?>" name="company" class="text input-large">
			</div>
		</div>
		
		<div class="form-item cf">
			<label class="item-label">货盘数据<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" value="<?php echo ($data["hdata"]); ?>" name="hdata" class="text input-large">
				
			</div>
		</div>
		
		<div class="form-item cf">
			<label class="item-label">出运日<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" value="<?php echo ($data["ctime"]); ?>" name="ctime" onclick="WdatePicker({dateFmt:'yyyy-MM-dd'})" readonly="readonly" class="text input-large">
				
			</div>
		</div>
		<div class="form-item cf">
			<label class="item-label">货物描述<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" value="<?php echo ($data["remarks"]); ?>" name="remarks" class="text input-large">
				
			</div>
		</div>
		<input type="hidden" name="id" value="<?php echo ($data["id"]); ?>">
		<button type="submit" class="btn submit-btn ajax-post" target-form="form-horizontal">确 定</button>
		<button class="btn btn-return" onclick="javascript:history.back(-1);return false;">返 回</button>
	</form>
	<!--港口选择-->

												
                                   

        </div>
        <div class="cont-ft">
            <div class="copyright">
                <div class="fl">感谢使用<a href="http://www.lovevi.cn" target="_blank">航璇国际货运</a>管理平台</div>
                <div class="fr">V<?php echo (LOVEVI_VERSION); ?></div>
            </div>
        </div>
    </div>
    <!-- /内容区 -->
    <script type="text/javascript">
    (function(){
        var ThinkPHP = window.Think = {
            "ROOT"   : "", //当前网站地址
            "APP"    : "/admin.php?s=", //当前项目地址
            "PUBLIC" : "/Public", //项目公共目录地址
            "DEEP"   : "<?php echo C('URL_PATHINFO_DEPR');?>", //PATHINFO分割符
            "MODEL"  : ["<?php echo C('URL_MODEL');?>", "<?php echo C('URL_CASE_INSENSITIVE');?>", "<?php echo C('URL_HTML_SUFFIX');?>"],
            "VAR"    : ["<?php echo C('VAR_MODULE');?>", "<?php echo C('VAR_CONTROLLER');?>", "<?php echo C('VAR_ACTION');?>"]
        }
    })();
    </script>
    <script type="text/javascript" src="/Public/static/think.js"></script>
    <script type="text/javascript" src="/Public/Admin/js/common.js"></script>
    <script type="text/javascript">
        +function(){
            var $window = $(window), $subnav = $("#subnav"), url;
            $window.resize(function(){
                $("#main").css("min-height", $window.height() - 130);
            }).resize();

            /* 左边菜单高亮 */
            url = window.location.pathname + window.location.search;
            url = url.replace(/(\/(p)\/\d+)|(&p=\d+)|(\/(id)\/\d+)|(&id=\d+)|(\/(group)\/\d+)|(&group=\d+)/, "");
            $subnav.find("a[href='" + url + "']").parent().addClass("current");

            /* 左边菜单显示收起 */
            $("#subnav").on("click", "h3", function(){
                var $this = $(this);
                $this.find(".icon").toggleClass("icon-fold");
                $this.next().slideToggle("fast").siblings(".side-sub-menu:visible").
                      prev("h3").find("i").addClass("icon-fold").end().end().hide();
            });

            $("#subnav h3 a").click(function(e){e.stopPropagation()});

            /* 头部管理员菜单 */
            $(".user-bar").mouseenter(function(){
                var userMenu = $(this).children(".user-menu ");
                userMenu.removeClass("hidden");
                clearTimeout(userMenu.data("timeout"));
            }).mouseleave(function(){
                var userMenu = $(this).children(".user-menu");
                userMenu.data("timeout") && clearTimeout(userMenu.data("timeout"));
                userMenu.data("timeout", setTimeout(function(){userMenu.addClass("hidden")}, 100));
            });

	        /* 表单获取焦点变色 */
	        $("form").on("focus", "input", function(){
		        $(this).addClass('focus');
	        }).on("blur","input",function(){
				        $(this).removeClass('focus');
			        });
		    $("form").on("focus", "textarea", function(){
			    $(this).closest('label').addClass('focus');
		    }).on("blur","textarea",function(){
			    $(this).closest('label').removeClass('focus');
		    });

            // 导航栏超出窗口高度后的模拟滚动条
            var sHeight = $(".sidebar").height();
            var subHeight  = $(".subnav").height();
            var diff = subHeight - sHeight; //250
            var sub = $(".subnav");
            if(diff > 0){
                $(window).mousewheel(function(event, delta){
                    if(delta>0){
                        if(parseInt(sub.css('marginTop'))>-10){
                            sub.css('marginTop','0px');
                        }else{
                            sub.css('marginTop','+='+10);
                        }
                    }else{
                        if(parseInt(sub.css('marginTop'))<'-'+(diff-10)){
                            sub.css('marginTop','-'+(diff-10));
                        }else{
                            sub.css('marginTop','-='+10);
                        }
                    }
                });
            }
        }();
    </script>
    
	<?php if(isset($data)): ?><script type="text/javascript" src="/Public/static/jquery.dragsort-0.5.1.min.js"></script><?php endif; ?>
	<script type="text/javascript">
		$(function(){
			//导航高亮
			highlight_subnav('<?php echo U("fly/linelist");?>');
			$(".addport").click(function(){
				$(".vue-city-picker").remove();
				var that=$(this);
				var id=$(this).attr("id");
				$.post("/home/index/getport",{id:id},function(result){
					that.next().html(result);
				});
			});
		})
	</script>

<div id="newsms" style="display:none">

</div>	
	
</body>
</html>