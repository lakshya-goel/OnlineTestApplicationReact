import React from 'react';

function Quiz({ questions, answers, handleAnswer, handleSubmit }) {
  return (
    <div>
      <h2>Quiz</h2>
      {questions.map(q => (
        <div key={q.id} style={{ marginBottom: '20px' }}>
          <h4>{q.question}</h4>
          {q.options.map((opt, index) => (
            <label key={index} style={{ display: 'block' }}>
              <input
                type="radio"
                name={`question-${q.id}`}
                value={index}
                checked={answers[q.id] === index}
                onChange={() => handleAnswer(q.id, index)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
}

export default Quiz;
