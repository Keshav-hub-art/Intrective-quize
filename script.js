// Quiz questions and answers
const questions = [
	{
		// Question 1: Which country is considered the birthplace of cricket?
		question: "1) Which country is considered the birthplace of cricket?",
		// Answer options
		answers: ["India", "Australia", "England", "South Africa"],
		// Index of the correct answer in the answers array (England)
		correct: 2
	},
	{
		// Question 2: What is the maximum number of overs a bowler can bowl in an ODI match?
		question: "2) What is the maximum number of overs a bowler can bowl in a One Day International (ODI) match?",
		// Answer options
		answers: ["10", "15", "14", "12"],
		// Index of the correct answer in the answers array (10)
		correct: 0
	},
	// Add more questions here...
	{
		// Question 3: Who is the current captain of India National Cricket Team?
		question: "3) Who is the current captain of India National Cricket Team?",
		// Answer options
		answers: ["MS Dhoni", "Virender Sehwag", "Rohit Sharma", "Virat Kohli"],
		// Index of the correct answer in the answers array (Rohit Sharma)
		correct: 2
	},
	{
		// Question 4: Which country will host the T20 2023 World Cup?
		question: "4) Which country will host T20 2024 World Cup?",
		// Answer options
		answers: ["West Indies", "India", "United States", "South Africa"],
		// Index of the correct answer in the answers array (India)
		correct: 1
	},
	{
		// Question 5: What is the most popular programming language?
		question: "5) What is the most popular programming language?",
		// Answer options
		answers: ["JavaScript", "Python", "Java", "C++"],
		// Index of the correct answer in the answers array (JavaScript)
		correct: 0
	}
];

// Generate quiz questions dynamically
const quizContainer = document.getElementById("quiz-container");

// Loop through each question in the questions array
questions.forEach((question, index) => {
	// Generate HTML for each question and its answers
	const questionHTML = `
		<div class="question">
			<p>${question.question}</p>
			${question.answers.map((answer, i) => `
				<label>
					<input type="radio" name="question-${index}" value="${i}">
					${answer}
				</label>
			`).join("")}
		</div>
	`;
	// Append the generated HTML to the quiz container
	quizContainer.innerHTML += questionHTML;
});

// Submit button event listener
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
	// Array to store the user's selected answers
	const answers = [];
	
	// Loop through each question to get the user's selected answer
	questions.forEach((question, index) => {
		const radios = document.getElementsByName(`question-${index}`);
		let userAnswer;
		// Check which radio button is selected
		for (let i = 0; i < radios.length; i++) {
			if (radios[i].checked) {
				userAnswer = radios[i].value;
				break;
			}
		}
		// Store the user's answer in the answers array
		answers.push(userAnswer);
	});
	
	// Calculate the user's score by comparing selected answers with the correct answers
	const score = answers.reduce((acc, current, index) => {
		if (current === questions[index].correct.toString()) {
			return acc + 1;
		}
		return acc;
	}, 0);
	
	// Generate and display the result
	const resultHTML = `
		<p>You scored ${score} out of ${questions.length}!</p>
	`;
	document.getElementById("result-container").innerHTML = resultHTML;
});
