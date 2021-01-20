<?php if (!defined('THINK_PATH')) exit();?>
<!doctype html>
<html lang="zh-CN" data-dpr="1" style="font-size: 160px;">
    
    <head>
        <style class="vjs-styles-defaults">.video-js { width: 300px; height: 150px; } .vjs-fluid { padding-top: 56.25% }</style>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="icon" href="favicon.ico">
        <title></title>

        <link href="/Public/Home/static/css/chunk-vendors.e22b6a05.css" rel="stylesheet">
        <link href="/Public/Home/static/css/app.62f28f31.css" rel="stylesheet">
         <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
        <link rel="stylesheet" type="text/css" href="/Public/Home/static/css/chunk-5abedab7.206eb240.css">
        <link rel="stylesheet" type="text/css" href="/Public/Home/static/css/chunk-dbd659de.b1411cf8.css">
        <link rel="stylesheet" type="text/css" href="/Public/Home/static/css/chunk-555a6593.052a8af9.css">   
		 <script type='text/javascript' src='/Public/Admin/uploade/jquery-2.0.3.min.js'></script>
		 <script type="text/javascript" src="/Public/Home/js/alert.js"></script>
   </head>
    <body style="font-size: 12px;"> 
        <div id="app">
            <div>
                <div id="freight_details_container" style="padding-top:10px;">
                
                    <div class="freight_details_content w">
                        <div class="fdc_head_box">
                            <div class="fdc_head_box_left">
                                <div class="fdc_img" style="background-image: url(/<?php echo ($data["pic"]); ?>);"></div>
                                <!---->
                                <!--
                                <div class="nodata" style="line-height: 100px;">
                                    <span style="color: rgb(153, 153, 153); font-weight: 600;">打赏或订阅后查看历史运价</span>
                                    <div style="text-align: center;">
                                        <button type="button" class="ivu-btn ivu-btn-error ivu-btn-large ivu-btn-ghost" style="margin-right: 20px;">
                                            
                                            <span>打赏</span></button>
                                        <button type="button" class="ivu-btn ivu-btn-warning ivu-btn-large ivu-btn-ghost">
                                        
                                            <span>订阅</span></button>
                                    </div>
                                </div>-->
                            </div>
                            <div class="fdc_head_box_right">
                                <div class="fdc_airport_table">
                                    <div class="fdc_airport">
                                        <div class="fdc_up_left">
                                            <span><?php echo ($data["cportcode"]); ?></span>
                                            <p><?php echo ($data["cport"]); ?></p>
                                        </div>
                                        <div class="fdc_up_middle">
                                            <i class="ivu-icon ss-icon ss-icon-jiantou2"></i>
                                        </div>
                                        <div class="fdc_up_right">
                                            <span><?php echo ($data["mportcode"]); ?></span>
                                            <p><?php echo ($data["mport"]); ?></p>
                                        </div>
                                        <div class="fdc_up_tag">
                                            <ul class="tag_list">
                                                <li class="tag_item">有舱</li>
                                                <li class="tag_item tag_item1">荐</li>
                                                <!---->
                                                <!---->
                                                <!----></ul>
                                        </div>
                                    </div>
                                    <div class="fdc_table">
                                        <div class="ivu-table-wrapper">
                                            <div class="ivu-table ivu-table-default ivu-table-border">
                                                <!---->
                                                <div class="ivu-table-header">
                                                    <table cellspacing="0" cellpadding="0" border="0" style="width: 784px;">
                                                        <colgroup>
                                                            <col width="100">
                                                                <col width="113">
                                                                    <col width="114">
                                                                        <col width="114">
                                                                            <col width="114">
                                                                                <col width="114">
                                                                                    <col width="114">
                                                                                        <!----></colgroup>
                                                        <thead>
                                                            <tr>
                                                                <th class="ivu-table-column-center">
                                                                    <div class="ivu-table-cell">
                                                                        <span class="">重量(KG)</span>
                                                                        <!---->
                                                                        <!----></div>
                                                                </th>
                                                                <th class="ivu-table-column-center">
                                                                    <div class="ivu-table-cell">
                                                                        <span class="">45KG</span>
                                                                        <!---->
                                                                        <!----></div>
                                                                </th>
                                                                <th class="ivu-table-column-center">
                                                                    <div class="ivu-table-cell">
                                                                        <span class="">100KG</span>
                                                                        <!---->
                                                                        <!----></div>
                                                                </th>
                                                                <th class="ivu-table-column-center">
                                                                    <div class="ivu-table-cell">
                                                                        <span class="">300KG</span>
                                                                        <!---->
                                                                        <!----></div>
                                                                </th>
                                                                <th class="ivu-table-column-center">
                                                                    <div class="ivu-table-cell">
                                                                        <span class="">500KG</span>
                                                                        <!---->
                                                                        <!----></div>
                                                                </th>
                                                                <th class="ivu-table-column-center">
                                                                    <div class="ivu-table-cell">
                                                                        <span class="">1000KG</span>
                                                                        <!---->
                                                                        <!----></div>
                                                                </th>
                                                                <th class="ivu-table-column-center">
                                                                    <div class="ivu-table-cell">
                                                                        <span class="">2000KG</span>
                                                                        <!---->
                                                                        <!----></div>
                                                                </th>
                                                                <!----></tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div class="ivu-table-body" style="">
                                                    <table cellspacing="0" cellpadding="0" border="0" style="width: 784px;">
                                                        <colgroup>
                                                            <col width="100">
                                                                <col width="113">
                                                                    <col width="114">
                                                                        <col width="114">
                                                                            <col width="114">
                                                                                <col width="114">
                                                                                    <col width="114"></colgroup>
                                                        <tbody class="ivu-table-tbody">
                                                            <tr class="ivu-table-row">
                                                                <td class="ivu-table-column-center">
                                                                    <div class="ivu-table-cell">
                                                                        <!---->
                                                                        <!---->
                                                                        <!---->
                                                                        <!---->
                                                                        <!---->
                                                                        <span>价格(CNY)</span>
                                                                        <!----></div>
                                                                </td>
																<?php $gradient=explode(";",$data["gradient"]); ?>
																<?php if(is_array($gradient)): foreach($gradient as $key=>$vo): ?><td class="ivu-table-column-center">
                                                                    <div class="ivu-table-cell">
                                 
                                                                        <div>
                                                                            <p><?php echo ($vo); ?></p>
                                                                        </div>
                                                                    </div>
                                                                </td><?php endforeach; endif; ?>
                                                                
                                                            </tr>
                                                            <!----></tbody>
                                                    </table>
                                                </div>
                                                <div class="ivu-table-tip" style="display: none;">
                                                    <table cellspacing="0" cellpadding="0" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="width: 784px;">
                                                                    <span>暂无筛选结果</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!---->
                                                <!---->
                                                <!---->
                                                <!----></div>
                                            <!---->
                                         
                                        </div>
                                        <!----></div>
                                </div>
                                <div class="fdc_info">
                                    <div class="fdc_info_desc">
                                        <ul class="desc_list desc_list_left">
                                            <li class="desc_item">
                                                <span>航空公司:</span>
                                                <em><?php echo ($data["companycode"]); ?></em></li>
                                            <li class="desc_item">
                                                <span>包装类型:</span>
                                                <em><?php echo packingType($data["packingtype"]);?></em></li>
                                            <li class="desc_item">
                                                <span>航班周期:</span>
                                                <em><?php echo ($data["cycle"]); ?></em></li>
                                            <li class="desc_item">
                                                <span>到达天数:</span>
                                                <em><?php echo ($data["day"]); ?>天</em></li>
                                            <li class="desc_item">
                                                <span>舱位情况:</span>
                                                <em>有舱</em></li>
                                            <!----></ul>
                                        <ul class="desc_list desc_right">
                                            <li class="desc_item">
                                                <span>信息费用:</span>
                                                <em>50</em></li>
                                            <li class="desc_item">
                                                <span>主单费用:</span>
                                                <em>50</em></li>
                                            <li class="desc_item">
                                                <span>代理报关费用:</span>
                                                <em>100</em></li>
                                            <li class="desc_item">
                                                <span>通知单制作费用:</span>
                                                <em>5</em></li>
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!----></ul>
                                    </div>
                                    <div class="fdc_info_remark">
                                        <div class="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type">
                                            <textarea wrap="soft" autocomplete="off" spellcheck="false" placeholder="备注:" rows="2" readonly="readonly" class="ivu-input" style="height: 178px; min-height: 178px; max-height: 220px; overflow-y: hidden;"><?php echo ($data["remarks"]); ?></textarea>
                                        </div>
                                    </div>
                                    <div class="fdc_info_buy_btn">
                                        
                                        <div class="btns_box">
                                            <button type="button" class="shoucang fdc_info_buy_btn_collect ivu-btn ivu-btn-warning ivu-btn-circle">
                                                <!---->
                                                <!---->
                                                <span>收藏</span></button>
                                            <a href="http://wpa.qq.com/msgrd?v=3&uin=2591387078&site=qq&menu=yes" target="_blank" class="fdc_info_buy_btn_qq ivu-btn ivu-btn-warning ivu-btn-circle " style="width: 0.7rem; margin-left:10px; padding-top:4px; margin-right: 10px;">
                                                <!---->
                                                <!---->
                                                <span class="tg_Stext">
                                                    <i style="color: rgb(45, 140, 240);"></i>联系客服</span>
                                            </a>
											<a href="javascript:pay(<?php echo ($data["id"]); ?>)">
                                            <button type="button" class="fdc_info_buy_btn_order ivu-btn ivu-btn-error ivu-btn-circle" style="background-color: rgb(240, 131, 0);">
                                                <!---->
                                                <!---->
                                                <span>立即购买</span></button></a>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
