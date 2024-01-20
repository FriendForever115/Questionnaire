import React, { useState, useEffect } from 'react';
import './Question.css'

const Question = ({ id, _question, _answer, onDelete, onChange, onMoveUp, onMoveDown, totalCount }) => {

  const [question, setQuestion] = useState(_question);
  const [answer, setAnswer] = useState(_answer);

  useEffect(() => {
    setQuestion(_question)
    setAnswer(_answer)
  }, [_question, _answer])

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
    onChange(id, e.target.value, answer);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
    onChange(id, question, e.target.value);
  };

  const handleMoveUp = () => {
    onMoveUp(id - 1);
  };

  const handleMoveDown = () => {
    onMoveDown(id - 1);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="qustion-short-answer">
      <div className="question-base">
        <div className="question">
          <label>Question</label>
          <input className="input-base" type="text" value={_question} onChange={handleQuestionChange} />
        </div>
        <div className="divider"></div>
        <div className="answer">
          <label>Answer</label>
          <select className="question-dropdown">
            <option>Short Answer</option>
            <option>Paragraph</option>
            <option>Checkboxes</option>
            <option>Multiple Choise</option>
          </select>
          <input className="input-base" type="text" placeholder="Short answer text" value={_answer} onChange={handleAnswerChange} />
        </div>
        <div className="question-actions">
          <input placeholder={id + ' of ' + totalCount}></input>
          <div className="question-actions-btns">
            <button onClick={handleMoveUp}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9244 11.6364L14.2905 10.2699L7.87255 3.85195L1.45459 10.2699L2.82041 11.6364L7.87255 6.58486L12.9244 11.6364Z" fill="#414141"/>
              </svg>
            </button>
            <button onClick={handleMoveDown}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9244 4.36364L14.2905 5.7301L7.87255 12.1481L1.45459 5.7301L2.82041 4.36364L7.87255 9.41514L12.9244 4.36364Z" fill="#414141"/>
              </svg>
            </button>
            <button onClick={handleDelete}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.72736 5.09091V13.4545H11.2728V5.09091H12.3637V14.5455H3.63645V5.09091H4.72736ZM7.091 5.81534V12.3636H6.00009V5.81534H7.091ZM10.0001 5.81534V12.3636H8.90918V5.81534H10.0001ZM10.1819 1.45694L10.9092 2.91149H13.091V4.00239H2.90918V2.91149H5.091L5.81827 1.45694H10.1819Z" fill="#AE0000"/>
              </svg>
            </button>
          </div>          
        </div>
      </div>
    </div>  
  );
};

export default Question;