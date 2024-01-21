let questions = [
    {
      question: "Which is the largest mammal in world?",
      answers: [
        { text: "Bear", correct: "false" },
        { text: "Blue Whale", correct: "true" },
        { text: "Elephant", correct: "false" },
        { text: "Giraffe", correct: "false" },
      ],
    },
    {
      question: "Which is the national animal of India?",
      answers: [
        { text: "Rhinoceros", correct: "false" },
        { text: "Lion", correct: "false" },
        { text: "Tiger", correct: "true" },
        { text: "Giraffe", correct: "false" },
      ],
    },
    {
      question: "Which is the national bird of India?",
      answers: [
        { text: "Peacock", correct: "true" },
        { text: "Parrot", correct: "false" },
        { text: "Humming Bird", correct: "false" },
        { text: "Woodpecker", correct: "false" },
      ],
    },
    {
      question: "Which is the national flower of India?",
      answers: [
        { text: "Daffodils", correct: "false" },
        { text: "Sunflower", correct: "false" },
        { text: "Lily", correct: "false" },
        { text: "Lotus", correct: "true" },
      ],
    },
    {
      question: "Who built Qutub Minar?",
      answers: [
        { text: "Qutub-ud-din-Aibak", correct: "true" },
        { text: "Changez khan", correct: "false" },
        { text: "Shahjahan", correct: "false" },
        { text: "Iltutmish", correct: "false" },
      ],
    },
    {
      question: "How many spokes our Ashoka chakra contains?",
      answers: [
        { text: "20", correct: "false" },
        { text: "21", correct: "false" },
        { text: "22", correct: "false" },
        { text: "24", correct: "true" },
      ],
    },
    {
      question: "When is our Independence Day celebrated?",
      answers: [
        { text: "13th August", correct: "false" },
        { text: "14th August", correct: "false" },
        { text: "15th August", correct: "true" },
        { text: "16th August", correct: "false" },
      ],
    },
    {
      question: "When is our Republic Day celebrated?",
      answers: [
        { text: "22nd January", correct: "false" },
        { text: "26th January", correct: "true" },
        { text: "27th January", correct: "false" },
        { text: "29th January", correct: "false" },
      ],
    },
    {
      question: "When we got Independence?",
      answers: [
        { text: "1950", correct: "false" },
        { text: "1949", correct: "false" },
        { text: "1947", correct: "true" },
        { text: "1951", correct: "false" },
      ],
    },
    {
      question: "When our constitution was made?",
      answers: [
        { text: "23rd January 1950", correct: "false" },
        { text: "21st November 1940", correct: "false" },
        { text: "18th July 1989", correct: "false" },
        { text: "26th November 1949", correct: "true" },
      ],
    },
  ];
  let Question = document.getElementById("question");
  let Answer = document.getElementById("answer-button");
  let nextbutton = document.getElementById("nxt-btn");
  
  let currentquestionIndex = 0;
  let score = 0;
  
  function startquiz() {
    currentquestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showquestion();
  }
  
  function showquestion() {
    resetstate();
    let currentquestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex + 1;
    Question.innerHTML = questionNo + ". " + currentquestion.question;
  
    currentquestion.answers.forEach((answer) => {
      let button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      Answer.appendChild(button);
  
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetstate() {
    nextbutton.style.display = "none";
    while (Answer.firstChild) {
      Answer.removeChild(Answer.firstChild);
    }
  }
  
  function selectAnswer(e) {
    let selectedbutton = e.target;
    let iscorrect = selectedbutton.dataset.correct === "true";
    if (iscorrect) {
      selectedbutton.classList.add("correct");
      score++;
    } else {
      selectedbutton.classList.add("incorrect");
    }
  
    Array.from(Answer.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextbutton.style.display = "block";
  }
  function showscore() {
    resetstate();
    Question.innerHTML = `You scored ${score} out of ${questions.length} questions.`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
  }
  function handleNextButton() {
    currentquestionIndex++;
    if (currentquestionIndex < questions.length) {
      showquestion();
    } else {
      showscore();
    }
  }
  nextbutton.addEventListener("click", () => {
    if (currentquestionIndex < questions.length) {
      handleNextButton();
    } else {
      startquiz();
    }
  });
  startquiz();
  