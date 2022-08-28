function validateForm() {

    let x = document.forms["contactus"]["contactname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    let y = document.forms["contactus"]["contacttp"].value;
    if (y == "") {
      alert("Mobile number must be filled out");
      return false;
    }

    if(!/^[0-9]+$/.test(y)){
        alert("Please only enter numeric characters only for your mobile nummber! (Allowed input:0-9)");
        return false;
      }

    let z = document.forms["contactus"]["contactemail"].value;
    if (z == "") {
      alert("Email must be filled out");
      return false;
    }

    let w = document.forms["contactus"]["contactsub"].value;
    if (w == "") {
      alert("Subject must be filled out");
      return false;
    }

    let a = document.forms["contactus"]["contactmessage"].value;
    if (a == "") {
      alert("Message must be filled out");
      return false;
    }else{
      alert("Successfully Send!!");
    }

  }