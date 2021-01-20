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
class NewsController extends AdminController {

	 public function lists(){
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
	 public function del(){
		 $id=I("get.id");
		 D("News")->where("id=".$id)->delete();
		 $this->success("删除成功");
	 }
	 
	public function add(){
		 $id=I("get.id",0);
		 if(IS_POST){
			 $data["title"]=I("post.title");
			 $data["content"]=I("post.content");
			 if($id){
				 D("News")->where("id=".$id)->save($data);
			 }else{
				 $data["time"]=time();
				 $data["title"]=I("post.title");
				 $data["content"]=I("post.content");
				 D("News")->add($data);
			 }
			 $this->success("操作成功",U("news/lists"));
		 }else{
			 $data=D("News")->where("id=".$id)->find();
			 $this->assign("data",$data);
			 $this->assign("id",$id);
			 $this->display();
		 }
	 }
	 
}
