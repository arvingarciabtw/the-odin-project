import "../styles/App.css";
import Section from "./Section.jsx";
import Resume from "./Resume.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";

function Field({ name, id = null, type, placeholder, onChange }) {
  return (
    <div className="field">
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

function App() {
  // state variables for general information
  const [firstName, setFirstName] = useState("Peter");
  const [lastName, setLastName] = useState("Parker");
  const [phoneNumber, setPhoneNumber] = useState("012-3456-789");
  const [email, setEmail] = useState("peterparker@gmail.com");
  const [location, setLocation] = useState("Queens, NY");
  const [linkedIn, setLinkedIn] = useState("linkedin.com/in/peterparker");
  const [gitHub, setGitHub] = useState("github.com/peterparker");
  const [portfolio, setPortfolio] = useState("portfolio.peterparker.com");

  // state variables for education
  const [educationalInstitution, setEducationalInstitution] =
    useState("Spider University");
  const [educationalInstitutionLocation, setEducationalInstitutionLocation] =
    useState("Queens, NY");
  const [program, setProgram] = useState(
    "Bachelor of Science in Computer Science",
  );
  const [educationStartDate, setEducationStartDate] = useState("2022");
  const [educationEndDate, setEducationEndDate] = useState("2026");

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
  }

  return (
    <>
      <NavBar />
      <main className="wrapper">
        <div>
          <Section />
        <div className="sections-container">
          <Section heading="General Information">
            <div className="general-info-container">
              <Field
                name="First Name"
                id="first-name"
                type="text"
                placeholder="Peter"
                onChange={(e) => handleChange(e, "firstName")}
              />
              <Field
                name="Last Name"
                id="last-name"
                type="text"
                placeholder="Parker"
                onChange={(e) => handleChange(e, "lastName")}
              />
              <Field
                name="Phone Number"
                id="phone-number"
                type="text"
                placeholder="012-3456-789"
                onChange={(e) => handleChange(e, "phoneNumber")}
              />
              <Field
                name="Email"
                id="email"
                type="email"
                placeholder="peterparker@gmail.com"
                onChange={(e) => handleChange(e, "email")}
              />
              <Field
                name="Location"
                id="location"
                type="text"
                placeholder="Queens, NY"
                onChange={(e) => handleChange(e, "location")}
              />
              <Field
                name="LinkedIn"
                id="linkedin"
                type="text"
                placeholder="linkedin.com/in/peterparker"
                onChange={(e) => handleChange(e, "linkedIn")}
              />
              <Field
                name="GitHub"
                id="github"
                type="text"
                placeholder="github.com/peterparker"
                onChange={(e) => handleChange(e, "gitHub")}
              />
              <Field
                name="Portfolio"
                id="portfolio"
                type="text"
                placeholder="portfolio.peterparker.com"
                onChange={(e) => handleChange(e, "portfolio")}
              />
            </div>
          </Section>
          <Section heading="Education">
            <div className="education-info-container">
              <Field
                name="Educational Institution"
                id="educational-institution"
                type="text"
                placeholder="Spider University"
                onChange={(e) => handleChange(e, "educationalInstitution")}
              />
              <Field
                name="Location"
                id="educational-institution-location"
                type="text"
                placeholder="Queens, NY"
                onChange={(e) =>
                  handleChange(e, "educationalInstitutionLocation")
                }
              />
              <Field
                name="Program"
                id="program"
                type="text"
                placeholder="Bachelor of Science in Computer Science"
                onChange={(e) => handleChange(e, "program")}
              />
              <Field
                name="Start Date"
                id="educational-institution-start-date"
                type="date"
                placeholder="2022"
                onChange={(e) => handleChange(e, "educationStartDate")}
              />
              <Field
                name="End Date"
                id="educational-institution-end-date"
                type="date"
                placeholder="2026"
                onChange={(e) => handleChange(e, "educationEndDate")}
              />
            </div>
          </Section>
          <Section heading="Experience">
            <div className="experience-info-container">
              <Field name="Company Name" type="text" placeholder="Google" />
              <Field name="Location" type="text" placeholder="Queens, NY" />
              <Field
                name="Position"
                type="text"
                placeholder="Software Developer Intern"
              />
              <Field name="Start Date" type="date" placeholder="Apr 2026" />
              <Field name="End Date" type="date" placeholder="Jul 2026" />
            </div>
          </Section>
        </div>
        <Resume />
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
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
