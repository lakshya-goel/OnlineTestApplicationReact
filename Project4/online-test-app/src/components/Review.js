import React from 'react';

function Review({ questions, answers, handleSubmit }) {
  return (
    <div>
      <h2>Review Your Answers</h2>
      {questions.map(q => (
        <div key={q.id} style={{ marginBottom: '20px' }}>
          <h4>{q.question}</h4>
          <p>Your Answer: {q.options[answers[q.id]] ?? "Not Answered"}</p>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit & Get Result</button>
    </div>
  );
}

export default Review;