<script>
var islog="<?php echo ($islog); ?>";
function pay(id){
	if(islog=="0"){
		$.MsgBox.Alert("提示","请先登陆");
	}else{
		window.parent.location.href="/home/user/topay/id/"+id; 
	}
	
}
$(".shoucang").click(function(){
	$.post("/home/login/shoucang",function(data,status){
        $.MsgBox.Alert("提示","收藏成功");
    });
});
</script>						
                        <div class="fdc_tabs_box">
                            <div class="fdc_tabs w">
                                <div class="ivu-tabs ivu-tabs-no-animation">
                                    <div class="ivu-tabs-bar">
                                        <!---->
                                        <div tabindex="0" class="ivu-tabs-nav-container">
                                            <div class="ivu-tabs-nav-wrap" style="position: relative;">
                                                <span class="ivu-tabs-nav-prev ivu-tabs-nav-scroll-disabled">
                                                    <i class="ivu-icon ivu-icon-ios-arrow-back"></i>
                                                </span>
                                                <span class="ivu-tabs-nav-next ivu-tabs-nav-scroll-disabled">
                                                    <i class="ivu-icon ivu-icon-ios-arrow-forward"></i>
                                                </span>
                                                <div class="ivu-tabs-nav-scroll">
                                                    <div class="ivu-tabs-nav">
                                                        <div class="ivu-tabs-ink-bar" style="visibility: visible; width: 200px; left: 0px;"></div>
                                                        <div data-i="1" class="navtab ivu-tabs-tab ivu-tabs-tab-active ivu-tabs-tab-focused">
                                                           描述详情
                                                            </div>
															<div data-i="2" class="navtab ivu-tabs-tab"> 舱位信息</div>
                                                        </div>
                                                </div>
												
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ivu-tabs-content" style="transform: translateX(0%) translateZ(0px);">
                                        <div class="navmain navmain1 ivu-tabs-tabpane" style="visibility: visible;display:;">
                                            <div class="desc_detail_box">
                                                <ul class="detail_box_list">
                                                    <li class="detail_box_item">
                                                        <span>中转类型:</span>
                                                        <em class="tg_em"><?php echo flyType($data["flytype"]);?></em></li>
                                                    <li class="detail_box_item">
                                                        <span>货物属性:</span>
                                                        <em><?php echo ($gy[$data["goodstype"]]); ?></em></li>
                                                    <li class="detail_box_item">
                                                        <span>始 发 港:</span>
                                                        <em><?php echo ($data["cport"]); ?></em></li>
                                                    <li class="detail_box_item">
                                                        <span>生效日期:</span>
                                                        <em><?php echo ($data["starttime"]); ?></em></li>
                                                </ul>
                                                <ul class="detail_box_list">
                                                    <li class="detail_box_item">
                                                        <span>目 的 港:</span>
                                                        <em><?php echo ($data["mport"]); ?></em></li>
                                                    <li class="detail_box_item">
                                                        <span>航空公司:</span>
                                                        <em><?php echo ($data["company"]); ?></em></li>
                                                    <li class="detail_box_item">
                                                        <span>货币种类:</span>
                                                        <em>人民币</em></li>
                                                    <li class="detail_box_item">
                                                        <span>截止日期:</span>
                                                        <em><?php echo ($data["deadline"]); ?></em></li>
                                                </ul>
                                                <ul class="detail_box_list">
                                                    <li class="detail_box_item">
                                                        <span>航班周期:</span>
                                                        <em><?php echo ($data["cycle"]); ?></em></li>
                                                    <li class="detail_box_item">
                                                        <span>到达天数:</span>
                                                        <em><?php echo ($data["day"]); ?>天</em></li>
                                                    <li class="detail_box_item">
                                                        <span>运价类型:</span>
                                                        <em>ALL IN</em></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class=" navmain navmain2 ivu-tabs-tabpane" style="visibility: visible; display:none ;">
                                            <div class="positions_info_box">
                                                <div id="calendar">
                                                    <div class="month">
                                                        <ul>
                                                            <li data-m="<?php echo ($week["month_pre"]); ?>" class="arrow premonth">❮</li>
                                                            <li class="year-month">
                                                                <span class="choose-year"><?php echo ($week["month_cur"]); ?></span></li>
                                                            <li data-m="<?php echo ($week["month_next"]); ?>" class="arrow nextmonth">❯</li></ul>
                                                    </div>
                                                    <ul class="weekdays">
                                                        <li>一</li>
                                                        <li>二</li>
                                                        <li>三</li>
                                                        <li>四</li>
                                                        <li>五</li>
                                                        <li style="color: red;">六</li>
                                                        <li style="color: red;">日</li></ul>
                                                    <ul class="days">
														<?php echo monthhtml();?>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ivu-tabs-tabpane" style="visibility: hidden; display: none;">
                                            <div class="history_freight_box">
                                                <!----></div>
                                            <div class="ivu-alert ivu-alert-warning ivu-alert-with-icon ivu-alert-with-desc">
                                                <span class="ivu-alert-icon">
                                                    <i class="ivu-icon ivu-icon-ios-alert-outline"></i>
                                                </span>
                                                <span class="ivu-alert-message">备注</span>
                                                <span class="ivu-alert-desc">1、历史运价仅在会员打赏或付费订阅后才能查看
                                                    <br>2、非付费会员可以选择打赏，可查看该航线一周运价
                                                    <br>3、系统将每日以邮件形式推送给付费订阅会员关注航线实时运价
                                                    <br></span>
                                                <!----></div>
                                            <!---->
                                            <div class="subscirber">
                                                <button type="button" class="ivu-btn ivu-btn-error ivu-btn-large ivu-btn-ghost">
                                                    <!---->
                                                    <!---->
                                                    <span>打赏</span></button>
                                                <button type="button" class="ivu-btn ivu-btn-primary ivu-btn-large ivu-btn-ghost">
                                                    <!---->
                                                    <!---->
                                                    <span>订阅</span></button>
                                            </div>
                                        </div>
                                        <div class="ivu-tabs-tabpane" style="visibility: hidden; display: none;">
                                            <div class="airlines_offer_box">
                                                <div class="result_header">
                                                    <div class="ivu-row result_header_row w">
                                                        <div class="ivu-col ivu-col-span-10 result_header_left">
                                                            <div class="header_left_departure">
                                                                <i class="ivu-icon ivu-icon-md-radio-button-off"></i>
                                                                <span>始发港</span></div>
                                                            <i class="ivu-icon ivu-icon-md-arrow-round-forward"></i>
                                                            <div class="header_left_destination">
                                                                <i class="ivu-icon ss-icon ss-icon-zhongdian1"></i>
                                                                <span>目的港</span></div>
                                                        </div>
                                                        <div class="ivu-col ivu-col-span-14 result_header_right">
                                                            <ul class="kg_list">
                                                                <li class="kg_item">+45KG</li>
                                                                <li class="kg_item">+100KG</li>
                                                                <li class="kg_item">+300KG</li>
                                                                <li class="kg_item">+500KG</li>
                                                                <li class="kg_item">+1000KG</li>
                                                                <li class="kg_item">2000KG</li></ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ivu-tabs-tabpane" style="visibility: hidden; display: none;">
                                            <div class="history_freight_box" style="display: none;">
                                                <div>
                                                    <button type="button" class="ivu-btn ivu-btn-info">
                                                        <!---->
                                                        <!---->
                                                        <span>按月平均</span></button>&nbsp;&nbsp;&nbsp;
                                                    <button type="button" class="ivu-btn ivu-btn-">
                                                        <!---->
                                                        <!---->
                                                        <span>按季度平均</span></button>&nbsp;&nbsp;&nbsp;
                                                    <button type="button" class="ivu-btn ivu-btn-">
                                                        <!---->
                                                        <!---->
                                                        <span>按年平均</span></button>&nbsp;&nbsp;&nbsp;
                                                    <strong>运价等级:</strong>
                                                    <div class="ivu-select ivu-select-single ivu-select-default" style="width: 100px;">
                                                        <div tabindex="0" class="ivu-select-selection">
                                                            <input type="hidden">
                                                            <div class="">
                                                                <!---->
                                                                <!---->
                                                                <span class="ivu-select-placeholder">-- 请选择 --</span>
                                                                <!---->
                                                                <!---->
                                                                <i class="ivu-icon ivu-icon-ios-arrow-down ivu-select-arrow"></i>
                                                            </div>
                                                        </div>
                                                        <div class="ivu-select-dropdown" style="display: none; min-width: 100px; position: absolute; will-change: top, left; transform-origin: center top; top: 5px; left: 0px;" x-placement="bottom-start" x-out-of-boundaries="">
                                                            <ul class="ivu-select-not-found" style="display: none;">
                                                                <li>无匹配数据</li></ul>
                                                            <ul class="ivu-select-dropdown-list">
                                                                <li class="ivu-select-item">+45KG</li>
                                                                <li class="ivu-select-item">+100KG</li>
                                                                <li class="ivu-select-item">+300KG</li>
                                                                <li class="ivu-select-item">+500KG</li>
                                                                <li class="ivu-select-item">+1000KG</li>
                                                                <li class="ivu-select-item">+2000KG</li></ul>
                                                            <ul class="ivu-select-loading" style="display: none;">加载中</ul></div>
                                                    </div>
                                                </div>
                                                <div class="x-bar high" style="width: 100%; height: 250px;">
                                                    <div id="averageChart" option="[object Object]" data-highcharts-chart="2" style="height: 200px; overflow: hidden;">
                                                        <div id="highcharts-rzy23i5-7" dir="ltr" class="highcharts-container " style="position: relative; overflow: hidden; width: 1493px; height: 200px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                                                            <svg version="1.1" class="highcharts-root" style="font-family:&quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size:12px;" xmlns="http://www.w3.org/2000/svg" width="1493" height="200" viewBox="0 0 1493 200">
                                                                <desc>Created with Highcharts 7.2.0</desc>
                                                                <defs>
                                                                    <clipPath id="highcharts-rzy23i5-8-">
                                                                        <rect x="0" y="0" width="1445" height="134" fill="none"></rect>
                                                                    </clipPath>
                                                                </defs>
                                                                <rect fill="#ffffff" class="highcharts-background" x="0" y="0" width="1493" height="200" rx="0" ry="0"></rect>
                                                                <rect fill="none" class="highcharts-plot-background" x="38" y="10" width="1445" height="134"></rect>
                                                                <g class="highcharts-grid highcharts-xaxis-grid" data-z-index="1"></g>
                                                                <g class="highcharts-grid highcharts-yaxis-grid" data-z-index="1"></g>
                                                                <rect fill="none" class="highcharts-plot-border" data-z-index="1" x="38" y="10" width="1445" height="134"></rect>
                                                                <g class="highcharts-axis highcharts-xaxis" data-z-index="2">
                                                                    <path fill="none" class="highcharts-axis-line" stroke="#ccd6eb" stroke-width="1" data-z-index="7" d="M 38 144.5 L 1483 144.5"></path>
                                                                </g>
                                                                <g class="highcharts-axis highcharts-yaxis" data-z-index="2">
                                                                    <text x="26" data-z-index="7" text-anchor="middle" transform="translate(0,0) rotate(270 26 77)" class="highcharts-axis-title" style="color:#666666;fill:#666666;" y="77">
                                                                        <tspan>价格 (元)</tspan></text>
                                                                    <path fill="none" class="highcharts-axis-line" data-z-index="7" d="M 38 10 L 38 144"></path>
                                                                </g>
                                                                <g class="highcharts-series-group" data-z-index="3">
                                                                    <g data-z-index="0.1" class="highcharts-series highcharts-series-0 highcharts-spline-series highcharts-color-0 " transform="translate(38,10) scale(1 1)" clip-path="url(#highcharts-rzy23i5-8-)"></g>
                                                                    <g data-z-index="0.1" class="highcharts-markers highcharts-series-0 highcharts-spline-series highcharts-color-0 " transform="translate(38,10) scale(1 1)"></g>
                                                                </g>
                                                                <text x="747" text-anchor="middle" class="highcharts-title" data-z-index="4" style="color:#333333;font-size:18px;fill:#333333;" y="24"></text>
                                                                <text x="747" text-anchor="middle" class="highcharts-subtitle" data-z-index="4" style="color:#666666;fill:#666666;" y="24"></text>
                                                                <text x="10" text-anchor="start" class="highcharts-caption" data-z-index="4" style="color:#666666;fill:#666666;" y="197"></text>
                                                                <g class="highcharts-legend" data-z-index="7" transform="translate(710,156)">
                                                                    <rect fill="none" class="highcharts-legend-box" rx="0" ry="0" x="0" y="0" width="74" height="29" visibility="visible"></rect>
                                                                    <g data-z-index="1">
                                                                        <g>
                                                                            <g class="highcharts-legend-item highcharts-spline-series highcharts-color-0 highcharts-series-0" data-z-index="1" transform="translate(8,3)">
                                                                                <path fill="none" d="M 0 11 L 16 11" class="highcharts-graph" stroke="#34ACEC" stroke-width="2"></path>
                                                                                <text x="21" style="color:#333333;cursor:pointer;font-size:12px;font-weight:bold;fill:#333333;" text-anchor="start" data-z-index="2" y="15">
                                                                                    <tspan>平均价</tspan></text>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                                <g class="highcharts-axis-labels highcharts-xaxis-labels" data-z-index="7"></g>
                                                                <g class="highcharts-axis-labels highcharts-yaxis-labels" data-z-index="7"></g>
                                                                <text x="1483" class="highcharts-credits" text-anchor="end" data-z-index="8" style="cursor:pointer;color:#999999;font-size:9px;fill:#999999;" y="195">Highcharts.com</text></svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style="display: none;">
                                                    <div class="ivu-table-wrapper">
                                                        <div class="ivu-table ivu-table-default">
                                                            <!---->
                                                            <div class="ivu-table-header">
                                                                <table cellspacing="0" cellpadding="0" border="0" style="width: 1px;">
                                                                    <colgroup>
                                                                        <col width="0">
                                                                            <col width="0">
                                                                                <col width="0">
                                                                                    <col width="0">
                                                                                        <col width="0">
                                                                                            <col width="0">
                                                                                                <col width="0">
                                                                                                    <!----></colgroup>
                                                                    <thead>
                                                                        <tr>
                                                                            <th class="ivu-table-column-center">
                                                                                <div class="ivu-table-cell">
                                                                                    <span class="">时间</span>
                                                                                    <!---->
                                                                                    <!----></div>
                                                                            </th>
                                                                            <th class="ivu-table-column-center">
                                                                                <div class="ivu-table-cell">
                                                                                    <span class="">45KG</span>
                                                                                    <!---->
                                                                                    <!----></div>
                                                                            </th>
                                                                            <th class="ivu-table-column-center">
                                                                                <div class="ivu-table-cell">
                                                                                    <span class="">100KG</span>
                                                                                    <!---->
                                                                                    <!----></div>
                                                                            </th>
                                                                            <th class="ivu-table-column-center">
                                                                                <div class="ivu-table-cell">
                                                                                    <span class="">300KG</span>
                                                                                    <!---->
                                                                                    <!----></div>
                                                                            </th>
                                                                            <th class="ivu-table-column-center">
                                                                                <div class="ivu-table-cell">
                                                                                    <span class="">500KG</span>
                                                                                    <!---->
                                                                                    <!----></div>
                                                                            </th>
                                                                            <th class="ivu-table-column-center">
                                                                                <div class="ivu-table-cell">
                                                                                    <span class="">1000KG</span>
                                                                                    <!---->
                                                                                    <!----></div>
                                                                            </th>
                                                                            <th class="ivu-table-column-center">
                                                                                <div class="ivu-table-cell">
                                                                                    <span class="">2000KG</span>
                                                                                    <!---->
                                                                                    <!----></div>
                                                                            </th>
                                                                            <!----></tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                            <div class="ivu-table-body" style="display: none;">
                                                                <table cellspacing="0" cellpadding="0" border="0" style="width: 1px;">
                                                                    <colgroup>
                                                                        <col width="0">
                                                                            <col width="0">
                                                                                <col width="0">
                                                                                    <col width="0">
                                                                                        <col width="0">
                                                                                            <col width="0">
                                                                                                <col width="0"></colgroup>
                                                                    <tbody class="ivu-table-tbody"></tbody>
                                                                </table>
                                                            </div>
                                                            <div class="ivu-table-tip">
                                                                <table cellspacing="0" cellpadding="0" border="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="width: 0px;">
                                                                                <span>暂无数据</span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!----></div>
                                                        <!---->
                                                      
                                                    </div>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="ivu-alert ivu-alert-warning ivu-alert-with-icon ivu-alert-with-desc">
                                                <span class="ivu-alert-icon">
                                                    <i class="ivu-icon ivu-icon-ios-alert-outline"></i>
                                                </span>
                                                <span class="ivu-alert-message">备注</span>
                                                <span class="ivu-alert-desc">1、平均运价仅在会员付费订阅后才能查看
                                                    <br>2、会员可以选择单次订阅或包月包年
                                                    <br></span>
                                                <!----></div>
                                            <!---->
                                                <button type="button" class="ivu-btn ivu-btn-primary ivu-btn-large ivu-btn-ghost">
                                                    <!---->
                                                    <!---->
                                                    <span>订阅</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="ivu-modal-mask" style="z-index: 1014; display: none;"></div>
                        <div class="ivu-modal-wrap ivu-modal-hidden" style="z-index: 1014;">
                            <div class="ivu-modal" style="width: 500px; display: none;">
                                <div class="ivu-modal-content">
                                    <a class="ivu-modal-close">
                                        <i class="ivu-icon ivu-icon-ios-close"></i>
                                    </a>
                                    <div class="ivu-modal-header">
                                        <div class="head_title">
                                            <span>订阅</span></div>
                                    </div>
                                    <div class="ivu-modal-body">
                                        <div class="body_content">
                                            <p>会员付费订阅，订阅后您即可查看该航线的近三年的历史平均运价与运价趋势分析，对贵司签约全年的包板、包量有很大作用。</p>
                                            <div class="ding">
                                                <div class="ding_list">
                                                    <div class="ding_item active">
                                                        <p>订阅一天</p>
                                                        <span>5元</span></div>
                                                </div>
                                                <div class="ding_list">
                                                    <div class="ding_item">
                                                        <p>订阅一个月</p>
                                                        <span>50元</span></div>
                                                </div>
                                                <div class="ding_list">
                                                    <div class="ding_item">
                                                        <p>订阅一年</p>
                                                        <span>300元</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ivu-modal-footer">
                                        <div>
                                            <button type="button" class="ivu-btn ivu-btn-warning ivu-btn-long ivu-btn-large">
                                                <!---->
                                                <!---->
                                                <span>订阅</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </body>
<script>
var nn=0;
loadm();
$(".premonth").click(function(){
	nn--;
	loadm();
});
$(".nextmonth").click(function(){
	nn++;
	loadm();
});
function loadm(){
	
	$.post("/home/index/getmonth",{nn:nn},function(data){
      $(".choose-year").html(data.month);
      $(".days").html(data.html);
	  window.parent.initIframeHeight($(document.body).height());
    },"json");
	
	
}
$(".navtab").click(function(){
	var i=$(this).data("i");
	
	$(".navtab").removeClass("ivu-tabs-tab-active");
	$(this).addClass("ivu-tabs-tab-active");
	
	$(".navmain").hide();
	$(".navmain"+i).show();
	window.parent.initIframeHeight($(document.body).height());
});
window.parent.initIframeHeight($(document.body).height());
</script>
</html>