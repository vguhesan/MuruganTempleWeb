---
title: "Pooja Booking and Services Request"
date: 2019-11-26T19:38:20-05:00
draft: false
---

Use this form below for requesting services that are available online. Please note that we are only listing services that can be performed and requested online in the form below. Some of the services not listed below requires you to be at the temple (example - Kaavidi or Palkudam). For a list of all available services, please visit the link <a href='/about/our-services/'>here</a>. Payment is handled by PayPal.

If there is a service that is not listed, please make a general donation for the total amount and contact the temple with your PayPal transaction to notify of any details. For general donations, please visit "<a href='/about/donate-online/'>Donate Online</a>".

<div class="container">
  <div class="row">
    <div class="col-sm">
      <div class="card">
        <h5 class="card-header">Step 1 of 3: Service</h5>
        <div class="card-body">
          Please add each of the required services one by one to your cart. Then proceed to step 2.
          <form>
          <div class="">
            <div class="row">
              <div class="col p-1">
                <select class="form-control text-monospace txt-mono-sml" id="serviceList">
                  <option value="0">-- Select Service --</option>
                  <option value="0"                             >------ BRAHMOTSAVAM SERVICES -----------------------------</option>
                  <option value="Brahmotsavam Archanai,$9"            >Brahmotsavam Archanai Sponsorship ............ $9</option>
                  <option value="Brahmotsavam Homam,$21"              >Brahmotsavam Homam Sponsorship ............... $21</option>
                  <option value="Brahmotsavam Thirukalyanam,$21"      >Brahmotsavam Thirukalyanam Sponsorship ....... $21</option>
                  <option value="Brahmotsavam Murugan Abishekam,$75"  >Brahmotsavam Murugan Abishekam Sponsorship ... $75</option>
                  <option value="Brahmotsavam One-Day Sponsorship,$91">Brahmotsavam One-Day Sponsorship ............. $91</option>
                  <option value="Brahmotsavam 10-Day Sponsorship,$701">Brahmotsavam All 10-Day Sponsorship .......... $701</option>
                  <option value="0"                             >----------------------------------------------------------</option>
                  <option value="Archanai,$9"                   >Archanai .................................... $9</option>
                  <option value="Sahasranamam,$11"              >Sahasranamam ................................ $11</option>
                  <option value="Murugan Abishekam,$101"        >Abishekam (Murugan - Main Deity Only) ....... $101</option>
                  <option value="Abishekam,$51"                 >Abishekam (All Other Deities) ............... $51</option>
                  <option value="Sangu Abishekam,$151"          >Abishekam (Sangu) ........................... $151</option>
                  <option value="Homam,$31"                     >Homam ....................................... $31</option>
                  <option value="Paal Kudam,$11"                >Paal Kudam .................................. $11</option>
                  <option value="Kaavadi,$21"                   >Kaavadi ..................................... $21</option>
                  <option value="Velli Vilakku Poojai,$21"      >Velli Vilakku Poojai ........................ $21</option>
                  <option value="Thirukalyanam,$31"             >Thirukalyanam ............................... $31</option>
                  <option value="Ghee Lamp,$5"                  >Ghee Lamp ................................... $5</option>
                  <option value="Oil Lamp,$3"                   >Oil Lamp .................................... $3</option>
                  <option value="Neivedhyam (small tray),$41"   >Neivedhyam (small tray) ..................... $41</option>
                  <option value="Neivedhyam (medium tray),$61"  >Neivedhyam (medium tray) .................... $61</option>
                  <option value="Neivedhyam (large tray),$91"   >Neivedhyam (large tray) ..................... $91</option>
                  <option value="Vada Malai (51 vadai),$41"     >Vada Malai (for 51 vadai) ................... $41</option>
                  <option value="Vada Malai (101 vadai),$75"    >Vada Malai (for 101 vadai) .................. $75</option>
                  <option value="0"                             >----------------------------------------------------------</option>
                  <option value="Test,$1"                       >Test (no service will be performed) ......... $1</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col p-1">
                <label class="sr-only" for="serviceList">Deity:</label>
                <select class="form-control text-monospace txt-mono-sml" id="deity">
                  <option value="0">-- Select Deity --</option>
                  <option value="Murugan (Subramanya)"  >Lord Murugan/Sri Subramanya (திரு முருகன்/ஸ்ரீ சுப்ரமண்யா)</option>
                  <option value="Ganesha"               >Ganesha (விநாயகர்/கணபதி)</option>
                  <option value="Siva"                  >Siva (சிவா/சிவபெருமான்)</option>
                  <option value="Meenakshi"             >Meenakshi (மீனாட்சி அம்மன்)</option>
                  <option value="Natarajar"             >Natarajar (நடராஜர்)</option>
                  <option value="Palani Andavar"        >Palani Andavar (பழனி ஆண்டவர்)</option>
                  <option value="Kala Bairavar"         >Kala Bairavar (காலா பைரவர்)</option>
                  <option value="Kala Samhara Murthy"   >Kala Samhara Murthy (காலா சம்ஹர மூர்த்தி)</option>
                  <option value="Durga"                 >Sri Durga (துர்கை அம்மன்)</option>
                  <option value="Dakshina Murthy"       >Dakshina Murthy (தக்ஷிணா மூர்த்தி)</option>
                  <option value="Navagraham"            >Navagraham (நவக்கிரகம்)</option>
                  <option value="Sandikeswarar"         >Sandikeswarar (சண்டிகேசுவரர்)</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col pt-1">
                <div class="form-group">
                  <p class="card-text">Choose Date (to perform service):</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col p-1">
                <div class="form-group">
                  <div class='input-group date' id='datePicker1'>
                      <input type='text' class="form-control" id="pickedDate" placeholder="Select Date..." data-input/>
                      <div class="input-group-append">
                        <span class="input-group-text fas fa-calendar-alt" data-toggle></span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col p-1">
                <textarea class="form-control item_instr" 
                  id="instructions1" rows="3" placeholder="Special instructions or leave it blank"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col p-1 d-flex justify-content-center">
                <a class="btn btn-primary btn-sm" href="javascript:;" id="addItemToCart" 
                onClick="javascript: processItem();" role="button">Add Item To Cart</a>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <div class="card">
        <h5 class="card-header">Step 2 of 3: Family Details (optional)</h5>
        <div class="card-body">
          Enter details of each member of your family and add them to the cart. Then proceed to step 3.
          <div class="row">
            <div class="col m-1">
                <input type="text" class="form-control" id="fullName" placeholder="Full Name">
              </div>
          </div>
          <div class="row">
            <div class="col m-1">
              <select class="form-control text-monospace txt-mono-sml" id="naksha">
                <option value="-">-- Select Nakshatra --</option>
                <option value="Aswini">Ashvini/Aswini (அசுவினி)</option>
                <option value="Bharani">Bharani (பரணி)</option>
                <option value="Karthigai">Krithika/Karthigai (கிருத்திகை)</option>
                <option value="Rohini">Rohini (ரோகிணி)</option>
                <option value="Mrigasheersham">Mrigasheersham (மிருகசிரீஷம்)</option>
                <option value="Thiruvaathirai">Aardhra/Thiruvaathirai (திருவாதிரை)</option>
                <option value="Punarpoosam">Punarvasu/Punarpoosam (புனர்பூசம்)</option>
                <option value="Poosam">Pushyami/Poosam (பூசம்)</option>
                <option value="Aayilyam">Ashlesha/Aayilyam (ஆயில்யம்)</option>
                <option value="Makam">Magha/Makam (மகம்)</option>
                <option value="Pooram">Purva Phalguni/Pooram (பூரம்)</option>
                <option value="Uthiram">Uttara Phalguni/Uthiram (உத்திரம்)</option>
                <option value="Hastham">Hasta/Hastham (ஹஸ்தம்)</option>
                <option value="Chithirai">Chitra/Chithirai (சித்திரை)</option>
                <option value="Swati">Swati/Swaathi (சுவாதி)</option>
                <option value="Visaakam">Vishakha/Visaakam (விசாகம்)</option>
                <option value="Anusham">Anuradha/Anusham (அனுஷம்)</option>
                <option value="Kettai">Jyeshtha/Kettai (கேட்டை)</option>
                <option value="Moolam">Mula/Moolam (முலம்)</option>
                <option value="Pooraadam">Purva Ashadha/Pooraadam (பூராடம்)</option>
                <option value="Uthiraadam">Uttara Ashadha/Uthiraadam (உத்திராடம்)</option>
                <option value="Thiruvonam">Shravana/Thiruvonam (திருவோணம்)</option>
                <option value="Avittam">Dhanishtha/Avittam (அவிட்டம்)</option>
                <option value="Sadayam">Shatabhisha/Sadayam (சதயம்)</option>
                <option value="Poorattathi">Purva Bhadrapada/Poorattathi (பூரட்டாதி)</option>
                <option value="Uthirattathi">Uttara Bhadrapada/Uthirattathi (உத்திரட்டாதி)</option>
                <option value="Revati">Revati (ரேவதி)</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col m-1">
              <select class="form-control text-monospace txt-mono-sml" id="raasi">
                <option value="-">-- Select Rassi --</option>
                <option value="Mesham">Mesham (மேஷம்)</option>
                <option value="Rishabam">Rishabam (ரிஷபம்)</option>
                <option value="Mithunam">Midhunam (மிதுனம்)</option>
                <option value="Kadagam">Kadagam (கடகம்)</option>
                <option value="Simmam">Simmam (சிம்மம்)</option>
                <option value="Kanni">Kanni (கன்னி)</option>
                <option value="Thula">Thula (துலாம்)</option>
                <option value="Viruchigam">Viruchigam (விருச்சிகம்)</option>
                <option value="Dhanusu">Dhanusu (தனுசு)</option>
                <option value="Magaram">Magaram (மகரம்)</option>
                <option value="Kumbam">Kumbam (கும்பம்)</option>
                <option value="Meenam">Meenam (மீனம்)</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col m-1">
              <input type="text" class="form-control" id="gothram" placeholder="Gothram">
            </div>
          </div>
          <div class="row">
            <div class="col m-1">
              If you are the primary member, please provide contact details.
            </div>
          </div>
          <div class="row">
            <div class="col m-1">
              <input type="text" class="form-control" id="email" placeholder="Email (only for primary)">
            </div>
          </div>
          <div class="row">
            <div class="col m-1">
              <input type="text" class="form-control" id="phone" placeholder="Phone (only for primary)">
            </div>
          </div>
          <div class="row">
            <div class="col m-1 d-flex justify-content-center">
              <a href="#" class="btn btn-primary btn-sm" onClick="javascript: processFamily();">Add Member Details To Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-lg-12" align="center">
    <p><br/><b>Please note that your transaction is not complete until you check out using the "Checkout via PayPal" link at the bottom of the page.</b></p>
  <hr>
  </div>
