import { useEffect } from "react";
import { useState } from "react";
import clinicManager from './assets/Clinic-Manager.png'
import aiPicture from './assets/AI Image Detector.png'
import eCommerce from './assets/E-commerce.png';

const App = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2500);
  }, []);

  return (
    <div>
      <header className="header">
        {show && <h1 className="h1-anim">Dear Hiring Manager...</h1>}
        {!show && <h1>You got no time so check out my Live projects</h1>}
      </header>
      <div className="container">
        <div className="about-me">
          <span className="name">
            About this Guy <span style={{ color: "red" }}>{"=>"}</span> Milad
            Ramy Saygh:
          </span>
          <span className="intro">
            Junior Frontend and Web Developer with strong foundations in{" "}
            <span className="bold">HTML</span>,{" "}
            <span className="bold">CSS</span>,{" "}
            <span className="bold">JavaScript</span>,{" "}
            <span className="bold">React</span>,
            <span className="bold"> PHP</span>,{" "}
            <span className="bold">SQL</span>, and{" "}
            <span className="bold">MySQL</span>. Developed{" "}
            <span className="project">responsive web applications</span>{" "}
            featuring dynamic user interfaces, client-side routing, local
            storage persistence, authentication systems, CRUD operations, file
            management, and database-driven administration panels. Experienced
            in building modern frontend applications with React and integrating
            frontend and backend functionality.
          </span>
        </div>
        <div className="projects">
          <span className="name">My Projects:</span>
          <div className="image-projects">
            <div>
              <a
                href="https://milad7774.github.io/Clinic-Manager/#/Create"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Clinic Manager ↗:</span>
                <img
                  src= { clinicManager }
                  alt="Clinic Manager picture"
                />
              </a>
              <a href="https://github.com/Milad7774/Clinic-Manager" target="_blank" rel="noopener noreferrer">Source Code↗</a>
            </div>
            <div>
              <a
                href="https://milad7774.github.io/Responsive-e-commerce-web-application/V3.0/html/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>E-commerce ↗:</span>
                <img
                  src= { eCommerce }
                  alt="E-commerce Pitcure"
                />
              </a>
              <a href="https://github.com/Milad7774/Responsive-e-commerce-web-application" target="_blank" rel="noopener noreferrer">Source Code↗</a>
            </div>
            <div>
              <a
                href="https://milad7774.github.io/AI-Project/The%20website/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>AI Image Detector ↗:</span>
                <img
                  src= { aiPicture }
                  alt="AI Image Detector Picture"
                />
              </a>
              <a href="https://github.com/Milad7774/AI-Project" target="_blank" rel="noopener noreferrer">Source Code↗</a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/Milad7774/"
          target="_blank"
          className="github"
        >
          Github{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/miladelsayegh"
          target="_blank"
          className="linked"
        >
          Linkedin
        </a>
      </footer>
    </div>
  );
};
export default App;
