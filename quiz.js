var deadline = new Date();
deadline.setMinutes(deadline.getMinutes() + 5);
document.cookie = "timeout=n;";


// var deadline = new Date("Dec 15, 2020 19:57:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    // var days = Math.floor(t / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);


    if (minutes == 0 && seconds <= 30) {
        document.getElementById("timer").style.color = "red";
        document.getElementById("timer").innerHTML = "Just " + seconds + " sec  left !!";
    } else {
        document.getElementById("timer").innerHTML = minutes + "  min " + seconds + "sec  left";
    }

    if (t < 0) {

        for (var i = 1; i <= answersForRandomQ.length; i++) {
            document.cookie = "answer" + i + "=" + answersForRandomQ[i - 1] + ";";
        }

        document.cookie = "numberofquestion=" + randomQuestions.length + ";";

        document.cookie = "timeout=y;";

        clearInterval(x);
        console.log(t);



        document.getElementById("timer").innerHTML = "Time out";



        document.getElementById("submitAns").click();


    }
}, 1000);




////////////
question1 = {
    header: " Which of the following is not JavaScript Data Types?",
    choices: ["Undefined", "Number", "Boolean", "Float"],
    answer: "Float",
    marked: "n"

}

question2 = {
    header: "Which company developed JavaScript?",
    choices: ["Netscape", "Bell Labs", "5Sun Microsystems", "IBM"],
    answer: "Netscape",
    marked: "n"

}

question3 = {


    header: "Which of the following is correct about features of JavaScript?",
    choices: ["It can not Handling dates and time.", "JavaScript is a object-based scripting language.", "JavaScript is not interpreter based scripting language.", "All of the above"],
    answer: "JavaScript is a object-based scripting language.",
    marked: "n"


}


question4 = {
    header: "Which of the following is not Javascript frameworks or libraries?",
    choices: ["Polymer", "Meteor", "Cassandra", "jQuery"],
    answer: "Cassandra",
    marked: "n"

}


question5 = {
    header: "Why so JavaScript and Java have similar name?",
    choices: ["JavaScript is a stripped-down version of Java", "JavaScript's syntax is loosely based on Java's", "They both originated on the island of Java", "None of the above"],
    answer: "JavaScript's syntax is loosely based on Java's",
    marked: "n"

}

question6 = {
    header: "What is the original name of JavaScript?",
    choices: ["LiveScript", "EScript", "Mocha", "JavaScript"],
    answer: "Mocha",
    marked: "n"

}


question7 = {
    header: "JavaScript is designed for following purpose :",
    choices: ["to style HTML pages", "to execute Queries related to databases on a server", "to add interactivity to html pages", "All of the above"],
    answer: "All of the above",
    marked: "n"

}


question8 = {
    header: "Among the following, which one is a ternary operator in JavaScript?",
    choices: ["#", "::", "&:", "?:"],
    answer: "?:",
    marked: "n"

}


question9 = {
    header: "What does javascript use instead of == and !=?",
    choices: ["It uses bitwise checking", "It uses === and !== instead", "It uses equals() and notequals() instead", "It uses equalto()"],
    answer: "It uses === and !== instead",
    marked: "n"

}


question10 = {
    header: "Among the keywords below, which one is not a statement?",
    choices: ["if", "with", "debugger", "use strict"],
    answer: "use strict",
    marked: "n"

}





arrOfQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

randomQuestions = [];

arrOfQuestionsLength = arrOfQuestions.length;

for (var x = 0; x < arrOfQuestionsLength; x++) {

    var randomNum = Math.floor(Math.random() * arrOfQuestions.length);

    randomQuestions.push(arrOfQuestions[randomNum]);

    arrOfQuestions.splice(randomNum, 1);



}

console.log(randomQuestions);
answersForRandomQ = [];

for (var x = 0; x < randomQuestions.length; x++) {
    answersForRandomQ.push(randomQuestions[x].answer);
}

console.log(answersForRandomQ);


var currentQuestion = 1;

var form = document.createElement("form");
form.id = "form";



form.setAttribute("method", "GET");
form.setAttribute("action", "score.html");
form.setAttribute("target", "");

form.classList.add("formDisplay");

