import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const QuestionCreator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formTitle, questionsPerPage } = location.state;

  const [questionText, setQuestionText] = useState("");
  const [questionType, setQuestionType] = useState("text");
  const [options, setOptions] = useState([]);
  const [questions, setQuestions] = useState([]);

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleAddQuestion = () => {
    if (questionText) {
      setQuestions([...questions, { questionText, questionType, options }]);
      setQuestionText("");
      setOptions([]);
    } else {
      alert("Please enter a question!");
    }
  };

  const handleSaveForm = () => {
    const newForm = { formTitle, questions, questionsPerPage };
    const savedForms = JSON.parse(localStorage.getItem("savedForms") || "[]");
    savedForms.push(newForm);
    localStorage.setItem("savedForms", JSON.stringify(savedForms));
    alert("Form Saved Successfully!");
    navigate("/saved-forms");
  };

  return (
    <div className="question-creator">
      <h1>{formTitle}</h1>
      <input
        type="text"
        value={questionText}
        placeholder="Enter your question"
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <select onChange={(e) => setQuestionType(e.target.value)} value={questionType}>
        <option value="text">Text</option>
        <option value="radio">Radio</option>
        <option value="checkbox">Checkbox</option>
        <option value="dropdown">Dropdown</option>
      </select>

      {["radio", "checkbox", "dropdown"].includes(questionType) && (
        <div>
          <button onClick={handleAddOption}>Add Option</button>
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(e, index)}
            />
          ))}
        </div>
      )}

      <button onClick={handleAddQuestion}>Add Question</button>

      <div>
        <h3>Questions</h3>
        {questions.map((q, idx) => (
          <div key={idx}>
            <p>{q.questionText} ({q.questionType})</p>
            {q.options && q.options.map((opt, idx) => <p key={idx}>{opt}</p>)}
          </div>
        ))}
      </div>

      <button onClick={handleSaveForm}>Save Form</button>
    </div>
  );
};

export default QuestionCreator;
