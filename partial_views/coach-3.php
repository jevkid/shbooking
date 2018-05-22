<div class="row">
    <div class="col-12">
		<p class="step-title">Step 2</p>
		<p class="step-section-title">Coach Seat Selection</p>
    </div>
    <div class="col-12">
        <p class="section-header">Please select your seats for the coach to XXX</p>               
    </div>
    <div class="col-12">
        <p>Select a seat for
            <span data-pax-name></span>
        </p>
    </div>
    <div class="col-12 coaches pull-left">
        <div class="coachInfo">
            <div class="selected">
                <span class="icon"></span>
                <span class="text">Selected</span>
            </div>
            <div class="available">
                <span class="icon"></span>
                <span class="text">Available</span>
            </div>
            <div class="reserved">
                <span class="icon"></span>
                <span class="text">Reserved</span>
            </div>
            <div class="facilities">
                <span class="icon"></span>
                <span class="text">Facilities</span>
            </div>
        </div>
        <div class="coachSelect">
            <ul class="coachList coachMap" id="coachMap"></ul>
            <ul class="coachList" id="coachMapA">
                <li class="map">A</li>
            </ul>
            <ul class="coachList" id="coachMapB">
                <li class="map">B</li>
            </ul>
            <div class="aisle"></div>
            <ul class="coachList" id="coachMapC">
                <li class="map">C</li>
            </ul>
            <ul class="coachList" id="coachMapD">
                <li class="map">D</li>
            </ul>
        </div>
        <!-- if there are multiple coaches, display each -->
        <div class="row">
            <div class="col-6">
                <div class="vantage-info">
                    <div class="vantage-title">Vantage Seats</div>
                    <div class="vantage-text">Our vantage seats offer premium seating at the front of the coach, giving you the best views on board. </div>
                </div>
            </div>
            <div class="col-4 customer">
                <div class="customerSelect hidden" data-pax-count=3>
                    <h3>Your Seats</h3>
                    <ul class="customerList" id="customerMap"></ul>
                </div>
            </div>
        </div>
    </div>
</div>
