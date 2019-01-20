<?php
//设置允许ajax跨域访问请求
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
header('Access-Control-Allow-Headers: x-requested-with,content-type,authorization');
//设置相应头部信息
header("Content-Type:application/json;charset=utf-8");
//$conn=mysqli_connect('w.rdc.sae.sina.com.cn','0k0k1mj132','2zxmky00yw5041kl1m14m1jx21ywxw4xh52w4i1k','app_testapp',3306);
$conn=mysqli_connect('192.168.0.8','root','root','weike',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
