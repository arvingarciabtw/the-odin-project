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
      companyName: "Company",
      location: "City, Region",
      position: "Position",
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
    {
      id: uuidv4(),
      companyName: "Company",
      location: "City, Region",
      position: "Position",
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

  const [projectsInfo, setProjectsInfo] = useState([
    {
      id: uuidv4(),
      projectName: "Project",
      technologies: ["Technology", "Technology", "Technology"],
      startDate: "2024-01-01",
      endDate: "2024-02-01",
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
    {
      id: uuidv4(),
      projectName: "Project",
      technologies: ["Technology", "Technology", "Technology"],
      startDate: "2024-01-01",
      endDate: "2024-02-01",
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
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, beatae repellendus amet repudiandae sapiente itaque tempora sint dicta harum molestiae. Beatae repellendus amet repudiandae sapiente itaque tempora sint dicta harum molestiae.",
        },
      ],
    },
  ]);

  return (
    <>
      <NavBar />
      <Main
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
        projectsInfo={projectsInfo}
        setProjectsInfo={setProjectsInfo}
      />
      <Footer />
    </>
  );
}

export default App;