for (var x = 0; x < randomQuestions.length; x++) {
    randomQuestions[x].header = "Q" + (x + 1) + ") " + randomQuestions[x].header;
    var questionHead = document.createElement("span");
    questionHead.setAttribute("class", "question" + (x + 1));
    //questionHead.id = "question" + (x + 1);
    questionHead.innerHTML = randomQuestions[x].header;
    questionHead.classList.add("unvisible");

    form.appendChild(questionHead);

    var linebreak = document.createElement("br");
    linebreak.setAttribute("class", "question" + (x + 1));
    linebreak.classList.add("unvisible");
    form.appendChild(linebreak);

    for (var i = 0; i < randomQuestions[x].choices.length; i++) {

        var choiceRadio = document.createElement("input");
        // choiceRadio.id = "question" + (x + 1);
        choiceRadio.setAttribute("class", "question" + (x + 1));
        choiceRadio.setAttribute("type", "radio");
        choiceRadio.setAttribute("name", "question" + (x + 1));
        choiceRadio.setAttribute("value", randomQuestions[x].choices[i]);
        choiceRadio.classList.add("unvisible");
        form.appendChild(choiceRadio);

        var choice = document.createElement("span");
        choice.setAttribute("class", "question" + (x + 1));
        //choice.id = "question" + (x + 1);
        choice.innerHTML = randomQuestions[x].choices[i];
        choice.classList.add("unvisible");
        form.appendChild(choice);

        // var linebreak = document.createElement("br");
        // form.appendChild(linebreak);



        var linebreak = document.createElement("br");
        linebreak.setAttribute("class", "question" + (x + 1));
        linebreak.classList.add("unvisible");
        form.appendChild(linebreak);
    }
    var linebreak = document.createElement("br");
    linebreak.setAttribute("class", "question" + (x + 1));
    linebreak.classList.add("unvisible");
    form.appendChild(linebreak);





    var nextbtn = document.createElement("button");
    nextbtn.id = "nquestion" + (x + 1);
    nextbtn.innerHTML = "Next";
    nextbtn.classList.add("unvisible");


    nextbtn.addEventListener("click", function (event) {
        event.preventDefault();
        // var nextquestion = Number(this.id[this.id.length - 1]) + 1;
        currentQuestion++;

        if (currentQuestion <= randomQuestions.length) {
            // console.log("adasd");
            document.getElementById("m" + this.id.slice(1,)).classList.add("unvisible");
            document.getElementById("mquestion" + currentQuestion).classList.remove("unvisible");
            document.getElementById("n" + this.id.slice(1,)).classList.add("unvisible");

            if ("nquestion" + currentQuestion != "nquestion10") {
                document.getElementById("nquestion" + currentQuestion).classList.remove("unvisible");
            }



            console.log(this.id);
            if (this.id != "nquestion1") {
                document.getElementById("p" + this.id.slice(1,)).classList.add("unvisible");
            }




            document.getElementById("pquestion" + currentQuestion).classList.remove("unvisible");
            for (var x = 0; x < document.getElementsByClassName("question" + currentQuestion).length; x++) {
                document.getElementsByClassName("question" + currentQuestion)[x].classList.remove("unvisible");
            }

            for (var x = 0; x < document.getElementsByClassName(this.id.slice(1,)).length; x++) {
                document.getElementsByClassName(this.id.slice(1,))[x].classList.add("unvisible");
            }
        } else {
            currentQuestion--;
        }




    })







    var prevbtn = document.createElement("button");
    prevbtn.id = "pquestion" + (x + 1);
    prevbtn.innerHTML = "previous";
    prevbtn.classList.add("unvisible");




    prevbtn.addEventListener("click", function (event) {
        event.preventDefault();
        // var nextquestion = Number(this.id[this.id.length - 1]) + 1;
        currentQuestion--;

        if (currentQuestion >= 1) {
            console.log("adasd");
            document.getElementById("m" + this.id.slice(1,)).classList.add("unvisible");
            document.getElementById("mquestion" + currentQuestion).classList.remove("unvisible");

            if ("n" + this.id.slice(1,) != "nquestion10") {
                document.getElementById("n" + this.id.slice(1,)).classList.add("unvisible");
            }



            document.getElementById("nquestion" + currentQuestion).classList.remove("unvisible");

            document.getElementById("p" + this.id.slice(1,)).classList.add("unvisible");

            console.log(this.id);
            if (this.id != "pquestion2") {
                document.getElementById("pquestion" + currentQuestion).classList.remove("unvisible");
            }

            for (var x = 0; x < document.getElementsByClassName("question" + currentQuestion).length; x++) {
                document.getElementsByClassName("question" + currentQuestion)[x].classList.remove("unvisible");
            }

            for (var x = 0; x < document.getElementsByClassName(this.id.slice(1,)).length; x++) {
                document.getElementsByClassName(this.id.slice(1,))[x].classList.add("unvisible");
            }
        } else {
            currentQuestion++;
        }



    })







    var markBtn = document.createElement("button");
    markBtn.id = "mquestion" + (x + 1);
    markBtn.innerHTML = "Mark";
    markBtn.classList.add("unvisible");



    markBtn.addEventListener("click", function (event) {
        event.preventDefault();

        //console.log(this.id[Number(this.id.length) - 1]);



        var markindex = Number(this.id.slice(9,));
        //console.log(randomQuestions[Number(markindex - 1)]);

        console.log("I made " + this.id.slice(9,));
        console.log("prev made " + Number(this.id.slice(9,)));

        if (randomQuestions[Number(markindex - 1)].marked === "n") {
            randomQuestions[Number(markindex - 1)].marked = "y";

            var markq = document.createElement("button");

            console.log(this.id.slice(9,));
            markq.innerHTML = this.id.slice(1,);
            markq.id = "q" + this.id.slice(9,);
            //console.log(this.id[Number(this.id.length) - 1]);
            document.getElementById("markbtns").appendChild(markq);
            var linebreak = document.createElement("br");

            document.getElementById("markbtns").appendChild(linebreak);


            markq.addEventListener("click", function () {

                document.getElementById("mquestion" + currentQuestion).classList.add("unvisible");

                if ("nquestion" + currentQuestion != "nquestion10") {
                    document.getElementById("nquestion" + currentQuestion).classList.add("unvisible");
                }



                console.log(this.id);
                if ("pquestion" + currentQuestion != "pquestion1") {
                    document.getElementById("pquestion" + currentQuestion).classList.add("unvisible");
                }


                for (var x = 0; x < document.getElementsByClassName("question" + currentQuestion).length; x++) {
                    document.getElementsByClassName("question" + currentQuestion)[x].classList.add("unvisible");
                }


                currentQuestion = Number(this.id.slice(1,));
                //console.log(this.id);
                document.getElementById("mquestion" + currentQuestion).classList.remove("unvisible");

                if ("nquestion" + currentQuestion != "nquestion10") {
                    document.getElementById("nquestion" + currentQuestion).classList.remove("unvisible");
                }



                if ("pquestion" + currentQuestion != "pquestion1") {
                    document.getElementById("pquestion" + currentQuestion).classList.remove("unvisible");
                }




                for (var x = 0; x < document.getElementsByClassName("question" + currentQuestion).length; x++) {
                    document.getElementsByClassName("question" + currentQuestion)[x].classList.remove("unvisible");
                }
            })

        }




    })



    form.appendChild(prevbtn);
    form.appendChild(nextbtn);
    form.appendChild(markBtn);

    var linebreak = document.createElement("br");
    linebreak.setAttribute("class", "question" + (x + 1));
    linebreak.classList.add("unvisible");
    form.appendChild(linebreak);
}

