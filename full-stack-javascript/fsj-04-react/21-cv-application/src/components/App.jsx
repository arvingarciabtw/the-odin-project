import "../styles/App.css";
import Section from "./Section.jsx";
import Resume from "./Resume.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main className="wrapper">
        <div>
          <Section />
        </div>
        <Resume />
      </main>
      <Footer />
    </>
  );
}

export default App;