</div>

<div class="row">
  <div class="col-lg-12" align="center">
    <div class="card">
      <h5 class="card-header">Step 3 of 3: Checkout</h5>
      <div class="card-body">
        <div class="cartdetails_lbl">Shopping Cart Details:</div>
        <div class="simpleCart_items"></div>
        <div class="simpleCartTotal_parent">
        Total: <span class="simpleCart_total"></span>
        </div>
        <a href="javascript:;" class="simpleCart_checkout">Checkout via PayPal</a>
        <a href="javascript:;" class="simpleCart_empty">Clear Cart</a>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="/simplecartjs/simpleCart.min.js"></script>

<script>
jQuery(document).ready(function($) {
  simpleCart({
    checkout: { 
      type: "PayPal" , 
      email: "finance@murugantemple.org" 
    },
    currency:   "USD",
    cartColumns: [
      { attr: "name" , label: "Service or Member" },
      { attr: "date" , label: "Date" },
      { attr: "price" , label: "Price", view: 'currency' },
      { view: "decrement" , label: false },
      { attr: "quantity" , label: "Qty" },
      { view: "increment" , label: false },
      { attr: "total" , label: "SubTotal", view: 'currency' },
      { view: "remove" , text: "Remove" , label: false }
    ],
    load: loadInitialCart(),
  });
});
function loadInitialCart() {
  simpleCart.each(function(item){
    if (item.get('dateaddedtocart') === undefined) {
      item.remove(); 
    }
  });
}
</script>

