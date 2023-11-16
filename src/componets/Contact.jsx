import "./Contact.css";
import imgWhatsApp from "/whatsApp.png";
import imgLinkedin from "/linkedin-icon.png";
import imgEmail from "/email_icon.png";
import imgGithub from "/github_icon.png";
import imgPhone from "/phone_icon.jpg";
import imgLeetcode from "/leetcode.png";

function Contact() {
  return (
    <>
      <div className="containerContact">
        <h1>⇓ Follow me or contact me ⇓</h1>
        <div className="links">
          <a href="https://api.whatsapp.com/send?phone=9720508726544&text=%D7%94%D7%99%D7%99" target="_blank">
            <img className="img" src={imgWhatsApp} alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/in/simcha-sucot-🇮🇱-935a9b263/" target="_blank">
            <img className="img" src={imgLinkedin} alt="Linkedin" />
          </a>
          <a href="mailto:simchasucot@gmail.com" target="_blank">
            <img className="img" src={imgEmail} alt="Gmail" />
          </a>
          <a href="https://github.com/SimchaSucot" target="_blank">
            <img className="img" src={imgGithub} alt="Github" />
          </a>
          <a href="https://leetcode.com/SimchaS/" target="_blank">
            <img className="img" src={imgLeetcode} alt="leetCode" />
          </a>
          <a href="tel:+972508726544">
            <img className="img"src={imgPhone} alt="Phone" />
          </a>
        </div>
      </div>
      <div>
        <a
          id="fixedButton"
          href="https://api.whatsapp.com/send?phone=9720508726544&text=%D7%94%D7%99%D7%99" target="_blank"
        >
          <img className="img" src={imgWhatsApp} alt="WhatsApp" />
        </a>
      </div>
    </>
  );
}

export default Contact