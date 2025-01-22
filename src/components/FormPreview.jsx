import React from "react";
import { useParams } from "react-router-dom";

const FormPreview = () => {
  const { id } = useParams();
  const savedForms = JSON.parse(localStorage.getItem("savedForms") || "[]");
  const form = savedForms[id];

  return (
    <div className="form-preview">
      <h1>{form.formTitle}</h1>
      {form.questions.map((q, idx) => (
        <div key={idx}>
          <p>{q.questionText}</p>
          {q.questionType === "radio" || q.questionType === "checkbox" ? (
            <div>
              {q.options.map((opt, index) => (
                <div key={index}>
                  <input type={q.questionType} id={opt} name={q.questionText} />
                  <label htmlFor={opt}>{opt}</label>
                </div>
              ))}
            </div>
          ) : (
            <input type={q.questionType} />
          )}
        </div>
      ))}
      <button>Submit</button>
    </div>
  );
};

export default FormPreview;