<script type="text/javascript">
function processItem() {
  selOption = $('#serviceList').val();
  skipAdd = true;
  if (selOption == '0') {
    //alert("Please choose a service");
    new Noty({
      theme: 'sunset',
      text: 'Please select a service!',
      type: 'error',
      layout: 'center',
      timeout: 1500,
      animation: {
        open: 'animated bounceInDown', // Animate.css class names
        close: 'animated bounceOutUp' // Animate.css class names
      },
    }).show();
    $('#serviceList').focus();
  }
  else {
    eleItems = selOption.split(',');
    name = ''
    if ( (eleItems[0] == 'Murugan Abishekam') || (eleItems[0].indexOf('Brahmotsavam') > -1) ) {
      name = eleItems[0] + ' [ Murugan - Main Deity ]';
      skipAdd = false;
    } 
    else if (eleItems[0] == 'Abishekam' && $('#deity').val() == 'Murugan (Subramanya)') {
      displayNotice = 'INVALID SELECTION: The cost for Lord Murugan abishekam is $101. You have chosen the abishekam which is $51 for all other deities other than Lord Murugan. Please choose either "Abishekam (Murugan - Main Deity Only),$101" or a different deity other than Lord Muruga from the list. Thank You.';    
      new Noty({
        theme: 'sunset',
        text: displayNotice,
        type: 'error',
        layout: 'center',
        timeout: 15000,
        animation: {
          open: 'animated bounceInUp', // Animate.css class names
          close: 'animated bounceOutDown' // Animate.css class names
        },
      }).show();
      $('#deity').focus();
      skipAdd = true;
    }
    else {
      skipAdd = false;
      if ($('#deity').val() != '0') {
        name = eleItems[0] + ' [' + $('#deity').val() + ']';
      } else {
        name = eleItems[0];
      }
    }

    if (skipAdd == false) {
      item = {
        name: name,
        price: eleItems[1],
      };

      if ($('#pickedDate').val().length > 0) {
        item['PickedDate'] = $('#pickedDate').val();
      }

      if ($('#instructions1').val().length > 0) {
        item['Comment'] = $('#instructions1').val();
      }

      // Add date-added-to-cart
      item['dateaddedtocart'] = moment().format('YYYYMMDD');

      simpleCart.add(item);
      
      displayNotice = 'Item has been added to the cart below!';    
      new Noty({
        theme: 'sunset',
        text: displayNotice,
        type: 'alert',
        layout: 'center',
        timeout: 1500,
        animation: {
          open: 'animated bounceInUp', // Animate.css class names
          close: 'animated bounceOutDown' // Animate.css class names
        },
      }).show();
      /* reset elements */
      $('#serviceList').val('0');
      $('#deity').val('0');
      $('#fullName').focus();
    }
    
  }
}

