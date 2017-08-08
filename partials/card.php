
<?php 
    $db_config_path = $_SERVER['DOCUMENT_ROOT'];
    $db_config_path .= '/db/snack-config.php';
    include($db_config_path);
    displayCards();    
?>
	
<?php
	function displayCards() {
        $team_id = $_GET['teamId']; 
        
		$result = mysql_query("SELECT team_id, date, description, field, person, notes FROM snack_signup WHERE team_id=".$team_id." order by date") or die(mysql_error());
		while($row = mysql_fetch_array($result)){
		
			echo '<div class="card main-background">';
			            
			$dateformatted = date('l, F j', strtotime($row['date']));
            $gameDate = strtotime($dateformatted);
            $tomorrowDate = strtotime('tomorrow');
            $today = strtotime(12 . ':00:00');
            $yesterday = strtotime('-1 day', $today);
                                
            if($tomorrowDate >= $gameDate && $yesterday >= $gameDate) {
                $oldStyleClass = ' old-content ';        
            } else {                
                $oldStyleClass = '';                   
            }
            
			echo '<div class="text-center'.$oldStyleClass.'">
						<h3>
							<img class="ball-picture" src="img/soccer-ball.png" />
							'.$dateformatted.'
						</h3>
					</div>';
					
			$person = $row['person'];
			if(empty($person)) {
				$snackClass= '<span class="glyphicon glyphicon-exclamation-sign icon text-danger" aria-hidden="true"></span>';                
                $snackWarning = '<span class="text-danger">None!</span>';
			}  else {
				$snackClass = '<span class="glyphicon glyphicon-cutlery icon text-success" aria-hidden="true"></span>';     
                $snackWarning = '';
			}
            $notes = $row['notes'];
            if(empty($notes)) {
                $notesClass = ' notes hide ';
            } else {
                $notesClass = ' notes show ';
            }
                
			
			echo '<div class="slick-container">
						<div class="slick-content'.$oldStyleClass.'">
							<h4>'.$row['description'].'</h4>
							<img class="goal-picture" src="img/goal.png" />
							<h5>Field: '.$row['field'].'</h4>						
							<h5>'.$snackClass.'Snack: '.$snackWarning.$person.'</h4>
							<div class="'.$notesClass.'"><span class="glyphicon glyphicon-info-sign icon" aria-hidden="true"></span>Game Notes: <p>'.$row['notes'].'</p></div>
						</div>';
					
			echo '<div class="slick-content'.$oldStyleClass.'">
						<h4>Update</h4>
						<form method="post" action="./update/update_snack_schedule.php">           
							<div class="form-group">
								<label>Person bringing snack!
                                    <span class="glyphicon glyphicon-cutlery icon text-success" aria-hidden="true"></span>
                                </label>
								<input type="text" name="person" class="form-control" placeholder="Person" value="'.$person.'">
                                <input type="hidden" name="date" value="'.$row['date'].'">
                                <input type="hidden" name="team_id" value="'.$row['team_id'].'">
                                <input type="hidden" name="description" value="'.$row['description'].'">
							</div>
							<div class="form-group">
								<label>Game Notes
                                    <span class="glyphicon glyphicon-info-sign icon" aria-hidden="true"></span>                                    
                                </label>
								<textarea class="form-control" name="notes" rows="1" value="'.$row['notes'].'">'.$row['notes'].'</textarea>
							</div>
							<button type="submit" class="btn btn-primary">Save</button>
						</form>	
					</div>';
			
			echo '</div></div>';
		}
	}
?>