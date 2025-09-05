import Section from "./Section.jsx";

function AddField(props) {
  let arr = null;
  let set = null;

  if (props.id === "language-input") {
    arr = props.skills.languages;
    set = props.setters.setLanguages;
  }

  if (props.id === "framework-input") {
    arr = props.skills.frameworks;
    set = props.setters.setFrameworks;
  }

  if (props.id === "library-input") {
    arr = props.skills.libraries;
    set = props.setters.setLibraries;
  }

  if (props.id === "tool-input") {
    arr = props.skills.tools;
    set = props.setters.setTools;
  }

  return (
    <div className="add-field">
      <div className="top">
        <label htmlFor={props.id}>{props.name}</label>
        <div className="right">
          <input
            type={props.type}
            id={props.id}
            name={props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
          <button type="button" onClick={props.handleAdd}>
            +
          </button>
        </div>
      </div>
      <ul className="bottom">
        {arr.map((item) => (
          <li key={item}>
            {item}
            <button
              type="button"
              className="btn-delete"
              onClick={() => {
                set(arr.filter((arrItem) => arrItem !== item));
              }}
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
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechnicalSkillsInfo({ technicalSkills }) {
  const handleChange = technicalSkills.handleChange;
  const handleAdd = technicalSkills.handleAdd;
  const skills = technicalSkills.skills;
  const setters = technicalSkills.setters;

  return (
    <Section heading="Technical Skills">
      <div className="skills-info-container">
        <AddField
          name="Add a Language:"
          id="language-input"
          type="text"
          placeholder="JavaScript"
          onChange={(e) => handleChange(e, "language")}
          handleAdd={() => handleAdd("language")}
          skills={{
            languages: skills.languages,
            frameworks: skills.frameworks,
            libraries: skills.libraries,
            tools: skills.tools,
          }}
          setters={{
            setLanguages: setters.setLanguages,
            setFrameworks: setters.setFrameworks,
            setLibraries: setters.setLibraries,
            setTools: setters.setTools,
          }}
        />
        <AddField
          name="Add a Framework:"
          id="framework-input"
          type="text"
          placeholder="Next.js"
          onChange={(e) => handleChange(e, "framework")}
          handleAdd={() => handleAdd("framework")}
          skills={{
            languages: skills.languages,
            frameworks: skills.frameworks,
            libraries: skills.libraries,
            tools: skills.tools,
          }}
          setters={{
            setLanguages: setters.setLanguages,
            setFrameworks: setters.setFrameworks,
            setLibraries: setters.setLibraries,
            setTools: setters.setTools,
          }}
        />
        <AddField
          name="Add a Library:"
          id="library-input"
          type="text"
          placeholder="React"
          onChange={(e) => handleChange(e, "library")}
          handleAdd={() => handleAdd("library")}
          skills={{
            languages: skills.languages,
            frameworks: skills.frameworks,
            libraries: skills.libraries,
            tools: skills.tools,
          }}
          setters={{
            setLanguages: setters.setLanguages,
            setFrameworks: setters.setFrameworks,
            setLibraries: setters.setLibraries,
            setTools: setters.setTools,
          }}
        />
        <AddField
          name="Add a Tool:"
          id="tool-input"
          type="text"
          placeholder="Git"
          onChange={(e) => handleChange(e, "tool")}
          handleAdd={() => handleAdd("tool")}
          skills={{
            languages: skills.languages,
            frameworks: skills.frameworks,
            libraries: skills.libraries,
            tools: skills.tools,
          }}
          setters={{
            setLanguages: setters.setLanguages,
            setFrameworks: setters.setFrameworks,
            setLibraries: setters.setLibraries,
            setTools: setters.setTools,
          }}
        />
      </div>
    </Section>
  );
}

export default TechnicalSkillsInfo;
