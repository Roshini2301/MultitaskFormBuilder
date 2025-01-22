import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import FormBuilder from "./components/FormBuilder";
import QuestionCreator from "./components/QuestionCreator";
import SavedForms from "./components/SavedForms";
import FormPreview from "./components/FormPreview";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/form-builder" element={<FormBuilder />} />
        <Route path="/question-creator" element={<QuestionCreator />} />
        <Route path="/saved-forms" element={<SavedForms />} />
        <Route path="/form-preview/:id" element={<FormPreview />} />
      </Routes>
    </Router>
  );
}

export default App;
