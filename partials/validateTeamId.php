<?php
    $db_config_path = $_SERVER['DOCUMENT_ROOT'];
    $db_config_path .= '/db/snack-config.php';
    include($db_config_path);

    $team_id = $_GET['teamId'];

    if (empty($team_id)) {
        $isError = "true";
    } else {
        $result = mysql_query("SELECT team_name FROM snack_team WHERE year='2017' AND id=".$team_id) or die(mysql_error());    
        
        if(mysql_num_rows($result) == 0) {            
            $isError = "true";    
        } else {
            $isError = "false";
        }
        
    }
?>
 
<script type="text/javascript">
    var hasError = "<?php echo $isError ?>";
    if(hasError === 'true') {
        window.location = "http://www.angelospizzawausau.com/soccer/error/teamError.php";    
    }    
</script>

