<?php if (!defined('THINK_PATH')) exit();?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<link rel="shortcut icon" href="/Public/Home/img/favicon.ico" type="img/x-icon"/>
<link rel="stylesheet" type="text/css" href="/Public/Home/css/official_net.css?202008181" media="all" />
<script type="text/javascript" src="/Public/Home/js/jquery.js?202008181"></script>
<title></title>
</head>
<body>

	<div class="official_net">

        <div id="wrapper"><!-- 最外层部分 -->
        <div id="banner"><!-- 轮播部分 -->
            <ul class="imgList imgList_aboutUs"><!-- 图片部分 -->
                <li><a href="#"><img src="/<?php echo ($sys["banner"]); ?>" alt="puss in boots1"></a></li>
            </ul>
        </div>
    </div>
    <div class="thirdpage_content">
        <div class="thridpage_content_part1">
            
            <div class="thridpage_content_det">
               <?php echo ($sys["content"]); ?>
            </div>
        </div>

        <div class="address_all" name="1F" id="1F">
            <div class="address2">
                <div class="thridpage_content_title2"><div class="cloud_notice">联系我们</div><div class="border_color"></div></div>
                <div class="contact_detail">
                    <div class="contact_detail_left contact_detailb">
                        <div class="copr"><img src="/Public/Home/img/copr1.png"></div>
                        <div class="copr2">
                            <div class="contact_place"><a target="_blank" href="#">服务支持</a></div>
                            <div class="contact_email">XXXXX</div>
                            <div class="contact_email">客服热线：021-50888257 </div>
                            <div class="contact_tel">服务时间： 9.00-18.00</div>
                        </div>
                    </div>
                    <div class="contact_detail_center contact_detailb">
                        <div class="copr"><img src="/Public/Home/img/copr3.png"></div>
                        <div class="copr2">
                            <div class="contact_place"><a target="_blank" href="#">商务合作</a></div>
                            <div class="contact_email">XXXXX</div>
                            <div class="contact_email">合作洽谈：021-50888259</div>
                            <div class="contact_tel">邮箱：op@jss-freight.com</div>
                        </div>
                    </div>
                    <div class="contact_detail_right contact_detailb">
                        <div class="copr"><img src="/Public/Home/img/copr2.png"></div>
                        <div class="copr2">
                            <div class="contact_place"><a target="_blank" href="#">代理加盟</a></div>
                            <div class="contact_email">XXXXX</div>
                            <div class="contact_email">加盟热线：021-50888257</div>
                            <div class="contact_tel">服务时间：9.00-18.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copr_address">
            <div class="cor_address">
                <div class="cor_address1">
                    <div class="cor_address_top">XXXXX</div>
                    <div>上海市浦东新区川南奉公路5609弄7号D座204-205</div>
                    <div>邮编：021-50888259</div>
                    <div>电话：op@jss-freight.com</div>
                </div>
                
            </div>
            <div class="map_all">
                <img src="/Public/Home/img/map.jpg">
            </div>
        </div>
    </div>

</div>
</body>
</html>