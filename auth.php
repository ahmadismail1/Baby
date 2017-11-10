<?php
header("Access-Control-Allow-Origin: *");

//Connect & Select Database
mysql_connect("localhost","root","") or die("could not connect server");
mysql_select_db("moh") or die("could not connect database");
if(isset($_POST['login']))
{
	$name=mysql_real_escape_string(htmlspecialchars(trim($_POST['name'])));
	$idnum=mysql_real_escape_string(htmlspecialchars(trim($_POST['idnum'])));
	$login=mysql_num_rows(mysql_query("select * from `children` where `name`='$name' and `idnum`='$idnum'"));
	if($login!=0)
	{
		echo "success";
	}
	else
	{
		echo "failed";
	}
}
?>