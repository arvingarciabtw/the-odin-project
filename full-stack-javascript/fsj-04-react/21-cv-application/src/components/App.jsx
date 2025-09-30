import { useState } from "react";
import "../styles/App.css";
import NavBar from "./NavBar.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: uuidv4(),
      companyName: "Google",
      location: "Queens, NY",
      position: "Software Developer Intern",
      startDate: "2026-04-01",
      endDate: "2026-07-01",
      descriptions: [
        {
          id: uuidv4(),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, beatae repellendus amet repudiandae sapiente itaque tempora sint dicta harum molestiae.",
        },
        {
          id: uuidv4(),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, beatae repellendus amet repudiandae sapiente itaque tempora sint dicta harum molestiae.",
        },
        {
          id: uuidv4(),
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, beatae repellendus amet repudiandae sapiente itaque tempora sint dicta harum molestiae.",
        },
      ],
    },
  ]);

  return (
    <>
      <NavBar />
      <Main experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo} />
      <Footer />
    </>
  );
}

export default App;
