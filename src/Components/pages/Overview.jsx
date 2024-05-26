import "./overview.css";
import { useLocation } from "react-router-dom";

export const Overview = () => {
  const location = useLocation();
  const { values = {}, semesters = [] } = location.state || {};
  

  return (
    <div className="overview">
      <h1>Overview</h1>
      <p>
        <strong>University Name:</strong> {values.universityName}
      </p>
      <p>
        <strong>College Name:</strong> {values.collegeName}
      </p>
      <p>
        <strong>Category:</strong> {values.underOrPost}
      </p>
      <p>
        <strong>Number of years:</strong> {values.numberOfYears}
      </p>
      <p>
        <strong>Number of Semesters:</strong> {values.numberOfSemesters}
      </p>
      <h1>Syllabus</h1>

      {semesters.map((semester, index) => (
        <div key={index}>
          <p>
            <strong>Semester {index + 1}</strong>
          </p>
          <h2>Subject-1: {semester.subject1}</h2>
          <h2>Subject-2: {semester.subject2}</h2>
          <h2>Subject-3: {semester.subject3}</h2>
          <h2>Subject-4: {semester.subject4}</h2>
          <h2>Subject-5: {semester.subject5}</h2>
        </div>
      ))}
      <button className="print-button" onClick={() => window.print()}>Print</button>
 
    </div>
  );
};
