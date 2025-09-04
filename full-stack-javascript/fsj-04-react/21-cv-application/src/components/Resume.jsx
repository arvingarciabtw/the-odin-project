import "../styles/Resume.css";
import { format } from "date-fns";

function GeneralInformation({ generalInfo }) {
  return (
    <section className="general-information-container">
      <h1>
        {generalInfo.firstName} {generalInfo.lastName}
      </h1>
      <div className="contacts-container">
        <address>{generalInfo.phoneNumber}</address>
        <p>|</p>
        <address>{generalInfo.email}</address>
        <p>|</p>
        <p>{generalInfo.location}</p>
      </div>
      <div className="socials-container">
        <a
          href={"https://www." + generalInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          {generalInfo.linkedIn}
        </a>
        <p>|</p>
        <a
          href={"https://www." + generalInfo.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          {generalInfo.gitHub}
        </a>
        <p>|</p>
        <a
          href={"https://" + generalInfo.portfolio}
          target="_blank"
          rel="noopener noreferrer"
        >
          {generalInfo.portfolio}
        </a>
      </div>
    </section>
  );
}

function Education({ educationInfo }) {
  const formattedStartDate = format(
    educationInfo.educationStartDate,
    "MMM yyyy",
  );
  const formattedEndDate = format(educationInfo.educationEndDate, "MMM yyyy");
  return (
    <section className="education-container">
      <h2>EDUCATION</h2>
      <div className="university-container">
        <p className="university">{educationInfo.educationalInstitution}</p>
        <p className="university-location">
          {educationInfo.educationalInstitutionLocation}
        </p>
      </div>
      <div className="program-container">
        <p className="program">{educationInfo.program}</p>
        <p className="university-location">
          {formattedStartDate} - {formattedEndDate}
        </p>
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
          <p>Company Name</p>
          <p>City, Region</p>
        </div>
        <div className="position-container">
          <p>Position</p>
          <p>Start Date - End Date</p>
        </div>
        <ul className="contributions-container">
          <li className="contribution">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            beatae repellendus amet repudiandae sapiente itaque tempora sint
            dicta harum molestiae.
          </li>
          <li className="contribution">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            beatae repellendus amet repudiandae sapiente itaque tempora sint
            dicta harum molestiae.
          </li>
          <li className="contribution">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            beatae repellendus amet repudiandae sapiente itaque tempora sint
            dicta harum molestiae.
          </li>
        </ul>
      </div>
      <div className="experience">
        <div className="company-container">
          <p>Company Name</p>
          <p>City, Region</p>
        </div>
        <div className="position-container">
          <p>Position</p>
          <p>Start Date - End Date</p>
        </div>
        <ul className="contributions-container">
          <li className="contribution">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            beatae repellendus amet repudiandae sapiente itaque tempora sint
            dicta harum molestiae.
          </li>
          <li className="contribution">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            beatae repellendus amet repudiandae sapiente itaque tempora sint
            dicta harum molestiae.
          </li>
          <li className="contribution">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            beatae repellendus amet repudiandae sapiente itaque tempora sint
            dicta harum molestiae.
          </li>
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects-container">
      <h2>PROJECTS</h2>
      <div className="project">
        <div className="project-container">
          <p className="project-name">
            <span>Project Name</span> |
          </p>
          <ul className="technologies">
            <li className="technology">Technology,</li>
            <li className="technology">Technology,</li>
            <li className="technology">Technology,</li>
            <li className="technology">Technology</li>
          </ul>
          <p className="project-date">Start Date - End Date</p>
        </div>
        <ul className="project-descriptions">
          <li className="description">
            Built an interactive web application that simulates different memory
            management algorithms including FIFO, LRU, and Optimal.
          </li>
          <li className="description">
            Implemented real-time visualization of page replacement algorithms
            with dynamic charts showing hit/miss ratios.
          </li>
          <li className="description">
            Created responsive user interface allowing students to input custom
            page reference strings and compare algorithm performance.
          </li>
        </ul>
      </div>
      <div className="project">
        <div className="project-container">
          <p className="project-name">
            <span>Project Name</span> |
          </p>
          <ul className="technologies">
            <li className="technology">Technology,</li>
            <li className="technology">Technology,</li>
            <li className="technology">Technology,</li>
            <li className="technology">Technology</li>
          </ul>
          <p className="project-date">Start Date - End Date</p>
        </div>
        <ul className="project-descriptions">
          <li className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            beatae repellendus amet repudiandae sapiente itaque tempora sint
            dicta harum molestiae.
          </li>
          <li className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            beatae repellendus amet repudiandae sapiente itaque tempora sint
            dicta harum molestiae.
          </li>
        </ul>
      </div>
      <div className="project">
        <div className="project-container">
          <p className="project-name">
            <span>Project Name</span> |
          </p>
          <ul className="technologies">
            <li className="technology">Technology,</li>
            <li className="technology">Technology,</li>
            <li className="technology">Technology,</li>
            <li className="technology">Technology</li>
          </ul>
          <p className="project-date">Start Date - End Date</p>
        </div>
        <ul className="project-descriptions">
          <li className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            beatae repellendus amet repudiandae sapiente itaque tempora sint
            dicta harum molestiae.
          </li>
          <li className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            beatae repellendus amet.
          </li>
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-container">
      <h2>TECHNICAL SKILLS</h2>
      <p className="languages">
        <span>Languages:</span> Language, Language, Language, Language
      </p>
      <p className="frameworks">
        <span>Frameworks:</span> Framework, Framework, Framework, Framework
      </p>
      <p className="libraries">
        <span>Libraries:</span> Library, Library, Library, Library
      </p>
      <p className="tools">
        <span>Tools:</span> Tool, Tool, Tool, Tool
      </p>
    </section>
  );
}

function Resume(props) {
  return (
    <div className="resume-container">
      <GeneralInformation generalInfo={props.generalInfo} />
      <Education educationInfo={props.educationInfo} />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}

export default Resume;
