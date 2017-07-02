<!DOCTYPE html>
<html lang="en">

<head>
	<link rel="shortcut icon" href="img/soccer_ball_icon_H0c_icon.ico">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="DC Soccer Snack Signup">
	<meta name="author" content="D-rock">

	<title>GFH Soccer</title>

	<link href="https://fonts.googleapis.com/css?family=Open+Sans|PT+Sans" rel="stylesheet">
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="css/slick/slick.css" rel="stylesheet" type="text/css">
	<link href="css/slick/slick-theme.css" rel="stylesheet" type="text/css" />
	<link href="css/snacksignup.css" rel="stylesheet" type="text/css">


</head>
<body>
	<?php include("partials/validateTeamId.php"); ?>

	<?php include("partials/header.php"); ?>

	<div class="main-wrapper">
		<div class="main">

			<div class="signupWrapper">
				<?php include("partials/card.php"); ?>
			</div>
		</div>
	</div>


	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/slick.min.js"></script>

	<script type="text/javascript">
	$(document).ready(function(){
		$('.slick-container').slick({
			infinite: false,
			dots: true,
			adaptiveHeight: true
		});
	});
	</script>
</body>

</html>
