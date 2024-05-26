import { Accordion } from "../Accordion";
import "./Course_Subjects.css";
import { faqs } from "../FAQs";


 function Courses_Subjects () {
  const renderFAQs = () => { 
    return faqs.map((faq) => {
      return (<Accordion
        key={faq.id}
        question={faq.question}
        answer={faq.answer}
        id={faq.id}
      />
      );
    });
  };
  return(
    <div className="coursesubjects">
      <h1 className="coursesubjects-heading">List of Courses of each disciple</h1>
      {renderFAQs()}
    </div>
  );
}

export default Courses_Subjects;