function processFamily() {
  if ($('#fullName').val().length == 0) {
    new Noty({
      theme: 'sunset',
      text: 'Please enter a valid user name',
      type: 'error',
      layout: 'center',
      timeout: 1500,
      animation: {
        open: 'animated bounceInDown', // Animate.css class names
        close: 'animated bounceOutUp' // Animate.css class names
      },
    }).show();
    $('#fullName').focus();
  } 
  else 
  {
    u = $('#fullName').val();

    c = '';
    if ($('#email').val().length > 0) {
      c = c + ' [' + $('#email').val() + ']';
    }
    if ($('#phone').val().length > 0) {
      c = c +  ' [' + $('#phone').val() + ']';
    }

    d = $('#fullName').val();
    if ($('#naksha').val() != '-'){
      d = d + ' / ' + $('#naksha').val();
    }
    if ($('#raasi').val() != '-'){
      d = d + ' / ' + $('#raasi').val();
    }
    if ($('#gothram').val().length > 0){
      d = d + ' / ' + $('#gothram').val();
    }
    
    cart = {};
    cart['price'] = 0;
    if (u.length > 0){
      cart['name'] = u;
    }
    if (c.length > 0) {
      cart['ContactInfo'] = c;
    }
    if (d.length > 0) {
      cart['Detail'] = d;
    }
    simpleCart.add(cart);

    $('#fullName').val('');
    $('#naksha').val('-');
    $('#raasi').val('-');
    $('#gothram').val('');
    $('#email').val('');
    $('#phone').val('');
    displayNotice = 'Family member details has been added to cart below!';    
    new Noty({
      theme: 'sunset',
      text: displayNotice,
      type: 'alert',
      layout: 'center',
      timeout: 1500,
      animation: {
        open: 'animated bounceInUp', // Animate.css class names
        close: 'animated bounceOutDown' // Animate.css class names
      },
    }).show();
    $('#fullName').focus();
  }  
}

