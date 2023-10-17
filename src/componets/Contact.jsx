import "./Contact.css";
import imgWhatsApp from "/whatsApp.png";
import imgLinkedin from "/linkedin-icon.png";
import imgGmail from "/gmail_icon.png";
import imgGithub from "/github_icon.png";

function Contact() {
  return (
    <>
      <div className="containerContact">
        <h1>⇓ Contact me ⇓</h1>
        <div>
          <a href="https://api.whatsapp.com/send?phone=9720508726544&text=%D7%94%D7%99%D7%99">
            <img className="img" src={imgWhatsApp} alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/in/simcha-sucot-935a9b263/">
            <img className="img" src={imgLinkedin} alt="Linkedin" />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=simchasucot@gmail.com">
            <img className="img gmail" src={imgGmail} alt="Gmail" />
          </a>
          <a href="https://github.com/SimchaSucot">
            <img className="img" src={imgGithub} alt="Github" />
          </a>
        </div>
      </div>
      <div>
        <a
          id="fixedButton"
          href="https://api.whatsapp.com/send?phone=9720508726544&text=%D7%94%D7%99%D7%99"
        >
          <img className="img" src={imgWhatsApp} alt="WhatsApp" />
        </a>
      </div>
    </>
  );
}

export default Contact;
