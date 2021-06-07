function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
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

var numOfQuestions = Number(getCookie("numberofquestion"));
var testScore = 0;

for (var i = 0; i < numOfQuestions; i++) {
  var urlParams = new URLSearchParams(window.location.search);
  var userAns = urlParams.get("question" + (i + 1));
  var rightAns = getCookie("answer" + (i + 1));

  if (userAns == rightAns) {
    testScore++;
  }
}

istimeout = getCookie("timeout");

if (istimeout == "y") {
  //alert("time out");
  document.getElementById("image").src = "time4.jpg";
  document.getElementById("name").innerText = getCookie("fname");
  document.getElementById("text").innerText = "sorry time is up !!";
  document.getElementById("score").innerText = testScore;
}

//alert("your score is " + testScore);
//testScore=90;
else if (testScore < numOfQuestions / 2) {
  document.getElementById("image").src = "failed.jpg";
  document.getElementById("name").innerText = getCookie("fname");
  document.getElementById("text").innerText = "sorry you failed !!";
  document.getElementById("score").innerText = testScore;
} else {
  document.getElementById("image").src = "passed.jpg";
  document.getElementById("name").innerText = getCookie("fname");
  document.getElementById("text").innerText =
    "Congratulations, you passed the exam";
  document.getElementById("score").innerText = testScore;
}
