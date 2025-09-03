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

function Resume() {
  return (
    <>
      <h1>Resume</h1>
    </>
    <div className="resume-container">
      <GeneralInformation />
    </div>
  );
}

export default Resume;
