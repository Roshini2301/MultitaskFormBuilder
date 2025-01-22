import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(FormContext);

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to login after logout
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/form-builder">Create Form</a>
        </li>
        <li>
          <a href="/saved-forms">Saved Forms</a>
        </li>
        <li>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
