import "./home.css"; // Import your CSS file here

// import people from "../../assets/Group 81.png";
import ai from "../../assets/OIP.jpg";



export const Home = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with Curriculum Crafter
      </h1>
      <p>
        The Cuuriculum Crafter is website is used for creating and managing the syllabus
        for the students. It is a platform where we can create the syllabus for the students.
      </p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      <div className="gpt3__header-content__people">
        {/* <img src={people} /> */}
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
    
  </div>
);
