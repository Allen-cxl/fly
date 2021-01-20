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


</head>
<body class="no-skin">
	<div class="main-container" id="main-container">

		<div class="main-content" style="background: #F5F8FB;">
			
    <div class="y_banner" style="background:url('/<?php echo ($sys["banner"]); ?>') top center no-repeat #0072ff"></div>
    <!-- 搜索块 -->
    <div class="y_search_part" style="padding-top:30px">
        <div class="y_search_news_input" style="margin-top:0">
            <input type="text" id="keyWord_news" class="y_fl" value="" placeholder="请输入关键字" >
            <button class="y_fr" onclick="tosub(1)">
                <img src="/Public/Home/twentynineteen/img/search1.png">
            </button>
        </div>
		<span class="y_page nolist" style="margin-top:20px;display:none;">很抱歉，没有找到与“<font id="findkey" color="#ff0000"></font>”相关的内容。</span>
		<div class="y_search_list" style="height: 270px;display:none;">

        </div>
    </div>
    <!--</div>-->
<script>
function tosub(p){
	var key=$("#keyWord_news").val();
	$.post("/home/index/getnews",{key:key,p:p},function(data){
        if(data!=""){
			$(".nolist").hide();
			$(".y_search_list").html(data);
			$(".y_search_list").show();
		}else{
			$(".nolist").show();
			$("#findkey").html(key);
			$(".y_search_list").hide();
		}
		window.parent.initIframeHeight($(document.body).height());
    });
}
</script>	
    <!-- 定制块、固定新闻 -->
    <div class="y_hot_part" >
        <span class="y_hot_title" style="font-size:16px;">航璇热点<!--<img src="/Public/Home/sino\assets\css\img\huo3.gif">--></span>
        <div class="y_hot_news">
            <div class="y_fl y_pic_list">
                <div id="scroll_jdt">
				<?php if(is_array($list1)): foreach($list1 as $key=>$vo): ?><div class="ct_p_05">
                            <a href="/home/index/news/id/<?php echo ($vo["id"]); ?>">
                                <img  src="/<?php echo ($vo["pic"]); ?>">
                                <span class="ct_txt" style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden;"><?php echo ($vo["title"]); ?></span>
                            </a>
                        </div><?php endforeach; endif; ?>
                </div>
                <div class="scrDotList_wrap">
                    <span class="scrDotList" id="slide_dot">
                        <!-- <span></span> -->
                    </span>
                </div>
                <img src="/Public/Home/sino\assets\css\img\huore.png" class="y_hot_icon">
            </div>
            <ul class="y_fr y_hotnews_list">
			<?php if(is_array($list2)): foreach($list2 as $key=>$vo): if(($key) < "3"): ?><li>
					<a href="/home/index/news/id/<?php echo ($vo["id"]); ?>">
						<span class="y_fl">
							<h1><?php echo date("d",$vo["time"]);?></h1>
							<br>
							<label><?php echo date("Y.m",$vo["time"]);?></label></span>
						<span class="y_fr">
							<b style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden;"><?php echo ($vo["title"]); ?></b>
							<p style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;"><?php echo ($vo["subtitle"]); ?></p></span>
					</a>
				</li><?php endif; endforeach; endif; ?>	

			</ul>
			</div>
    </div>
    <!-- 分类查询 -->
    <div class="y_news_list" style="font-size:16px;">
       <!-- <div class="y_sorting_title">
           
                <input type="checkbox" name="" id="ACD1001" class="y_checkbox" onclick="selectByCategory()">
                <label for="ACD1001">
                    <i class="iconfont icon-fuxuankuangweixuanzhong"></i>
                    <font>云翼快讯</font>
                </label>
            </span>
            <span class="y_fl">
                <input type="checkbox" name="" id="ACD1002" class="y_checkbox" onclick="selectByCategory()">
                <label for="ACD1002">
                    <i class="iconfont icon-fuxuankuangweixuanzhong"></i>
                    <font>物流新闻</font>
                </label>
            </span>
            <span class="y_fl">
                <input type="checkbox" name="" id="ACD1003" class="y_checkbox" onclick="selectByCategory()">
                <label for="ACD1003">
                    <i class="iconfont icon-fuxuankuangweixuanzhong"></i>
                    <font>行业知识</font>
                </label>
            </span>
        </div>
		-->
        <ul id="selectByCategory">
		<?php if(is_array($list2)): foreach($list2 as $key=>$vo): if(($key) > "2"): ?><li><a href="/home/index/news/id/<?php echo ($vo["id"]); ?>">
                <img src="/<?php echo ($vo["pic"]); ?>" class="y_fl">
                <span class="y_news_text y_fr">
                    <span class="y_top_title">
                        <b><font color="#000000"><?php echo ($vo["title"]); ?></font></b>
                     </span>
                    <label><?php echo date("Y-m-d",$vo["time"]);?></label>
                    <p><?php echo ($vo["subtitle"]); ?></p>
                </span></a>
            </li><?php endif; endforeach; endif; ?>
        </ul>
        <div class="y_sorting_footer" >
            <img src="/Public/Home/sino\assets\css\img\gengduo.png"> <br>
            更多
        </div>
    </div>
	</div>
	</div>
