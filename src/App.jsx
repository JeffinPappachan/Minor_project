import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Syllabus,
  Overview,
  Login,
  Signup,
  Profile,
} from "./Components/pages";
import Courses_Subjects from "./Components/pages/Courses_Subjects";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/Courses_subjects" element={<Courses_Subjects />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
