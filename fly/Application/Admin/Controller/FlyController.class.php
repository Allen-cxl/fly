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
class FlyController extends AdminController {

    /**
     * 后台首页
     * @author 麦当苗儿 <zuojiazi@vip.qq.com>
     */
    
	public function ports(){
		//print_r(porthtml());die;
		$m=D("Ports");
		$where['isdel']="0";
		$pid=I("get.pid",0);
		$this->assign("pid",$pid);
		$where['pid']=$pid;
		$port=$m->find($pid);
		$this->assign("port",$port);
		$p=I('get.p',0);
        $list = $m->order('sort asc')->where($where)->order("id desc")->page($p.',20')->select();
        $this->assign('list',$list);// 赋值数据集
        $count      = $m->where($where)->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数
        $show       = $Page->show();// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出
		$this->display();
	}
	public function pidata(){
		$y=I("get.y");
		$url=I("post.url");
		$arr=import_excel($url);
		//print_r($arr);die;
		if($y==1){
			foreach($arr as $key=>$vo){
				if($key!=1){
					$data['mport']=$vo[0];
					$data['mportcode']=$vo[1];
					$data['cport']=$vo[2];
					$data['cportcode']=$vo[3];
					$data['mcity']=$vo[4];
					$data['company']=$vo[5];
					$data['companycode']=$vo[6];
					$data['goodstype']=$vo[7];
					$data['flytype']=$vo[8];
					$data['price']=$vo[9];
					$data['gradient']=$vo[10];
					$data['packingtype']=$vo[11];
					$data['region']=$vo[12];
					$data['remarks']=$vo[13];
					$data['cycle']=$vo[14];
					$data['day']=$vo[15];
					$data['starttime']=$vo[16];
					$data['deadline']=$vo[17];
					$data['flight']=$vo[18];
					D("Freight")->add($data);
				}
			}
		}elseif($y==2){
			foreach($arr as $key=>$vo){
				if($key!=1){
					$data['mport']=$vo[0];
					$data['mportcode']=$vo[1];
					$data['cport']=$vo[2];
					$data['cportcode']=$vo[3];
					$data['company']=$vo[4];
					$data['hdata']=$vo[5];
					$data['ctime']=$vo[6];
					$data['remarks']=$vo[7];
					D("Line")->add($data);
				}
			}
		}elseif($y==3){
			//city,threecode,airport,country,time,isdel,tag,icao,quyu,shiqu,jitype,bank,zhou
			foreach($arr as $key=>$vo){
				if($key!=1){
					$data['city']=$vo[0];
					$data['threecode']=$vo[1];
					$data['tag']=$vo[2];
					$data['airport']=$vo[3];
					$data['country']=$vo[4];
					$data['icao']=$vo[5];
					$data['quyu']=$vo[6];
					$data['shiqu']=$vo[7];
					$data['zhou']=$vo[8];
					$data['jitype']=$vo[9];
					$data['bank']=$vo[10];
					D("Threecode")->add($data);
				}
			}
		}
		echo '导入成功';
	}
	public function pedite(){
		$m=D("Ports");
		if(IS_POST){
			$id=I("post.id",0);
			if($id){
				unset($_POST['pid']);
				$m->create();
				$m->save();
			}else{
				$pid=I("post.pid");
				if($pid){
					$pd=$m->find($pid);
					$_POST["type"]=$pd["type"]+1;
				}
				$m->create();
				$m->add();
			}
			$this->success("编辑成功");
		}else{
			$id=I("get.id",0);
			$pid=I("get.pid",0);
			$this->assign("pid",$pid);
			$data=$m->where("id=".$id)->find();
			$this->assign("data",$data);
			$this->display();
		}
	}
	public function pdel(){
		$m=D("Ports");
		$data['isdel']=1;
		$m->where("id=".I("get.id"))->save($data);
		$this->success("删除成功");
	}

