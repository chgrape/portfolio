import React from "react";
import "./index.css";
import Content from "./components/Content";
import pfp from "./assets/pfp.jpg";
import Project from "./components/Project";
import TechStack from "./components/TechStack";

function App() {
  const pic = <img src={pfp} className="h-auto w-full xl:w-1/3" />;
  const projects = (
    <div className="flex flex-wrap gap-6 text-white w-full xl:w-1/3 mt-5 xl:mt-0">
      <Project
        name={"RetroPass"}
        desc={"A password manager, created for HackTues 9"}
        url={"https://github.com/chgrape/HackTues-RetroMafia"}
      />
      <Project
        name={"Socialify"}
        desc={
          "A social media platform that introduces you to people with similar music tastes based on your Spotify account"
        }
        url={"https://github.com/chgrape/spotify-social-app"}
      />
      <Project
        name={"This portfolio"}
        desc={"Made using TailwindCSS and React"}
        url={"https://github.com/chgrape/portfolio"}
      />
      <Project
        name={"DermaGuide"}
        desc={"A web application for dermatologists and their patients"}
        url={"https://github.com/chgrape/derma-guide-pharmacist"}
      />
    </div>
  );

  return (
    <div className="flex flex-col h-screen ">
      <Content
        id="section1"
        isReversed={false}
        content={pic}
        heading={"Welcome to my portfolio"}
        desc={
          " I am a web developer with a passion for creating dynamic and responsive websites. Proficient in front-end and back-end technologies, I specialize in crafting seamless and user-friendly digital experiences."
        }
      />
      <Content
        id="section2"
        isReversed={true}
        content={projects}
        heading={"Projects"}
        desc={
          "Explore my GitHub profile to discover a collection of diverse projects showcasing my passion for coding, problem-solving, and continuous learning in the ever-evolving world of software development."
        }
      />
      <Content
        id="section3"
        isReversed={false}
        content={<TechStack />}
        heading={"Tech Stack"}
        desc={
          "These are some of the technologies and programming languages I can use"
        }
      />
    </div>
  );
}

export default App;
