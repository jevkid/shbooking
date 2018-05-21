<div class="row">
	<div class="col-12">
		<p class="step-title">Step 2</p>
		<p class="step-section-title">Flights</p>
	</div>
</div>
<!--
<div class="row">
	<div class="col-8">
		<div class="section">
			<div class="row">
                <div class="col-12">
                    <label class="section-title" for="air-post-code">Find your nearest airport</label>
                </div>
                <div class="col-8">
                    <input type="text" id="air-post-code" >
                </div>
                <div class="col-4">
                    <button type="button" id="search-air-post-code">Look up</button>
                </div>
			</div>
		</div>
	</div>
</div>
<div class="row">
    <div class="col-12">
        <h3>Outward</h3>
    </div>
    <div class="col-6">
        <label class="section-title" for="departure-airport-select">Departure airport</label>
        <select id="departure-airport-selection">
            <option>London Heathrow (nearest)<option>
            <option>London Stansted</option>
        </select>
    </div>
    <div class="col-6">
        <span class="info">i</span>
        <span class="info-text">Flights are 43% cheaper on average on this day for this trip if you fly from London Stansted  Switch to London Stansted</span>
    </div>
</div>
-->
<div class="row">    
    <div class="container body-content">
        <div id="step-container">
            <form method="POST" action="/QuoteAndBook/Joining" id="current-step-form" data-parent="group">                
                <input id="FlightDetailJson" name="FlightDetailJson" type="hidden" value="[{&quot;TPA_Extensions&quot;:{&quot;SelectionState&quot;:2},&quot;Available&quot;:40,&quot;Route&quot;:&quot;MAN-LAS&quot;,&quot;FlightLink&quot;:1,&quot;FlightGroupLink&quot;:0,&quot;FlightCode&quot;:&quot;FLG00007315502&quot;,&quot;Description&quot;:&quot;MAN-LAS    THOMAS COOK&quot;,&quot;FlightNumber&quot;:&quot;TCX2718   ODR Economy&quot;,&quot;DayOfOperation&quot;:1,&quot;DepartureDate&quot;:&quot;2019-05-13T09:10:00&quot;,&quot;ArrivalDate&quot;:&quot;2019-05-13T12:05:00&quot;,&quot;FlightSegment&quot;:null,&quot;ID&quot;:&quot;25863&quot;,&quot;IsCtgPackageSpecified&quot;:false,&quot;PackageID&quot;:null,&quot;PriceSpecified&quot;:false,&quot;PriceWithoutDiscountSpecified&quot;:false,&quot;PriceWithoutTaxSpecified&quot;:false,&quot;TaxSpecified&quot;:false,&quot;BookingChannel&quot;:null,&quot;FlightSupplier&quot;:null,&quot;FareType&quot;:null},{&quot;TPA_Extensions&quot;:{&quot;SelectionState&quot;:2},&quot;Available&quot;:40,&quot;Route&quot;:&quot;LAS-MAN&quot;,&quot;FlightLink&quot;:1,&quot;FlightGroupLink&quot;:0,&quot;FlightCode&quot;:&quot;FLG000073283516&quot;,&quot;Description&quot;:&quot;LAS-MAN    THOMAS COOK&quot;,&quot;FlightNumber&quot;:&quot;TCX2719   ODR Economy&quot;,&quot;DayOfOperation&quot;:15,&quot;DepartureDate&quot;:&quot;2019-05-27T07:55:00&quot;,&quot;ArrivalDate&quot;:&quot;2019-05-28T13:55:00&quot;,&quot;FlightSegment&quot;:null,&quot;ID&quot;:&quot;25864&quot;,&quot;IsCtgPackageSpecified&quot;:false,&quot;PackageID&quot;:null,&quot;PriceSpecified&quot;:false,&quot;PriceWithoutDiscountSpecified&quot;:false,&quot;PriceWithoutTaxSpecified&quot;:false,&quot;TaxSpecified&quot;:false,&quot;BookingChannel&quot;:null,&quot;FlightSupplier&quot;:null,&quot;FareType&quot;:null},{&quot;TPA_Extensions&quot;:{&quot;SelectionState&quot;:3},&quot;Available&quot;:6,&quot;Route&quot;:&quot;LGW-LAS&quot;,&quot;FlightLink&quot;:2,&quot;FlightGroupLink&quot;:0,&quot;FlightCode&quot;:&quot;FLG00007336352&quot;,&quot;Description&quot;:&quot;LGW-LAS    Virgin Atlantic&quot;,&quot;FlightNumber&quot;:&quot;VS043   ODR Economy&quot;,&quot;DayOfOperation&quot;:1,&quot;DepartureDate&quot;:&quot;2019-05-13T10:35:00&quot;,&quot;ArrivalDate&quot;:&quot;2019-05-13T13:20:00&quot;,&quot;FlightSegment&quot;:null,&quot;ID&quot;:&quot;25865&quot;,&quot;IsCtgPackageSpecified&quot;:false,&quot;PackageID&quot;:null,&quot;PriceSpecified&quot;:false,&quot;PriceWithoutDiscountSpecified&quot;:false,&quot;PriceWithoutTaxSpecified&quot;:false,&quot;TaxSpecified&quot;:false,&quot;BookingChannel&quot;:null,&quot;FlightSupplier&quot;:null,&quot;FareType&quot;:null},{&quot;TPA_Extensions&quot;:{&quot;SelectionState&quot;:3},&quot;Available&quot;:0,&quot;Route&quot;:&quot;EDI-LHR&quot;,&quot;FlightLink&quot;:3,&quot;FlightGroupLink&quot;:0,&quot;FlightCode&quot;:&quot;FLG00007377152&quot;,&quot;Description&quot;:&quot;EDI-LHR    British Airways&quot;,&quot;FlightNumber&quot;:&quot;BA1443   ODR Economy&quot;,&quot;DayOfOperation&quot;:1,&quot;DepartureDate&quot;:&quot;2019-05-13T11:55:00&quot;,&quot;ArrivalDate&quot;:&quot;2019-05-13T13:25:00&quot;,&quot;FlightSegment&quot;:null,&quot;ID&quot;:&quot;25869&quot;,&quot;IsCtgPackageSpecified&quot;:false,&quot;PackageID&quot;:null,&quot;PriceSpecified&quot;:false,&quot;PriceWithoutDiscountSpecified&quot;:false,&quot;PriceWithoutTaxSpecified&quot;:false,&quot;TaxSpecified&quot;:false,&quot;BookingChannel&quot;:null,&quot;FlightSupplier&quot;:null,&quot;FareType&quot;:null},{&quot;TPA_Extensions&quot;:{&quot;SelectionState&quot;:3},&quot;Available&quot;:2,&quot;Route&quot;:&quot;LHR-LAS&quot;,&quot;FlightLink&quot;:4,&quot;FlightGroupLink&quot;:0,&quot;FlightCode&quot;:&quot;FLG000073510002&quot;,&quot;Description&quot;:&quot;LHR-LAS    British Airways&quot;,&quot;FlightNumber&quot;:&quot;BA275   ODR Economy&quot;,&quot;DayOfOperation&quot;:1,&quot;DepartureDate&quot;:&quot;2019-05-13T16:40:00&quot;,&quot;ArrivalDate&quot;:&quot;2019-05-13T19:20:00&quot;,&quot;FlightSegment&quot;:null,&quot;ID&quot;:&quot;25867&quot;,&quot;IsCtgPackageSpecified&quot;:false,&quot;PackageID&quot;:null,&quot;PriceSpecified&quot;:false,&quot;PriceWithoutDiscountSpecified&quot;:false,&quot;PriceWithoutTaxSpecified&quot;:false,&quot;TaxSpecified&quot;:false,&quot;BookingChannel&quot;:null,&quot;FlightSupplier&quot;:null,&quot;FareType&quot;:null},{&quot;TPA_Extensions&quot;:{&quot;SelectionState&quot;:3},&quot;Available&quot;:0,&quot;Route&quot;:&quot;LHR-LAS&quot;,&quot;FlightLink&quot;:3,&quot;FlightGroupLink&quot;:0,&quot;FlightCode&quot;:&quot;FLG000073810002&quot;,&quot;Description&quot;:&quot;LHR-LAS    British Airways&quot;,&quot;FlightNumber&quot;:&quot;BA275   ODR Economy&quot;,&quot;DayOfOperation&quot;:1,&quot;DepartureDate&quot;:&quot;2019-05-13T16:40:00&quot;,&quot;ArrivalDate&quot;:&quot;2019-05-13T19:20:00&quot;,&quot;FlightSegment&quot;:null,&quot;ID&quot;:&quot;25870&quot;,&quot;IsCtgPackageSpecified&quot;:false,&quot;PackageID&quot;:null,&quot;PriceSpecified&quot;:false,&quot;PriceWithoutDiscountSpecified&quot;:false,&quot;PriceWithoutTaxSpecified&quot;:false,&quot;TaxSpecified&quot;:false,&quot;BookingChannel&quot;:null,&quot;FlightSupplier&quot;:null,&quot;FareType&quot;:null},{&quot;TPA_Extensions&quot;:{&quot;SelectionState&quot;:3},&quot;Available&quot;:6,&quot;Route&quot;:&quot;LAS-LGW&quot;,&quot;FlightLink&quot;:2,&quot;FlightGroupLink&quot;:0,&quot;FlightCode&quot;:&quot;FLG000073493516&quot;,&quot;Description&quot;:&quot;LAS-LGW    Virgin Atlantic&quot;,&quot;FlightNumber&quot;:&quot;VS044   ODR Economy&quot;,&quot;DayOfOperation&quot;:15,&quot;DepartureDate&quot;:&quot;2019-05-27T09:25:00&quot;,&quot;ArrivalDate&quot;:&quot;2019-05-28T15:35:00&quot;,&quot;FlightSegment&quot;:null,&quot;ID&quot;:&quot;25866&quot;,&quot;IsCtgPackageSpecified&quot;:false,&quot;PackageID&quot;:null,&quot;PriceSpecified&quot;:false,&quot;PriceWithoutDiscountSpecified&quot;:false,&quot;PriceWithoutTaxSpecified&quot;:false,&quot;TaxSpecified&quot;:false,&quot;BookingChannel&quot;:null,&quot;FlightSupplier&quot;:null,&quot;FareType&quot;:null},{&quot;TPA_Extensions&quot;:{&quot;SelectionState&quot;:3},&quot;Available&quot;:0,&quot;Route&quot;:&quot;LAS-LHR&quot;,&quot;FlightLink&quot;:3,&quot;FlightGroupLink&quot;:0,&quot;FlightCode&quot;:&quot;FLG000073999516&quot;,&quot;Description&quot;:&quot;LAS-LHR    British Airways&quot;,&quot;FlightNumber&quot;:&quot;BA2276   ODR Economy&quot;,&quot;DayOfOperation&quot;:15,&quot;DepartureDate&quot;:&quot;2019-05-27T10:35:00&quot;,&quot;ArrivalDate&quot;:&quot;2019-05-28T16:35:00&quot;,&quot;FlightSegment&quot;:null,&quot;ID&quot;:&quot;25871&quot;,&quot;IsCtgPackageSpecified&quot;:false,&quot;PackageID&quot;:null,&quot;PriceSpecified&quot;:false,&quot;PriceWithoutDiscountSpecified&quot;:false,&quot;PriceWithoutTaxSpecified&quot;:false,&quot;TaxSpecified&quot;:false,&quot;BookingChannel&quot;:null,&quot;FlightSupplier&quot;:null,&quot;FareType&quot;:null},{&quot;TPA_Extensions&quot;:{&quot;SelectionState&quot;:3},&quot;Available&quot;:0,&quot;Route&quot;:&quot;LHR-EDI&quot;,&quot;FlightLink&quot;:3,&quot;FlightGroupLink&quot;:0,&quot;FlightCode&quot;:&quot;FLG000074071016&quot;,&quot;Description&quot;:&quot;LHR-EDI    British Airways&quot;,&quot;FlightNumber&quot;:&quot;BA2940   ODR Economy&quot;,&quot;DayOfOperation&quot;:15,&quot;DepartureDate&quot;:&quot;2019-05-27T13:20:00&quot;,&quot;ArrivalDate&quot;:&quot;2019-05-27T11:50:00&quot;,&quot;FlightSegment&quot;:null,&quot;ID&quot;:&quot;25872&quot;,&quot;IsCtgPackageSpecified&quot;:false,&quot;PackageID&quot;:null,&quot;PriceSpecified&quot;:false,&quot;PriceWithoutDiscountSpecified&quot;:false,&quot;PriceWithoutTaxSpecified&quot;:false,&quot;TaxSpecified&quot;:false,&quot;BookingChannel&quot;:null,&quot;FlightSupplier&quot;:null,&quot;FareType&quot;:null},{&quot;TPA_Extensions&quot;:{&quot;SelectionState&quot;:3},&quot;Available&quot;:2,&quot;Route&quot;:&quot;LAS-LHR&quot;,&quot;FlightLink&quot;:4,&quot;FlightGroupLink&quot;:0,&quot;FlightCode&quot;:&quot;FLG0000736129016&quot;,&quot;Description&quot;:&quot;LAS-LHR    British Airways&quot;,&quot;FlightNumber&quot;:&quot;BA274   (None)&quot;,&quot;DayOfOperation&quot;:15,&quot;DepartureDate&quot;:&quot;2019-05-27T15:30:00&quot;,&quot;ArrivalDate&quot;:&quot;2019-05-28T21:30:00&quot;,&quot;FlightSegment&quot;:null,&quot;ID&quot;:&quot;25868&quot;,&quot;IsCtgPackageSpecified&quot;:false,&quot;PackageID&quot;:null,&quot;PriceSpecified&quot;:false,&quot;PriceWithoutDiscountSpecified&quot;:false,&quot;PriceWithoutTaxSpecified&quot;:false,&quot;TaxSpecified&quot;:false,&quot;BookingChannel&quot;:null,&quot;FlightSupplier&quot;:null,&quot;FareType&quot;:null}]">
                <div class="section">
                    <span class="section-title">Flights from London Heathrow (United Kingdom) to Las Vegas, Nevada (USA)<span>
                </div>
                <select id="outboundFlight" name="outboundFlight">
                    <option value="0">Select Flight</option>
                    <option value="25863" data-flightlink="1">13/05/2019 09:10:00 - MAN-LAS    THOMAS COOK</option>
                    <option value="25865" data-flightlink="2">13/05/2019 10:35:00 - LGW-LAS    Virgin Atlantic</option>
                    <option value="25869" data-flightlink="3">13/05/2019 11:55:00 - EDI-LHR    British Airways</option>
                    <option value="25867" data-flightlink="4">13/05/2019 16:40:00 - LHR-LAS    British Airways</option>
                </select>
                <br><br>
                <div id="1" class="flightDetails hidden">
                    <div class="flightLeg">
                        <div class="direction">Outbound</div>
                        <div>TCX2718 ODR Economy</div>
                        <div class="airport">MAN-LAS THOMAS COOK</div>
                        <div class="flightTime">13 May 2019 09:10 - 13 May 2019 12:05</div>
                    </div>
                    <div class="flightLeg">
                        <div class="direction">Inbound</div>
                        <div>TCX2719 ODR Economy</div>
                        <div class="airport">LAS-MAN THOMAS COOK</div>
                        <div class="flightTime">27 May 2019 07:55 - 28 May 2019 13:55</div>
                    </div>
                    <input id="flightlink-1" value="[&quot;25863-FLG00007315502&quot;,&quot;25864-FLG000073283516&quot;]" type="hidden">
                </div>
                <div id="2" class="flightDetails hidden">
                    <div class="flightLeg">
                        <div class="direction">Outbound</div>
                        <div>VS043 ODR Economy</div>
                        <div class="airport">LGW-LAS Virgin Atlantic</div>
                        <div class="flightTime">13 May 2019 10:35 - 13 May 2019 13:20</div>
                    </div>
                    <div class="flightLeg">
                        <div class="direction">Inbound</div>
                        <div>VS044 ODR Economy</div>
                        <div class="airport">LAS-LGW Virgin Atlantic</div>
                        <div class="flightTime">27 May 2019 09:25 - 28 May 2019 15:35</div>
                    </div>
                    <input id="flightlink-2" value="[&quot;25865-FLG00007336352&quot;,&quot;25866-FLG000073493516&quot;]" type="hidden">
                </div>
                <div id="3" class="flightDetails hidden">
                    <div class="flightLeg">
                        <div class="direction">Outbound</div>
                        <div>BA1443 ODR Economy</div>
                        <div class="airport">EDI-LHR British Airways</div>
                        <div class="flightTime">13 May 2019 11:55 - 13 May 2019 13:25</div>

                        <div>BA275 ODR Economy</div>
                        <div class="airport">LHR-LAS British Airways</div>
                        <div class="flightTime">13 May 2019 16:40 - 13 May 2019 19:20</div>
                    </div>
                    <div class="flightLeg">
                        <div class="direction">Inbound</div>
                        <div>BA2276 ODR Economy</div>
                        <div class="airport">LAS-LHR British Airways</div>
                        <div class="flightTime">27 May 2019 10:35 - 28 May 2019 16:35</div>
                        
                        <div>BA2940 ODR Economy</div>
                        <div class="airport">LHR-EDI British Airways</div>
                        <div class="flightTime">27 May 2019 13:20 - 27 May 2019 11:50</div>
                    </div>
                    <input id="flightlink-3" value="[&quot;25869-FLG00007377152&quot;,&quot;25870-FLG000073810002&quot;,&quot;25871-FLG000073999516&quot;,&quot;25872-FLG000074071016&quot;]" type="hidden">
                </div>
                <div id="4" class="flightDetails hidden">
                    <div class="flightLeg">
                        <div class="direction">Outbound</div>
                        <div>BA275 ODR Economy</div>
                        <div class="airport">LHR-LAS British Airways</div>
                        <div class="flightTime">13 May 2019 16:40 - 13 May 2019 19:20</div>
                    </div>
                    <div class="flightLeg">
                        <div class="direction">Inbound</div>
                        <div>BA274 (None)</div>
                        <div class="airport">LAS-LHR British Airways</div>
                        <div class="flightTime">27 May 2019 15:30 - 28 May 2019 21:30</div>
                    </div>
                    <input id="flightlink-4" value="[&quot;25867-FLG000073510002&quot;,&quot;25868-FLG0000736129016&quot;]" type="hidden">
                </div>
                <input id="selectedFlights" name="selectedFlights" type="hidden" value="[&quot;25863-FLG00007315502&quot;,&quot;25864-FLG000073283516&quot;]">
            </form>
             <input id="previous-step-action" name="previous-step-action" type="hidden" value="/QuoteAndBook/GuestNames">
        </div>
    </div>
</div>
