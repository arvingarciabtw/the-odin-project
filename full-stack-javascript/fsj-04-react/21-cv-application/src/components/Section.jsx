import "../styles/Section.css";

function Section({ heading, children }) {
  return (
    <div className="section">
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

export default Section;