var submitbutton = document.createElement("input");
submitbutton.setAttribute("type", "submit");
submitbutton.style.backgroundColor = "rgb(135, 206, 250)";
submitbutton.value = "Finished all answers";
submitbutton.style.fontSize = "25px";
submitbutton.id = "submitAns";

form.onsubmit = function (e) {
    for (var i = 1; i <= answersForRandomQ.length; i++) {
        document.cookie = "answer" + i + "=" + answersForRandomQ[i - 1] + ";";
    }

    document.cookie = "numberofquestion=" + randomQuestions.length + ";";


}



// submitbutton.addEventListener("click", function () {
//     for (var i = 1; i <= answersForRandomQ.length; i++) {
//         document.cookie = "answer" + i + "=" + answersForRandomQ[i - 1] + ";";
//     }
// })

form.appendChild(submitbutton);






document.body.appendChild(form);
////
document.getElementById("pquestion1").remove();
document.getElementById("nquestion10").remove();
///


document.getElementById("nquestion1").classList.remove("unvisible");
////
//document.getElementById("pquestion1").classList.remove("unvisible");
////
document.getElementById("mquestion1").classList.remove("unvisible");
for (var x = 0; x < document.getElementsByClassName("question1").length; x++) {
    document.getElementsByClassName("question1")[x].classList.remove("unvisible");
}





// linebreak = document.createElement("br");
// queryForm.appendChild(linebreak);




// var choice = document.createElement("input");

// choice.setAttribute("type", "radio");
// choice.setAttribute("name", "question" + x);
// choice.setAttribute("value", arr[index].choices[num]);


// <input type="radio" id="male" name="gender" value="male">



/////////////////
// function getParameterByName(name, url = window.location.href) {
//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
// }


// window.location.replace("score.html");

function preventBack() {
    window.history.forward();
}

preventBack();

window.onunload = function () { null };


