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
class IndexController extends AdminController {

    /**
     * 后台首页
     * @author 麦当苗儿 <zuojiazi@vip.qq.com>
     */
    public function index(){
        $this->meta_title = '管理首页';
        $this->display();
    }
	public function uppic1(){
		$file = $_FILES['file'];//得到传输的数据
	
		//得到文件名称
		$name = $file['name'];
		$type = strtolower(substr($name,strrpos($name,'.')+1)); //得到文件类型，并且都转化成小写
		$allow_type = array('jpg','jpeg','gif','png'); //定义允许上传的类型
		//判断文件类型是否被允许上传
		if(!in_array($type, $allow_type)){
		  //如果不被允许，则直接停止程序运行
		  return ;
		}
		//判断是否是通过HTTP POST上传的
		if(!is_uploaded_file($file['tmp_name'])){
		  //如果不是通过HTTP POST上传的
		  return ;
		}
		$upload_path = "./"; //上传文件的存放路径
		//开始移动文件到相应的文件夹
		$pic1='/Uploads/admin/'.time().session("uid").rand(10,99).'.jpg';
		$pic='.'.$pic1;
		
		if(move_uploaded_file($file['tmp_name'],$pic)){
			   echo json_encode(array(
				'total' => 1,
				 'success' => 1,
				 'pic' => $pic1,
	
			));
		}else{
		  echo "Failed!";
		}
	}
	public function uppic(){
		
		Vendor('image');
		$picname = $_FILES['uploadfile']['name']; 
		$picsize = $_FILES['uploadfile']['size']; 
		if ($picname != "") { 
			if ($picsize > 10014000) { //限制上传大小 
				echo '{"status":0,"content":"图片大小不能超过2M"}';
				exit; 
			} 
			$type = strstr($picname, '.'); //限制上传格式 
			if ($type != ".gif" && $type != ".jpg" && $type != ".png") {
				echo '{"status":2,"content":"图片格式不对！"}';
				exit; 
			}
			$rand = rand(100, 999); 
			$p1=uniqid();
			$pics = uniqid() . $type; //命名图片名称 
			//上传路径 
			$pp="Uploads/admin/".date("Ymd")."/". $p1;
			$pic_path = $pp.$type; 
			$position = strrpos($pic_path,'/');  
			$path = substr($pic_path,0,$position);  
			if(!file_exists($path)){  
			 mkdir($path,0777,true);//创建目录  
			}  
			move_uploaded_file($_FILES['uploadfile']['tmp_name'], $pic_path); 
		} 
		$size = round($picsize/1024,2); //转换成kb 
		/*/图片处理
		$img = new \image($pic_path);
		$pz=getimagesize($pic_path);
		$w=$pz[0];
		$h=$pz[1];
		$widthsize=640;
		if($w>$h){
			if($h>$widthsize){
				$h1=$widthsize;
				$w1=$h1/$h*$w;
				$c1[0]=$widthsize;
				$c1[1]=$widthsize;	
			}else{
				$h1=$h;
				$w1=$w;
				$c1[0]=$h;
				$c1[1]=$h;
			}
			$lc[0]=($w1-$h1)/2;
			$lc[1]=0;
		}else{
			 if($w>$widthsize){
				$w1=$widthsize;
				$h1=$w1/$w*$h;
				$c1[0]=$widthsize;
				$c1[1]=$widthsize;
			}else{
				$h1=$h;
				$w1=$w;
				$c1[0]=$w;
				$c1[1]=$w;
			}
			$lc[1]=($h1-$w1)/2;
			$lc[0]=0;
		}
		$ar1=array($w1,$h1);
		$img->thumb($ar1);
		$pic_path1=$pic_path;
		$img->savepic($pic_path1);
		$img->cut1($c1,$c1,$lc);
		$pic_path2=$pic_path."_square";
		$img->savepic($pic_path2);
		 /*/
		echo '{"status":1,"name":"'.$picname.'","url":"'.$pic_path.'","size":"'.$size.'","content":"上传成功"}';  
	
	}
	public function uppic2(){
		
		Vendor('image');
		$picname = $_FILES['uploadfile']['name']; 
		$picsize = $_FILES['uploadfile']['size']; 
		if ($picname != "") { 
			if ($picsize > 10014000) { //限制上传大小 
				echo '{"status":0,"content":"图片大小不能超过2M"}';
				exit; 
			} 
			$type = strstr($picname, '.'); //限制上传格式 
			if ($type != ".gif" && $type != ".jpg" && $type != ".png") {
				echo '{"status":2,"content":"图片格式不对！"}';
				exit; 
			}
			$rand = rand(100, 999); 
			$p1=uniqid();
			$pics = uniqid() . $type; //命名图片名称 
			//上传路径 
			$pp="Uploads/admin/".date("Ymd")."/". $p1;
			$pic_path = $pp.$type; 
			$position = strrpos($pic_path,'/');  
			$path = substr($pic_path,0,$position);  
			if(!file_exists($path)){  
			 mkdir($path,0777,true);//创建目录  
			}  
			move_uploaded_file($_FILES['uploadfile']['tmp_name'], $pic_path); 
		} 
			$size = round($picsize/1024,2);
		 //图片处理end
		echo '{"status":1,"name":"'.$picname.'","url":"'.$pic_path.'","size":"'.$size.'","content":"上传成功"}';  
	}
	public function uppic3(){
		
		Vendor('image');
		$picname = $_FILES['uploadfile']['name']; 
		$picsize = $_FILES['uploadfile']['size']; 
		if ($picname != "") { 
			if ($picsize > 10014000) { //限制上传大小 
				echo '{"status":0,"content":"图片大小不能超过2M"}';
				exit; 
			} 
			$type = strstr($picname, '.'); //限制上传格式 
			if ($type != ".xls" && $type != ".xlsx") {
				echo '{"status":2,"content":"图片格式不对！"}';
				exit; 
			}
			$rand = rand(100, 999); 
			$p1=uniqid();
			$pics = uniqid() . $type; //命名图片名称 
			//上传路径 
			$pp="Uploads/admin/".date("Ymd")."/". $p1;
			$pic_path = $pp.$type; 
			$position = strrpos($pic_path,'/');  
			$path = substr($pic_path,0,$position);  
			if(!file_exists($path)){  
			 mkdir($path,0777,true);//创建目录  
			}  
			move_uploaded_file($_FILES['uploadfile']['tmp_name'], $pic_path); 
		} 
		$size = round($picsize/1024,2); //转换成kb 

		echo '{"status":1,"name":"'.$picname.'","url":"'.$pic_path.'","size":"'.$size.'","content":"上传成功"}';  
	
	}
}
