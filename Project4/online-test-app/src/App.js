import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Review from './components/Review';
import Result from './components/Result';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answersKey, setAnswersKey] = useState({});
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState('quiz');

  useEffect(() => {
    // Fetch from JSON server
    fetch('http://localhost:4000/questions')
      .then(res => res.json())
      .then(data => setQuestions(data));

    fetch('http://localhost:4000/answers')
      .then(res => res.json())
      .then(data => {
        const map = {};
        data.forEach(item => {
          map[item.id] = item.answer;
        });
        setAnswersKey(map);
      });
  }, []);

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    setStep('review');
  };

  const handleSubmitReview = () => {
    setStep('result');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Online Test Application</h1>
      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        <>
          {step === 'quiz' && (
            <Quiz
              questions={questions}
              answers={answers}
              handleAnswer={handleAnswer}
              handleSubmit={handleSubmitQuiz}
            />
          )}
          {step === 'review' && (
            <Review
              questions={questions}
              answers={answers}
              handleSubmit={handleSubmitReview}
            />
          )}
          {step === 'result' && (
            <Result
              questions={questions}
              answers={answers}
              answersKey={answersKey}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
