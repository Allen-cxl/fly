(function($, window) {
	function CommonutilOperator() {

	}
	CommonutilOperator.prototype.list2tree = function(datalist, rootflag) {
		var _this = this;
		var treeDatas = [];
		if (rootflag) {
			var rootNode = {
				id : "root",
				structurecode : "",
				text : "Root",
				activesign : 1
			};
			_this.getChildNode(rootNode, datalist);
			treeDatas.push(rootNode);
		} else {
			datalist.forEach(function(item, index, datalist) {
				if (item.structurecode.length == 2) {
					_this.getChildNode(item, datalist);
					treeDatas.push(item);
				}
			});
		}
		return treeDatas;
	}
	CommonutilOperator.prototype.getChildNode = function(parentNode, dataLst) {
		var _this = this;
		var parentCode = parentNode.structurecode;
		dataLst.forEach(function(child, index, dataLst) {
					if (child.structurecode.length == parentCode.length + 2
							&& child.structurecode.substring(0,
									parentCode.length) == parentCode) {
						//设置节点颜色
						if(child.activesign == 0){
							child.color="#F0F0F0";
						}
						if (typeof (parentNode.nodes) == 'undefined'
								|| parentNode.nodes == null) {
							parentNode.nodes = [];
							parentNode.nodes.push(child);
						} else {
							parentNode.nodes.push(child);
						}
						_this.getChildNode(child, dataLst);
					}
				});
	}
	window.commonutiloperator = new CommonutilOperator();
	$.jsonrequest = function(settings) {
		var defaultOptions = {
			type : "post",
			contentType : "application/x-www-form-urlencoded",// 默认
			// 发送信息至服务器时内容编码类型
			dataType : "text",// 默认服务器返回类型为text
			url : "",
			data : null,
			success : null
		};
		var op = $.extend({}, defaultOptions, settings);
		$.ajax({
			type : op.type,
			url : op.url,
			data : op.data,
			contentType : op.contentType,
			dataType : op.dataType,
			success : function(result) {
				var jsonResult = $.parseJSON(result);
				if (jsonResult.state.success) {
					settings.success.call(this,
							jsonResult.data.data ? jsonResult.data.data : {});
				} else {
					console.log(jsonResult);
					settings.success.call(this, null);
				}
			},
			beforeSend : function() {
				if (op.target) {
					$(op.target).attr("disabled", true);
				}
			},
			complete : function() {
				if (op.target) {
					$(op.target).attr("disabled", false);
				}
			},
			error : function() {
				alert("网络异常!")
			}
		});
	};
	$.ajaxRequestOnce = function(settings) {
		var defaultOptions = {
			type : "post",
			contentType : "application/x-www-form-urlencoded",// 默认
			// 发送信息至服务器时内容编码类型
			dataType : "text",// 默认服务器返回类型为text
			url : "",
			data : null,
			success : null
		};
		var op = $.extend({}, defaultOptions, settings);
		op.beforeSend = function() {
			if (op.target) {
				$(op.target).attr("disabled", true);
			}
		};
		op.complete = function() {
			if (op.target) {
				$(op.target).attr("disabled", false);
			}
		};
		op.error = function() {
			alert("网络异常!");
		}
		$.ajax(op);
	};
	$.fn.serializeJson = function() {
		var serializeObj = {};
		$(this.serializeArray()).each(function() {
			serializeObj[this.name] = this.value;
		});
		return serializeObj;
	};
})($, window);