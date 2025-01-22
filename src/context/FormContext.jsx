import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [forms, setForms] = useState([]); // Store saved forms
  const [user, setUser] = useState(null); // Store logged-in user

  // Login function
  const login = (username) => {
    setUser(username);
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // Add form to the list
  const addForm = (newForm) => {
    setForms((prevForms) => [...prevForms, newForm]);
  };

  return (
    <FormContext.Provider value={{ forms, addForm, login, logout, user }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
