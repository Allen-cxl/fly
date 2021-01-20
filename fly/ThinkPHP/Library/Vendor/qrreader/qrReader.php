<?php
include_once('./qrReader/lib/QrReader.php');
$qrcode = new QrReader('./test_logo.png');  //图片路径
$text = $qrcode->text(); //返回识别后的文本
echo $text;