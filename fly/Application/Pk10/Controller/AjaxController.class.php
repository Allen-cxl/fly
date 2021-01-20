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
class AjaxController extends HomeController {

	//系统首页
    public function index(){
			//start时间
			$y=session("gy");
			//end时间
			$ykj=D("Games")->where("type=".$y." and state=1")->order("no desc")->find();
			$nkj=D("Games")->where("type=".$y." and kjtime>".time())->order("no asc")->find();
			$wkj=D("Games")->where("type=".$y." and no>".$nkj["no"])->order("no asc")->find();
			$intval=($nkj["kjtime"]-time())*1000;
			echo '{"time":"'.time().'","current":{"periodNumber":"'.$ykj["no"].'","awardTime":"'.date("Y-m-d H:i:s",$ykj["kjtime"]+58).'","awardNumbers":"'.$ykj["num"].'"},"next":{"periodNumber":"'.$nkj["no"].'","openTime":"'.date("Y-m-d H:i:s",$nkj["kjtime"]-300).'","awardTime":"'.date("Y-m-d H:i:s",$nkj["kjtime"]).'","awardTimeInterval":'.$intval.',"delayTimeInterval":0,"fengpan":"'.date("Y-m-d H:i:s",$nkj["kjtime"]-60).'"}}';
		}
	
