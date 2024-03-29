import "./Projects.css";

function Projects() {
  return (
    <>
      <h1>My projects:</h1>
      <div className="allProjects">
        <div className="project">
          <h3>This site is my project</h3>
          This website showcases my qualifications, educational background, projects, profiles, and options to follow and contact me.
          <br />
          <br />
          to read the code:
          <a href="https://github.com/SimchaSucot/myWebsite" target="_blank">
            Click here
          </a>
        </div>
        <div className="project">
          <h3>Chat (with socket)</h3>
          Later I will upload a more detailed explanation here
          <br />
          <br />
          to read the code:
          <a href="https://github.com/SimchaSucot/Chat_socket" target="_blank">
            Click here
          </a>
          <br />
          enter the page:
          <a href="https://simchasucot.github.io/Chat_socket/" target="_blank">
            Click here
          </a>
        </div>
        <div className="project">
          <h3>Add-on for Google Chrome - Hebrew-English Text Swapper</h3>
          A browser extension that automatically corrects text errors from typing in the wrong keyboard layout for Hebrew or English. It identifies the correct language and converts the characters accordingly. The corrected text can be easily copied back to the clipboard.
          <br />
          <br />
          to read the code:
          <a href="https://github.com/SimchaSucot/Keyboard_Fixer" target="_blank">
            Click here
          </a>
          <br />
          enter the page:
          <a href="https://chromewebstore.google.com/detail/hlfeocfcjamaopiendpnolckamncpkai" target="_blank">
            Click here
          </a>
        </div>
        <div className="project">
          <h3>Memory Game in Python</h3>
          I will post a more detailed explanation about the game later
          <br />
          <br />
          to read the code:
          <a href="https://github.com/SimchaSucot/memoryGame" target="_blank">
            Click here
          </a>
        </div>
        <div className="project">
          <h3>Weather site</h3>
          Later I will upload a more detailed explanation here
          <br />
          <br />
          to read the code:
          <a href="https://github.com/SimchaSucot/weather" target="_blank">
            Click here
          </a>
          <br />
          enter the page:
          <a href="https://simchasucot.github.io/weather/" target="_blank">
            Click here
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
