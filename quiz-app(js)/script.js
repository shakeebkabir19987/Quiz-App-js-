const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello to my land",
    b: "Hey text markup language",
    c: "Hypertext Make up Language",
    d: "Hypertext Markup Language",
    ans: "ans4",
  },

  {
    question: "Q1: What is the full form of CSS?",
    a: "Cascading style sheet",
    b: "Hey text markup language",
    c: "Hypertext Make up Language",
    d: "Hypertext Markup Language",
    ans: "ans1",
  },

  {
    question: "Q1: What is the full form of HTTP?",
    a: "Cascading style sheet",
    b: "Hey text markup language",
    c: "Hypertext Make up Language",
    d: "Hypertext transfer protocol",
    ans: "ans4",
  },

  {
    question: "Q1: What is the full form of JS?",
    a: "Javascript",
    b: "Hey text markup language",
    c: "Hypertext Make up Language",
    d: "Hypertext Markup Language",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;
const loadquestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
loadquestion();

let getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer == quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < quizDB.length) {
    loadquestion();
  } else {
    showScore.innerHTML = `
    <h3> You scored ${score}/${quizDB.length} </h3>
    <button class="btn" onclick="location.reload()">Play Again </button>
    `;

    showScore.classList.remove("scoreArea");
  }
});
