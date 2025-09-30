import Section from "./Section.jsx";
import Field from "./Field.jsx";
import { v4 as uuidv4 } from "uuid";

function Experience({
  experience,
  handleDeleteExperience,
  handleChange,
  handleDescriptionChange,
  handleAddDescription,
  handleDeleteDescription,
}) {
  return (
    <div className="experience-info">
      <div className="top">
        <h1>{experience.companyName}</h1>
        <button
          type="button"
          className="btn-delete-experience"
          onClick={() => handleDeleteExperience(experience.id)}
        >
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
      <div className="experience-info-inputs">
        <Field
          name="Company Name"
          type="text"
          placeholder="Google"
          value={experience.companyName}
          onChange={(e) => handleChange(e, experience.id, "companyName")}
        />
        <Field
          name="Location"
          type="text"
          placeholder="Queens, NY"
          value={experience.location}
          onChange={(e) => handleChange(e, experience.id, "location")}
        />
        <Field
          name="Position"
          type="text"
          placeholder="Software Developer Intern"
          value={experience.position}
          onChange={(e) => handleChange(e, experience.id, "position")}
        />
        <Field
          name="Start Date"
          type="date"
          placeholder="Apr 2026"
          value={experience.startDate}
          onChange={(e) => handleChange(e, experience.id, "startDate")}
        />
        <Field
          name="End Date"
          type="date"
          placeholder="Jul 2026"
          value={experience.endDate}
          onChange={(e) => handleChange(e, experience.id, "endDate")}
        />
      </div>
      <div className="experience-descriptions-container">
        <p>Descriptions</p>
        {experience.descriptions.map((description) => (
          <div className="textarea-container" key={description.id}>
            <textarea
              name="description"
              id="description"
              value={description.text}
              onChange={(e) =>
                handleDescriptionChange(e, experience.id, description.id)
              }
            ></textarea>
            <button
              type="button"
              className="btn-delete-experience-description"
              onClick={() =>
                handleDeleteDescription(experience.id, description.id)
              }
            >
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
        ))}
      </div>
      <button
        type="button"
        className="btn-add-experience-description"
        onClick={() => handleAddDescription(experience.id)}
      >
        Add Description
      </button>
    </div>
  );
}

function ExperienceInfo({ experienceInfo, setExperienceInfo }) {
  function handleAddExperience() {
    setExperienceInfo([
      ...experienceInfo,
      {
        id: uuidv4(),
        companyName: "",
        location: "",
        position: "",
        startDate: new Date().toISOString().slice(0, 10),
        endDate: new Date().toISOString().slice(0, 10),
        descriptions: [],
      },
    ]);
  }

  function handleDeleteExperience(id) {
    setExperienceInfo(
      experienceInfo.filter((experience) => experience.id !== id),
    );
  }

  function handleChange(e, id, field) {
    setExperienceInfo(
      experienceInfo.map((experience) => {
        if (experience.id === id) {
          return { ...experience, [field]: e.target.value };
        }
        return experience;
      }),
    );
  }

  function handleAddDescription(experienceId) {
    setExperienceInfo(
      experienceInfo.map((experience) => {
        if (experience.id === experienceId) {
          return {
            ...experience,
            descriptions: [
              ...experience.descriptions,
              { id: uuidv4(), text: "" },
            ],
          };
        }
        return experience;
      }),
    );
  }

  function handleDeleteDescription(experienceId, descriptionId) {
    setExperienceInfo(
      experienceInfo.map((experience) => {
        if (experience.id === experienceId) {
          return {
            ...experience,
            descriptions: experience.descriptions.filter(
              (description) => description.id !== descriptionId,
            ),
          };
        }
        return experience;
      }),
    );
  }

  function handleDescriptionChange(e, experienceId, descriptionId) {
    setExperienceInfo(
      experienceInfo.map((experience) => {
        if (experience.id === experienceId) {
          return {
            ...experience,
            descriptions: experience.descriptions.map((description) => {
              if (description.id === descriptionId) {
                return { ...description, text: e.target.value };
              }
              return description;
            }),
          };
        }
        return experience;
      }),
    );
  }

  return (
    <Section heading="Experience">
      <div className="experience-info-container">
        {experienceInfo.map((experience) => (
          <Experience
            key={experience.id}
            experience={experience}
            handleDeleteExperience={handleDeleteExperience}
            handleChange={handleChange}
            handleDescriptionChange={handleDescriptionChange}
            handleAddDescription={handleAddDescription}
            handleDeleteDescription={handleDeleteDescription}
          />
        ))}
        <button
          type="button"
          className="btn-add-experience"
          onClick={handleAddExperience}
        >
          Add Experience
        </button>
      </div>
    </Section>
  );
}

export default ExperienceInfo;
