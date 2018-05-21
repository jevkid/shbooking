# Shbookings

----
## Navigation
* Found in `nav.php` in partial_views
* Each step/page has a few properties associated with it- `data-step`, which is a numeric value, `data-next`, which specifies the next page i.e. "details" or "accom", `data-prev`, which is the current page i.e. "party" or "travel", and `data-summary-id` which allows the summary to track which bits to show, i.e "air".
* The continue button is a single button found in `index.php`- this has a property called `data-current-step` which is defaulted to 1.
* The actual navigation bar is a list, and each step has a `data-nav-step` associated with it, i.e. "party" or "travel"
    * The JS for step/page navigation is found in `scripts.js` and has been commented inline. When the continue button is selected, we loop through the partial containers and find the one which does *not* have the `hidden` class- we set this to the "current" page.
    * The function takes an argument `isBackButton` to determine if we are going forwards in the journey or backwards.
    * Regardless of which direction, we then hide the current step. Based on whether or not `isBackButton` is true or false, we will either increment or decrement the navigation, removing the `hidden` class from the target container.
    * We then remove the `active` class from the current navigation state, and add it to the target navigation.
    * If `isBackButton` is true and the current step is the 2nd one, we'll hide the back button. 

----
## Your Party

----
## Joining Points

----
## Coach

---
## Air

----
## Accommodation

----
## Guest Details

----
## Extras

----
## Confirm and Pay

----
## Confirmation Page



