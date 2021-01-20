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
<!--上传图片插件end--><!-- 标题栏 -->
	<div class="main-title cf">
		<h2>网站设置</h2>
	</div>
<div class="tab-wrap">
    <ul class="tab-nav nav">
			<li data-tab="tab1" class="current"><a href="javascript:void(0);">基础</a></li><!--<li data-tab="tab2" ><a href="javascript:void(0);">分享</a></li>  -->  </ul>
    <div class="tab-content">

	<!-- 修改密码表单 -->
	<form action="" method="post" class="form-horizontal">
		<div id="tab1" class="tab-pane in tab1">

		<div class="form-item cf">
			<label class="item-label">网站标题<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" value="<?php echo ($data["title"]); ?>" name="title" class="text input-large">
				<input type="hidden" value="1" name="id" class="text input-large">
			</div>
		</div>
		<div class="form-item cf">
			<label class="item-label">网站名称<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" value="<?php echo ($data["name"]); ?>" name="name" class="text input-large">
			
			</div>
		</div>
		<div class="form-item cf">
                    <label class="item-label">网站logo<span class="check-tips"></span></label>
                    <div class="controls">
                        <div class="controls">
									<!---上传图标-->
									<img src="/Public/Admin/uploade/uppicbtn.png"   class="uploadbtn"/>
									<input type="hidden" name="logo" value="<?php echo ($data["logo"]); ?>" class="inputpic" />
									<div class="upload-img-box">
										<!--上传文件条-->
										<div class="uploadify-queue-item progress" style="display:none;"> <div class="cancel">	 <a href="javascript:">X</a></div><span class="fileName">文件名 大小</span><span class="data"></span><div class="uploadify-progress"><div class="uploadify-progress-bar progress-bar" style="width:20%"><!--Progress Bar--></div></div></div>
										<!--上传文件条-->
										<div class="upload-pre-item"><img src='<?php echo ((isset($data["logo"]) && ($data["logo"] !== ""))?($data["logo"]):"/Public/Admin/uppic/image.jpg"); ?>' /></div>
									</div>
								</div>
						 </div>
                </div>
		<div class="form-item cf">
                    <label class="item-label">网站头图<span class="check-tips"></span></label>
                    <div class="controls">
                        <div class="controls">
									<!---上传图标-->
									<img src="/Public/Admin/uploade/uppicbtn.png"   class="uploadbtn"/>
									<input type="hidden" name="banner" value="<?php echo ($data["banner"]); ?>" class="inputpic" />
									<div class="upload-img-box">
										<!--上传文件条-->
										<div class="uploadify-queue-item progress" style="display:none;"> <div class="cancel">	 <a href="javascript:">X</a></div><span class="fileName">文件名 大小</span><span class="data"></span><div class="uploadify-progress"><div class="uploadify-progress-bar progress-bar" style="width:20%"><!--Progress Bar--></div></div></div>
										<!--上传文件条-->
										<div class="upload-pre-item"><img src='<?php echo ((isset($data["banner"]) && ($data["banner"] !== ""))?($data["banner"]):"/Public/Admin/uppic/image.jpg"); ?>' /></div>
									</div>
								</div>
						 </div>
                </div>		

		<div class="form-item cf">
			<label class="item-label">客服QQ<span class="check-tips"></span></label>
			<div class="controls">
				<input type="number" value="<?php echo ($data["qq"]); ?>" name="qq"  class="text input-large">
			</div>
		</div>
		<div class="form-item cf">
			<label class="item-label">电话<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" value="<?php echo ($data["tel"]); ?>" name="tel"  class="text input-large">
			</div>
		</div>
		<div class="form-item cf">
			<label class="item-label">邮箱<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" value="<?php echo ($data["email"]); ?>" name="email"  class="text input-large">
			</div>
		</div>
		<div class="form-item cf">
			<label class="item-label">版权信息<span class="check-tips"></span></label>
			<div class="controls">
				<input type="text" value="<?php echo ($data["copyright"]); ?>" name="copyright"  class="text input-large">
			</div>
		</div>
	
		<div class="form-item cf">
                    <label class="item-label">公众号二维码<span class="check-tips"></span></label>
                    <div class="controls">
                        <div class="controls">
									<!---上传图标-->
									<img src="/Public/Admin/uploade/uppicbtn.png"   class="uploadbtn"/>
									<input type="hidden" name="wpic" value="<?php echo ($data["wpic"]); ?>" class="inputpic" />
									<div class="upload-img-box">
										<!--上传文件条-->
										<div class="uploadify-queue-item progress" style="display:none;"> <div class="cancel">	 <a href="javascript:">X</a></div><span class="fileName">文件名 大小</span><span class="data"></span><div class="uploadify-progress"><div class="uploadify-progress-bar progress-bar" style="width:20%"><!--Progress Bar--></div></div></div>
										<!--上传文件条-->
										<div class="upload-pre-item"><img src="<?php echo ((isset($data["wpic"]) && ($data["wpic"] !== ""))?($data["wpic"]):'/Public/Admin/uppic/image.jpg'); ?>" /></div>
									</div>
								</div>
						 </div>
                </div>
	
		<div class="form-item cf">
                    <label class="item-label">公司介绍<span class="check-tips"></span></label>
                    <div class="controls">
                        <label class="textarea">
                                <textarea name="content"><?php echo ($data["content"]); ?></textarea>
                                		<input type="hidden" name="parse" value="0">
		<link rel="stylesheet" href="/Public/static/kindeditor/default/default.css" />
			<script charset="utf-8" src="/Public/static/kindeditor/kindeditor-min.js"></script>
			<script charset="utf-8" src="/Public/static/kindeditor/zh_CN.js"></script>
			<script type="text/javascript">
				var editor_bian;
				KindEditor.ready(function(K) {
					editor_bian = K.create('textarea[name="content"]', {
						allowFileManager : false,
						themesPath: K.basePath,
						width: '100%',
						height: '500px',
						resizeType: 1,
						pasteType : 2,
						urlType : 'absolute',
						fileManagerJson : '/admin.php?s=/Think/fileManagerJson.html',
						//uploadJson : '/admin.php?s=/Think/uploadJson.html' }
						uploadJson : '/admin.php?s=/Addons/execute/_addons/EditorForAdmin/_controller/Upload/_action/ke_upimg.html',
						extraFileUploadParams: {
							session_id : '<?php echo session_id();?>'
	                    }
					});
				});

				$(function(){
					//传统表单提交同步
					$('textarea[name="content"]').closest('form').submit(function(){
						editor_bian.sync();
					});
					//ajax提交之前同步
					$('button[type="submit"],#submit,.ajax-post,#autoSave').click(function(){
						editor_bian.sync();
					});
				})
			</script>

		                                </label>                    </div>
                </div>
</div>

		<button type="submit" class="btn submit-btn ajax-post" target-form="form-horizontal">确 定</button>
		<button class="btn btn-return" onclick="javascript:history.back(-1);return false;">返 回</button>
	</form>
</div>
</div>	

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
			highlight_subnav('');
		})
		    showTab();

	</script>

<div id="newsms" style="display:none">

</div>	
	
</body>
</html>