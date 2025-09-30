import Section from "./Section.jsx";
import Field from "./Field.jsx";
import { v4 as uuidv4 } from "uuid";

function Project({
  project,
  handleDeleteProject,
  handleChange,
  handleDescriptionChange,
  handleAddDescription,
  handleDeleteDescription,
}) {
  return (
    <div className="project-info">
      <div className="top">
        <h1>{project.projectName}</h1>
        <button
          type="button"
          className="btn-delete-project"
          onClick={() => handleDeleteProject(project.id)}
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
      <div className="project-info-inputs">
        <Field
          name="Project Name"
          type="text"
          placeholder="Project Name"
          value={project.projectName}
          onChange={(e) => handleChange(e, project.id, "projectName")}
        />
        <Field
          name="Technologies"
          type="text"
          placeholder="HTML, CSS, JavaScript"
          value={project.technologies.join(", ")}
          onChange={(e) => handleChange(e, project.id, "technologies")}
        />
        <Field
          name="Start Date"
          type="date"
          placeholder="Apr 2026"
          value={project.startDate}
          onChange={(e) => handleChange(e, project.id, "startDate")}
        />
        <Field
          name="End Date"
          type="date"
          placeholder="Jul 2026"
          value={project.endDate}
          onChange={(e) => handleChange(e, project.id, "endDate")}
        />
      </div>
      <div className="project-descriptions-container">
        <p>Descriptions</p>
        {project.descriptions.map((description) => (
          <div className="textarea-container" key={description.id}>
            <textarea
              name="description"
              id="description"
              value={description.text}
              onChange={(e) =>
                handleDescriptionChange(e, project.id, description.id)
              }
            ></textarea>
            <button
              type="button"
              className="btn-delete-project-description"
              onClick={() => handleDeleteDescription(project.id, description.id)}
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
        className="btn-add-project-description"
        onClick={() => handleAddDescription(project.id)}
      >
        Add Description
      </button>
    </div>
  );
}

function ProjectsInfo({ projectsInfo, setProjectsInfo }) {
  function handleAddProject() {
    setProjectsInfo([
      ...projectsInfo,
      {
        id: uuidv4(),
        projectName: "",
        technologies: [],
        startDate: new Date().toISOString().slice(0, 10),
        endDate: new Date().toISOString().slice(0, 10),
        descriptions: [],
      },
    ]);
  }

  function handleDeleteProject(id) {
    setProjectsInfo(projectsInfo.filter((project) => project.id !== id));
  }

  function handleChange(e, id, field) {
    setProjectsInfo(
      projectsInfo.map((project) => {
        if (project.id === id) {
          if (field === "technologies") {
            return {
              ...project,
              technologies: e.target.value.split(", "),
            };
          }
          return { ...project, [field]: e.target.value };
        }
        return project;
      }),
    );
  }

  function handleAddDescription(projectId) {
    setProjectsInfo(
      projectsInfo.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            descriptions: [
              ...project.descriptions,
              { id: uuidv4(), text: "" },
            ],
          };
        }
        return project;
      }),
    );
  }

  function handleDeleteDescription(projectId, descriptionId) {
    setProjectsInfo(
      projectsInfo.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            descriptions: project.descriptions.filter(
              (description) => description.id !== descriptionId,
            ),
          };
        }
        return project;
      }),
    );
  }

  function handleDescriptionChange(e, projectId, descriptionId) {
    setProjectsInfo(
      projectsInfo.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            descriptions: project.descriptions.map((description) => {
              if (description.id === descriptionId) {
                return { ...description, text: e.target.value };
              }
              return description;
            }),
          };
        }
        return project;
      }),
    );
  }

  return (
    <Section heading="Projects">
      <div className="projects-info-container">
        {projectsInfo.map((project) => (
          <Project
            key={project.id}
            project={project}
            handleDeleteProject={handleDeleteProject}
            handleChange={handleChange}
            handleDescriptionChange={handleDescriptionChange}
            handleAddDescription={handleAddDescription}
            handleDeleteDescription={handleDeleteDescription}
          />
        ))}
        <button
          type="button"
          className="btn-add-project"
          onClick={handleAddProject}
        >
          Add Project
        </button>
      </div>
    </Section>
  );
}

export default ProjectsInfo;
