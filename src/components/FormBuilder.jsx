import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormBuilder = () => {
  const [formTitle, setFormTitle] = useState("");
  const [questionsPerPage, setQuestionsPerPage] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (formTitle && questionsPerPage) {
      navigate("/question-creator", { state: { formTitle, questionsPerPage } });
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="form-builder">
      <h1>Create a New Form</h1>
      <input
        type="text"
        placeholder="Enter Form Title"
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Questions per Page"
        value={questionsPerPage}
        onChange={(e) => setQuestionsPerPage(e.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default FormBuilder;
