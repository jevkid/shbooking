<html>
	<head>
		<?php include("stylesheets.php"); ?>
		<title>Booking Engine | Shearings</title>
	</head>
	<body>
		<header>
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-6">
						<div class="logo">
							<img src="https://d28wrjgfs2j02n.cloudfront.net/images/default-source/test-library/logo672568c0c1694119b999e3fd165ca7ad.jpg?sfvrsn=454c2974_1" width="176" style="padding: 1rem 0;" alt="">
						</div>
					</div>
					<div class="col-12 col-md-6 text-right" style="padding: 1.6rem 0 0;">
						<span style="color: #666666">Call us today on:</span>
						<h3 style="color: #0068b9">01942 417545</h3>
					</div>
				</div>
			</div>
		</header>

		<?php include("partial_views/nav.php"); ?>

		<div class="container">
			<div class="row">
				<div class="col-12 col-md-8">
					<div data-step="1" data-next="travel" data-prev="party" data-summary-id="party">
						<?php include("partial_views/yourParty-1.php"); ?>
					</div>
					<div class="hidden" data-step="2" data-next="travel" data-prev="travel" data-summary-id="joining">
						<?php include("partial_views/joiningPoint-2.php"); ?>
					</div>
					<div class="hidden" data-step="3" data-next="travel" data-prev="travel" data-summary-id="seating">
						<?php include("partial_views/coach-3.php"); ?>
					</div>
					<div class="hidden" data-step="4" data-next="accom" data-prev="travel" data-summary-id="air">
						<?php include("partial_views/air-4.php"); ?>
					</div>
					<div class="hidden" data-step="5" data-next="accom" data-prev="air" data-summary-id="accom">
						<?php include("partial_views/accommodation-5.php"); ?>
					</div>
					<div class="hidden" data-step="6" data-next="details" data-prev="accom" data-summary-id="accom-part-2">
						<?php include("partial_views/accommodation-6.php"); ?>
					</div>
					<div class="hidden" data-step="7" data-next="extras" data-prev="accom-part-2">
						<?php include("partial_views/guestDetails-7.php"); ?>
					</div>
					<div class="hidden" data-step="8" data-next="confirm" data-prev="extras" data-summary-id="extras">
						<?php include("partial_views/extras-8.php"); ?>
					</div>
					<div class="hidden" data-step="9" data-prev="confirm">
						<?php include("partial_views/payment-9.php"); ?>
					</div>
					<div class="pull-right">
						<button type="button" data-current-step="1">Continue</button>
					</div>
					<div class="pull-left">
						<a href="#" class="back-button hidden" data-previous-step>Back</a>
					</div>
					<div data-alert class="col-8 alert alert-warning text-left hidden">Please ensure you have filled out all required fields.</div>
				</div>
				<div class="col-12 col-md-4">
					<?php include("partial_views/summary.php"); ?>
				</div>
			</div>
		</div>

		<?php include("partial_views/footer.php"); ?>

		<script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/jquery-nice-select@1.1.0/js/jquery.nice-select.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/icheck@1.0.2/icheck.min.js"></script>
		<script src="dist/js/scripts.js"></script>
		<script src="dist/js/flights.js"></script>
		<script src="dist/js/coach.js"></script>
		<script src="dist/js/room-cabin-info.js"></script>
		
	</body>
</html>
