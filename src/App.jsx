import "./App.css";
import Header from "./componets/header";
import About from "./componets/About";
import Education from "./componets/Education";
import ProgrammingLanguages from "./componets/ProgrammingLanguages";
import Projects from "./componets/Projects";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Education/>
      <ProgrammingLanguages />
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
