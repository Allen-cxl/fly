<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

/**
 * 前台公共库文件
 * 主要定义前台公共函数库
 */

/**
 * 检测验证码
 * @param  integer $id 验证码ID
 * @return boolean     检测结果
 * @author 麦当苗儿 <zuojiazi@vip.qq.com>
 */
function check_verify($code, $id = 1){
	$verify = new \Think\Verify();
	return $verify->check($code, $id);
}
function isMobile() {
    $mobile = array();
    static $mobilebrowser_list ='Mobile|iPhone|Android|WAP|NetFront|JAVA|OperasMini|UCWEB|WindowssCE|Symbian|Series|webOS|SonyEricsson|Sony|BlackBerry|Cellphone|dopod|Nokia|samsung|PalmSource|Xphone|Xda|Smartphone|PIEPlus|MEIZU|MIDP|CLDC';
    //note 获取手机浏览器
    if(preg_match("/$mobilebrowser_list/i", $_SERVER['HTTP_USER_AGENT'], $mobile)) {
        return true;
    }else{
        if(preg_match('/(mozilla|chrome|safari|opera|m3gate|winwap|openwave)/i', $_SERVER['HTTP_USER_AGENT'])) {
            return false;
        }else{
            if($_GET['mobile'] === 'yes') {
                return true;
            }else{
                return false;
            }
        }
    }
}
function sqlAll($arr){
    if (empty($arr)) {
        $con=0;
    }else{
        $carr=array();
        $con=array();
        foreach ($arr as $key1=>$val){
            if ($key1==0) {
                foreach($val as $key=>$vo){
                    $carr[0][]=$key;
                }
                $con[0]=implode(',',$carr[0]);
            }
            $carr[1][]='("'.implode('","', $val).'")';
        }
        $con[1]=implode(',',$carr[1]);
    } 
    return $con;
}
/*
 * 获取列表总行数
 * @param  string  $category 分类ID
 * @param  integer $status   数据状态
 * @author 麦当苗儿 <zuojiazi@vip.qq.com>
 */
function get_list_count($category, $status = 1){
    static $count;
    if(!isset($count[$category])){
        $count[$category] = D('Document')->listCount($category, $status);
    }
    return $count[$category];
}

/**
 * 获取段落总数
 * @param  string $id 文档ID
 * @return integer    段落总数
 * @author 麦当苗儿 <zuojiazi@vip.qq.com>
 */
function get_part_count($id){
    static $count;
    if(!isset($count[$id])){
        $count[$id] = D('Document')->partCount($id);
    }
    return $count[$id];
}

/**
 * 获取导航URL
 * @param  string $url 导航URL
 * @return string      解析或的url
 * @author 麦当苗儿 <zuojiazi@vip.qq.com>
 */
function get_nav_url($url){
    switch ($url) {
        case 'http://' === substr($url, 0, 7):
        case '#' === substr($url, 0, 1):
            break;        
        default:
            $url = U($url);
            break;
    }
    return $url;
}
//日历生成
function day_report($nn)
    {
        $month = date('Y-m');
        $month_val = strtotime($month . '-01');
		if($nn<0){
			$month=date('Y-m', strtotime($nn." months", $month_val));
		}elseif($nn>0){
			$month=date('Y-m', strtotime("+".$nn." months", $month_val));
		}

        $month_begin = strtotime($month . '-01');
        $month_end =  strtotime("+1 months", $month_begin) - 24*3600;
        
        $dt_begin = $month_begin - (date('N', $month_begin)-1) * 24*3600;
        $dt_end = $month_end + (7 - date('N', $month_end)) * 24*3600;

        $today = strtotime(date('Y-m-d'));

        $list = [];
        $dt = $dt_begin;
        while ($dt <= $dt_end)
        {
            $class = '';
            if ($dt < $month_begin || $dt > $month_end)
            {
                $class .= ' other';
            }
            if ($dt == $today)
            {
                $class .= ' today';
            }
            if ($dt > $today)
            {
                $class .= ' future';
            }

            $list[] = [
                'dt'  => date('Y-m-d', $dt),
                'day' => date('j', $dt),
                'class' => $class,
            ];
            
            $dt += 24*3600;
        }

        $list = array_chunk($list, 7);

        // 月份选择
        $month_val = strtotime($month . '-01');
        $month_cur = date('Y年m月', $month_val);
        $month_pre = date('Y-m', strtotime("-1 months", $month_val));
        $month_next =  date('Y-m', strtotime("+1 months", $month_val));
        if ($month != date('Y-m'))
        {
            $month_next = date('Y-m', strtotime("+1 months", $month_val));
        }

        $data = [
            'month' => $month,
            'list' => $list,
            'month_cur' => $month_cur,
            'month_pre' => $month_pre,
            'month_next' => $month_next,
        ];

        return $data;
    }
	function monthhtml($nn){
		
		$arr=day_report($nn);
		$html='';
		$wl=1;
		if($nn==0){
			$yc="有仓";
		}else{
			$yc="/";
		}
		foreach($arr["list"] as $info){
			foreach($info as $vo){
				if($vo["class"]==" other"){
					$html.='<li><span class="other-month">'.$vo["day"].'</span></li>';
				}elseif($vo["class"]==""){
					$html.='<li><div><div class=""><p class="day-num">'.$vo["day"].'</p><p class="day-ext">/</p></div></div></li>';
				}elseif($vo["class"]==" today"){
					$html.='<li><div><div class=""><p class="day-num">'.$vo["day"].'</p><p class="day-ext">'.$yc.'</p></div></div></li>';
				}elseif($vo["class"]==" future"){
					$wl++;
					if($wl<8){
						$html.='<li><div><div class=""><p class="day-num">'.$vo["day"].'</p><p class="day-ext">'.$yc.'</p></div></div></li>';
					}else{
						$html.='<li><div><div class=""><p class="day-num">'.$vo["day"].'</p><p class="day-ext">/</p></div></div></li>';
					}
				}elseif($vo["class"]==" other future"){
					$html.='<li><span class="other-month">'.$vo["day"].'</span></li>';
				}
			}
		}
		$arr1["html"]=$html;
		$arr1["month"]=$arr['month_cur'];
		return $arr1;
	}