<script>
var p=1;
$(".y_sorting_footer").click(function(){
	$.post("/home/index/getnews1",{p:p},function(data){
        if(data!=""){
			p++;
			$("#selectByCategory").append(data);
			window.parent.initIframeHeight($(document.body).height());
		}else{
			$(".y_sorting_footer").html("没有更多！");
		}
		
    });
});
</script>	
	<!-- 滚动图 -->
<script type="text/javascript">//滚动图片构造函数
    function ScrollPic(scrollContId, arrLeftId, arrRightId, dotListId, listType) {
        this.scrollContId = scrollContId;
        this.arrLeftId = arrLeftId;
        this.arrRightId = arrRightId;
        this.dotListId = dotListId;
        this.listType = listType;
        this.dotClassName = "dotItem";
        this.dotOnClassName = "dotItemOn";
        this.dotObjArr = [];
        this.listEvent = "onclick";
        this.circularly = true;
        this.pageWidth = 0;
        this.frameWidth = 0;
        this.speed = 10;
        this.space = 10;
        this.upright = false;
        this.pageIndex = 0;
        this.autoPlay = true;
        this.autoPlayTime = 5;
        this._autoTimeObj;
        this._scrollTimeObj;
        this._state = "ready";
        this.stripDiv = document.createElement("DIV");
        this.lDiv01 = document.createElement("DIV");
        this.lDiv02 = document.createElement("DIV")
    };
    ScrollPic.prototype = {
        version: "1.44",
        author: "mengjia",
        pageLength: 0,
        touch: true,
        scrollLeft: 0,
        eof: false,
        bof: true,
        initialize: function() {
            var thisTemp = this;
            if (!this.scrollContId) {
                throw new Error("必须指定scrollContId.");
                return
            };
            this.scDiv = this.$(this.scrollContId);
            if (!this.scDiv) {
                throw new Error("scrollContId不是正确的对象.(scrollContId = \"" + this.scrollContId + "\")");
                return
            };
            this.scDiv.style[this.upright ? 'height': 'width'] = this.frameWidth + "px";
            this.scDiv.style.overflow = "hidden";
            this.lDiv01.innerHTML = this.scDiv.innerHTML;
            this.scDiv.innerHTML = "";
            this.scDiv.appendChild(this.stripDiv);
            this.stripDiv.appendChild(this.lDiv01);
            if (this.circularly) {
                this.stripDiv.appendChild(this.lDiv02);
                this.lDiv02.innerHTML = this.lDiv01.innerHTML;
                this.bof = false;
                this.eof = false
            };
            this.stripDiv.style.overflow = "hidden";
            this.stripDiv.style.zoom = "1";
            this.stripDiv.style[this.upright ? 'height': 'width'] = "32766px";
            this.lDiv01.style.overflow = "hidden";
            this.lDiv01.style.zoom = "1";
            this.lDiv02.style.overflow = "hidden";
            this.lDiv02.style.zoom = "1";
            if (!this.upright) {
                this.lDiv01.style.cssFloat = "left";
                this.lDiv01.style.styleFloat = "left"
            };
            this.lDiv01.style.zoom = "1";
            if (this.circularly && !this.upright) {
                this.lDiv02.style.cssFloat = "left";
                this.lDiv02.style.styleFloat = "left"
            };
            this.lDiv02.style.zoom = "1";
            this.addEvent(this.scDiv, "mouseover",
            function() {
                thisTemp.stop()
            });
            this.addEvent(this.scDiv, "mouseout",
            function() {
                thisTemp.play()
            });
            if (this.arrLeftId) {
                this.alObj = this.$(this.arrLeftId);
                if (this.alObj) {
                    this.addEvent(this.alObj, "mousedown",
                    function(e) {
                        thisTemp.rightMouseDown();
                        e = e || event;
                        thisTemp.preventDefault(e)
                    });
                    this.addEvent(this.alObj, "mouseup",
                    function() {
                        thisTemp.rightEnd()
                    });
                    this.addEvent(this.alObj, "mouseout",
                    function() {
                        thisTemp.rightEnd()
                    })
                }
            };
            if (this.arrRightId) {
                this.arObj = this.$(this.arrRightId);
                if (this.arObj) {
                    this.addEvent(this.arObj, "mousedown",
                    function(e) {
                        thisTemp.leftMouseDown();
                        e = e || event;
                        thisTemp.preventDefault(e)
                    });
                    this.addEvent(this.arObj, "mouseup",
                    function() {
                        thisTemp.leftEnd()
                    });
                    this.addEvent(this.arObj, "mouseout",
                    function() {
                        thisTemp.leftEnd()
                    })
                }
            };
            var pages = Math.ceil(this.lDiv01[this.upright ? 'offsetHeight': 'offsetWidth'] / this.frameWidth),
            i,
            tempObj;
            this.pageLength = pages;
            if (this.dotListId) {
                this.dotListObj = this.$(this.dotListId);
                this.dotListObj.innerHTML = "";
                if (this.dotListObj) {
                    for (i = 0; i < pages; i++) {
                        tempObj = document.createElement("span");
                        this.dotListObj.appendChild(tempObj);
                        this.dotObjArr.push(tempObj);
                        if (i == this.pageIndex) {
                            tempObj.className = this.dotOnClassName
                        } else {
                            tempObj.className = this.dotClassName
                        };
                        if (this.listType == 'number') {
                            tempObj.innerHTML = i + 1
                        } else if (typeof(this.listType) == 'string') {
                            tempObj.innerHTML = this.listType
                        } else {
                            tempObj.innerHTML = ''
                        };
                        tempObj.title = "第" + (i + 1) + "页";
                        tempObj.num = i;
                        tempObj[this.listEvent] = function() {
                            thisTemp.pageTo(this.num)
                        }
                    }
                }
            };
            this.scDiv[this.upright ? 'scrollTop': 'scrollLeft'] = 0;
            if (this.autoPlay) {
                this.play()
            };
            this._scroll = this.upright ? 'scrollTop': 'scrollLeft';
            this._sWidth = this.upright ? 'scrollHeight': 'scrollWidth';
            if (typeof(this.onpagechange) === 'function') {
                this.onpagechange()
            };
            this.iPad()
        },
        leftMouseDown: function() {
            if (this._state != "ready") {
                return
            };
            var thisTemp = this;
            this._state = "floating";
            clearInterval(this._scrollTimeObj);
            this._scrollTimeObj = setInterval(function() {
                thisTemp.moveLeft()
            },
            this.speed);
            this.moveLeft()
        },
        rightMouseDown: function() {
            if (this._state != "ready") {
                return
            };
            var thisTemp = this;
            this._state = "floating";
            clearInterval(this._scrollTimeObj);
            this._scrollTimeObj = setInterval(function() {
                thisTemp.moveRight()
            },
            this.speed);
            this.moveRight()
        },
        moveLeft: function() {
            if (this._state != "floating") {
                return
            };
            if (this.circularly) {
                if (this.scDiv[this._scroll] + this.space >= this.lDiv01[this._sWidth]) {
                    this.scDiv[this._scroll] = this.scDiv[this._scroll] + this.space - this.lDiv01[this._sWidth]
                } else {
                    this.scDiv[this._scroll] += this.space
                }
            } else {
                if (this.scDiv[this._scroll] + this.space >= this.lDiv01[this._sWidth] - this.frameWidth) {
                    this.scDiv[this._scroll] = this.lDiv01[this._sWidth] - this.frameWidth;
                    this.leftEnd()
                } else {
                    this.scDiv[this._scroll] += this.space
                }
            };
            this.accountPageIndex()
        },
        moveRight: function() {
            if (this._state != "floating") {
                return
            };
            if (this.circularly) {
                if (this.scDiv[this._scroll] - this.space <= 0) {
                    this.scDiv[this._scroll] = this.lDiv01[this._sWidth] + this.scDiv[this._scroll] - this.space
                } else {
                    this.scDiv[this._scroll] -= this.space
                }
            } else {
                if (this.scDiv[this._scroll] - this.space <= 0) {
                    this.scDiv[this._scroll] = 0;
                    this.rightEnd()
                } else {
                    this.scDiv[this._scroll] -= this.space
                }
            };
            this.accountPageIndex()
        },
        leftEnd: function() {
            if (this._state != "floating" && this._state != 'touch') {
                return
            };
            this._state = "stoping";
            clearInterval(this._scrollTimeObj);
            var fill = this.pageWidth - this.scDiv[this._scroll] % this.pageWidth;
            this.move(fill)
        },
        rightEnd: function() {
            if (this._state != "floating" && this._state != 'touch') {
                return
            };
            this._state = "stoping";
            clearInterval(this._scrollTimeObj);
            var fill = -this.scDiv[this._scroll] % this.pageWidth;
            this.move(fill)
        },
        move: function(num, quick) {
            var thisTemp = this;
            var thisMove = num / 5;
            var theEnd = false;
            if (!quick) {
                if (thisMove > this.space) {
                    thisMove = this.space
                };
                if (thisMove < -this.space) {
                    thisMove = -this.space
                }
            };
            if (Math.abs(thisMove) < 1 && thisMove != 0) {
                thisMove = thisMove >= 0 ? 1 : -1
            } else {
                thisMove = Math.round(thisMove)
            };
            var temp = this.scDiv[this._scroll] + thisMove;
            if (thisMove > 0) {
                if (this.circularly) {
                    if (this.scDiv[this._scroll] + thisMove >= this.lDiv01[this._sWidth]) {
                        this.scDiv[this._scroll] = this.scDiv[this._scroll] + thisMove - this.lDiv01[this._sWidth]
                    } else {
                        this.scDiv[this._scroll] += thisMove
                    }
                } else {
                    if (this.scDiv[this._scroll] + thisMove >= this.lDiv01[this._sWidth] - this.frameWidth) {
                        this.scDiv[this._scroll] = this.lDiv01[this._sWidth] - this.frameWidth;
                        this._state = "ready";
                        theEnd = true
                    } else {
                        this.scDiv[this._scroll] += thisMove
                    }
                }
            } else {
                if (this.circularly) {
                    if (this.scDiv[this._scroll] + thisMove < 0) {
                        this.scDiv[this._scroll] = this.lDiv01[this._sWidth] + this.scDiv[this._scroll] + thisMove
                    } else {
                        this.scDiv[this._scroll] += thisMove
                    }
                } else {
                    if (this.scDiv[this._scroll] + thisMove <= 0) {
                        this.scDiv[this._scroll] = 0;
                        this._state = "ready";
                        theEnd = true
                    } else {
                        this.scDiv[this._scroll] += thisMove
                    }
                }
            };
            if (theEnd) {
                this.accountPageIndex();
                return
            };
            num -= thisMove;
            if (Math.abs(num) == 0) {
                this._state = "ready";
                if (this.autoPlay) {
                    this.play()
                };
                this.accountPageIndex();
                return
            } else {
                clearTimeout(this._scrollTimeObj);
                this._scrollTimeObj = setTimeout(function() {
                    thisTemp.move(num, quick)
                },
                this.speed)
            }
        },
        pre: function() {
            if (this._state != "ready") {
                return
            };
            this._state = "stoping";
            this.move( - this.pageWidth)
        },
        next: function(reStar) {
            if (this._state != "ready") {
                return
            };
            this._state = "stoping";
            if (this.circularly) {
                this.move(this.pageWidth)
            } else {
                if (this.scDiv[this._scroll] >= this.lDiv01[this._sWidth] - this.frameWidth) {
                    this._state = "ready";
                    if (reStar) {
                        this.pageTo(0)
                    }
                } else {
                    this.move(this.pageWidth)
                }
            }
        },
        play: function() {
            var thisTemp = this;
            if (!this.autoPlay) {
                return
            };
            clearInterval(this._autoTimeObj);
            this._autoTimeObj = setInterval(function() {
                thisTemp.next(true)
            },
            this.autoPlayTime * 1000)
        },
        stop: function() {
            clearInterval(this._autoTimeObj)
        },
        pageTo: function(num) {
            if (this.pageIndex == num) {
                return
            };
            if (num < 0) {
                num = this.pageLength - 1
            };
            clearTimeout(this._scrollTimeObj);
            clearInterval(this._scrollTimeObj);
            this._state = "stoping";
            var fill = num * this.frameWidth - this.scDiv[this._scroll];
            this.move(fill, true)
        },
        accountPageIndex: function() {
            var pageIndex = Math.round(this.scDiv[this._scroll] / this.frameWidth);
            if (pageIndex >= this.pageLength) {
                pageIndex = 0
            };
            this.scrollLeft = this.scDiv[this._scroll];
            var scrollMax = this.lDiv01[this._sWidth] - this.frameWidth;
            if (!this.circularly) {
                this.eof = this.scrollLeft >= scrollMax;
                this.bof = this.scrollLeft <= 0
            };
            if (typeof(this.onmove) === 'function') {
                this.onmove()
            };
            if (pageIndex == this.pageIndex) {
                return
            };
            this.pageIndex = pageIndex;
            if (this.pageIndex > Math.floor(this.lDiv01[this.upright ? 'offsetHeight': 'offsetWidth'] / this.frameWidth)) {
                this.pageIndex = 0
            };
            var i;
            for (i = 0; i < this.dotObjArr.length; i++) {
                if (i == this.pageIndex) {
                    this.dotObjArr[i].className = this.dotOnClassName
                } else {
                    this.dotObjArr[i].className = this.dotClassName
                }
            };
            if (typeof(this.onpagechange) === 'function') {
                this.onpagechange()
            }
        },
        iPadX: 0,
        iPadLastX: 0,
        iPadStatus: 'ok',
        iPad: function() {
            if (typeof(window.ontouchstart) === 'undefined') {
                return
            };
            if (!this.touch) {
                return
            };
            var tempThis = this;
            this.addEvent(this.scDiv, 'touchstart',
            function(e) {
                tempThis._touchstart(e)
            });
            this.addEvent(this.scDiv, 'touchmove',
            function(e) {
                tempThis._touchmove(e)
            });
            this.addEvent(this.scDiv, 'touchend',
            function(e) {
                tempThis._touchend(e)
            })
        },
        _touchstart: function(e) {
            this.stop();
            this.iPadX = e.touches[0].pageX;
            this.iPadScrollX = window.pageXOffset;
            this.iPadScrollY = window.pageYOffset;
            this.scDivScrollLeft = this.scDiv[this._scroll]
        },
        _touchmove: function(e) {
            if (e.touches.length > 1) {
                this._touchend()
            };
            this.iPadLastX = e.touches[0].pageX;
            var cX = this.iPadX - this.iPadLastX;
            if (this.iPadStatus == 'ok') {
                if (this.iPadScrollY == window.pageYOffset && this.iPadScrollX == window.pageXOffset && Math.abs(cX) > 20) {
                    this.iPadStatus = 'touch'
                } else {
                    return
                }
            };
            this._state = 'touch';
            var scrollNum = this.scDivScrollLeft + cX;
            if (scrollNum >= this.lDiv01[this._sWidth]) {
                if (this.circularly) {
                    scrollNum = scrollNum - this.lDiv01[this._sWidth]
                } else {
                    return
                }
            };
            if (scrollNum < 0) {
                if (this.circularly) {
                    scrollNum = scrollNum + this.lDiv01[this._sWidth]
                } else {
                    return
                }
            };
            this.scDiv[this._scroll] = scrollNum;
            e.preventDefault()
        },
        _touchend: function(e) {
            if (this.iPadStatus != 'touch') {
                return
            };
            this.iPadStatus = 'ok';
            var cX = this.iPadX - this.iPadLastX;
            if (cX < 0) {
                this.rightEnd()
            } else {
                this.leftEnd()
            };
            this.play()
        },
        _overTouch: function() {
            this.iPadStatus = 'ok'
        },
        $: function(objName) {
            if (document.getElementById) {
                return eval('document.getElementById("' + objName + '")')
            } else {
                return eval('document.all.' + objName)
            }
        },
        isIE: navigator.appVersion.indexOf("MSIE") != -1 ? true: false,
        addEvent: function(obj, eventType, func) {
            if (obj.attachEvent) {
                obj.attachEvent("on" + eventType, func)
            } else {
                obj.addEventListener(eventType, func, false)
            }
        },
        delEvent: function(obj, eventType, func) {
            if (obj.detachEvent) {
                obj.detachEvent("on" + eventType, func)
            } else {
                obj.removeEventListener(eventType, func, false)
            }
        },
        preventDefault: function(e) {
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                e.returnValue = false
            }
        }
    };</script>
