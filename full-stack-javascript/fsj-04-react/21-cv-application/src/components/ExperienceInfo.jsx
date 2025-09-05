import Section from "./Section.jsx";
import Field from "./Field.jsx";

function Experience({ children }) {
  return (
    <div className="experience-info">
      <div className="top">
        <h1>Company Name</h1>
        <button type="button" className="btn-delete-experience">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="experience-info-inputs">{children}</div>
      <div className="experience-descriptions-container">
        <p>Descriptions</p>
        <div className="textarea-container">
          <textarea name="description" id="description"></textarea>
          <button type="button" className="btn-delete-experience-description">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
          </button>
        </div>
        <div className="textarea-container">
          <textarea name="description" id="description"></textarea>
          <button type="button" className="btn-delete-experience-description">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
          </button>
        </div>
        <div className="textarea-container">
          <textarea name="description" id="description"></textarea>
          <button type="button" className="btn-delete-experience-description">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
          </button>
        </div>
      </div>
      <button type="button" className="btn-add-experience-description">
        Add Description
      </button>
    </div>
  );
}

function ExperienceInfo() {
  return (
    <Section heading="Experience">
      <div className="experience-info-container">
        <Experience>
          <Field name="Company Name" type="text" placeholder="Google" />
          <Field name="Location" type="text" placeholder="Queens, NY" />
          <Field
            name="Position"
            type="text"
            placeholder="Software Developer Intern"
          />
          <Field name="Start Date" type="date" placeholder="Apr 2026" />
          <Field name="End Date" type="date" placeholder="Jul 2026" />
        </Experience>
        <button type="button" className="btn-add-experience">
          Add Experience
        </button>
      </div>
    </Section>
  );
}

export default ExperienceInfo;