	public function chat(){
		//$str='{"Success":1,"Massage":"OK","Data":{"qi":"598031","endtime":115,"time":1484616545,"online":301,"coin":"99.40","chatlist":{"10":{"cid":"11869","text":"<span class=\"pk_qi\">598030\u671f:<\/span><span class=\"pk_04\">4<\/span><span class=\"pk_05\">5<\/span><span class=\"pk_02\">2<\/span><span class=\"pk_08\">8<\/span><span class=\"pk_09\">9<\/span><span class=\"pk_03\">3<\/span><span class=\"pk_01\">1<\/span><span class=\"pk_06\">6<\/span><span class=\"pk_10\">10<\/span><span class=\"pk_07\">7<\/span>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"09:28:13"},"9":{"cid":"11868","text":"<span class=\"pk_qi\">598029\u671f:<\/span><span class=\"pk_01\">1<\/span><span class=\"pk_02\">2<\/span><span class=\"pk_10\">10<\/span><span class=\"pk_07\">7<\/span><span class=\"pk_04\">4<\/span><span class=\"pk_08\">8<\/span><span class=\"pk_05\">5<\/span><span class=\"pk_09\">9<\/span><span class=\"pk_03\">3<\/span><span class=\"pk_06\">6<\/span>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"09:23:18"},"8":{"cid":"11867","text":"<span class=\"pk_qi\">598028\u671f:<\/span><span class=\"pk_08\">8<\/span><span class=\"pk_10\">10<\/span><span class=\"pk_04\">4<\/span><span class=\"pk_03\">3<\/span><span class=\"pk_02\">2<\/span><span class=\"pk_07\">7<\/span><span class=\"pk_09\">9<\/span><span class=\"pk_06\">6<\/span><span class=\"pk_01\">1<\/span><span class=\"pk_05\">5<\/span>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"09:17:51"},"7":{"cid":"11866","text":"<span class=\"pk_qi\">598027\u671f:<\/span><span class=\"pk_09\">9<\/span><span class=\"pk_10\">10<\/span><span class=\"pk_01\">1<\/span><span class=\"pk_02\">2<\/span><span class=\"pk_08\">8<\/span><span class=\"pk_07\">7<\/span><span class=\"pk_03\">3<\/span><span class=\"pk_06\">6<\/span><span class=\"pk_05\">5<\/span><span class=\"pk_04\">4<\/span>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"09:13:12"},"6":{"cid":"11865","text":"<span class=\"pk_qi\">598026\u671f:<\/span><span class=\"pk_07\">7<\/span><span class=\"pk_08\">8<\/span><span class=\"pk_05\">5<\/span><span class=\"pk_09\">9<\/span><span class=\"pk_10\">10<\/span><span class=\"pk_01\">1<\/span><span class=\"pk_02\">2<\/span><span class=\"pk_03\">3<\/span><span class=\"pk_04\">4<\/span><span class=\"pk_06\">6<\/span>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"09:08:30"},"5":{"cid":"11863","text":"\u548c\/3,4\/5","name":"\u8bd5\u73a9\u7528\u6237","pic":"2","type":2,"time":"02:07:25"},"4":{"cid":"11861","text":"1\/25890\/5","name":"\u8bd5\u73a9\u7528\u6237","pic":"2","type":2,"time":"02:06:34"},"3":{"cid":"11859","text":"1\/\u5927\/100","name":"\u8bd5\u73a9\u7528\u6237","pic":"14","type":2,"time":"00:47:22"},"2":{"cid":"11858","text":"<span class=\"pk_qi\">598025\u671f:<\/span><span class=\"pk_08\">8<\/span><span class=\"pk_06\">6<\/span><span class=\"pk_07\">7<\/span><span class=\"pk_10\">10<\/span><span class=\"pk_01\">1<\/span><span class=\"pk_03\">3<\/span><span class=\"pk_04\">4<\/span><span class=\"pk_09\">9<\/span><span class=\"pk_02\">2<\/span><span class=\"pk_05\">5<\/span>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"23:58:04"},"1":{"cid":"11857","text":"<table class=\"chat_cltab\"><tr><th colspan=\"2\"><span class=\"cl_qi\">598025<\/span>\u671f \u4e24\u9762\u957f\u9f99<\/th><\/tr><tr><td class=\"cl_tt\">\u7b2c\u56db\u540d-\u5927<\/td><td>5<\/td><\/tr><tr><td class=\"cl_tt\">\u7b2c\u56db\u540d-\u9f99<\/td><td>5<\/td><\/tr><tr><td class=\"cl_tt\">\u7b2c\u4e03\u540d-\u5c0f<\/td><td>6<\/td><\/tr><tr><td class=\"cl_tt\">\u7b2c\u5341\u540d-\u5c0f<\/td><td>10<\/td><\/tr><\/table>","name":"\u5728\u7ebf\u5ba2\u670d","pic":"sys","type":3,"time":"23:57:59"}}}}';
		//$arr=json_decode($str,true);
		//print_r($arr);
		//echo '{"Success":1,"Massage":"OK","Data":{"qi":"598031","endtime":105,"time":1484616555,"online":301,"coin":"99.40","chatlist":[]}}';
		//echo '{"Success":1,"Massage":"OK","Data":{"qi":"598031","endtime":51,"time":1484616609,"online":301,"coin":0,"chatlist":{"1":{"cid":"11870","text":"1\/\u5927\/10","name":"sdfsdf","pic":"12","type":2,"time":"09:30:08"}}}}';
		//echo '{"Success":1,"Massage":"OK","Data":{"qi":"598031","endtime":6,"time":1484616654,"online":301,"coin":"89.40","chatlist":[]}}';
		//echo '{"Success":1,"Massage":"OK","Data":{"qi":"598031","endtime":-4,"time":1484616664,"online":301,"coin":"89.40","chatlist":[]}}';
		//echo '{"Success":1,"Massage":"OK","Data":{"qi":"598032","endtime":196,"time":1484616764,"online":301,"coin":"89.40","chatlist":[]}}';
		$y=GTY;
		$nkj=D("Games")->where("type=".$y." and kjtime>".time())->order("no asc")->find();
		$arr["Success"]=1;
		$arr["Massage"]="OK";
		$arr["Data"]["qi"]=$nkj["no"];
		$arr["Data"]["endtime"]=$nkj["kjtime"]-time()-60;
		$arr["Data"]["time"]=time();
		$arr["Data"]["online"]=301;
		$arr["Data"]["coin"]=$this->uarr["money"];
		$time=I("get.time","");
		if($time==""){
			$count=D("Chatlist")->where("(gtype=0 or gtype=".$y.") and show1=1")->count();
			$cnum=$count-100;
			if($cnum<0){
				$cnum=0;
			}
			$list=D("Chatlist")->fetchsql(!1)->where("(gtype=0 or gtype=".$y.") and show1=1 and type<4")->order("id asc")->limit($cnum,100)->select();
			
			$warr=D("Sysset")->find(1);
			$list[201]["id"]='w1';
			$list[201]["content"]=$warr["welcome"];
			$list[201]["name"]="在线客服";
			$list[201]["pic"]="/pic/sys.jpg";
			$list[201]["type"]=3;
			$list[201]["time"]=time();
			//
			$uid=$this->uarr["id"];
			$m=D("Chatlist");
			$where="uid=".$uid." and type>3";
			$count=D("Chatlist")->where($where)->count();
			$cnum=$count-100;
			if($cnum<0){
				$cnum=0;
			}
			$list1=D("Chatlist")->fetchsql(!1)->where($where)->order("id asc")->limit($cnum,100)->select();
			if(empty($list)){
				$list=$list1;
			}elseif(empty($list1)){
				$list=$list;
			}else{
				$list=array_merge($list,$list1);
			}
			
		}else{
			$time1=time()-25;
			$uid=session("uid");
			if($uid){
				$list=D("Chatlist")->fetchsql(!1)->where("(gtype=0 or gtype=".$y.") and type<4 and time>".$time1." and uid!=".$uid)->order("id asc")->select();
				$list1=D("Chatlist")->fetchsql(!1)->where("type=5 and time>".$time1." and uid=".$uid)->order("id asc")->select();
				//die;
				if(empty($list)){
					$list=$list1;
				}elseif(empty($list1)){
					$list=$list;
				}else{
					$list=array_merge($list,$list1);
				}
				
				
			}else{
				$list=D("Chatlist")->where("(gtype=0 or gtype=".$y.") and type<4 and time>".$time1)->order("id asc")->select();
			}
			
		}
		foreach($list as $key=>$vo){
				$key1=$key+1;
				$arr["Data"]["chatlist"][$key1]["cid"]=$vo["id"];
				$arr["Data"]["chatlist"][$key1]["text"]=$vo["content"];
				$arr["Data"]["chatlist"][$key1]["name"]=$vo["name"];
				$arr["Data"]["chatlist"][$key1]["pic"]=$vo["pic"];
				$arr["Data"]["chatlist"][$key1]["type"]=$vo["type"];
				$arr["Data"]["chatlist"][$key1]["time"]=date("H:i:s",$vo["time"]);
		}
		$str=json_encode($arr);
		echo $str;
	}
	public function natkrsort($array) {
		$keys = array_keys($array);
		natsort($keys);

		foreach ($keys as $k)
		{
			$new_array[$k] = $array[$k];
		}
	   
		$new_array = array_reverse($new_array, true);

		return $new_array;
	}
}