<?php
    $db_config_path = $_SERVER['DOCUMENT_ROOT'];
    $db_config_path .= '/db/snack-config.php';
    include($db_config_path);
    displayHeader();
?>

<?php
    function displayHeader() {
        $team_id = $_GET['teamId'];    
        
        $result = mysql_query("SELECT grade, team_name, coach_name, coach_email FROM snack_team WHERE year='2017' AND id=".$team_id) or die(mysql_error());
        
        $row = mysql_fetch_array($result);
        
        echo '<div class="header">
		          <div class="text-center">
			         <img src="img/gfh-logo-4web.png" class="greenheck-logo" />
			         <h1 class="grade-header">Grade: '.$row[0].'</h1>
			         <h2 class="team-header">Team: '.$row[1].'</h2>
                     <h5>Coach: <span class="glyphicon glyphicon-envelope email-icon" aria-hidden="true"></span><a class="coach-email" href=mailto:'.$row[3].'?subject=Soccer&nbsp;Team:&nbsp;'.$row[1].'>'.$row[2].'</a></h5>
		          </div>
	       </div>';    
    }
    
?>    

