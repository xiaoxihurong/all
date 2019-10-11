<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>花名册</title>
	<style>
		td{
			width :200px;
		}
	</style>
</head>
<body>
	<table border="1" rules="all">
		<thead>
			<tr>
				<td>序号</td>
				<td>年龄</td>
				<td>姓名</td>
				<td>邮箱</td>
				<td>密码</td>
			</tr>
			<?php
				$file = 'names.txt';
				$content = file_get_contents($file); //读取文件中的内容
				$hello=explode("\n",$content,);
				
				$count=count($hello);
				for ($i=0; $i < $count; $i++) { 
					$fen=explode("|", $hello[$i]);?>
					
					<tr>
						<td><?php echo $fen[0] ?> </td>
						<td><?php echo $fen[1] ?></td>
						<td><?php echo $fen[2] ?></td>
						<td><?php echo $fen[3] ?></td>
						<td><a href="<?php echo $fen[4] ?>"><?php echo strtolower(substr($fen[4], 8)) ?></a></td>
					</tr>
			<?php	
				}
			?>
			
		</thead>
	</table>
	<script>
		var trObjs= document.getElementsByTagName('tr')
			for (var i = 1; i<trObjs.length; i++) {
				if(i%2==0){
					trObjs[i].style.backgroundColor="skyblue";
				}
			}
	</script>
</body>
</html>