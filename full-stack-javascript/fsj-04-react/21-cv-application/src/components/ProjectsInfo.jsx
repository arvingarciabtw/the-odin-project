import Section from "./Section.jsx";
import Field from "./Field.jsx";

function ProjectsInfo({ handleChange }) {
  return (
    <Section heading="Projects">
      <div className="projects-info-container">
        <Field name="Project Name" type="text" placeholder="Weather App" />
        <Field name="Start Date" type="date" placeholder="Jun 2026" />
        <Field name="End Date" type="date" placeholder="Sep 2026" />
      </div>
    </Section>
  );
}

export default ProjectsInfo;
