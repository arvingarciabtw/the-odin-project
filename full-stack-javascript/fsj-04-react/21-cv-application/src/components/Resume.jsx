import "../styles/Resume.css";

function GeneralInformation() {
  return (
    <section className="general-information-container">
      <h1>Peter Parker</h1>
      <div className="contacts-container">
        <address>012-3456-789</address>
        <p>|</p>
        <address>peterparker@gmail.com</address>
        <p>|</p>
        <p>Queens, New York</p>
      </div>
      <div className="socials-container">
        <a href="">linkedin.com/in/peterparker</a>
        <p>|</p>
        <a href="">github.com/peterparker</a>
        <p>|</p>
        <a href="">portfolio.peterparker.com</a>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="education-container">
      <h2>EDUCATION</h2>
      <div className="university-container">
        <p className="university">Spider University</p>
        <p className="university-location">Queens, NY</p>
      </div>
      <div className="program-container">
        <p className="program">Bachelor of Science in Computer Science</p>
        <p className="university-location">2022 - 2026</p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-container">
      <h2>EXPERIENCE</h2>
      <div className="experience">
        <div className="company-container">
          <p>Google</p>
          <p>Queens, NY</p>
        </div>
        <div className="position-container">
          <p>Software Developer Intern</p>
          <p>Apr 2026 - Jul 2026</p>
        </div>
        <ul className="contributions-container">
          <li className="contribution">
            Developed and optimized search algorithms that improved query
            response time by 15% across multiple web services.
          </li>
          <li className="contribution">
            Collaborated with cross-functional teams to implement new features
            in Google's web crawling infrastructure using Python and C++.
          </li>
          <li className="contribution">
            Built automated testing frameworks that reduced manual testing time
            by 40% and improved code coverage to 95%.
          </li>
        </ul>
      </div>
      <div className="experience">
        <div className="company-container">
          <p>Apple</p>
          <p>Queens, NY</p>
        </div>
        <div className="position-container">
          <p>Software Developer Intern</p>
          <p>Jan 2026 - Mar 2026</p>
        </div>
        <ul className="contributions-container">
          <li className="contribution">
            Designed and implemented iOS app features using Swift that enhanced
            user engagement by 25% in beta testing.
          </li>
          <li className="contribution">
            Optimized Core Data performance for large datasets, reducing app
            launch time by 30% on older iPhone models.
          </li>
          <li className="contribution">
            Participated in code reviews and contributed to best practices
            documentation for mobile development standards.
          </li>
        </ul>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <>
      <h1>Resume</h1>
    </>
    <div className="resume-container">
      <GeneralInformation />
      <Education />
      <Experience />
    </div>
  );
}

export default Resume;
