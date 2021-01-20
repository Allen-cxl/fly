<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8" />
    <title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
        <link href="/Public/Home/twentynineteen/css/palletlist.css" rel="stylesheet">
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
	<div class="entry-content">
		<section>
			<div class="container">
				<div class="table-container">
					<div class="bootstrap-table bootstrap4">
						<div class="fixed-table-toolbar"></div>
						<div class="fixed-table-container" style="padding-bottom: 0px;">
							<div class="fixed-table-header" style="display: none;">
								<table></table>
							</div>
							<div class="fixed-table-body">
								<div class="fixed-table-loading table table-bordered table-borderless list" style="top: 50px; display: none;">
									<span class="loading-wrap">
										<span class="loading-text">
											<div class="table-loading">玩命加载中</div></span>
										<span class="animation-wrap">
											<span class="animation-dot"></span>
										</span>
									</span>
								</div>
								<table id="table-list" class="table table-bordered table-borderless list">
									<tfoot style="display: none;">
										<tr></tr>
									</tfoot>
									<thead class="list-header">
										<tr>
											<th style="text-align: center; " data-field="0">
												<div class="th-inner ">起运港 / 目的港</div>
												<div class="fht-cell"></div>
											</th>
											<th class="hp-detail" style="" data-field="1">
												<div class="th-inner ">货盘数据</div>
												<div class="fht-cell"></div>
											</th>
											<th style="text-align: center; vertical-align: middle; " data-field="hbrq">
												<div class="th-inner ">预计出运日</div>
												<div class="fht-cell"></div>
											</th>
											<th style="text-align: center; vertical-align: middle; width: 300px; " data-field="hwpm">
												<div class="th-inner ">货物描述</div>
												<div class="fht-cell"></div>
											</th>
											<th class="hkgs" style="text-align: center; vertical-align: middle; " data-field="hkgs">
												<div class="th-inner ">预定航空公司</div>
												<div class="fht-cell"></div>
											</th>
											<th class="operation" style="vertical-align: middle; " data-field="operate">
												<div class="th-inner "></div>
												<div class="fht-cell"></div>
											</th>
										</tr>
									</thead>
									<tbody>
									<?php if(is_array($list)): foreach($list as $key=>$vo): ?><tr class="item" data-index="0">
											<td style="text-align: center; ">
												<div class="from-to">
													<div class="from">
														<div class="en"><?php echo ($vo["cportcode"]); ?></div>
														<div class="zn"><?php echo ($vo["cport"]); ?></div></div>
													<div class="arrow arrow1"></div>
													<div class="to">
														<div class="en"><?php echo ($vo["mportcode"]); ?></div>
														<div class="zn"><?php echo ($vo["mport"]); ?></div></div>
												</div>
											</td>
											<td class="hp-detail" style="">
												<div>
													<div class="mc">空运出口</div>
													<div class="detail"><?php echo ($vo["hdata"]); ?></div></div>
											</td>
											<td style="text-align: center; vertical-align: middle; "><?php echo ($vo["ctime"]); ?></td>
											<td style="text-align: center; vertical-align: middle; width: 300px; "><?php echo ($vo["remarks"]); ?></td>
											<td class="hkgs" style="text-align: center; vertical-align: middle; "><?php echo ($vo["company"]); ?></td>
											<td class="operation" style="vertical-align: middle; ">
												<a class="btn btn-sm btn-link inquiry" target="_blank" href="http://crm2.qq.com/page/portalpage/wpa.php?uin=<?php echo ($sys["qq"]); ?>&amp;ref=http://feeair.com/yjxx.html&amp;f=1&amp;ty=1&amp;ap=&amp;as=">在线报价</a></td>
										</tr><?php endforeach; endif; ?>
									</tbody>
								</table>
							</div>
							<div class="fixed-table-footer">
								<table>
									<thead>
										<tr></tr>
									</thead>
								</table>
							</div>
						</div>
						<div class="fixed-table-pagination" style="display: none;"></div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</section>
	
	</div>


    </html>