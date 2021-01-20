<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.lovevi.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Home\Controller;
use Think\Controller;

/**
 * 前台公共控制器
 * 为防止多分组Controller名称冲突，公共Controller名称统一使用分组名称
 */
class HomeController extends Controller {

	/* 空操作，用于输出404页面 */
	public function _empty(){
	//	$this->redirect('Index/index');
	}

    protected function _initialize(){
		$dd=D("Tconfig")->find(1);
        $config = api('Config/lists');
        C($config); 
        if(!C('WEB_SITE_CLOSE')){
            $this->error('站点已经关闭，请稍后访问~');
        }
		$ip = get_client_ip();
		$day=date("Y-m-d");
		if(!D("Tongji")->where("state=1 and ip='".$ip."' and day='".$day."'")->find()){
			$ttdata["state"]=1;
			$ttdata["ip"]=$ip;
			$ttdata["day"]=$day;
			D("Tongji")->add($ttdata);
		}
		$this->sys=D("Tconfig")->find(1);
		$this->assign("sys",$this->sys);
		$this->_uid= session('uid');
        if (!empty($this->_uid)) {
			$this->uarr=D('Users')->where('id='.$this->_uid)->find();
			$this->assign("uarr",$this->uarr);
			$this->assign("islog",1);
		}else{
			$this->assign("islog",0);
		}
    }
	public function topage($now,$zong,$ye){
		$k=($ye-1)/2;
		$start=1;
		$tol=$k+$k+1;
		$wei=1;
		$tou=1;
		if(($now+$k)>=$zong){
			$start=$zong-$k-$k;
		}else{
			$start=$now-$k;
		}
		if($start<=1){
			$start=1;
		}
		if($tol>$zong){
			$tol=$zong;
		}
		if($now==1){
			$tou=0;
		}else{
			$tou=$now-1;
		}
		if($now==$zong){
			$wei=0;
		}else{
			$wei=$now+1;
		}
		$end=$start+$tol;
		$arr=array();
		for($i=$start;$i<$end;$i++){
			$arr[]=$i;
		}
		$tpage=ceil($zong/$ye);
		$arr1=array("num"=>$arr,"tou"=>$tou,"wei"=>$wei,"now"=>$now,"zong"=>$zong);
		return $arr1;
	}
	
}
