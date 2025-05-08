const quizData = [

    {
        question: "What is the Suraj LastName ?",
        options: ["Yadav", "Maurya", "Bind", "Singh"],
        correct: "Bind"
      },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: "Paris"
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      correct: "JavaScript"
    },
    {
      question: "What is the currency of Japan?",
      options: ["Dollar", "Euro", "Yen", "Rupee"],
      correct: "Yen"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: "Mars"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "F. Scott Fitzgerald", "Ernest Hemingway"],
      correct: "Harper Lee"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const quizContainer = document.getElementById('quiz');
  const nextButton = document.getElementById('next-btn');
  
  function loadQuestion() {
    resetState();
  
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.createElement('h2');
    questionElement.textContent = currentQuestion.question;
    quizContainer.appendChild(questionElement);
  
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('btn-answer');
      button.addEventListener('click', () => selectAnswer(button, currentQuestion.correct));
      quizContainer.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = 'none';
    while (quizContainer.firstChild) {
      quizContainer.removeChild(quizContainer.firstChild);
    }
  }
  
  function selectAnswer(selectedButton, correctAnswer) {
    const allButtons = document.querySelectorAll('.btn-answer');
    allButtons.forEach(button => {
      button.disabled = true;
      if (button.textContent === correctAnswer) {
        button.classList.add('correct');
      } else {
        button.classList.add('incorrect');
      }
    });
  
    if (selectedButton.textContent === correctAnswer) {
      score++;
    }
  
    nextButton.style.display = 'block';
  }
  
  function showFinalScore() {
    resetState();
    const scoreElement = document.createElement('h2');
    scoreElement.textContent = `You scored ${score} out of ${quizData.length}`;
    quizContainer.appendChild(scoreElement);
    nextButton.textContent = 'Restart Quiz';
    nextButton.style.display = 'block';
  }
  
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showFinalScore();
      nextButton.addEventListener('click', () => location.reload());
    }
  });
  
  loadQuestion();
  