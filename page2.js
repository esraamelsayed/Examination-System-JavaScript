var uemail = document.getElementById("email");
var upass = document.getElementById("pass");
/////////////////////////////////////////////////////////////////
var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var flag = 1;

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
////////////////////////check email validation //////////////////////////
function dataCheck() {
  if (!regemail.test(uemail.value)) {
    document.getElementById("error1").innerHTML = "**enter valid email !!";

    e.preventDefault();
    uemail.focus();
    //   alert("You should enter valid email");
    flag = 0;
    return false;
  } else {
    document.getElementById("error1").innerHTML = "";
  }

  ////////////////////check empty password field/////////////////////////
  if (upass.value == "") {
    document.getElementById("error2").innerHTML = "**Fill the password please!";
    e.preventDefault();
    upass.focus();
    flag = 0;
    return false;
  } else {
    document.getElementById("error2").innerHTML = "";
  }

  ///////////////////////minimum password length validation/////////////////
  if (upass.value.length < 8) {
    document.getElementById("error2").innerHTML =
      "**Password length must be atleast 8 characters";
    e.preventDefault();
    upass.focus();
    flag = 0;
    return false;
  } else {
    document.getElementById("error2").innerHTML = "";
  }
  ////////////////////////check matching of data input with page1////////////////////
  if (
    getCookie("email") === uemail.value &&
    getCookie("password") === upass.value
  ) {
    location.replace("Quiz.html");
    //console.log("success");
  } else {
    // console.log("failed");
    document.getElementById("error3").innerHTML =
      "**no matching please enter data again";
  }
}
