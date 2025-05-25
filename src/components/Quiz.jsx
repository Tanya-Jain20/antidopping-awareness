import { useState } from "react";

const quizzes = {
  "Anti-Doping Basics": {
    description: "Learn the fundamentals of anti-doping and its importance in sports.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTIMDxLXKexP4Byh_EhAcqqAP0OAr9a8ZYA&s",
    questions: [
      {
        question: "What is the purpose of anti-doping?",
        options: ["Improve performance", "Ensure fair play", "Avoid fatigue", "Gain sponsorship"],
        answer: "Ensure fair play",
      },
      {
        question: "Which organization sets the global anti-doping code?",
        options: ["FIFA", "IOC", "WADA", "USADA"],
        answer: "WADA",
      },
      {
        question: "Which of these is considered doping?",
        options: ["Drinking water", "Taking anabolic steroids", "Eating healthy", "Training daily"],
        answer: "Taking anabolic steroids",
      },
      {
        question: "Why is education important in anti-doping?",
        options: ["To increase drug use", "To encourage cheating", "To promote clean sport", "To avoid training"],
        answer: "To promote clean sport",
      },
      {
        question: "What is the key principle behind anti-doping?",
        options: ["Unfair advantage", "Personal gain", "Integrity of sport", "Health benefits"],
        answer: "Integrity of sport",
      },
    ],
  },

  "Doping Awareness": {
    description: "Test your knowledge about banned substances and their health risks.",
    image: "https://media.istockphoto.com/id/2155141671/vector/say-no-to-drugs-26th-june-world-drug-day-banner-with-white-silhouette-hands-holding-syringes.jpg?s=612x612&w=0&k=20&c=FAqj8RWpI-WNf-9bryqLp6yEetNDhXtrimv509PSDO4=",
    questions: [
      {
        question: "Which of these is a banned stimulant?",
        options: ["Caffeine", "Amphetamines", "Vitamins", "Water"],
        answer: "Amphetamines",
      },
      {
        question: "What is a masking agent?",
        options: ["A face mask", "A substance that hides doping", "Vitamin supplement", "Steroid"],
        answer: "A substance that hides doping",
      },
      {
        question: "Diuretics are often used to:",
        options: ["Hydrate athletes", "Build muscle", "Improve vision", "Lose weight rapidly"],
        answer: "Lose weight rapidly",
      },
      {
        question: "Which of these can cause hormonal imbalance?",
        options: ["Water", "Anabolic steroids", "Carbohydrates", "Protein shakes"],
        answer: "Anabolic steroids",
      },
      {
        question: "Which substance is NOT banned?",
        options: ["Testosterone injections", "Creatine", "EPO", "Diuretics"],
        answer: "Creatine",
      },
    ],
  },

  "WADA Regulations": {
    description: "Explore the rules and role of WADA in maintaining clean sports.",
    image: "https://www.wada-ama.org/sites/default/files/styles/square_medium/public/2022-01/wada-logo-en.jpg?itok=rwjdqoXC",
    questions: [
      {
        question: "What does WADA stand for?",
        options: ["World Athletics Development Association", "World Anti-Doping Agency", "Worldwide Athletic Doping Association", "Wrestling Anti-Doping Authority"],
        answer: "World Anti-Doping Agency",
      },
      {
        question: "When was WADA established?",
        options: ["1990", "1999", "2005", "2010"],
        answer: "1999",
      },
      {
        question: "The WADA Code is:",
        options: ["A list of exercises", "A digital pass", "A global standard for anti-doping", "A recipe book"],
        answer: "A global standard for anti-doping",
      },
      {
        question: "How often is the Prohibited List updated?",
        options: ["Every month", "Every 2 years", "Annually", "Never"],
        answer: "Annually",
      },
      {
        question: "What is ADEL?",
        options: ["Anti-Doping Education and Learning", "A WADA lab", "A new steroid", "An athlete team"],
        answer: "Anti-Doping Education and Learning",
      },
    ],
  },
};

export default function Quiz() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    const question = quizzes[selectedQuiz].questions[currentQ];
    if (option === question.answer) {
      setScore((prev) => prev + 1);
    }

    const next = currentQ + 1;
    if (next < quizzes[selectedQuiz].questions.length) {
      setCurrentQ(next);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedQuiz(null);
  };

  if (!selectedQuiz) {
    return (
      <div className="container quiz-selection">
        <h1>Take a Quiz</h1>
        <div className="quiz-card-grid">
          {Object.keys(quizzes).map((quizName) => (
            <div className="quiz-card" key={quizName}>
              <img
                src={quizzes[quizName].image}
                alt={quizName}
                className="quiz-card-img"
              />
              <h3>{quizName}</h3>
              <p>{quizzes[quizName].description}</p>
              <button className="button" onClick={() => setSelectedQuiz(quizName)}>
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="container quiz-container">
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score} / {quizzes[selectedQuiz].questions.length}</p>
        <button className="button" onClick={resetQuiz}>Try Another Quiz</button>
      </div>
    );
  }

  const question = quizzes[selectedQuiz].questions[currentQ];

  return (
    <div className="container quiz-container">
      <h2 className="quiz-title">{selectedQuiz}</h2>
      <div className="quiz-progress">Question {currentQ + 1} of {quizzes[selectedQuiz].questions.length}</div>
      <div className="quiz-question">{question.question}</div>
      <div className="quiz-options">
        {question.options.map((option, i) => (
          <button
            key={i}
            className="quiz-option-button"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}