<?php

// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.lovevi.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Home\Controller;

/**
 * 前台首页控制器
 * 主要获取首页聚合数据
 */
class UserController extends HomeController
{
	protected function _initialize(){
		$this->assign("nav",6);
		$this->_uid= session('uid');
        if (empty($this->_uid)) {
			$qu='http://'.$_SERVER['HTTP_HOST'].'/'.$_SERVER['REQUEST_URI'];
			$qu=base64_encode($qu);
			$url="/home/login/login/url/".$qu;
			redirect($url);
			die;
		}
		parent::_initialize();
    }
	public function logout(){
		session("uid",null);
		redirect("/home/index/index");
	}
    public function center(){
		$this->assign("unav",1);
		$s=I("get.s",0);
		$this->assign("s",$s);
		$this->display();
	}
	public function getlist(){
		$s=I("post.s");
		$incode=I("post.incode");
		$maincode=I("post.maincode");
		$stime=I("post.stime");
		$etime=I("post.etime");
		$p=I("post.p");
		if($incode!=""){
			$where["incode"]=$incode;
		}
		if($maincode!=""){
			$where["maincode"]=$maincode;
		}
		if($stime!=""){
			$where["ktime"]=array("gt",$stime);
		}
		if($etime!=""){
			$where["ktime"]=array("lt",$etime);
		}
		$where["isdel"]=0;
		$where["uid"]=session("uid");
		$where["state"]=$s;
		$start=($p-1)*10;
		$list=D("Record")->fetchsql(!1)->where($where)->limit($start.",10")->select();
	
		if($list){
			$this->assign("has",1);
		}else{
			$this->assign("has",0);
		}
		$count=D("Record")->where($where)->count();
		$this->assign("count",$count);
		$count=floor($count/10)+1;
        $show=$this->topage($p,$count,8);
        $this->assign('page',$show);// 赋值分页输出
		$this->assign("list",$list);
		$this->display();
	}
	public function todel(){
		$id=I("post.id");
		$data["isdel"]=1;
		D("Record")->where("id=".$id)->save($data);
	}

	public function changepwd(){
		$this->assign("unav",3);
		if(IS_POST){
		
			$arr['s']=0;
				$pwd=I("post.pwd");
				$newpwd=I("post.newpwd");
				$renewpwd=I("post.renewpwd");
				if($newpwd!=$renewpwd){
					$arr['msg']="两次密码不一致！";
				}elseif(md5($pwd)!=$this->uarr["pwd"]){
					$arr['msg']="原密码不正确！";
				}else{
					$data["pwd"]=md5($newpwd);
					D("Users")->where("id=".session("uid"))->save($data);
					$arr['s']=1;
				}
			$this->ajaxReturn($arr);
		}else{
			$this->display();
		}
	}
	public function dhRecord(){
		$this->assign("unav",2);
		$this->display();
	}
	public function pay(){
		$id=I("get.id",0);
		$data=D("Freight")->find($id);
		$this->assign("data",$data);
		$cp =D("Company")->order('sort asc')->where("isdel=0")->getfield("id,cname");
		$this->assign("cp",$cp);
		$gy =D("goodstype")->order('sort asc')->where("isdel=0")->getfield("id,name");
		$this->assign("gy",$gy);
		$this->display();
	}
	public function topay(){
		if(IS_POST){
			$m=D("Record");
			$_POST["time"]=time();
			$_POST["uid"]=session("uid");
			$m->create();
			$m->add();
		}else{
			$id=I("get.id",0);
			$data=D("Freight")->find($id);
			$this->assign("data",$data);
			$cp =D("Company")->order('sort asc')->where("isdel=0")->getfield("id,cname");
			$this->assign("cp",$cp);
			$gy =D("goodstype")->order('sort asc')->where("isdel=0")->getfield("id,name");
			$this->assign("gy",$gy);
			$this->display();
		}
	}
}
