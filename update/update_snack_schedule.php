<?php
    $db_config_path = $_SERVER['DOCUMENT_ROOT'];
    $db_config_path .= '/db/snack-config.php';
    include($db_config_path);

	$person = $_POST['person'];
	$date = $_POST['date'];
    $team_id = $_POST['team_id'];
    $notes = $_POST['notes'];

	echo "<h3>Update successful!  Refreshing page...</h3>";

	function died($error) {
		// error code can go here
		echo "Error updating snack schedule!<br /><br />";
		echo $error."<br /><br />";
		die();
	}

    $result = mysql_query("UPDATE snack_signup SET person = '".$person."', notes = '".$notes."' WHERE date = '".$date."' AND team_id=".$team_id."") or die(mysql_error());

?>

<script type="text/javascript">
    window.location = "http://www.angelospizzawausau.com/soccer?teamId=<?php echo $team_id ?>";
</script>
