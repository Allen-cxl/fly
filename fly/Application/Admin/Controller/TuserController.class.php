<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.lovevi.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: yangweijie <yangweijiester@gmail.com> <code-tech.diandian.com>
// +----------------------------------------------------------------------

namespace Admin\Controller;

/**
 * 扩展后台管理页面
 * @author yangweijie <yangweijiester@gmail.com>
 */
class TuserController extends AdminController {

	 public function lists(){
		$m=D("Users");
		$did=I("get.uid",0);
		if(!$did){
			$where="";
		}else{
			$where["id"]=$did;
		}
		
		$p=I('get.p',0);
        $list = $m->order('id desc')->where($where)->page($p.',20')->select();
        $this->assign('list',$list);// 赋值数据集
        $count      = $m->where($where)->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数
        //print_r($list);die;
        $show       = $Page->show();// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出
		$this->display();
	 }
	 public function tongji(){
		$m=D("Tongji");
		$arr=array('','进入','登陆','咨询','收藏');
		$this->assign("arr",$arr);
		$p=I('get.p',0);
        $list = $m->order('id desc')->page($p.',20')->select();
        $this->assign('list',$list);// 赋值数据集
        $count      = $m->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数
        //print_r($list);die;
        $show       = $Page->show();// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出
		$this->display();
	 }
	 public function newpwd($id,$txt){
		 $data["pwd"]=$txt;
		 D("Users")->where("id=".$id)->save($data);
	 }
	 public function changepwd(){
		 $id=I("post.id");
		 $data["pwd"]=md5(I("post.pwd"));
		 D("Users")->where("id=".$id)->save($data);
		 echo 'ok';
	 }
	 public function tostate(){
		 $id=I("get.id");
		 $user=D("Users")->where("id=".$id)->find();
		if($user["state"]==0){
			$data["state"]=1;
		}else{
			$data["state"]=0;
		}
		D("Users")->where("id=".$id)->save($data);
		 $this->success("修改成功");
	 }
	 public function del(){
		 $id=I("get.id");
		 D("Users")->where("id=".$id)->delete();
		 $this->success("删除成功");
	 }
	 public function xianhong(){
		 if(IS_POST){
			 $data["maxbet"]=I("post.maxbet");
			 $data["minbet"]=I("post.minbet");
			 D("Sysset")->where("id=1")->save($data);
			 $this->success("修改成功");
		 }else{
			 $data=D("Sysset")->find(1);
			 $this->assign("data",$data);
			 $this->display();
		 }		 
	 }
	  public function delsms(){
		 $id=I("get.id");
		 D("Chatlist")->where("id=".$id)->delete();
		 $this->success("删除成功");
	 }
	public function sendsms(){
		 $id=I("get.id",0);
		 if(IS_POST){
			 $data["name"]=I("post.name");
			 $data["content"]=I("post.content");
			 if($id){
				 D("Chatlist")->where("id=".$id)->save($data);
			 }else{
				 $data["time"]=time();
				 $data["pic"]="/pic/sys.jpg";
				 $data["type"]=3;
				 D("Chatlist")->add($data);
			 }
			 $this->success("操作成功",U("tuser/sms"));
		 }else{
			 $data=D("Chatlist")->where("id=".$id)->find();
			 $this->assign("data",$data);
			 $this->assign("id",$id);
			 $this->display();
		 }
	 }
	 public function sms(){
		$m=D("Chatlist");
		$where="";
		$p=I('get.p',0);
        $list = $m->order('id desc')->where($where)->page($p.',20')->select();
        $this->assign('list',$list);// 赋值数据集
        $count      = $m->where($where)->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数
        
        $show       = $Page->show();// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出
		 $this->display();
	 }
	 public function csms(){
		$uid=I("get.uid");
		$m=D("Chatlist");
		$where="uid=".$uid." and type>3";
		$count=D("Chatlist")->where($where)->count();
		$cnum=$count-100;
		if($cnum<0){
			$cnum=0;
		}
		$list=D("Chatlist")->fetchsql(!1)->where($where)->order("id asc")->limit($cnum,100)->select();
		$data["state"]=0;
		D("Chatlist")->where($where)->save($data);
		$this->assign("list",$list);
		$this->display();
	 }
	 public function clists(){
		$m=D("Chatlist");
		$where="type=4";
		$p=I('get.p',0);
        $list = $m->field("sum(state) as num,pic,uid,name,id,uid")->order("num desc")->group("uid")->where($where)->page($p.',20')->select();
        $this->assign('list',$list);// 赋值数据集
        $count      = $m->where($where)->group("uid")->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数
        
        $show       = $Page->show();// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出
		$this->display();
	 }
	 public function csend(){
		$uid=I("post.uid");
		$list=D("Chatlist")->fetchsql(!1)->where("state=1 and uid=".$uid." and type=4")->order("id asc")->select();
		if(empty($list)){
			$arr["Success"]=0;
		}else{
			$data["state"]=0;
		    D("Chatlist")->where("state=1 and uid=".$uid." and type=4")->save($data);
			$arr["Success"]=1;
			foreach($list as $key=>$vo){
				$key1=$key;
				$arr["Data"][$key1]["cid"]=$vo["id"];
				$arr["Data"][$key1]["text"]=$vo["content"];
				$arr["Data"][$key1]["name"]=$vo["name"];
				$arr["Data"][$key1]["pic"]=$vo["pic"];
				$arr["Data"][$key1]["type"]=$vo["type"];
				$arr["Data"][$key1]["time"]=date("m-d H:i",$vo["time"]);
			}
		}
		$str=json_encode($arr);
		echo $str; 
	 }
	 public function csend1(){
		 $uid=I("post.uid");
		 $con=I("post.con");
		 $data["name"]="在线客服";
		 $data["content"]=I("post.con");
		 $data["time"]=time();
		 $data["uid"]=$uid;
		 $data["pic"]="/pic/sys.jpg";
		 $data["type"]=5;
		 D("Chatlist")->add($data);
	 }
	 public function newsms(){
		$is=D("Chatlist")->where("type=4 and state=1")->count();
		$sf=D("Recharge")->where("type=1 and state=0")->count();
		$xf=D("Recharge")->where("type=2 and state=0")->count();
		 if($is!=0){
			$arr["suc"]=1;
			$arr["newnum"]=$is;
			$arr["sfnum"]=$sf;
			$arr["xfnum"]=$xf;	
		 }elseif($sf!=0){
			$arr["suc"]=2;
			$arr["newnum"]=$is;
			$arr["sfnum"]=$sf;
			$arr["xfnum"]=$xf; 
		 }elseif($xf!=0){
			$arr["suc"]=3;
			$arr["newnum"]=$is;
			$arr["sfnum"]=$sf;
			$arr["xfnum"]=$xf; 
		 }else{
			 $arr["suc"]=0;
		 }
		 $this->ajaxReturn($arr);
	 }
}
