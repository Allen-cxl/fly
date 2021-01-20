<?php if (!defined('THINK_PATH')) exit();?>
						<div data-v-c00843fa="" class="tableBox">
							<p data-v-c00843fa="" class="tablePrompt">
								<span data-v-c00843fa="" class="star">*</span>
								<span data-v-c00843fa=""></span></p>
							<div data-v-c00843fa="" class="waitOperationForm">
								<div data-v-c00843fa="" class="tableBody">
									<div data-v-c00843fa="" class="el-table productTable el-table--fit el-table--border el-table--scrollable-x el-table--mini" style="width: 100%;">
										<div id="scrollDiv" class="el-table__body-wrapper is-scrolling-left" style="">
										<!--<div class="el-table__body-wrapper is-scrolling-right" style="height: 500px;">-->
											<table id="scrollTable" cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 1362px;">
												<thead class="has-gutter">
													<tr class="">
														<th colspan="1" rowspan="1" class="el-table_7_column_72  is-center   is-leaf">
															<div class="cell">序号</div></th>
														<th colspan="1" rowspan="1" class="el-table_7_column_76  is-center   is-leaf">
															<div class="cell">公司</div></th>
														<th colspan="1" rowspan="1" class="el-table_7_column_76  is-center   is-leaf">
															<div class="cell">始发港</div></th>
														<th colspan="1" rowspan="1" class="el-table_7_column_77  is-center   is-leaf">
															<div class="cell">目的港</div></th>
														
														<th colspan="1" rowspan="1" class="el-table_7_column_79  is-center   is-leaf">
															<div class="cell">开航日期</div></th>
														<th colspan="1" rowspan="1" class="el-table_7_column_80  is-center   is-leaf">
															<div class="cell">货物总称</div></th>
														<th colspan="1" rowspan="1" class="el-table_7_column_80  is-center   is-leaf">
															<div class="cell">预估重量</div></th>
															<th colspan="1" rowspan="1" class="el-table_7_column_80  is-center   is-leaf">
															<div class="cell">预估体积</div></th>
															<th colspan="1" rowspan="1" class="el-table_7_column_80  is-center   is-leaf">
															<div class="cell">预估件数</div></th>
													<th colspan="1" rowspan="1" class="el-table_7_column_80  is-center   is-leaf">
															<div class="cell">备注</div></th>
														<th colspan="1" rowspan="1" class="el-table_7_column_82  is-center changeDataMod  is-hidden is-leaf">
															<div class="cell">改期</div></th>
														<th colspan="1" rowspan="1" class="el-table_7_column_83  is-center   is-hidden is-leaf">
															<div class="cell">操作</div></th>
														
													</tr>
													
												</thead>
												<tbody>
												<?php if(($has) == "0"): ?><tr>
													<td colspan="11" style="text-align:center;"><span class="el-table__empty-text">暂无数据</span></td>
													</tr><?php endif; ?>
												<?php if(is_array($list)): foreach($list as $key=>$vo): ?><tr>
													<td><?php echo ($key+1); ?></td>
													<td><?php echo ($vo["company"]); ?></td>
													<td><?php echo ($vo["cport"]); ?></td>
													<td><?php echo ($vo["mport"]); ?></td>
													<td><?php echo ($vo["ktime"]); ?></td>
													<td><?php echo ($vo["goods"]); ?></td>
													<td><?php echo ($vo["weight"]); ?></td>
													<td><?php echo ($vo["volume"]); ?></td>
													<td><?php echo ($vo["num"]); ?></td>
													<td><?php echo ($vo["remarks"]); ?></td>
													</tr><?php endforeach; endif; ?>
												</tbody>	
											</table>
										</div>
										
										<div class="el-table__fixed-right" style="width: 227px;">
											<div class="el-table__fixed-header-wrapper" style="position:relative;">
												<table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width:227px;">
													<thead class="">
														<tr class="">
															<th colspan="1" rowspan="1" class="el-table_7_column_82  is-center changeDataMod  is-leaf">
																<div class="cell">改期</div></th>
															<th colspan="1" rowspan="1" class="el-table_7_column_83  is-center   is-leaf">
																<div class="cell">操作</div></th>
														</tr>
													</thead>
													<tbody>
													<?php if(is_array($list)): foreach($list as $key=>$vo): ?><tr>
													<td>否</td>
													<td><a href="javascript:todel(<?php echo ($vo["id"]); ?>)">删除</a></td>
													</tr><?php endforeach; endif; ?>
												</tbody>	
												</table>
											</div>
											</div>
									</div>
									<!----></div>
								<div data-v-c00843fa="" class="productPagination el-pagination">
									<span class="el-pagination__total">共 <?php echo ($count); ?> 条</span>
									<button data-p="<?php echo ($page["tou"]); ?>" type="button" <?php if(($page["tou"]) == "0"): ?>disabled<?php endif; ?> class="btn-prev topage">
										<i class="el-icon el-icon-arrow-left"></i>
									</button>
									<ul class="el-pager">
										<?php if(is_array($page["num"])): foreach($page["num"] as $key=>$vo): ?><li data-p="<?php echo ($vo); ?>" class="number topage <?php if(($vo) == $page['now']): ?>active<?php endif; ?>">
                                           <?php echo ($vo); ?>
                                        </li><?php endforeach; endif; ?>
									</ul>
									<button  data-p="<?php echo ($page["wei"]); ?>" type="button" <?php if(($page["wei"]) == "0"): ?>disabled<?php endif; ?> class="btn-next topage">
										<i class="el-icon el-icon-arrow-right"></i>
									</button>
									<!--<span class="el-pagination__jump">前往
										<div class="el-input el-input--mini el-pagination__editor is-in-pagination">
											<input type="number" autocomplete="off" min="1" max="<?php echo ($page["zong"]); ?>" class="el-input__inner">
										</div>页</span>--></div>
							</div>
							<!----></div>
						<p data-v-c00843fa="" class="exportTableTips">进仓编号为红色字体的业务是付款买单业务，待货物入库确认数据后先确认并支付预计费用，费用到账后此票货物才可安排出运。为了货物能正常按计划出运请及早安排付款,若有疑问请联系我司客服。</p></div>
<style>
.tableBox td{
	text-align:center;
}
</style>