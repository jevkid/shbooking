<html>
	<head>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
		<link rel="stylesheet" href="dist/css/style.css">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jquery-nice-select@1.1.0/css/nice-select.min.css">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
		<title>Booking Engine | Shearings</title>
	</head>
	<body>
		
	
	<div class="container">
		<div class="row">
			<div class="col-12">
				<img src="https://d28wrjgfs2j02n.cloudfront.net/images/default-source/test-library/logo672568c0c1694119b999e3fd165ca7ad.jpg?sfvrsn=454c2974_1" width="176" style="padding: 1rem 0;" alt="">
			</div>
		</div>
	</div>
	
	<?php include("partial_views/nav.php"); ?>

	<div class="container">
		<div class="row">
			<div class="col-12 col-md-8">
				<?php include("partial_views/air.php"); ?>
			</div>
			<div class="col-12 col-md-4">
				<div class="summary">Summary</div>
			</div>
		</div>
	</div>

	<footer>
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
				&copy; Shearings 1903 - <?= date(Y); ?>
				</div>
			</div>
		</div>
	</footer>


	<script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/jquery-nice-select@1.1.0/js/jquery.nice-select.min.js"></script>
	<script src="dist/js/scripts.js"></script>
	<script src="dist/js/coach.js"></script>
	</body>
</html>