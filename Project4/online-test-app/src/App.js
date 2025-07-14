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
    // Fetch questions.json
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => setQuestions(data));

    // Fetch answers.json
    fetch('/answers.json')
      .then(response => response.json())
      .then(data => {
        // Transform answers array to a map { id: answerIndex }
        const answersMap = {};
        data.forEach(item => {
          answersMap[item.id] = item.answer;
        });
        setAnswersKey(answersMap);
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
