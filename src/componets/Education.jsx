import "./Education.css";

function Education() {
  return (
    <>
      <h1>Education:</h1>
      <div className="containerEducation">
        <div className="education">
          <h2>2023 | Full Stack course</h2>
          <h3 className="school">Mego with the Pareto company</h3>
          <p>
            Learning languages and building websites, including HTML, CSS,
            JavaScript, Node.js, React.
          </p>
        </div>
        <div className="education">
          <h2>2022-2023 | Software Developer</h2>
          <h3 className="school">Ort Jerusalem (with Mego)</h3>
          <p>
            Algorithmics and mathematics and other courses in the field,
            including - data structure, databases, communication, systems
            analysis, Linux.
            <br />
            Expertise in the Python language.
          </p>
        </div>
        <div className="education">
          <h2>2016-2020 | Torah education</h2>
          <h3 className="school">Yeshiva Shaare Torah Jerusalem</h3>
          <p>Studying Talmud, Halacha and values.</p>
        </div>
      </div>
    </>
  );
}

export default Education;