	public function tjlist(){
		$mport=I('mport');
		$gt =D("Goodstype")->order('sort asc')->where("isdel=0")->getfield("id,name");
		$this->assign("gt",$gt);
		$cp =D("Company")->order('sort asc')->where("isdel=0")->getfield("id,cname");
		$this->assign("cp",$cp);
		$m=D("Freight");
		$where['isdel']="0";
		$p=I('get.p',0);
		if($mport){
			$where["mport"]=array("like","%".$mport."%");
		}
        $list = $m->order('id desc')->where($where)->page($p.',20')->select();
        $this->assign('list',$list);// 赋值数据集
        $count      = $m->where($where)->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数
        $show       = $Page->show();// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出
		$this->display();
	}

	public function tjedite(){
		$m=D("Freight");
        $gt =D("Goodstype")->order('sort asc')->where("isdel=0")->getfield("id,name");
		$this->assign("gt",$gt);
		$cp =D("Company")->order('sort asc')->where("isdel=0")->getfield("id,cname");
		$this->assign("cp",$cp);
		if(IS_POST){
			$gradient=I("post.gradient");
			$gradient=str_replace("；",";",$gradient);
			$_POST['gradient']=$gradient;
			$price=explode(";",$gradient);
			$_POST['price']=$price[0];
			$id=I("post.id");
			if($id){
				$m->create();
				$m->save();
			}else{
				$_POST['time']=time();
				$m->create();
				$m->add();
			}
			$this->success("编辑成功");
		}else{
			$id=I("get.id",0);
			$data=$m->where("id=".$id)->find();
			$this->assign("data",$data);
			$this->display();
		}
	}
	public function tjdel(){
		$m=D("Freight");
		$id=I("get.id",0);
		$data['isdel']=1;
		$m->where("id=".$id)->save($data);
		$this->success("删除成功！");
	}
	public function linelist(){
		$m=D("Line");
		$mport=I('mport');
		$where['isdel']="0";
		if($mport){
			$where["mport"]=array("like","%".$mport."%");
		}
		$p=I('get.p',0);
        $list = $m->order('id desc')->where($where)->page($p.',20')->select();
        $this->assign('list',$list);// 赋值数据集
        $count      = $m->where($where)->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数
        $show       = $Page->show();// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出
		$this->display();
	}

	public function ledite(){
		$m=D("Line");
		if(IS_POST){
			$id=I("post.id");
			if($id){
				$m->create();
				$m->save();
			}else{
				$_POST['time']=time();
				$m->create();
				$m->add();
			}
			$this->success("编辑成功");
		}else{
			$id=I("get.id",0);
			$data=$m->where("id=".$id)->find();
			$this->assign("data",$data);
			$this->display();
		}
	}
	public function ldel(){
		$m=D("Line");
		$id=I("get.id",0);
		$data['isdel']=1;
		$m->where("id=".$id)->save($data);
		$this->success("删除成功！");
	}
	public function threelist(){
		$m=D("Threecode");
		$where['isdel']="0";
		$p=I('get.p',0);
        $list = $m->order('id desc')->where($where)->page($p.',20')->select();
        $this->assign('list',$list);// 赋值数据集
        $count      = $m->where($where)->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数
        $show       = $Page->show();// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出
		$this->display();
	}

	public function tedite(){
		$m=D("Threecode");
		if(IS_POST){
			$id=I("post.id");
			if($id){
				$m->create();
				$m->save();
			}else{
				$_POST['time']=time();
				$m->create();
				$m->add();
			}
			$this->success("编辑成功");
		}else{
			$id=I("get.id",0);
			$data=$m->where("id=".$id)->find();
			$this->assign("data",$data);
			$this->display();
		}
	}
	public function tdel(){
		$m=D("Threecode");
		$id=I("get.id",0);
		$data['isdel']=1;
		$m->where("id=".$id)->save($data);
		$this->success("删除成功！");
	}
	public function goodslist(){
		$m=D("Transport");
		$where['isdel']="0";
		$p=I('get.p',0);
        $list = $m->order('id desc')->where($where)->page($p.',20')->select();
        $this->assign('list',$list);// 赋值数据集
        $count      = $m->where($where)->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数
        $show       = $Page->show();// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出
		$this->display();
	}

