var questions = [
{Question: "Who has appeared recently in your dreams?",
AnswerA: "Family members",
AnswerB: "Friends",
AnswerC: "Strangers",
},
{Question: "Second question",
AnswerA:"A",
AnswerB:"B",
AnswerC:"C",
},
{Question: "Third question",
AnswerA:"D",
AnswerB:"E",
AnswerC:"F",
}
]

function start() {
  // Print "Hello, world!" to the developer console.
  console.log("Hello, world!");
  $("#quiz").click(quiz);
  

}

function quiz () {


	 $("#Question_1").html(questions[0].Question);
	  $("#Answers_1a").html(questions[0].AnswerA);
	  $("#Answers_1b").html(questions[0].AnswerB);
	  $("#Answers_1c").html(questions[0].AnswerC);
	  $("#Next").html("Next Question");

}
$(document).ready(start);

function NextQuestion () {
	var result1 = $('input[name=result_1]:checked').val()
	 $("#Question_1").html('');
	 $("#Answers_1a").html('');
	  $("#Answers_1b").html('');
	  $("#Answers_1c").html('');
	  $("#Next").html('');
	  console.log(result1)

	  $("#Question_1").html(questions[1].Question);
	  $("#Answers_1a").html(questions[1].AnswerA);
	  $("#Answers_1b").html(questions[1].AnswerB);
	  $("#Answers_1c").html(questions[1].AnswerC);
	  $("#Next2").html("Next Question"); 
}

function NextQuestion2 () {
	var result2 = $('input[name=result_1]:checked').val()
	 $("#Question_1").html('');
	 $("#Answers_1a").html('');
	  $("#Answers_1b").html('');
	  $("#Answers_1c").html('');
	  $("#Next2").html('');
	  console.log(result2)

	  $("#Question_1").html(questions[2].Question);
	  $("#Answers_1a").html(questions[2].AnswerA);
	  $("#Answers_1b").html(questions[2].AnswerB);
	  $("#Answers_1c").html(questions[2].AnswerC);
	  $("#Submit").html("Submit Quiz"); 

}

console.log(result1)
console.log(result2)