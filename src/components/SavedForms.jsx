import React from "react";
import { Link } from "react-router-dom";

const SavedForms = () => {
  const savedForms = JSON.parse(localStorage.getItem("savedForms") || "[]");

  const handleDelete = (index) => {
    const updatedForms = savedForms.filter((_, i) => i !== index);
    localStorage.setItem("savedForms", JSON.stringify(updatedForms));
    alert("Form deleted!");
    window.location.reload(); // Refresh page to show updated list
  };

  return (
    <div className="saved-forms">
      <h1>Saved Forms</h1>
      {savedForms.length === 0 && <p>No saved forms yet!</p>}
      <ul>
        {savedForms.map((form, index) => (
          <li key={index}>
            <h2>{form.formTitle}</h2>
            <p>
              Questions:
              {form.questions.map((q, idx) => `${q.questionText} (${q.questionType})`).join(", ")}
            </p>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <Link to={`/form-preview/${index}`}>Preview</Link>
          </li>
        ))}
      </ul>
      <Link to="/form-builder">Create New Form</Link>
    </div>
  );
};

export default SavedForms;
