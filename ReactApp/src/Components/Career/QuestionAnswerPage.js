import React from 'react';
import './QuestionAnswerPage.css';

const QNA = () => {
  return (
    <section className="question-answer-section">
      <h2>Questions & Answers</h2>
      <div className="question">
        <h3>What are the career prospects in mechanical engineering?</h3>
        <p>Mechanical engineering offers a wide range of career options, such as:</p>
        <ul>
          <li>Automotive engineer</li>
          <li>Aerospace engineer</li>
          <li>Energy engineer</li>
        </ul>
      </div>
      <div className="question">
        <h3>What skills are required for a career in computer science?</h3>
        <p>Some essential skills for computer science careers include:</p>
        <ul>
          <li>Programming languages (e.g., Python, Java)</li>
          <li>Data structures and algorithms</li>
          <li>Problem-solving abilities</li>
        </ul>
      </div>
    </section>
  );
};

export default QNA;
