var questions = [
{Question: "Who has appeared recently in your dreams?",
AnswerA: "Family members",
AnswerB: "Friends",
AnswerC: "Strangers",
},
{Question: "How often do you dream?",
AnswerA:"Once a month or less",
AnswerB:"Once a week or less",
AnswerC:"More than once a week",
},
{Question: "What are your dreams most likely to be about?",
AnswerA:"An event in my life that is coming up",
AnswerB:"An event in my life that has already happened",
AnswerC:"Soomething totally unrelated to my everday life",
}
]

function start() {
  // Print "Hello, world!" to the developer console.
  console.log("Hello, world!");
  $("#quiz").click(quiz);
  $("#Next").click(NextQuestion);
  $("#Next2").click(NextQuestion2);
  $("#Submit").click(SubmitQuiz);
  

}

function quiz () {


	 $("#Question_1").html(questions[0].Question);
	  $("#Answers_1a").html(questions[0].AnswerA);
	  $("#Answers_1b").html(questions[0].AnswerB);
	  $("#Answers_1c").html(questions[0].AnswerC);
	  $("#Next").html("Next Question");

}

function NextQuestion () {
	window.result1 = $('input[name=result_1]:checked').val()
	 $("#Question_1").html('');
	 $("#Answers_1a").html('');
	  $("#Answers_1b").html('');
	  $("#Answers_1c").html('');
	  $("#Next").html('');

	  $("#Question_1").html(questions[1].Question);
	  $("#Answers_1a").html(questions[1].AnswerA);
	  $("#Answers_1b").html(questions[1].AnswerB);
	  $("#Answers_1c").html(questions[1].AnswerC);
	  $("#Next2").html("Next Question"); 
}

function NextQuestion2 () {
	window.result2 = $('input[name=result_1]:checked').val()
	 $("#Question_1").html('');
	 $("#Answers_1a").html('');
	  $("#Answers_1b").html('');
	  $("#Answers_1c").html('');
	  $("#Next2").html('');

	  $("#Question_1").html(questions[2].Question);
	  $("#Answers_1a").html(questions[2].AnswerA);
	  $("#Answers_1b").html(questions[2].AnswerB);
	  $("#Answers_1c").html(questions[2].AnswerC);
	  $("#Submit").html("Submit Quiz"); 

}
function SubmitQuiz () {
	window.result3 = $('input[name=result_1]:checked').val()
	 $("#Question_1").html('');
	 $("#Answers_1a").html('');
	  $("#Answers_1b").html('');
	  $("#Answers_1c").html('');
	  $("#Submit").html('');
	var total_result = window.result1+window.result2+window.result3
	console.log(total_result)  

if (total_result.match(/\A{3}/)) { //answer is all As
console.log("worked three As") 
$("#quiz_result").html("Your dream vacation location is ____.");
}
if (total_result.match(/\A{2}/)) { //answer is majority As
console.log("worked two As") 
}
if (total_result.match(/\[B]{3}/)) { //answer is all Bs
console.log("worked three Cs") 
}
if (total_result.match(/\[B]{2}/)) { //answer is majority Bs
console.log("worked two Cs") 
}
if (total_result.match(/\C{3}/)) { //answer is all Cs
console.log("worked three Cs") 
}
if (total_result.match(/\C{2}/)) { //answer is majority Cs
console.log("worked two Cs") 
}
if (total_result==("ABC")||("ACB")||("BCA")||("BAC")||("CBA")||("CAB")) { //answer is all different
console.log("worked one of each") 
}


}



$(document).ready(start);
