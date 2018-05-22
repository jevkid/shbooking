<div class="summary">
    <div class="summary-title">Summary</div>
    <hr />
    <div id="party" class="summary-section hidden">
        <!--for each group room, display room -->
        <div data-group-id="1">
            <span></span>
            <!--for each pax, display first/last name -->
            <ul>
                <li data-pax-num="1"></li>
                <li data-pax-num="2"></li>
            </ul>
        </div>
        <div data-group-id="2">
            <span></span>
            <ul>
                <li data-pax-num="1"></li>
            </ul>
        </div>
    </div>
    <div id="joining" class="summary-section hidden">
        <!-- Joining point: display joining point address or home connect address/direct connect -->
        <span>Travel: </span>
        <span id="join-type"></span>
    </div>
    <div id="seating" class="summary-section hidden">
        <span>Your Seats</span>
        <!-- if more than one coach, for each coach, display each pax and seat selection -->
        <ul id="seatSummary"></ul>
    </div>
    <div id="air" class="summary-section hidden">
        <span>Your Flight</span>
        <!-- for each flight show outbound/inbound, each outbound/inbound show leg -->
        <!-- We are only being given the outbound place in the option selection currently -->
        <!--<div class="list-title">Outbound:</div>-->
        <ul id="flight-summary">
            <li></li>
        </ul>
        <!--<div class="list-title">Return:</div>
        <ul>
            <li>LAS-LGW Virgin Atlantic VS044 27 May 2019 09:25</li>
        </ul>-->
    </div>
    <div id="accom" class="summary-section hidden">
        <span>Your Accommodation</span>
        <!-- for each group/room show hotel name - room name: cost/included -->
        <div data-accom-group-id="1" class="hidden">
            <div class="list-title"></div>
            <ul data-group-room="1"></ul>
            <ul data-group-extras="1"></ul>
        </div>
        <div data-accom-group-id="2" class="hidden">
            <div class="list-title"></div>
            <ul data-group-room="2"></ul>
            <ul data-group-extras="2"></ul>
        </div>
    </div>
    <div id="price" class="summary-section hidden">
        <div class="summary-title">Total Price</div>
        <hr />
        <!-- Not sure how we're getting this information -->
        <div>£1000</div>
    </div>
</div>
