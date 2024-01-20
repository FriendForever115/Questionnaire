import React, { useEffect, useState } from 'react';
import Question from './Question';
import './Questionnaire.css'

const Questionnaire = () => {
  const [questions, setQuestions] = useState([])
  const [title, setTitle] = useState("New Questionnaire")

  useEffect(() => {
    const _questions = JSON.parse(localStorage.getItem("Questionnaire"))  
    if(_questions && _questions.length > 0) {
      setQuestions(_questions)
    } else {
      setQuestions([{id: 1, _question:"", _question:""}])
    }
  }, [])

  const addQuestion = () => {
    setQuestions([...questions, { id: questions.length + 1, question: '', answer: "" }])
  };

  const deleteQuestion = (id) => {
    let newQuestions = []
    let index = 0
    for(let question of questions) {
      if(question.id != id) {
        question.id = index + 1
        newQuestions.push(question)
        index++
      }
    }

    setQuestions(newQuestions)
    //setQuestions(questions.filter((question) => question.id !== id))    
  };

  const handleQuestionChange = (id, _question, _answer) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, _question, _answer } : question
      )
    );
  };

  const handleTitleChange = (e) => {

  }

  const handleMoveUp = (index) => {
    if (index > 0) {
      const updatedItems = [...questions];
      const temp = updatedItems[index];
      const prev_id = updatedItems[index - 1].id;
      updatedItems[index] = updatedItems[index - 1];
      updatedItems[index - 1] = temp;
      updatedItems[index].id = temp.id;
      updatedItems[index - 1].id = prev_id;
      setQuestions(updatedItems);
    }
  }

  const handleMoveDown = (index) => {
    if (index < questions.length - 1) {
      const updatedItems = [...questions];
      const temp = updatedItems[index];
      const next_id = updatedItems[index + 1].id;
      updatedItems[index] = updatedItems[index + 1];
      updatedItems[index + 1] = temp;
      updatedItems[index].id = temp.id;
      updatedItems[index + 1].id = next_id;
      setQuestions(updatedItems);
    }
  };

  const saveAndShare = () => {
    //console.log(JSON.stringify({ questions }, null, 2))
    console.log(JSON.stringify(questions))
    localStorage.setItem("Questionnaire", JSON.stringify(questions))
  };

  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="navbar-left">
          <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.033 2.75165L14.032 11.174H13.0508H4.91835H3.94224L3.94131 2.75892L4.91588 1.78544H13.0689L14.033 2.75165ZM21.6531 21.4593V12.6331C21.6531 12.6333 22.095 12.1916 22.095 12.1916V8.31032L19.7782 5.97576H17.4439V6.66666H19.5035L20.831 8.01553L20.1834 8.6608L20.1822 12.1892L20.6148 12.6183V21.0219H18.6725V11.8385L18.0212 11.1808H15.6549V2.08338L13.746 0.174927H4.23558L2.32651 2.08338V24.0098H0.719971V25.623H17.257V24.0098H15.6549V12.235H17.6048V21.4208L18.2564 22.0783H21.0391L21.6531 21.4593Z" fill="#F5F5F1"/>
          </svg>
        </div>
        <div className="navbar-center">
          <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
        </div>
        <div className="navbar-right">
          <button>LOG IN</button>
        </div>
      </nav>
      <div className="content">
        {questions.map((question) => (
          <Question
            key={question.id}
            id={question.id}
            _question={question._question}
            _answer={question._answer}
            onDelete={deleteQuestion}
            onChange={handleQuestionChange}
            onMoveUp={handleMoveUp}
            onMoveDown={handleMoveDown}
            totalCount={questions.length}
          />
        ))}
      </div>
      <div className="btns">
        <button className="btn-white" onClick={addQuestion}>+ ADD QUESTION</button>
        <button className="btn-red" onClick={saveAndShare}>Save & Share</button>
      </div>
    </div>
  );
};

export default Questionnaire;