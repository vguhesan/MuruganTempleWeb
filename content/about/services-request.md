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
        <h5 class="card-header">Step 1 of 3: Choose from available services</h5>
        <div class="card-body">
          <p class="card-text">Please add each of the required services one by one to your cart. Then proceed to step 2.</p>
          <form>
          <div class="">
            <div class="row">
              <div class="col p-1">
                <select class="form-control text-monospace txt-mono-sml" id="serviceList">
                  <option value="0">-- Select Service --</option>
                  <option value="Archanai,$9"                   >Archanai .................................... $9</option>
                  <option value="Sahasranamam,$15"              >Sahasranamam ................................ $15</option>
                  <option value="Murugan Abishekam,$101"        >Abishekam (Murugan - Main Diety) ............ $101</option>
                  <option value="Abishekam,$51"                 >Abishekam (All Others) ...................... $51</option>
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
                  <option value="Murugan (Subramanya)"  >Murugan (Subramanya)</option>
                  <option value="Ganesha"               >Ganesha</option>
                  <option value="Siva"                  >Siva</option>
                  <option value="Meenakshi"             >Meenakshi</option>
                  <option value="Natarajar"             >Natarajar</option>
                  <option value="Palani Andavar"        >Palani Andavar</option>
                  <option value="Kala Bairavar"         >Kala Bairavar</option>
                  <option value="Kala Samhara Murthy"   >Kala Samhara Murthy</option>
                  <option value="Durga"                 >Durga</option>
                  <option value="Dakshina Murthy"       >Dakshina Murthy</option>
                  <option value="Navagraham"            >Navagraham</option>
                  <option value="Sandhiheswarar"        >Sandhiheswarar</option>
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
        <h5 class="card-header">Step 2 of 3: Enter family member details (optional)</h5>
        <div class="card-body">
          <p>Please add details of each family member and add them to the cart. Then proceed to step 3. If you are the primary member, please provide your telephone and email address so that we can contact you.</p>
          <div class="row">
            <div class="col m-1">
                <input type="text" class="form-control" id="fullName" placeholder="Full Name">
              </div>
          </div>
          <div class="row">
            <div class="col m-1">
              <select class="form-control text-monospace txt-mono-sml" id="naksha">
                <option value="-">-- Select Nakshatra --</option>
                <option value="Ashvini/Aswini">Ashvini/Aswini</option>
                <option value="Bharani">Bharani</option>
                <option value="Krittika/Krithika">Krittika/Krithika</option>
                <option value="Rohini">Rohini</option>
                <option value="Mrigashirsha">Mrigashirsha</option>
                <option value="Ardra">Ardra</option>
                <option value="Punarvasu">Punarvasu</option>
                <option value="Pushya">Pushya</option>
                <option value="Ashlesha">Ashlesha</option>
                <option value="Magha">Magha</option>
                <option value="Purva Phalguni">Purva Phalguni</option>
                <option value="Uttara Phalguni">Uttara Phalguni</option>
                <option value="Hasta">Hasta</option>
                <option value="Chitra">Chitra</option>
                <option value="Swati">Swati</option>
                <option value="Vishakha">Vishakha</option>
                <option value="Anuradha">Anuradha</option>
                <option value="Jyeshtha">Jyeshtha</option>
                <option value="Mula">Mula</option>
                <option value="Purva Ashadha">Purva Ashadha</option>
                <option value="Uttara Ashadha">Uttara Ashadha</option>
                <option value="Shravana">Shravana</option>
                <option value="Dhanishtha">Dhanishtha</option>
                <option value="Shatabhisha">Shatabhisha</option>
                <option value="Purva Bhadrapada">Purva Bhadrapada</option>
                <option value="Uttara Bhadrapada">Uttara Bhadrapada</option>
                <option value="Revati">Revati</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col m-1">
              <select class="form-control text-monospace txt-mono-sml" id="raasi">
                <option value="-">-- Select Rassi --</option>
                <option value="Maysham">Maysham</option>
                <option value="Rishabam">Rishabam</option>
                <option value="Mithunam">Mithunam</option>
                <option value="Kadagam">Kadagam</option>
                <option value="Simmam">Simmam</option>
                <option value="Kanni">Kanni</option>
                <option value="Thulam">Thula</option>
                <option value="Viruchaga">Viruchaga</option>
                <option value="Thanusu">Thanusu</option>
                <option value="Maharam">Makaram</option>
                <option value="Kumbam">Kumbam</option>
                <option value="Meenam">Meenam</option>
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
});
</script>

<script type="text/javascript">
function processItem() {
  selOption = $('#serviceList').val();
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
    if (eleItems[0] == 'Murugan Abishekam,$101') {
      name = eleItems[0] + ' [ Murugan - Main Deity ]';
    } else {
      if ($('#deity').val() != '0') {
        name = eleItems[0] + ' [' + $('#deity').val() + ']';
      } else {
        name = eleItems[0];
      }
    }

    deity = ''
    if ($('#deity').val() != '0') {
      deity = $('#deity').val();
    }
    
    pickedDate = $('#pickedDate').val();
    simpleCart.add({
      name: name,
      deity: deity,
      price: eleItems[1],
      date: pickedDate,
      instr: $('#instructions1').val()
    });
    
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

function processFamily() {
  simpleCart.add({
    name: $('#fullName').val(),
    price: 0,
    nakshatra: $('#naksha').val('-'),
    raasi: $('#raasi').val('-'),
    gotram: $('#gothram').val(),
    email: $('#email').val(),
    phone: $('#phone').val(),
  });
  $('#fullName').val('');
  $('#naksha').val();
  $('#raasi').val();
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
