/*cnzz流量统计*/
host2=document.domain;
if(host2=="bookingtraining.sinoair.com"){
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1264409522'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s19.cnzz.com/z_stat.php%3Fid%3D1264409522%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));
	$(".cnzz_statid").attr("id",'cnzz_stat_icon_1264409522');
}else if(host2.indexOf("sinobooking.cn")>=0){
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1263363905'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1263363905%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));
	$(".cnzz_statid").attr("id",'cnzz_stat_icon_1263363905');
}