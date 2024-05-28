import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedin(true);
      } else {
        setIsLoggedin(false);
      }
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="title">Curriculum Crafter</div>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/Courses_subjects">Courses/Subjects</NavLink>
        </li>
        <li>
          <NavLink to="/syllabus">Syllabus</NavLink>
        </li>
        <li>
          <NavLink to="/overview">Overview</NavLink>
        </li>
        {!isLoggedin && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};
