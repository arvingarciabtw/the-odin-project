import Section from "./Section.jsx";
import Field from "./Field.jsx";

function EducationInfo({ handleChange }) {
  return (
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
          onChange={(e) => handleChange(e, "educationalInstitutionLocation")}
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
  );
}

export default EducationInfo;
