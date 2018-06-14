function validate() {
    window.document.getElementById('missinginfo').innerHTML = "";
    var vFirst = window.document.getElementById('firstname').value;
    if (vFirst == "") {
        window.document.getElementById('error').style.display = 'inline';
        window.document.getElementById('missinginfo').innerHTML += '<li>First Name</li> ';
    }
    
    var vLast = window.document.getElementById('lastname').value;
    if (vLast == "") {
        window.document.getElementById('error').style.display = 'inline';
        window.document.getElementById('missinginfo').innerHTML += '<li>Last Name</li> ';
    }

    var vPhone = window.document.getElementById('phone').value;
    if (vPhone == "") {
        window.document.getElementById('error').style.display = 'inline';
        window.document.getElementById('missinginfo').innerHTML += '<li>Phone Number</li> ';
    }

    var vNights = window.document.getElementById('nights').value;
    if (vNights == "") {
        window.document.getElementById('error').style.display = 'inline';
        window.document.getElementById('missinginfo').innerHTML += '<li>Estimated Nights</li> ';
    }
    if (vNights <= 0) {
      window.document.getElementById('error').style.display = 'inline';
        window.document.getElementById('missinginfo').innerHTML += '<li>Estimated nights must be more than 0</li> ';
    }

    var vGuests = window.document.getElementById('guests').value;
    if (vGuests == "") {
        window.document.getElementById('error').style.display = 'inline';
        window.document.getElementById('missinginfo').innerHTML += '<li>Estimated Guests</li> ';
    }
    if (vGuests <= 0) {
      window.document.getElementById('error').style.display = 'inline';
        window.document.getElementById('missinginfo').innerHTML += '<li>Estimated guests must be more than 0</li> ';
    }

    if (window.document.getElementById('1Q').checked == false && window.document.getElementById('2Q').checked == false) {
        window.document.getElementById('error').style.display = 'inline';
        window.document.getElementById('missinginfo').innerHTML += '<li>Room Selection</li> ';
    }

    if (window.document.getElementById('0P').checked == false && window.document.getElementById('1P').checked == false && window.document.getElementById('2P').checked == false) {
        window.document.getElementById('error').style.display = 'inline';
        window.document.getElementById('missinginfo').innerHTML += '<li>Pet Selection</li> ';
    }
    if ( window.document.getElementById('missinginfo').innerHTML == "" ) {
        submitInput();
    }
}



function submitInput() {

    //submit and styling
    document.getElementById('input').click();
    document.getElementById('input').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    document.getElementById('bill').style.display = 'inline';

    
    // name and contact info
    var firstName = new String("");
    var lastName = new String("");
    var fullName = new String("");
    firstName = window.document.getElementById('firstname').value;
    lastName = window.document.getElementById('lastname').value;
    fullName = firstName + ' ' + lastName;
    document.getElementById('outputName').innerHTML = fullName;

    var phoneNumber = new String ("");
    phoneNumber = window.document.getElementById('phone').value;
    document.getElementById('outputNumber').innerHTML = phoneNumber;

    // stay info
    var nights = new String ("");
    nights = window.document.getElementById('nights').value;
    nights = parseInt(nights);
    document.getElementById('outputNight1').innerHTML = nights;
    document.getElementById('outputNight2').innerHTML = nights;

    var guests = new String ("");
    guests = window.document.getElementById('guests').value;
    guests = parseInt(guests);
    document.getElementById('outputGuests1').innerHTML = guests;


    //room rate & type
    var rate = new String ("");
    var room = new String ("");
    if(window.document.getElementById('1Q').checked) {
        rate= window.document.getElementById('1Q').value;
        rate = parseInt(rate);
        room="<b>Room A</b><br>One Queen Bed";
    }
    else if(window.document.getElementById('2Q').checked) {
        rate=window.document.getElementById('2Q').value;
        rate = parseInt(rate);
        room="<b>Room B</b><br>Two Queen Beds";
    }
    document.getElementById('outputRate').innerHTML = rate;
    document.getElementById('outputRoom').innerHTML = room;

    var rateCalc = new String("");
    rateCalc= rate*nights;
    rateCalc=parseInt(rateCalc);
    document.getElementById('outputRooming').innerHTML = rateCalc;

    // pet info
    var selectPet = new String ("");
    var petFee = new String ("");
    var petCount = new String ("");
    if(window.document.getElementById('0P').checked) {
        selectPet="No Pets"
        petFee=0;
        petCount=0;
    }
    else if(window.document.getElementById('1P').checked) {
        selectPet="One Pet"
        petFee=window.document.getElementById('1P').value;
        petFee = parseInt(petFee);
        petCount="1"
    }
    else if(window.document.getElementById('2P').checked) {
        selectPet="Two Pets"
        petFee=window.document.getElementById('2P').value;
        petFee = parseInt(petFee);
        petCount="2"
    }
    document.getElementById('petSelected').innerHTML = selectPet;
    document.getElementById('oPetFee1').innerHTML = petFee;
    document.getElementById('oPetFee2').innerHTML = petFee;
    document.getElementById('oPetCt').innerHTML = petCount;

    //cot addon
    var selectCot = new String ("");
    var cotFee = new String ("");
    var cotSub = 0;
    var cotNights = new String ("");
    if(window.document.getElementById('C').checked) {
        cotFee = parseInt(window.document.getElementById('C').value);
        cotNights = window.document.getElementById('nights').value;
        cotSub = cotNights*cotFee;
    }
    document.getElementById('cotFee').innerHTML = cotFee;
    document.getElementById('outputNight3').innerHTML = cotNights;
    document.getElementById('cotSubtotal').innerHTML = cotSub;

    //wine addon
    var selectWine = new String ("");
    var wineFee = new String ("");
    var wineBottles = new String ("");
    var wineSub = 0;
    if(window.document.getElementById('W').checked) {
        wineFee = parseInt(window.document.getElementById('W').value);
        wineBottles = 1;
        wineSub = wineFee*wineBottles;
    }
    document.getElementById('wineFee').innerHTML = wineFee;
    document.getElementById('wineBottles').innerHTML = wineBottles;
    document.getElementById('wineSubtotal').innerHTML = wineSub;

    //snacks addon
    var selectSnacks = new String ("");
    var snackFee = new String ("");
    var snackGuests = new String ("");
    var snackSub = 0;
    if(window.document.getElementById('S').checked) {
        snackFee = window.document.getElementById('S').value;
        snackFee = parseInt(snackFee);
        snackGuests = parseInt(window.document.getElementById('guests').value);
        snackSub = snackFee*snackGuests;
    }
    document.getElementById('snackFee').innerHTML = snackFee;
    document.getElementById('snackGuests').innerHTML = snackGuests;
    document.getElementById('snackSubtotal').innerHTML = snackSub;
    

    var subtotal = rateCalc+petFee+cotSub+wineSub+snackSub;
    document.getElementById('subtotal').innerHTML = subtotal;


}

