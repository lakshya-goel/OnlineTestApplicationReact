import React from 'react';

function Result({ questions, answers, answersKey }) {
  const score = questions.reduce((acc, q) => {
    return acc + (answers[q.id] === answersKey[q.id] ? 1 : 0);
  }, 0);

  return (
    <div>
      <h2>Result</h2>
      <p>
        Your Score: {score} / {questions.length}
      </p>
      <h3>Detailed Result:</h3>
      {questions.map(q => (
        <div key={q.id} style={{ marginBottom: '20px' }}>
          <h4>{q.question}</h4>
          <p>Your Answer: {q.options[answers[q.id]] ?? "Not Answered"}</p>
          <p>Correct Answer: {q.options[answersKey[q.id]]}</p>
        </div>
      ))}
    </div>
  );
}

export default Result;
