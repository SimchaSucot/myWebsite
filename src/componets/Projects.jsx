import "./Projects.css";

function Projects() {
  return (
    <div className="containerProjects">
      <h1>My projects:</h1>
      <div className="allProjects">
        <div className="project">
          <h3>This site is my project</h3>
          Later I will upload a more detailed explanation here <br />
          to read the code: <a href="https://github.com/SimchaSucot/myWebsite" target="_blank">Click here</a>
        </div>
        <div className="project">
        <h3>memory Game in Python</h3>
        I will post a more detailed explanation about the game later<br />
        to read the code: <a href="https://github.com/SimchaSucot/memoryGame" target="_blank">Click here</a>
        </div>
        <div className="project">
          Soon I will upload here the plans and projects with a detailed
          explanation
        </div>
        <div className="project">
          Soon I will upload here the plans and projects with a detailed
          explanation
        </div>
      </div>
    </div>
  );
}

export default Projects;
