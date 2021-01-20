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
class IndexController extends HomeController
{
    //系统首页
	public function test(){
		$arr=day_report();
		print_r($arr);
	}
	public function getmonth(){
		$nn=I("post.nn");
		$this->ajaxReturn(monthhtml($nn));
	}
	public function getport(){
		$id=I("post.id");
		$c=I("post.c",0);
		echo porthtml($id,$c);
	}
    public function index()
    {
		$y=I("get.y",'home');
		if($y=='home'){
			$nav=1;
		}elseif($y=='about'){
			$nav=7;
		}elseif($y=='tj' or $y=='xq' or $y=='pay'){
			$nav=2;
		}elseif($y=='three' or $y=='goods'){
			$nav=4;
		}elseif($y=='line'){
			$nav=3;
		}elseif($y=='news' or $y=='newslist'){
			$nav=5;
		}
		$this->assign("nav",$nav);
		$this->assign("y",$y);
        $this->display();
    }
	public function home(){
		$banner=D("Banner")->select();
		$this->assign("banner",$banner);
		$day=date("Y-m-d");
		$this->display();
	}
	public function cportTips(){
		$t=I("get.searchTxt");
		$where['type']=2;
		if($t){
			$where["_string"]="threecode like '%".$t."%' or airport like '%".$t."%' or city like '%".$t."%'";
		}else{
			$where["_string"]="city like '上海' or city like '北京' or city like '广州' or city like '深圳' or city like '南京'";
		}
		$list=D("Threecode")->where($where)->limit(100)->select();
		foreach($list as $key=>$vo){
			$arr["value"][$key]["dcode"]=$vo["threecode"];
			$arr["value"][$key]["acnname"]=$vo["airport"];
			$arr["value"][$key]["dcncountry"]=$vo["city"];
			$arr["value"][$key]["dzh"]='';
		}
		$this->ajaxReturn($arr);
	}
	public function hotTips(){
		$t=I("get.searchTxt");
		$where['type']=2;
		if($t){
			$where["_string"]="threecode like '%".$t."%' or airport like '%".$t."%' or city like '%".$t."%'";
		}
		$list=D("Threecode")->where($where)->limit(10)->select();
		foreach($list as $key=>$vo){
			$arr["value"][$key]["dcode"]=$vo["threecode"];
			$arr["value"][$key]["acnname"]=$vo["airport"];
			$arr["value"][$key]["dcncountry"]=$vo["city"];
		}
		$this->ajaxReturn($arr);
	}
	public function airLine(){
		$t=I("get.searchTxt");
		if($t){
			$where["_string"]="cname like '%".$t."%' or ename like '%".$t."%' or code like '%".$t."%'";
		}
		$list=D("Company")->where($where)->limit(10)->select();
		foreach($list as $key=>$vo){

			$arr["value"][$key]["zdalias"]=$vo['cname'];
			$arr["value"][$key]["zmmc"]=$vo['ename'];
			$arr["value"][$key]["zcode"]=$vo['code'];
		}
		
		$this->ajaxReturn($arr);
	}
	public function about(){
		$this->display();
	}
	public function tj(){
		$m=D("Goodstype");
		
		$cp1=I("get.cp","");
		$mp=I("get.mp","");
		$pa=I("get.pa","");
		$this->assign("cp1",$cp1);
		$this->assign("mp",$mp);
		$this->assign("pa",$pa);
		
		$where['isdel']="0";
        $gt = $m->order('sort asc')->where($where)->select();
		$this->assign("gt",$gt);
		$cp =D("Company")->order('sort asc')->where($where)->select();
		$this->assign("cp",$cp);
		$ico=array('','icon1.png','icon2.png','icon3.png','icon3.png','ss-icon-shandian','ss-icon-kongyun','','');
		$this->assign("ico",$ico);
		$this->display();
	}
	public function gettj(){
		$company=I("post.company");
		$sort1=I("post.sort1");
		$goodstype=I("post.goodstype");
		$mport=I("post.mport");
		$cport=I("post.cport");
		$city=I("post.city");
		$region=I("post.region");
		$packingtype=I("post.packingtype");
		$flytype=I("post.flytype");
		$special=I("post.special");
		$hot=I("post.hot");
		$page=I("post.page");
		if(!empty($company)){
			$where["company"]=array("in",$company);
		}
		if(!empty($packingtype)){
			$where["packingtype"]=array("in",$packingtype);
		}
		if(!empty($flytype)){
			$where["flytype"]=array("in",$flytype);
		}
		if($sort1=="1"){
			$order="price asc";
		}elseif($sort1=="2"){
			$order="price desc";
		}elseif($sort1=="3"){
			$order="company asc";
		}elseif($sort1=="4"){
			$order="company desc";
		}elseif($sort1=="5"){
			$order="cport asc";
		}elseif($sort1=="6"){
			$order="cport desc";
		}elseif($sort1=="7"){
			$order="mport asc";
		}elseif($sort1=="8"){
			$order="mport desc";
		}elseif($sort1=="9"){
			$order="flytype desc";
		}elseif($sort1=="10"){
			$order="flytype asc";
		}else{
			$order="id desc";
		}
		if($goodstype!=""){
			$where["goodstype"]=$goodstype;
		}
		$cp=I("post.cp");
		if($cp){
			$where["cportcode"]=$cp;
		}
		$mp=I("post.mp");
		if($mp){
			$where["_string"]="mport='".$mp."' or mportcode='".$mp."'";
		}
		$pa=I("post.pa");
		if($pa){
			$where["_string"]="company='".$pa."' or companycode='".$pa."'";
			
		}
		if($mport!=""){
			$where["mport"]=$mport;
		}
		if($cport!=""){
			$where["cport"]=$cport;
		}
		if($city!=""){
			$where["mcity"]=$city;
		}
		if($region!=""){
			$where["region"]=$region;
		}
		if($special!=""){
			$where["special"]=$special;
		}
		if($hot!=""){
			$where["hot"]=$hot;
		}
		$m=D("Freight");
		$where['isdel']="0";
		$p=($page-1)*10;
        $list = $m->order($order)->where($where)->limit($p.',10')->select();
        $this->assign('list',$list);// 赋值数据集
        $count= $m->where($where)->count();// 查询满足要求的总记录数
		$this->assign("count",$count);
		$count=floor($count/10)+1;
		$p=$page;
        $show=$this->topage($p,$count,8);
        $this->assign('page',$show);// 赋值分页输出
		$cp =D("Company")->order('sort asc')->where("isdel=0")->getfield("id,cname");
		$this->assign("cp",$cp);
		$this->display();
	}
	public function pay(){
		$this->display();
	}
	public function xq(){
		$id=I("get.id",0);
		$data=D("Freight")->find($id);
		$this->assign("data",$data);
		$qu='http://'.$_SERVER['HTTP_HOST'];
		$qu=urlencode($qu);
		$this->assign("qu",$qu);
		$cp =D("Company")->order('sort asc')->where("isdel=0")->getfield("id,cname");
		$this->assign("cp",$cp);
		$gy =D("goodstype")->order('sort asc')->where("isdel=0")->getfield("id,name");
		$this->assign("gy",$gy);
		$week=day_report();
		$this->assign("week",$week);
		$this->display();
	}
	public function three(){
		$code=I("get.code");
		$this->assign("code",$code);
		$p=I("get.p",1);
		$this->assign("p",$p);
		$start=($p-1)*10;
		if($code!=""){
			$where="city like '%".$code."%' or country like '%".$code."%' or airport like '%".$code."%' or threecode='".$code."'";
			$list=D("Threecode")->where($where)->limit($start.",10")->select();
			$count= D("Threecode")->where($where)->count();// 查询满足要求的总记录数
			$count=floor($count/10)+1;
			$show=$this->topage($p,$count,8);
			$this->assign('page',$show);// 赋值分页输出
			$this->assign('list',$list);
		}else{
			$this->assign("page","0");
		}
		$this->display();
	}
	public function three1(){
		$id=I("get.id");
		$data=D("Threecode")->find($id);
		$this->assign("data",$data);
		
		$this->display();
	}
	public function line(){
		$list=D("Line")->where("isdel=0")->select();
		$this->assign("list",$list);
		$this->display();
	}
	public function goods(){
		$list=D("Transport")->where("isdel=0")->order("num asc")->select();
		$this->assign("list",$list);
		$this->display();
	}
	public function news(){
		$id=I("get.id");
		$list1=D("News")->where("top=1")->order("time desc")->limit("0,3")->select();
		$this->assign("list1",$list1);
		$data=D("News")->where("id=".$id)->find();
		$data1=D("News")->where("id<".$id)->order("id desc")->find();
		$data2=D("News")->where("id>".$id)->order("id asc")->find();
		$this->assign("data",$data);
		$this->assign("data1",$data1);
		$this->assign("data2",$data2);
		$this->display();
	}
	public function newslist(){
		$list1=D("News")->where("top=1")->order("time desc")->limit("0,6")->select();
		$this->assign("list1",$list1);
		$list2=D("News")->where("top=0")->order("time desc")->limit("0,8")->select();
		$this->assign("list2",$list2);
		$this->display();
	}
	public function getnews1(){
		$p=I("post.p");
		$start=$p*5;
			$list=D("News")->where("top=0")->limit($start.',5')->select();
			if(!$list){
				echo '';
			}else{
				$this->assign("list",$list);
				$this->display();
			}
	}
	public function getnews(){
		$key=I("post.key");
		$p=I("post.p",1);
		$this->assign("p",$p);
		$start=($p-1)*5;
		if($key==""){
			echo '';
		}else{
			$list=D("News")->where("title like '%".$key."%'")->limit($start.',5')->select();
			if(!$list){
				echo '';
			}else{
				$count= D("News")->where("title like '%".$key."%'")->count();// 查询满足要求的总记录数
				$count=floor($count/5)+1;
				$show=$this->topage($p,$count,5);
				$this->assign('page',$show);// 赋值分页输出
				$this->assign("list",$list);
				$this->display();
			}
		}
	}
	public function uppic(){
		
		Vendor('image');
		$picname = $_FILES['uploadfile']['name']; 
		$picsize = $_FILES['uploadfile']['size']; 
		if ($picname != "") { 
			if ($picsize > 10014000) { //限制上传大小 
				echo '{"status":0,"content":"大小不能超过2M"}';
				exit; 
			} 
			$type = strstr($picname, '.'); //限制上传格式 
			if ($type != ".doc" && $type != ".docx" && $type != ".txt") {
				echo '{"status":2,"content":"格式不对！"}';
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
		$data['name']=$picname;
		$data['size']=$size;
		$data['url']=$pic_path;
		$data['time']=date("Y-m-d H:i");
		$wid=D("Wtshu")->add($data);
		echo '{"status":1,"name":"'.$picname.'","url":"'.$pic_path.'","size":"'.$size.'","content":"上传成功","time":"'.date("Y-m-d H:i").'","wid":"'.$wid.'"}';  
	
	}
}
