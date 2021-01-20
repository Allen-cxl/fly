/***
 *微信聊天、注册 
 */
function wechattalk(base,toUserWechat,fromUserID,fromUserWechat){
			var wechat = fromUserWechat;
			var fromUserWechat = $("#"+fromUserWechat).val();
			if (fromUserID!=undefined && fromUserID.length == 0){
				//layer.msg('请先登录', {icon: 7,offset: '90px',anim:6,time:4000});
				//return ;
				denglu();
				return ;
			}
			if (toUserWechat!=undefined && toUserWechat.length == 0){
				layer.msg('抱歉，此客服员暂未绑定微信', {icon: 7,offset: '90px',anim:6,time:2000});
				return ;
			}
			if (fromUserWechat!=undefined && fromUserWechat.length == 0){
				$.post(base+"/rest/customerQuery/getUserInfo","",function (dataThree){
					if (dataThree.length != 0){
						fromUserWechat = dataThree;
					}
				});
			}
			
			if (fromUserWechat!=undefined && fromUserWechat.length == 0){
				$.post(base+"/rest/customerQuery/getWechatPic","",function(data){
					if (data != null){
						parent.layer.closeAll();
						var timer ="";
						layer.open({
							  title: ['微信扫码关注航璇国际货运，才可使用即时通讯(2分钟内有效)','background-color: #169BD6; color:#fff;'],
							  type: 2,
							  shade: 0,
							  shadeClose:false,
							  area: ['460px', '490px'],
							  fixed:true,
							  content: [data, 'no'],
							  skin: 'layui-layer-rim', //加上边框
							  zIndex: layer.zIndex, //重点1
							  end:function (){
								  clearInterval(timer);
							  }
							}); 
						
						var startTime = new Date().getTime();
						timer = setInterval(function(){
							if(new Date().getTime() - startTime > 120000){
								parent.layer.closeAll();
								clearInterval(timer);
							} else {
							$.post(base+"/rest/customerQuery/getUserInfo","",function (dataTwo){
								if (dataTwo.length != 0){
									if (wechat.length != 0){
										$("#"+wechat).val(dataTwo);
									};
									parent.layer.closeAll();
									clearInterval(timer);
									window.open("http://bookingplus.sinoair.com/mobile/#honglian.php?action=chat&toid="+toUserWechat+"&memberid="+fromUserID+"&fromid="+dataTwo+"",toUserWechat,"height=400,width=400,top=10,left=800");
								}
							});
							}
					    },5000);  
					}
				});
			} else {
				window.open("http://bookingplus.sinoair.com/mobile/#honglian.php?action=chat&toid="+toUserWechat+"&memberid="+fromUserID+"&fromid="+fromUserWechat+"",toUserWechat,"height=400,width=400,top=10,left=800");
			}
		}

