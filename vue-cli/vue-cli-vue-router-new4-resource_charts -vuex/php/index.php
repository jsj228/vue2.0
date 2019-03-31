<?php
require('connect.php');
ini_set('date.timezone','Asia/Shanghai');//设置时间本地化 https://www.jb51.net/article/73059.htm
$t=Date('Y/m/d',time());
$page=2;
$n=7;
$m=($page-1)*$n;
// $sql="SELECT * FROM zhaopin Limit $m,$n";
$sql="SELECT data FROM weike_trade_json WHERE type='5' and market = 'eth_cny' order by id asc limit 1,2";
// $sql="SELECT data FROM weike_trade_json WHERE type='5' and market = 'eth_cny'";
// date=(select max(date) from test B where A.sub_dh=B.sub_dh)
$result=mysqli_query($conn, $sql);
if(!$result){echo "数据库连接异常 $sql";}
else{
	// $len=intval(mysqli_num_rows($result)/6+1);
	// echo '共有'.mysqli_num_rows($result).'条数据';
	// $row=mysqli_fetch_assoc($result);
	// var_dump($result);
	// $dataJson=array();
	// echo(gettype($row['data']));
	// echo(gettype($result));
	// echo(gettype($result.json_decode()));
	while($row=mysqli_fetch_assoc($result)){
		echo($row['data']);
	}
	// var_dump($dataJson);
};


