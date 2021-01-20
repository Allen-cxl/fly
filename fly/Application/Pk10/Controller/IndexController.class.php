<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.lovevi.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Pk10\Controller;
use OT\DataDictionary;

/**
 * 前台首页控制器
 * 主要获取首页聚合数据
 */
class IndexController extends HomeController {

	//系统首页
    public function index(){

    }
	public function ajax(){
		echo 123;
	}
	public function chat(){
		echo '{"Success":1,"Massage":"OK","Data":{"qi":"597930","endtime":195,"time":1484553465,"online":300,"coin":0,"chatlist":{"10":{"cid":"11673","text":"<span class=\"pk_qi\">597928\u671f:<\/span><span class=\"pk_04\">4<\/span><span class=\"pk_02\">2<\/span><span class=\"pk_01\">1<\/span><span class=\"pk_10\">10<\/span><span class=\"pk_08\">8<\/span><span class=\"pk_06\">6<\/span><span class=\"pk_03\">3<\/span><span class=\"pk_07\">7<\/span><span class=\"pk_09\">9<\/span><span class=\"pk_05\">5<\/span>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"15:53:23"},"9":{"cid":"11672","text":"<table class=\"chat_cltab\"><tr><th colspan=\"2\"><span class=\"cl_qi\">597928<\/span>\u671f \u4e24\u9762\u957f\u9f99<\/th><\/tr><tr><td class=\"cl_tt\">\u7b2c\u516b\u540d-\u5355<\/td><td>5<\/td><\/tr><\/table>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"15:53:18"},"8":{"cid":"11671","text":"<span class=\"pk_qi\">597927\u671f:<\/span><span class=\"pk_06\">6<\/span><span class=\"pk_07\">7<\/span><span class=\"pk_08\">8<\/span><span class=\"pk_02\">2<\/span><span class=\"pk_03\">3<\/span><span class=\"pk_04\">4<\/span><span class=\"pk_10\">10<\/span><span class=\"pk_09\">9<\/span><span class=\"pk_01\">1<\/span><span class=\"pk_05\">5<\/span>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"15:48:29"},"7":{"cid":"11670","text":"<table class=\"chat_cltab\"><tr><th colspan=\"2\"><span class=\"cl_qi\">597927<\/span>\u671f \u4e24\u9762\u957f\u9f99<\/th><\/tr><tr><td class=\"cl_tt\">\u7b2c\u4e94\u540d-\u5c0f<\/td><td>9<\/td><\/tr><tr><td class=\"cl_tt\">\u7b2c\u4e03\u540d-\u5927<\/td><td>5<\/td><\/tr><tr><td class=\"cl_tt\">\u7b2c\u4e5d\u540d-\u5c0f<\/td><td>5<\/td><\/tr><\/table>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"15:48:24"},"6":{"cid":"11669","text":"<span class=\"pk_qi\">597926\u671f:<\/span><span class=\"pk_04\">4<\/span><span class=\"pk_02\">2<\/span><span class=\"pk_10\">10<\/span><span class=\"pk_09\">9<\/span><span class=\"pk_05\">5<\/span><span class=\"pk_07\">7<\/span><span class=\"pk_08\">8<\/span><span class=\"pk_01\">1<\/span><span class=\"pk_03\">3<\/span><span class=\"pk_06\">6<\/span>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"15:43:12"},"5":{"cid":"11668","text":"<table class=\"chat_cltab\"><tr><th colspan=\"2\"><span class=\"cl_qi\">597926<\/span>\u671f \u4e24\u9762\u957f\u9f99<\/th><\/tr><tr><td class=\"cl_tt\">\u7b2c\u4e94\u540d-\u5c0f<\/td><td>8<\/td><\/tr><\/table>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"15:43:07"},"4":{"cid":"11667","text":"<span class=\"pk_qi\">597925\u671f:<\/span><span class=\"pk_07\">7<\/span><span class=\"pk_01\">1<\/span><span class=\"pk_06\">6<\/span><span class=\"pk_02\">2<\/span><span class=\"pk_03\">3<\/span><span class=\"pk_08\">8<\/span><span class=\"pk_09\">9<\/span><span class=\"pk_05\">5<\/span><span class=\"pk_04\">4<\/span><span class=\"pk_10\">10<\/span>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"15:38:04"},"3":{"cid":"11666","text":"<table class=\"chat_cltab\"><tr><th colspan=\"2\"><span class=\"cl_qi\">597925<\/span>\u671f \u4e24\u9762\u957f\u9f99<\/th><\/tr><tr><td class=\"cl_tt\">\u7b2c\u4e94\u540d-\u5c0f<\/td><td>7<\/td><\/tr><\/table>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"15:37:59"},"2":{"cid":"11665","text":"<span class=\"pk_qi\">597924\u671f:<\/span><span class=\"pk_05\">5<\/span><span class=\"pk_06\">6<\/span><span class=\"pk_04\">4<\/span><span class=\"pk_08\">8<\/span><span class=\"pk_02\">2<\/span><span class=\"pk_01\">1<\/span><span class=\"pk_07\">7<\/span><span class=\"pk_09\">9<\/span><span class=\"pk_03\">3<\/span><span class=\"pk_10\">10<\/span>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"15:33:12"},"1":{"cid":"11664","text":"<table class=\"chat_cltab\"><tr><th colspan=\"2\"><span class=\"cl_qi\">597924<\/span>\u671f \u4e24\u9762\u957f\u9f99<\/th><\/tr><tr><td class=\"cl_tt\">\u7b2c\u4e94\u540d-\u5c0f<\/td><td>6<\/td><\/tr><\/table>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"15:33:07"}}}}';
		
	}
}