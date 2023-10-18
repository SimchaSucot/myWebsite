import "./Contact.css";
import imgWhatsApp from "/whatsApp.png";
import imgLinkedin from "/linkedin-icon.png";
import imgEmail from "/email_icon.png";
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
          <a href="mailto:simchasucot@gmail.com">
            <img className="img" src={imgEmail} alt="Gmail" />
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
