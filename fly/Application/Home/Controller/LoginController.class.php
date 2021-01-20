<?php

namespace Home\Controller;

/**
 * 前台首页控制器
 * 主要获取首页聚合数据
 */
class LoginController extends HomeController
{
	/* 空操作，用于输出404页面 */
	protected function _initialize(){
		$this->assign("nav",6);
		parent::_initialize();
    }
	public function retrievepwdfirst(){
		$this->display();
	}
	public function reg(){
		if(IS_POST){
			$vcode=I("post.vcode");
			$verify = new \Think\Verify();
			$arr["s"]=0;
			if($verify->check($vcode)){
				$email=I("post.email");
				$name=I("post.name");
				$pwd=I("post.password");
				$rpwd=I("post.repassword");
				$tel=I("post.tel");
				if($pwd!=$rpwd){
					$arr["msg"]= '两次密码不一致';
				}else{
					$where["user"]=$email;
					$user=D("Users")->where($where)->find();
					if($user){
						$arr["msg"]= '邮箱已经存在了，请更换其他邮箱！';
					}else{
						$arr["s"]=1;
						$data["user"]=$email;
						$data["name"]=$name;
						$data["pwd"]=md5($pwd);
						$data["tel"]=$tel;
						$data["time"]=time();
						D("Users")->add($data);
					}
				}
			}else{
				$arr["msg"]='验证码错误！';
			}
			$this->ajaxReturn($arr);
		}else{
			$this->display();
		}
	}
	public function registerfirst(){
		$this->display();
	}
	public function login(){
		if(IS_POST){
			$vcode=I("post.vcode");
			$verify = new \Think\Verify();
			$arr["s"]=0;
			if($verify->check($vcode)){
				$user=I("post.username");
				$pwd=I("post.password");
				$where["user"]=$user;
				$where["pwd"]=md5($pwd);
				$user=D("Users")->where($where)->find();
				if(!$user){
					$arr["msg"]= '用户名或密码错误';
				}else{
					$arr["s"]=1;
					session("uid",$user["id"]);
					
					$url=I("get.url");
					if($url==""){
						$url="/home/user/center";
					}else{
						$url=base64_decode($url);
					}
					$arr['url']=$url;
					$ip = get_client_ip();
					$day=date("Y-m-d");
					$ttdata["state"]=2;
					$ttdata["ip"]=$ip;
					$ttdata["day"]=$day;
					D("Tongji")->add($ttdata);
				}
			}else{
				$arr["msg"]='验证码错误！';
			}
			$this->ajaxReturn($arr);
		}else{
			$url=I("get.url");
			$this->assign("url",$url);
			$this->display();
		}
	}
	public function verify(){
		$config =    array(
		
			'length'      =>    4,     // 验证码位数
			'useNoise'    =>    false, // 关闭验证码杂点
		);
		$Verify =     new \Think\Verify($config);
		$Verify->entry();
	}
	public function shoucang(){
		$ip = get_client_ip();
		$day=date("Y-m-d");
		if(!D("Tongji")->where("state=4 and ip='".$ip."' and day='".$day."'")->find()){
			$ttdata["state"]=4;
			$ttdata["ip"]=$ip;
			$ttdata["day"]=$day;
			D("Tongji")->add($ttdata);
		}
	}
	public function zixun(){
		$ip = get_client_ip();
		$day=date("Y-m-d");
		$ttdata["state"]=3;
		$ttdata["ip"]=$ip;
		$ttdata["day"]=$day;
		D("Tongji")->add($ttdata);
		$url="http://wpa.qq.com/msgrd?v=3&amp;uin=".$this->sys["qq"]."&amp;site=qq&amp;menu=yes";
		redirect($url);
	}
}
