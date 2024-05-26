import { useState, useEffect } from "react";
import "./syllabus.css";
import { Select, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export const Syllabus = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    universityName: "",
    collegeName: "",
    underOrPost: "",
    numberOfYears: "",
    numberOfSemesters: "",
  });

  const initialSemesterState = {
    subject1: "",
    subject2: "",
    subject3: "",
    subject4: "",
    subject5: "",
  };

  const [semesters, setSemesters] = useState([]);
  const [years, setYears] = useState([]);
  const [activeForm, setActiveForm] = useState(1);

  useEffect(() => {
    if (values.underOrPost === "Undergraduate") {
      setYears([3, 4]);
    } else if (values.underOrPost === "Postgraduate") {
      setYears([1, 2]);
    }
  }, [values.underOrPost]);

  const handleUnderOrPostChange = (e) => {
    setValues({ ...values, underOrPost: e.target.value });
  };

  const handleYearsChange = (e) => {
    const selectedValue = parseInt(e.target.value);
    setValues({
      ...values,
      numberOfYears: selectedValue,
      numberOfSemesters: selectedValue * 2,
    });
    setSemesters(Array(selectedValue * 2).fill(initialSemesterState));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Values:", values, "Semesters:", semesters);
    navigate("/overview", {
      state: {
        values: values,
        semesters: semesters,
      },
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSemesterChange = (e, semesterIndex) => {
    const newSemesters = semesters.map((semester, index) =>
      index === semesterIndex
        ? { ...semester, [e.target.name]: e.target.value }
        : semester
    );
    setSemesters(newSemesters);
  };

  const handleNext = () => {
    setActiveForm((prevActiveForm) =>
      Math.min(prevActiveForm + 1, values.numberOfSemesters + 1)
    );
  };

  const handlePrevious = () => {
    setActiveForm((prevActiveForm) => Math.max(prevActiveForm - 1, 1));
  };

  return (
    <div className="app">
      <div className="form-container">
        <h1 className="curriculum-heading">Curriculum</h1>
        {activeForm === 1 ? (
          <form onSubmit={handleSubmit}>
            <div className="max-w-md">
              <Label value="University" />
              <Select
                className="select-with-margin"
                id="universityName"
                name="universityName"
                required
                onChange={onChange}
              >
                <option value="">--Choose your University--</option>
                <option>Mahatma Gandhi</option>
              </Select>
              <Label value="College" />
              <Select
                className="select-with-margin"
                id="collegeName"
                name="collegeName"
                required
                onChange={onChange}
              >
                <option value="">--Choose your College--</option>
                <option>Bharata Mata College</option>
              </Select>
              <Label value="Category" />
              <Select
                className="select-with-margin"
                id="underorpost"
                name="underOrPost"
                required
                onChange={handleUnderOrPostChange}
                value={values.underOrPost}
              >
                <option value="">--Undergraduate or Postgraduate--</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
              </Select>
              <Label value="Years" />
              <Select
                className="select-with-margin"
                id="numberofyears"
                name="numberOfYears"
                required
                onChange={handleYearsChange}
              >
                <option value="">--Number of years--</option>
                {years.map((year) => (
                  <option key={year}>{year}</option>
                ))}
              </Select>
              <Label value="Semesters" />
              <input
                type="text"
                className="input-with-margin"
                id="numberofsemesters"
                name="numberOfSemesters"
                required
                value={values.numberOfSemesters}
                readOnly
              />
            </div>
            <button className="next-button" type="button" onClick={handleNext}>
              Next
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <h1>Semester {activeForm - 1}</h1>
            {["subject1", "subject2", "subject3", "subject4", "subject5"].map(
              (subject, index) => (
                <div key={index}>
                  <Label value={`Subject ${index + 1}`} />
                  <Select
                    className="select-with-margin"
                    id={subject}
                    name={subject}
                    required
                    onChange={(e) => handleSemesterChange(e, activeForm - 2)}
                    value={semesters[activeForm - 2][subject] || ""}
                  >
                    <option value="">--Choose your subject--</option>
                    <option>Programming in C</option>
                    <option>Introduction to Computer</option>
                    <option>Database Management Systems</option>
                    <option>Object Oriented Programming Using C++</option>
                    <option>Data Structures using C++</option>
                  </Select>
                </div>
              )
            )}
            <button
              className="previous-button"
              type="button"
              onClick={handlePrevious}
            >
              Previous
            </button>
            {activeForm < values.numberOfSemesters + 1 ? (
              <button
                className="next-button"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button className="submit-button" type="submit">
                Submit
              </button>
            )}
          </form>
        )}
        <div className="form-toggle">
          {Array.from({ length: values.numberOfSemesters + 1 }, (_, i) => (
            <span
              key={i}
              className={`dot ${activeForm === i + 1 ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
