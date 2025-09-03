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

function Resume() {
  return (
    <>
      <h1>Resume</h1>
    </>
    <div className="resume-container">
      <GeneralInformation />
      <Education />
    </div>
  );
}

export default Resume;
