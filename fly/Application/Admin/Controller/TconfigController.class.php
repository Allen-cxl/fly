<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.lovevi.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Admin\Controller;
use User\Api\UserApi as UserApi;

/**
 * 后台首页控制器
 * @author 麦当苗儿 <zuojiazi@vip.qq.com>
 */
class TconfigController extends AdminController {

    /**
     * 后台首页
     * @author 麦当苗儿 <zuojiazi@vip.qq.com>
     */
    public function website(){
		if(IS_POST){
			$m=D("Tconfig");
			$m->create();
			$m->fetchsql(!1)->save();
			$this->success("修改成功");
		}else{
			$data=D("Tconfig")->find(1);
			$this->assign("data",$data);
			$this->display();
		}
		
		
	}
	public function urln(){
		if(IS_POST){
			$m=D("Tconfig");
			$m->create();
			$m->fetchsql(!1)->save();
			$this->success("修改成功");
		}else{
			$data=D("Tconfig")->find(1);
			$this->assign("data",$data);
			$this->display();
		}
		
		
	}
	public function banner(){
		$m=D("Banner");
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
	public function badd(){
		if(IS_POST){
			$m=D("Banner");
			$data["name"]=I("post.name");
			$data["url"]=I("post.url");
			$data["pic"]=I("post.pic");
			$m->add($data);
			$this->success("添加成功");
		}else{
			$this->display();
		}
	}
	public function bedite(){
		if(IS_POST){
			$m=D("Banner");
			$data["name"]=I("post.name");
			$data["url"]=I("post.url");
			$data["pic"]=I("post.pic");
			$m->where("id=".I("post.id"))->save($data);
			$this->success("编辑成功");
		}else{
			$m=D("Banner");
			$data=$m->where("id=".I("get.id"))->find();
			$this->assign("data",$data);
			$this->display();
		}
	}
	public function bdel(){
		$m=D("Banner");
		$m->where("id=".I("get.id"))->delete();
		$this->success("删除成功");
	}
	public function banner1(){
		$m=D("Png");
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
	public function badd1(){
		if(IS_POST){
			$m=D("Png");
			$data["pic"]=I("post.pic");
			$data["name"]=I("post.name");
			$m->add($data);
			$this->success("添加成功");
		}else{
			$this->display();
		}
	}
	public function bedite1(){
		if(IS_POST){
			$m=D("Png");
			$data["pic"]=I("post.pic");
			$m->where("id=".I("post.id"))->save($data);
			$this->success("编辑成功");
		}else{
			$m=D("Png");
			$data=$m->where("id=".I("get.id"))->find();
			$this->assign("data",$data);
			$this->display();
		}
	}
	public function bdel1(){
		$m=D("Png");
		$m->where("id=".I("get.id"))->delete();
		$this->success("删除成功");
	}
	public function news(){
		$m=D("News");
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
	public function nadd(){
		if(IS_POST){
			$m=D("News");
			$data["title"]=I("post.title");
			$data["content"]=I("post.content");
			$data["top"]=I("post.top");
			$data["time"]=time();
			$m->add($data);
			$this->success("添加成功");
		}else{
			$this->display();
		}
	}
	public function nedite(){
		if(IS_POST){
			$m=D("News");
			$id=I("post.id",0);
			if($id){
				$m->create();
				$m->save();
			}else{
				unset($_POST['id']);
				$_POST["time"]=time();
				$m->create();
				$m->add();
			}

			$this->success("编辑成功");
		}else{
			$m=D("News");
			$id=I("get.id",0);
			$data=$m->where("id=".$id)->find();
			$this->assign("data",$data);
			$this->display();
		}
	}
	public function ndel(){
		$m=D("News");
		$m->where("id=".I("get.id"))->delete();
		$this->success("删除成功");
	}
}
