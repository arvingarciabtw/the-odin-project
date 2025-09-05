import Section from "./Section.jsx";
import Field from "./Field.jsx";

function GeneralInfo({ handleChange }) {
  return (
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
  );
}

export default GeneralInfo;