jQuery(document).ready(function($) {
  $('.simpleCart_checkout').addClass('btn').addClass('btn-danger');
});
</script>

<style>
.txt-mono-sml {
  font-size: 12px;
}
</style>

<script type="text/javascript">

  var now = Date.now();

  jQuery(document).ready(function($) {

    $("#datePicker1").flatpickr({
      enableTime: false,
      dateFormat: "D, M d",
      wrap: true,
      defaultDate: now,
    });

  });
</script>

<style>
.card-header {
  background: #b5b1aa;
  font-size: 18px;
  font-weight: bold;
  color: #21214a;
}

.card-body {
  background: #f2ecec;
}

/* CARD DETAILS */

/* SimpleCartJS Formatting */
/*.simpleCart_items table {
  width:100%;
}

.simpleCart_items div div.headerRow div[class*="item-"] {
  float:left;
  width: 20%;
}

.simpleCart_items div div.itemRow div[class*="item-"] {
  float:left;
  width: 20%;
}
*/

.cartdetails_lbl {
  font-weight: bold;
}

/* SIMPLE CART STYLE */

.simpleCart_items  {
  display: table;         
  width: auto;         
  /*background-color: #eee;*/         
  /*border: 1px solid #666666;*/         
  border-spacing: 5px; /* cellspacing:poor IE support for  this */
}

.simpleCart_items div div.headerRow {
  display: table-row;
  width: auto;
  clear: both;
  color: #198029;
}

.simpleCart_items div div.itemRow {
  display: table-row;
  width: auto;
  clear: both;
}


.simpleCart_items div div.headerRow div[class*="item-"] {
  float: left; /* fix for  buggy browsers */
  display: table-column;         
  width: 100px;       
  /*background-color: #ccc;*/
}

.simpleCart_items div div.itemRow div[class*="item-"] {
  float: left; /* fix for  buggy browsers */
  display: table-column;         
  width: 100px;       
  background-color: #ccc;
  overflow: hidden;
}

.simpleCart_items div div.headerRow div.item-name {        
  width: 400px;
}

.simpleCart_items div div.itemRow div.item-name {
  width: 400px;
}

.simpleCart_items div div.headerRow div.item-date {
  width: 100px;
}

.simpleCart_items div div.itemRow div.item-date {
  width: 100px;
  min-width: 100px;
  display: list-item;
}

.simpleCart_items div div.headerRow div.item-price {
  width: 80px;
}

.simpleCart_items div div.itemRow div.item-price {
  width: 80px;
}

.simpleCart_items div div.headerRow div.item-quantity {
  margin-left: 10px;
  min-width: 48px;
}

.simpleCart_items div div.itemRow div.item-quantity {
  width: 80px;
}

.simpleCart_items div div.headerRow div.item-total {
  width: 100px;
  padding-left: 10px;
}

.simpleCart_items div div.itemRow div.item-total {
  width: 100px;
  padding-left: 16px;
}

.simpleCartTotal_parent {
  padding-left: 253px;
  font-weight: bold;
}

.simpleCart_checkout {
  margin-left: 252px;
}

.simpleCart_empty {
  display: none;
}

@media (max-width: 767px) {

  .simpleCart_items div div.headerRow div.item-name {        
    width: 130px;
  }

  .simpleCart_items div div.itemRow div.item-name {
    width: 130px;
  }

  .simpleCartTotal_parent {
    padding-left: 45px;
    font-weight: bold;
  }

  .simpleCart_checkout {
    margin-left: 10px;
  }
  
  .item-date, .item-total, .item-quantity, .item-increment, .item-decrement
  {        
    display: none !important;
  }


  /*.cartdetails_lbl, .simpleCart_items {
    display: none;
  }*/

  .simpleCart_empty {
    display: none;
  }
}

.item-decrement, .item-increment {
  width: 10px !important;
}
.item-quantity {
  width: 40px !important;
  text-align: center;
}

</style>