<!-- 滚动图 -->
<script src="/Public/Home/sino/assets/js/booking/layer.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">(function() {
        var focusScroll_01 = new ScrollPic();
        focusScroll_01.scrollContId = "scroll_jdt"; //内容容器ID
        focusScroll_01.dotListId = "slide_dot";
        // focusScroll_01.dotClassName = "";
        focusScroll_01.dotOnClassName = "on";
        focusScroll_01.listType = ""; //列表类型(number:数字，其它为空)
        focusScroll_01.listEvent = "onmouseover"; //切换事件
        focusScroll_01.frameWidth = 480; //显示框宽度
        focusScroll_01.pageWidth = 480; //翻页宽度
        focusScroll_01.upright = false; //垂直滚动
        focusScroll_01.speed = 10; //移动速度(单位毫秒，越小越快)
        focusScroll_01.space = 60; //每次移动像素(单位px，越大越快)
        focusScroll_01.autoPlay = true; //自动播放
        focusScroll_01.autoPlayTime = 5; //自动播放间隔时间(秒)
        focusScroll_01.circularly = true;

        setTimeout(function() {
            focusScroll_01.initialize();
        },
        200);

        // focusScroll_01.initialize(); //初始化
        // document.getElementById('scroll_left').onmousedown = function(){
        //     focusScroll_01.pre();
        //     return false;
        // }
        // document.getElementById('scroll_right').onmousedown = function(){
        //     focusScroll_01.next();
        //     return false;
        // }
    })()
</script>
</body>
</html>