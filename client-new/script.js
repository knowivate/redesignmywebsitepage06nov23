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

      choiceItem.addEventListener("mouseover", () => {
        choiceItem.classList.add("bg-blue-600");
      });

      choiceItem.addEventListener("mouseout", () => {
        choiceItem.classList.remove("bg-blue-600");
      });

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
      // alert("Quiz finished! 🎉");
      showModal("Quiz finished! 🎉", "You won!");
      currentQuestionIndex = 0;
      showQuestion(questions[currentQuestionIndex]);
    }
  });

  showQuestion(questions[currentQuestionIndex]);
});

function showModal(modalTitle, modalContent) {
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  const modalTitleElement = document.getElementById("modalTitle");
  modalTitleElement.textContent = modalTitle;
  const modalContentElement = document.getElementById("modalContent");
  modalContentElement.textContent = modalContent;
}

// custom code starts from here
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // ... your existing code ...

  const modalCloseButtons = document.querySelectorAll(".modal-close");

  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Modal close button clicked.");
      closeModal();
    });
  });

  // ... rest of your code ...
});
