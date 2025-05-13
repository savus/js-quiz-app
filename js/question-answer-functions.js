import {
  answerButtons,
  currentQuestionIndex,
  nextButton,
  questionElement,
  score,
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

const answerOnClick = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    setScore(score + 1);
  } else selectedBtn.classList.add("incorrect");

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") button.classList.add("correct");
    else button.classList.add("incorrect");
    button.disabled = true;
  });
  nextButton.style.display = "block";
};

const createAnswerButtons = () => {
  let currentQuestion = Questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    const animationDelay = `${index * 0.15}s`;

    button.classList.add("show");
    button.style.setProperty("--anim-delay", animationDelay);
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", answerOnClick);

    answerButtons.appendChild(button);
  });
};

const showScore = () => {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${Questions.length}`;
  nextButton.innerHTML = "Play Again?";
  nextButton.style.display = "block";
};

export const nextButtonOnClick = () => {
  if (currentQuestionIndex < Questions.length) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex < Questions.length) showQuestion();
    else showScore();
  } else {
    startQuiz();
  }
};

const showQuestion = () => {
  resetState();
  createAnswerButtons();
};

export const startQuiz = () => {
  resetQuestion();
  showQuestion();
};
