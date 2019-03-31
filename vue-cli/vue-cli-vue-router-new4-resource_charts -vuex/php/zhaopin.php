<?php
require('connect.php');
ini_set('date.timezone','Asia/Shanghai');//设置时间本地化 https://www.jb51.net/article/73059.htm
$t=Date('Y/m/d',time());
$page=2;
$n=7;
$m=($page-1)*$n;
// $sql="SELECT * FROM zhaopin Limit $m,$n";
$sql="SELECT * FROM zhaopin";
$result=mysqli_query($conn, $sql);

if(!$result){echo "数据库连接异常 $sql";}
else{
	$len=intval(mysqli_num_rows($result)/6+1);

	echo "<thead>
			<tr>
				<th><b>公司直聘</bt></h>
				<th>
					<span>
						<i id='i_left'><</i><input type='text' id='val' value='1'>/<u id='len'>$len</u><i id='i_right'>></i>
					</span>
				</th>
			</tr>
		</thead>
		<tbody id='tbody'>";
		$num=0;
		while($row=mysqli_fetch_assoc($result)){
			// 初始化页面
			$num++;
			if($num==7){break;}
			else{echo "<tr>
					<td>$row[position]</td>
					<td>$row[price]-$row[toprice]</td>
					<td>$row[address]$row[year]年</td>
					<td>$t</td>
				 </tr>";
			}
		}
	echo "</tbody>";
}
