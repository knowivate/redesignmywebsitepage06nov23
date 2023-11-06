document.addEventListener("DOMContentLoaded", () => {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");

  let currentQuestionIndex = 0;

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["A) Madrid", "B) Berlin", "C) Paris", "D) London"],
      answer: "C) Paris",
    },
    // ... other questions
  ];

  const submitButton = document.getElementById("submit");
  const nextButton = document.getElementById("next");

  function showQuestion(question) {
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";
    question.choices.forEach((choice) => {
      const choiceItem = document.createElement("a");
      choiceItem.classList.add("list-group-item", "list-group-item-action", "py-2", "px-4", "mb-2", "rounded-md", "bg-blue-500", "text-white", "cursor-pointer");
      choiceItem.textContent = choice;
      choiceItem.addEventListener("click", () => selectAnswer(choice, question.answer));
      choicesElement.appendChild(choiceItem);
    });
  }

  function selectAnswer(choice, correctAnswer) {
    const buttons = document.querySelectorAll(".list-group-item-action");
    buttons.forEach((button) => {
      button.disabled = true;
      if (button.textContent === correctAnswer) {
        button.classList.add("correct");
      }
    });
    if (choice === correctAnswer) {
      alert("Correct Answer! ✔️");
    } else {
      alert("Wrong Answer. Correct is " + correctAnswer);
    }
  }

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
    } else {
      alert("Quiz finished! 🎉");
      currentQuestionIndex = 0;
      showQuestion(questions[currentQuestionIndex]);
    }
  });

  showQuestion(questions[currentQuestionIndex]);
});
