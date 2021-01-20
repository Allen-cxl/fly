<?php 
 
class Image
{  
  private $info;
 
  private $image;
  public $type;
  public function __construct($src)
  {
 
    $this->info=getimagesize($src);
    $this->type=image_type_to_extension($this->info['2'],false);
    $fun="imagecreatefrom{$this->type}";
    $this->image=$fun($src);
  }
  /**
   * 文字水印
   * @param [type] $font   字体
   * @param [type] $content 内容
   * @param [type] $size   文字大小
   * @param [type] $col   文字颜色（四元数组）
   * @param array  $location 位置 
   * @param integer $angle  倾斜角度
   * @return [type]      
   */
  public function fontMark($font,$content,$size,$col,$location,$angle=0){
    $col=imagecolorallocatealpha($this->image, $col['0'], $col['1'], $col['2'],$col['3']);
 
    imagettftext($this->image, $size, $angle, $location['0'], $location['1'], $col,$font,$content);
  }
   
  /**
   * 图片水印
   * @param [type] $imageMark 水印图片地址
   * @param [type] $dst    水印图片在原图片中的位置
   * @param [type] $pct    透明度
   * @return [type]      
   */
  public function imageMark($imageMark,$dst,$pct){
    $info2=getimagesize($imageMark);
    $type=image_type_to_extension($info2['2'],false);
    $func2="imagecreatefrom".$type;
    $water=$func2($imageMark);
 
    imagecopymerge($this->image, $water, $dst[0], $dst[1], 0, 0, $info2['0'], $info2['1'], $pct);
    imagedestroy($water);
 
  }
  /**
   * 压缩图片
   * @param [type] $thumbSize 压缩图片大小
   * @return [type]      [description]
   */
  public function thumb($thumbSize){
    $imageThumb=imagecreatetruecolor($thumbSize[0], $thumbSize[1]);
     
    imagecopyresampled($imageThumb, $this->image, 0, 0, 0, 0, $thumbSize[0], $thumbSize[1], $this->info['0'], $this->info['1']);
    imagedestroy($this->image);
    $this->image=$imageThumb;
  }
  /**
  * 裁剪图片
   * @param [type] $cutSize 裁剪大小
   * @param [type] $location 裁剪位置
   * @return [type]      [description]
   */
   public function cut($cutSize,$location){
     $imageCut=imagecreatetruecolor($cutSize[0],$cutSize[1]);
 
     imagecopyresampled($imageCut, $this->image, 0, 0, $location[0], $location[1],$cutSize[0],$cutSize[1],$cutSize[0],$cutSize[1]);
     imagedestroy($this->image);
     $this->image=$imageCut;
   }
   /**
  * 裁剪图片
   * @param [type] $cutSize 裁剪大小
   * @param [type] $location 裁剪位置
   * @return [type]      [description]
   */
   public function cut1($cutSize,$cutSize1,$location){
     $imageCut=imagecreatetruecolor($cutSize[0],$cutSize[1]);
 
     imagecopyresampled($imageCut, $this->image, 0, 0, $location[0], $location[1],$cutSize[0],$cutSize[1],$cutSize1[0],$cutSize1[1]);
     imagedestroy($this->image);
     $this->image=$imageCut;
   }
   
   
  /**
   * 展现图片
   * @return [type] [description]
   */
  public function show(){
    header("content-type:".$this->info['mime']);
 
    $funn="image".$this->type;
 
    $funn($this->image);
  }
  /**
   * 保存图片
 * @param [type] $newname 新图片名
 * @return [type]     [description]
 */
   public function savepic($newname){
     header("content-type:".$this->info['mime']);
 
     $funn="image".$this->type;
 
     $funn($this->image,$newname);
   }
   public function __destruct(){
     imagedestroy($this->image);
   }
 
 }
 
 ?>