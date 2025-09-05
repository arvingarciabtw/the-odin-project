import { useState } from "react";
import Resume from "./Resume.jsx";
import GeneralInfo from "./GeneralInfo.jsx";
import EducationInfo from "./EducationInfo.jsx";
import ExperienceInfo from "./ExperienceInfo.jsx";
import ProjectsInfo from "./ProjectsInfo.jsx";
import TechnicalSkillsInfo from "./TechnicalSkillsInfo.jsx";

function Main() {
  // state variables for general information
  const [firstName, setFirstName] = useState("Arvin");
  const [lastName, setLastName] = useState("Garcia");
  const [phoneNumber, setPhoneNumber] = useState("012-3456-789");
  const [email, setEmail] = useState("anamazingemail@gmail.com");
  const [location, setLocation] = useState("City, Region");
  const [linkedIn, setLinkedIn] = useState("linkedin.com/in/arvin-garcia");
  const [gitHub, setGitHub] = useState("github.com/arvingarciabtw");
  const [portfolio, setPortfolio] = useState("blog.arvingarcia.com");

  // state variables for education
  const [educationalInstitution, setEducationalInstitution] =
    useState("University Name");
  const [educationalInstitutionLocation, setEducationalInstitutionLocation] =
    useState("City, Region");
  const [program, setProgram] = useState(
    "Program (e.g. Bachelor of Science in ...)",
  );
  const [educationStartDate, setEducationStartDate] = useState("2022");
  const [educationEndDate, setEducationEndDate] = useState("2026");

  // state variables for technical skills
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState(["HTML", "CSS", "JavaScript"]);
  const [framework, setFramework] = useState("");
  const [frameworks, setFrameworks] = useState(["Next.js", "Vue"]);
  const [library, setLibrary] = useState("");
  const [libraries, setLibraries] = useState(["React", "Tailwind"]);
  const [tool, setTool] = useState("");
  const [tools, setTools] = useState(["Git", "Jest"]);

  function handleChange(e, toBeChanged) {
    // change one of the general infos
    toBeChanged === "firstName" ? setFirstName(e.target.value) : null;
    toBeChanged === "lastName" ? setLastName(e.target.value) : null;
    toBeChanged === "phoneNumber" ? setPhoneNumber(e.target.value) : null;
    toBeChanged === "email" ? setEmail(e.target.value) : null;
    toBeChanged === "location" ? setLocation(e.target.value) : null;
    toBeChanged === "linkedIn" ? setLinkedIn(e.target.value) : null;
    toBeChanged === "gitHub" ? setGitHub(e.target.value) : null;
    toBeChanged === "portfolio" ? setPortfolio(e.target.value) : null;

    // change one of the education infos
    toBeChanged === "educationalInstitution"
      ? setEducationalInstitution(e.target.value)
      : null;
    toBeChanged === "educationalInstitutionLocation"
      ? setEducationalInstitutionLocation(e.target.value)
      : null;
    toBeChanged === "program" ? setProgram(e.target.value) : null;
    toBeChanged === "educationStartDate"
      ? setEducationStartDate(e.target.value)
      : null;
    toBeChanged === "educationEndDate"
      ? setEducationEndDate(e.target.value)
      : null;

    // change one of the technical skills infos
    toBeChanged === "language" ? setLanguage(e.target.value) : null;
    toBeChanged === "framework" ? setFramework(e.target.value) : null;
    toBeChanged === "library" ? setLibrary(e.target.value) : null;
    toBeChanged === "tool" ? setTool(e.target.value) : null;
  }

  function handleAdd(toBeAdded) {
    const inputs = document.querySelectorAll(".skills-info-container input");

    toBeAdded === "language" ? setLanguages([...languages, language]) : null;
    toBeAdded === "framework"
      ? setFrameworks([...frameworks, framework])
      : null;
    toBeAdded === "library" ? setLibraries([...libraries, library]) : null;
    toBeAdded === "tool" ? setTools([...tools, tool]) : null;

    inputs.forEach((input) => {
      input.value = "";
    });
  }

  return (
    <main className="wrapper">
      <div className="sections-container">
        <GeneralInfo handleChange={handleChange} />
        <EducationInfo handleChange={handleChange} />
        <ExperienceInfo handleChange={handleChange} />
        <ProjectsInfo handleChange={handleChange} />
        <TechnicalSkillsInfo
          technicalSkills={{
            handleChange: handleChange,
            handleAdd: handleAdd,
            skills: {
              languages: languages,
              frameworks: frameworks,
              libraries: libraries,
              tools: tools,
            },
            setters: {
              setLanguages: setLanguages,
              setFrameworks: setFrameworks,
              setLibraries: setLibraries,
              setTools: setTools,
            },
          }}
        />
      </div>
      <Resume
        generalInfo={{
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          email: email,
          location: location,
          linkedIn: linkedIn,
          gitHub: gitHub,
          portfolio: portfolio,
        }}
        educationInfo={{
          educationalInstitution: educationalInstitution,
          educationalInstitutionLocation: educationalInstitutionLocation,
          program: program,
          educationStartDate: educationStartDate,
          educationEndDate: educationEndDate,
        }}
        technicalSkillsInfo={{
          languages: languages,
          frameworks: frameworks,
          libraries: libraries,
          tools: tools,
        }}
      />
    </main>
  );
}

export default Main;
