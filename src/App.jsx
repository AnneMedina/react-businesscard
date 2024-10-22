import "./App.css";
import mail_logo from "./assets/mail.svg";
import linkedin_logo from "./assets/linkedin.png";
import picture from "./assets/appleprofilepic.jpeg";
import github_logo from "./assets/github.png";
import facebook_logo from "./assets/facebook.png";

const linkedIn_link = "https://www.linkedin.com/in/carmelaanne-medina/";
const facebook_link = "https://www.facebook.com/";
const github_link = "https://github.com/AnneMedina";
const mail_link = "mailto:anne.medina.au@gmail.com";

function App() {
  return (
    <div className="main-container">
      <div className="card">
        <img src={picture} alt="card-image" className="card-image" />
        <div className="card-text">
          <div className="name">Anne Medina</div>
          <div className="profession">Web Application Developer</div>
          <a
            href="https://www.gmanetwork.com/news"
            className="website"
            target="_blank"
          >
            annemedina.website
          </a>

          <div className="connect">
            <a href={mail_link} className="connect-links mail">
              <img className="connect-logos" src={mail_logo} />
              Email
            </a>
            <a
              href={linkedIn_link}
              className="connect-links linkedin"
              target="_blank"
            >
              <img className="connect-logos" src={linkedin_logo} />
              LinkedIn
            </a>
          </div>

          <div className="about">
            <h3>About</h3>
            <p>
              I am a full-stack developer proficient in JavaScript, CSS, HTML,
              and React for front-end development, as well as Node.js and PHP
              for back-end solutions. I am committed to adhering to coding
              standards, guidelines, and best practices, ensuring high-quality
              and maintainable code.
            </p>

            <h3>Interests</h3>
            <p>
              I enjoy exploring and analyzing ideas that can benefit others. In
              my downtime, I find joy in sophisticated coloring books, where I
              experiment with blending colored pencils. I also play badminton
              and love swimming during the summer months.
            </p>
          </div>
        </div>
        <footer>
          <a href={github_link} target="_blank">
            <img src={github_logo} alt="Github" className="footer-icons" />
          </a>
          <a href={facebook_link} target="_blank">
            <img src={facebook_logo} alt="Facebook" className="footer-icons" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
