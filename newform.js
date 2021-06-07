var userLName = document.getElementById("lname");
var userFName = document.getElementById("fname");
var userEmail = document.getElementById("email");
var pw1 = document.getElementById("pass1");
var pw2 = document.getElementById("pass2");
var submit = document.getElementById("submit");
var myForm = document.getElementById("myform");
/////////////////////////////////////////////////////////////////////////////
function setCookie(cookieName, cookieValue, expiredDate) {
  var expires = expiredDate || new Date();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires;
}
//////////////////////////////////////////////////////////////////////////////
function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user);
    }
  }
}
//////////////////////////////////////////////////////////////////////////////
function deleteCookie(cookieName) {
  document.cookie =
    cookieName + "=; Path=/; expires= 3 March 1995 00:00:01 GMT;";
}
////////////////////////////////////data validation///////////////////////////////////////////
var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
namereg = /^[a-zA-Z]*$/;
var flag = 1;

function check(form) {
  //if (userFName.value == "" || !isNaN(userFName.value)) {
  if (userFName.value == "" || !namereg.test(userFName.value)) {
    document.getElementById("error1").innerHTML = "**enter valid first name !!";
    e.preventDefault();
    userFName.focus();
    flag = 0;
    return false;
  } else {
    document.getElementById("error1").innerHTML = "";
  }

  //if (userLName.value == "" || !isNaN(userLName.value)) {
  if (userLName.value == "" || !namereg.test(userLName.value)) {
    document.getElementById("error2").innerHTML = "**enter valid last name !!";

    e.preventDefault();
    userLName.focus();
    flag = 0;
    return false;
  } else {
    document.getElementById("error2").innerHTML = "";
  }

  if (!regemail.test(userEmail.value)) {
    document.getElementById("error3").innerHTML = "**enter valid email !!";

    e.preventDefault();
    userEmail.focus();
    //   alert("You should enter valid email");
    flag = 0;
    return false;
  } else {
    document.getElementById("error3").innerHTML = "";
  }
  ///////////////////////check empty password field////////////////////////
  if (pw1.value == "") {
    document.getElementById("error4").innerHTML = "**Fill the password please!";
    e.preventDefault();
    pw1.focus();
    flag = 0;
    return false;
  } else {
    document.getElementById("error4").innerHTML = "";
  }
  ///////////////check empty confirm password field/////////////////////////
  if (pw2.value == "") {
    document.getElementById("error5").innerHTML =
      "**Enter the password please!";
    e.preventDefault();
    pw2.focus();
    flag = 0;
    return false;
  } else {
    document.getElementById("error5").innerHTML = "";
  }

  //minimum password length validation
  if (pw1.value.length < 8) {
    document.getElementById("error4").innerHTML =
      "**Password length must be atleast 8 characters";
    e.preventDefault();
    pw1.focus();
    flag = 0;
    return false;
  } else {
    document.getElementById("error4").innerHTML = "";
  }

  //maximum length of password validation
  /* if (pw1.value.length > 20) {
    document.getElementById("error4").innerHTML =
      "**Password length must not exceed 15 characters";
    flag = 0;
    
  }*/
  ////////////////////////////check matching between two passwords////////////////////
  if (pw1.value != pw2.value) {
    document.getElementById("error5").innerHTML = "**Passwords are not same";
    e.preventDefault();
    pw2.focus();
    flag = 0;
    return false;
  } else {
    document.getElementById("error5").innerHTML = "";
  }
  setCookie("fname", userFName.value);
  setCookie("lname", userLName.value);
  setCookie("email", userEmail.value);
  setCookie("password", pw1.value);
  setCookie("confirm", pw2.value);

  location.replace("page2.html");
}
