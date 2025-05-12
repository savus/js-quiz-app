import {
  answerButtons,
  currentQuestionIndex,
  nextButton,
  questionElement,
  setCurrentQuestionIndex,
  setScore,
} from "./index.js";
import Questions from "./questions.js";

const resetQuestion = () => {
  setCurrentQuestionIndex(0);
  setScore(0);
  nextButton.innerHTML = "Next";
};

const resetState = () => {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

const showQuestion = () => {
  resetState();
  let currentQuestion = Questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
  });
};

export const startQuiz = () => {
  resetQuestion();
  showQuestion();
};
