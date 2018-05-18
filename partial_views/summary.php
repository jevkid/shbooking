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
        <span>Joining Point: </span>
        <span id="join-type">Home Connect</span>
    </div>
    <div id="seating" class="summary-section hidden">
        <span>Your Seats</span>
        <!-- if more than one coach, for each coach, display each pax and seat selection -->
        <ul>
            <li>John Smith: Seat 1A</li>
            <li>Mary Smith: Seat 2A</li>
            <li>Bob Jones: Seat 5D</li>
            <li>Susan Jones: Seat 5C</li>
        </ul>
    </div>
    <div id="air" class="summary-section hidden">
        <span>Your Flight</span>
        <!-- for each flight show outbound/inbound, each outbound/inbound show leg -->
        <div class="list-title">Outbound:</div>
        <ul>
            <li>LGW-LAS Virgin Atlantic VS043 13 May 2019 10:35</li>
        </ul>
        <div class="list-title">Return:</div>
        <ul>
            <li>LAS-LGW Virgin Atlantic VS044 27 May 2019 09:25</li>
        </ul>
    </div>
    <div id="accom" class="summary-section hidden">
        <span>Your Accommodation</span>
        <!-- for each group/room show hotel name - room name: cost/included -->
        <div class="list-title">Group 1:</div>
        <ul>
            <li>MS Serenade 2 - Captain's Cabin: + £45 per night</li>
        </ul>
        <div class="list-title">Group 2:</div>
        <ul>
            <li>MS Serenade 2 - Beethoven's Cabin: + £22 per night</li>
        </ul>
    </div>
    <div id="price" class="summary-section hidden">
        <div class="summary-title">Total Price</div>
        <hr />
        <!-- Not sure how we're getting this information -->
        <div>£1000</div>
    </div>
</div>