	public function gedite(){
		$m=D("Transport");
		if(IS_POST){
			$id=I("post.id");
			if($id){
				$m->create();
				$m->save();
			}else{
				$_POST['time']=time();
				$m->create();
				$m->add();
			}
			$this->success("编辑成功");
		}else{
			$id=I("get.id",0);
			$data=$m->where("id=".$id)->find();
			$this->assign("data",$data);
			$this->display();
		}
	}
	public function gdel(){
		$m=D("Transport");
		$id=I("get.id",0);
		$data['isdel']=1;
		$m->where("id=".$id)->save($data);
		$this->success("删除成功！");
	}
	public function goodstype(){
		$m=D("Goodstype");
		$where['isdel']="0";
		$p=I('get.p',0);
        $list = $m->order('sort asc')->where($where)->page($p.',20')->select();
        $this->assign('list',$list);// 赋值数据集
        $count      = $m->where($where)->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数
        $show       = $Page->show();// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出
		$this->display();
	}

	public function gtedite(){
		$m=D("Goodstype");
		if(IS_POST){
			$id=I("post.id");
			if($id){
				$m->create();
				$m->save();
			}else{
				$_POST['time']=time();
				$m->create();
				$m->add();
			}
			$this->success("编辑成功");
		}else{
			$id=I("get.id",0);
			$data=$m->where("id=".$id)->find();
			$this->assign("data",$data);
			$this->display();
		}
	}
	public function gtdel(){
		$m=D("Goodstype");
		$id=I("get.id",0);
		$data['isdel']=1;
		$m->where("id=".$id)->save($data);
		$this->success("删除成功！");
	}
	
	public function company(){
		$m=D("Company");
		$name=I('name');
		$where['isdel']="0";
		$p=I('get.p',0);
		if($name){
			$where["cname"]=array("like","%".$name."%");
		}
        $list = $m->order('sort asc')->where($where)->page($p.',20')->select();
        $this->assign('list',$list);// 赋值数据集
        $count      = $m->where($where)->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数
        $show       = $Page->show();// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出
		$this->display();
	}

	public function cedite(){
		$m=D("Company");
		if(IS_POST){
			$id=I("post.id");
			if($id){
				$m->create();
				$m->save();
			}else{
				$_POST['time']=time();
				$m->create();
				$m->add();
			}
			$this->success("编辑成功");
		}else{
			$id=I("get.id",0);
			$data=$m->where("id=".$id)->find();
			$this->assign("data",$data);
			$this->display();
		}
	}
	public function ctdel(){
		$m=D("Company");
		$id=I("get.id",0);
		$data['isdel']=1;
		$m->where("id=".$id)->save($data);
		$this->success("删除成功！");
	}
	public function record(){
		$m=D("Record");
		$where['lovevi_record.isdel']="0";
		$p=I('get.p',0);
        $list = $m->field("lovevi_record.*,lovevi_users.name as uname,lovevi_users.tel as mobile,lovevi_wtshu.name as wname,lovevi_wtshu.url as wurl")->join("LEFT JOIN lovevi_wtshu on lovevi_wtshu.id=lovevi_record.wid")->join("lovevi_users on lovevi_users.id=lovevi_record.uid")->order('lovevi_record.id desc')->where($where)->page($p.',20')->select();
        $this->assign('list',$list);// 赋值数据集
        $count      = $m->where($where)->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,20);// 实例化分页类 传入总记录数和每页显示的记录数
        $show       = $Page->show();// 分页显示输出
        $this->assign('page',$show);// 赋值分页输出
		$this->display();
	}
	public function redel(){
		$m=D("Record");
		$id=I("get.id",0);
		$data['isdel']=1;
		$m->where("id=".$id)->save($data);
		$this->success("删除成功！");
	}
	public function resub(){
		$m=D("Record");
		$id=I("get.id",0);
		$re=$m->where("id=".$id)->find();
		if($re['state']==1){
			$data['state']=0;
		}else{
			$data['state']=1;
		}
		$m->where("id=".$id)->save($data);
		$this->success("确认成功！");
	}
}
