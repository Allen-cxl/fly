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
 * 前台首页控制器
 * 主要获取首页聚合数据
 */
class QrcodeController extends Controller {


    //系统首页
	
   public function index($url){
  
  Vendor('phpqrcode.phpqrcode');
  
  $errorCorrectionLevel =intval(8) ;//容错级别 
  $matrixPointSize = intval(10);//生成图片大小 
//生成二维码图片 
  //echo $_SERVER['REQUEST_URI'];
  $object = new \QRcode();
  $object->png($url, false, $errorCorrectionLevel, $matrixPointSize, 3);   

 }
	public function test(){
		Vendor('lib.QrReader');
  
		  $qrcode = new \QrReader('./weiup/jpg/16404_2');  //图片路径
			$text = $qrcode->text(); //返回识别后的文本
			echo $text;  

	}
	   public function sharepic(){
			$ur=I("get.y");
		  Vendor('phpqrcode.phpqrcode');
		  $url='http://'.$_SERVER['HTTP_HOST'].'/'.base64_decode($ur);
		  $errorCorrectionLevel =intval(15) ;//容错级别 
		  $matrixPointSize = intval(30);//生成图片大小 
		//生成二维码图片 
		  //echo $_SERVER['REQUEST_URI'];
		  $object = new \QRcode();
		  $object->png($url, "qrcode.png", $errorCorrectionLevel, $matrixPointSize, 3);   
			$logo = 'qrcode.png';//准备好的logo图片 

			$QR = 'bg2.jpg';//已经生成的原始二维码图 
			$QR = imagecreatefromstring(file_get_contents($QR));    //$original[2]是图片类型，其中1表示gif、2表示jpg、3表示png
			 $posX = 0;    //X坐标
			$poxY = 32;    //Y坐标
			$font_size = 12;    //字号
			$tilt = 0;    //文字的倾斜度
			$color = imagecolorallocate($QR,255,255,255);// 为一幅图像分配颜色 255,0,0表示红色
			$content="";
			$str = "";
			for ($i=0;$i<mb_strlen($str,'UTF8');$i++) {
				$letter[] = mb_substr($str, $i, 1,'UTF8');
			}
			foreach ($letter as $l) {
				$teststr = $content.$l;
				$fontBox = imagettfbbox($font_size, 0,'C:/Windows/Fonts/msyhbd.ttf', $teststr);
				// $testbox = imagettfbbox($fontsize, $angle, $fontface, $teststr);
				// 判断拼接后的字符串是否超过预设的宽度
				if (($fontBox[2] > 320) && ($content !== "")) {
					break;
				}
				$content .= $l;
			}
			//居中
			$arr=imagettfbbox($font_size, 0,'C:/Windows/Fonts/msyhbd.ttf', $content);
			$posX=floor((421-$arr[2])/2);
			imagettftext($QR, $font_size, $tilt, $posX, $poxY, $color, 'C:/Windows/Fonts/msyhbd.ttf', $content);  
			//居中end
			
			//输出图片 

			 $logo = imagecreatefromstring(file_get_contents($logo)); 
			 $QR_width = imagesx($QR);//二维码图片宽度 
			 $QR_height = imagesy($QR);//二维码图片高度 
			 $logo_width = imagesx($logo);//logo图片宽度 
			 $logo_height = imagesy($logo);//logo图片高度 
			 $logo_qr_width = 310; 
			 $scale = $logo_width/$logo_qr_width; 
			 $logo_qr_height = $logo_height/$scale; 
			 $from_width = ($QR_width - $logo_qr_width) / 2; 
			 //重新组合图片并调整大小 
			 imagecopyresampled($QR, $logo, 170, 160, 0, 0, $logo_qr_width, 
			 $logo_qr_height, $logo_width, $logo_height); 
	
			//输出图片 
			Header("Content-type: image/png");
			ImagePng($QR);
	}
	 public function sharepic1(){
			$ur=I("get.y");
		  Vendor('phpqrcode.phpqrcode');
		  $url='http://'.$_SERVER['HTTP_HOST'].'/'.base64_decode($ur);
		  $errorCorrectionLevel =intval(15) ;//容错级别 
		  $matrixPointSize = intval(30);//生成图片大小 
		//生成二维码图片 
		  //echo $_SERVER['REQUEST_URI'];
		  $object = new \QRcode();
		  $object->png($url, "qrcode.png", $errorCorrectionLevel, $matrixPointSize, 3);   
			$logo = 'qrcode.png';//准备好的logo图片 

			$QR = 'userm.jpg';//已经生成的原始二维码图 
			$QR = imagecreatefromstring(file_get_contents($QR));    //$original[2]是图片类型，其中1表示gif、2表示jpg、3表示png
			 $posX = 0;    //X坐标
			$poxY = 32;    //Y坐标
			$font_size = 12;    //字号
			$tilt = 0;    //文字的倾斜度
			$color = imagecolorallocate($QR,255,255,255);// 为一幅图像分配颜色 255,0,0表示红色
			$content="";
			$str = "";
			for ($i=0;$i<mb_strlen($str,'UTF8');$i++) {
				$letter[] = mb_substr($str, $i, 1,'UTF8');
			}
			foreach ($letter as $l) {
				$teststr = $content.$l;
				$fontBox = imagettfbbox($font_size, 0,'C:/Windows/Fonts/msyhbd.ttf', $teststr);
				// $testbox = imagettfbbox($fontsize, $angle, $fontface, $teststr);
				// 判断拼接后的字符串是否超过预设的宽度
				if (($fontBox[2] > 320) && ($content !== "")) {
					break;
				}
				$content .= $l;
			}
			//居中
			$arr=imagettfbbox($font_size, 0,'C:/Windows/Fonts/msyhbd.ttf', $content);
			$posX=floor((421-$arr[2])/2);
			imagettftext($QR, $font_size, $tilt, $posX, $poxY, $color, 'C:/Windows/Fonts/msyhbd.ttf', $content);  
			//居中end
			
			//输出图片 

			 $logo = imagecreatefromstring(file_get_contents($logo)); 
			 $QR_width = imagesx($QR);//二维码图片宽度 
			 $QR_height = imagesy($QR);//二维码图片高度 
			 $logo_width = imagesx($logo);//logo图片宽度 
			 $logo_height = imagesy($logo);//logo图片高度 
			 $logo_qr_width = 310; 
			 $scale = $logo_width/$logo_qr_width; 
			 $logo_qr_height = $logo_height/$scale; 
			 $from_width = ($QR_width - $logo_qr_width) / 2; 
			 //重新组合图片并调整大小 
			 imagecopyresampled($QR, $logo, 170, 160, 0, 0, $logo_qr_width, 
			 $logo_qr_height, $logo_width, $logo_height); 
	
			//输出图片 
			Header("Content-type: image/png");
			ImagePng($QR);
	}
	public function createcard(){
		 $ur=I("get.y");
		 $m=I("get.m");
		  Vendor('phpqrcode.phpqrcode');
		  $url='http://'.$_SERVER['HTTP_HOST'].'/'.base64_decode($ur);
		  $errorCorrectionLevel =intval(15) ;//容错级别 
		  $matrixPointSize = intval(30);//生成图片大小 
		//生成二维码图片 
		  //echo $_SERVER['REQUEST_URI'];
		  $object = new \QRcode();
		  $object->png($url, "qrcode.png", $errorCorrectionLevel, $matrixPointSize, 3);   
			$logo = 'qrcode.png';//准备好的logo图片 

			$QR = 'bg2.jpg';//已经生成的原始二维码图 
			$QR = imagecreatefromstring(file_get_contents($QR));    //$original[2]是图片类型，其中1表示gif、2表示jpg、3表示png
			 $posX = 0;    //X坐标
			$poxY = 495;    //Y坐标
			$font_size = 20;    //字号
			$tilt = 0;    //文字的倾斜度
			$color = imagecolorallocate($QR,255,255,255);// 为一幅图像分配颜色 255,0,0表示红色
			$content=base64_decode($m);
			//居中
			$arr=imagettfbbox($font_size, 0,'C:/Windows/Fonts/MSYHBD.TTC', $content);
			$posX=floor((642-$arr[2])/2);
			imagettftext($QR, $font_size, $tilt, $posX, $poxY, $color, 'C:/Windows/Fonts/MSYHBD.TTC', $content);  
			//居中end
			
			//输出图片 

			 $logo = imagecreatefromstring(file_get_contents($logo)); 
			 $QR_width = imagesx($QR);//二维码图片宽度 
			 $QR_height = imagesy($QR);//二维码图片高度 
			 $logo_width = imagesx($logo);//logo图片宽度 
			 $logo_height = imagesy($logo);//logo图片高度 
			 $logo_qr_width = 310; 
			 $scale = $logo_width/$logo_qr_width; 
			 $logo_qr_height = $logo_height/$scale; 
			 $from_width = ($QR_width - $logo_qr_width) / 2; 
			 //重新组合图片并调整大小 
			 imagecopyresampled($QR, $logo, 170, 150, 0, 0, $logo_qr_width, 
			 $logo_qr_height, $logo_width, $logo_height); 
	
			//输出图片 
			Header("Content-type: image/png");
			ImagePng($QR);
	}
}
