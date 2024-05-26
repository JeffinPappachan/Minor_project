import "./Accordion.css";
import { useState } from "react";

export const Accordion = ({ id, question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleAccordion = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="accordion" onClick={toggleAccordion}>
      <div className="course">
        <p className="number">{id}</p>
        <p className="subjects">{question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`icon ${isVisible ? "rotate" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <div className={`hidden-box ${isVisible ? "active-box" : ""}`}>
          {Array.isArray(answer) ? (
            answer.map((text, index) => <p key={index}>{text}</p>)
          ) : (
            <p>{answer}</p>
          )}
        </div>
      </div>
    </div>
  );
};
