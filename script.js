
console.log("javascript file xyz RUNNING")



var testNumber = 0

var correctAnswer = "correct answer text"





function testFunctionTwo () {
    console.log("running testfunctionTWO")
   correctAnswer = "correct answer MODIFIED"
   console.log("updated value for correctanswerVar", correctAnswer)
}


function checkAnswer(answer) {
    const feedback = document.getElementById('feedback');


    if (answer === 'filter') {
        feedback.textContent = `${correctAnswer}`;
        feedback.style.color = "green";



    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.style.color = "red";


        testFunctionTwo ()

    }
}




console.log("console saying: hello world")



console.log("what is testNumber?", testNumber)




function testFunction () {

    console.log("is testFunction running?", "yes, running")

    testNumber = (testNumber + 1)


}



testFunction ()


console.log("what is testNumber now?", testNumber)

