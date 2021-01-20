<?php if (!defined('THINK_PATH')) exit(); if(is_array($list)): foreach($list as $key=>$vo): ?><div class="result_content w">
                                    <span class="result_content_tag" <?php if(($vo["flytype"]) == "0"): ?>style="background-color: rgb(236, 131, 38);"<?php endif; ?>><?php echo flyType($vo["flytype"]);?></span>
                                    <?php if(($vo["special"]) == "1"): ?><span class="result_content_tag2">特价</span><?php endif; ?>
                                    <div class="ivu-row result_content_row">
                                        <div class="ivu-col ivu-col-span-10 result_content_left">
                                            <div class="rcl_up">
                                                <div class="rcl_up_left">
                                                    <p>(<?php echo ($vo["cportcode"]); ?>)</p>
                                                    <p><?php echo ($vo["cport"]); ?></p>
                                                </div>
                                                <div class="rcl_up_middle">
                                                    <i class="ivu-icon ss-icon ss-icon-jiantou2"></i>
                                                </div>
                                                <div class="rcl_up_right">
                                                    <p>(<?php echo ($vo["mportcode"]); ?>)</p>
                                                    <p><?php echo ($vo["mport"]); ?></p>
                                                </div>
                                                <div class="tag_list">
                                                    <div class="rcl_up_tag">有舱</div>
                                                   <?php if(($vo["hot"]) == "1"): ?><div class="rcl_up_tag rcl_up_tag_hot">热销</div><?php endif; ?>
                                                    </div>
                                            </div>
                                            <div class="rcl_down">
                                                <div class="rcl_down_left">
                                                    <div class="rcl_down_company">
                                                        <i class="ivu-icon ivu-icon-md-plane"></i>
                                                        <span>
                                                            <a href="" target="_blank"><?php echo ($cp[$vo["company"]]); ?></a></span>
                                                    </div>
                                                    <div class="rcl_down_flight">
                                                        <i class="ivu-icon ivu-icon-ios-plane"></i>
                                                        <span>航班: <?php echo ($vo["flight"]); ?></span></div>
                                                </div>
                                                <div class="rcl_down_right">
                                                    <span>
                                                        <Img class="tg_huowu" src="/Public/Home/twentynineteen/img/huowu.png"></Img>
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                        <!---->包装类型:</span>
                                                    <em><?php echo packingType($vo["packingtype"]);?></em></div>
                                            </div>
                                            <div class="rcl_ext">
                                                <!---->
                                                <!----></div>
                                        </div>
                                        <div class="ivu-col ivu-col-span-14 result_content_right">
                                            <ul class="rcr_price_list">
												<?php $gradient=explode(";",$vo["gradient"]); ?>
												<?php if(is_array($gradient)): foreach($gradient as $key=>$vo1): ?><li class="rcr_price_item"><?php echo ($vo1); ?></li><?php endforeach; endif; ?>
											</ul>
                                            <ul class="rcr_btns_list">
                                                <li class="rcr_btns_item customer_service_btn" onclick="detail(<?php echo ($vo["id"]); ?>)">价格详情</li>
                                                <li class="rcr_btns_item buy_now_btn" onclick="pay(<?php echo ($vo["id"]); ?>)">立即购买</li>
                                                <li class="rcr_btns_item customer_service_btn" onclick="javascript:window.open('/home/login/zixun');">客服咨询</li></ul>
                                        </div>
                                    </div>
                                </div><?php endforeach; endif; ?>				
                                <div class="paging_box">
                                    <ul class="ivu-page">
                                        <span class="ivu-page-total">共 <?php echo ($count); ?>条</span>
                                        <li data-p="<?php echo ($page["tou"]); ?>" title="上一页" class="page-lin ivu-page-prev <?php if(($page["tou"]) == "0"): ?>ivu-page-disabled<?php endif; ?>">
                                            <a>
                                                <i class="ivu-icon ivu-icon-ios-arrow-back"></i>
                                            </a>
                                        </li>
										<?php if(is_array($page["num"])): foreach($page["num"] as $key=>$vo): ?><li data-p="<?php echo ($vo); ?>" class="page-lin ivu-page-item <?php if(($vo) == $page['now']): ?>ivu-page-item-active<?php endif; ?>">
                                            <a><?php echo ($vo); ?></a>
                                        </li><?php endforeach; endif; ?>
                                        <!---->
                                        <!---->
                                        <!--
										 <li title="向前 5 页" class="ivu-page-item-jump-prev">
										 <a>
										 <i class="ivu-icon ivu-icon-ios-arrow-back"></i>
										 </a>
										 </li>
                                    
                                        <li title="向后 5 页" class="ivu-page-item-jump-next">
                                            <a>
                                                <i class="ivu-icon ivu-icon-ios-arrow-forward"></i>
                                            </a>
                                        </li>
											-->
                                        <li data-p="<?php echo ($page["wei"]); ?>" title="下一页" class=" page-lin ivu-page-next <?php if(($page["wei"]) == "0"): ?>ivu-page-disabled<?php endif; ?>">
                                            <a>
                                                <i class="ivu-icon ivu-icon-ios-arrow-forward"></i>
                                            </a>
                                        </li>
                                        <!----></ul>
                                </div>
								<script>$("#num").html('<?php echo ($count); ?>');</script>