<!DOCTYPE html>
<html lang="en">

<head>
	<link rel="shortcut icon" href="img/soccer_ball_icon_H0c_icon.ico">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="DC Youth Soccer">
    <meta name="author" content="D-rock">

    <title>GFH Soccer</title>
	
	<link href="https://fonts.googleapis.com/css?family=Open+Sans|PT+Sans" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">	
    <link href="css/snacksignup.css" rel="stylesheet" type="text/css">	
	
	
</head>
<body>    			
    <div class="header">
      <div class="text-center">
         <img src="img/gfh-logo-4web.png" class="greenheck-logo" />
         <h1 class="grade-header">Create Team</h1>    
      </div>
   </div>	
    
	<div class="main-wrapper" style="background: none;">
		<div class="main">
			<form method="post" action="">          
				<div class="form-group">
                    <label>Coach
                        <span class="glyphicon glyphicon-cutlery icon text-success" aria-hidden="true"></span>
                    </label>
                    <input type="text" name="coach_name" class="form-control" placeholder="Coach">
                </div>    
                <div class="form-group">
                    <label>Coach's Email
                        <span class="glyphicon glyphicon-info-sign icon" aria-hidden="true"></span>                                    
                    </label>
                    <input type="text" name="coach_email" class="form-control" placeholder="Coach's Email">
                </div>
                <div class="form-group">
                    <label>Team Name (eg 4.1)
                        <span class="glyphicon glyphicon-info-sign icon" aria-hidden="true"></span>                                    
                    </label>
                    <input type="text" name="team_name" class="form-control" placeholder="Team Name (eg 4.1)">
                </div>
                <div id="games">
                    <div class="form-group">
                        <label>Game 1
                            <span class="glyphicon glyphicon-info-sign icon" aria-hidden="true"></span>                                    
                        </label>
                        <input type="text" name="game1" class="form-control" placeholder="Game1">
                    </div>                
                </div>                
                <a class="btn btn-success" onClick="addGame()">Add Game</a>
                <br /><br />
                <button type="submit" class="btn btn-primary">Save</button>
            </form>	            
		</div>	
	</div>	
	
	
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    
    <script type="text/javascript">
		function addGame() {
            var gameCount = $('#games').children().length +1;
            console.log('adding game!');
            $('#games').append('<div class="form-group"><label>Game ' + gameCount +'<span class="glyphicon glyphicon-info-sign icon" aria-hidden="true"></span></label><input type="text" name="game1" class="form-control" placeholder="Game ' + gameCount + '"></div>');
        }	
  </script>
    
</body>

</html>