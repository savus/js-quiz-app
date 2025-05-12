import { nextButtonOnClick, startQuiz } from "./question-answer-functions.js";

const questionId = "question";
export const questionElement = document.getElementById(questionId);

const answerButtonsId = "answer-buttons";
export const answerButtons = document.getElementById(answerButtonsId);

const nextButtonId = "next-btn";
export const nextButton = document.getElementById(nextButtonId);

export let currentQuestionIndex = 0;
export let score = 0;

export const setCurrentQuestionIndex = (num) => (currentQuestionIndex = num);
export const setScore = (num) => (score = num);

startQuiz();

nextButton.addEventListener("click", nextButtonOnClick);
