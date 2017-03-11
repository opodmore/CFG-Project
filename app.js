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
AnswerC:"Something totally unrelated to my everday life",
}
]

function start() {
  // Print "Hello, world!" to the developer console.
  $("#answer_a").hide();
   $("#answer_b").hide();
    $("#answer_c").hide();
     $("#Next").hide();
      $("#Next2").hide();
       $("#Submit").hide();
   //$("#about-content").hide();
  console.log("Hello, world!");
  $("#quiz").click(quiz);
  $("#Next").click(NextQuestion);
  $("#Next2").click(NextQuestion2);
  $("#Submit").click(SubmitQuiz);
  

}

function quiz () {

$("#quiz_result").html('');
	 $("#answer_a").show();
   $("#answer_b").show();
    $("#answer_c").show();
     $("#Next").show();
	 $("#Question_1").html(questions[0].Question);
	  $("#Answers_1a").html(questions[0].AnswerA);
	  $("#Answers_1b").html(questions[0].AnswerB);
	  $("#Answers_1c").html(questions[0].AnswerC);
	  $("#Next").html("Next Question");
	  $("#quiz").html("Start the quiz!")

}

function NextQuestion () {
	window.result1 = $('input[name=result_1]:checked').val()
	  $("#Next").hide();
	   $("#Next2").show();
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
	 $("#Next2").hide();
	   $("#Submit").show()
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
	 $("#Submit").hide()
	 $("#answer_a").hide();
   $("#answer_b").hide();
    $("#answer_c").hide();
	 $("#Question_1").html('');
	 $("#Answers_1a").html('');
	  $("#Answers_1b").html('');
	  $("#Answers_1c").html('');
	  $("#Submit").html('');
	var total_result = window.result1+window.result2+window.result3
	console.log(total_result)  



if ((total_result.match(/A/g) || []).length==3) { //answer is all As
console.log("worked three As") 
$("#quiz_result").html("Your dream vacation location is Las Vegas!");
}

if ((total_result.match(/\A/g) || []).length==2) { //answer is majority As
console.log("worked two As") 
$("#quiz_result").html("Your dream vacation is the Maldives - you need to relax a bit!");
}

if ((total_result.match(/B/g) || []).length==3) { //answer is all Bs
$("#quiz_result").html("Your dream vacation location is returning to your last vacation! You have more to discover there!");
console.log("worked three Bs")
}

if ((total_result.match(/B/g) || []).length==2) { //answer is majority Bs
console.log("worked two Bs") 
$("#quiz_result").html("Your dream vacation is a backpacking trip in Vietnam - go meet some new people!");
}


if ((total_result.match(/C/g) || []).length==3) { //answer is all Cs
console.log("worked three Cs") 
$("#quiz_result").html("Your dream vacation is a family retreat in the Alps!"); 
}

if ((total_result.match(/C/g) || []).length==2) { //answer is majority Cs
console.log("worked two Cs") 
$("#quiz_result").html("Your dream vacation is DisneyWorld!"); 
}

if (((total_result.match(/A/g) || []).length==1)&&((total_result.match(/B/g) || []).length==1) &&((total_result.match(/C/g) || []).length==1)) { //answer is majority Cs
console.log("worked one of each") 
$("#quiz_result").html("Your dream vacation involves finding yourself, go take a GAP year in Australia!");  
}

//if (total_result==(("ABC")||("ACB")||("BCA")||("BAC")||("CBA")||("CAB"))) { //answer is all different
//console.log("worked one of each") 
//$("#quiz_result").html("Your dream vacation involves finding yourself, go take a GAP year in Australia!"); 
//}

$("#quiz").html("Take the quiz again!");

}



$(document).ready(start);
