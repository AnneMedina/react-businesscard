import "./App.css";
import mail from "./assets/mail.svg";
import linkedin from "./assets/linkedin.svg";
import picture from "./assets/appleprofilepic.jpeg";

function App() {
  return (
    <div className="main-container">
      <div className="card">
        <img src={picture} alt="card-image" className="card-image" />
        <div className="name">Anne Medina</div>
        <div className="profession">Web Application Developer</div>
        <a href="https://www.gmanetwork.com/news" className="website">
          annemedina.website
        </a>

        <div className="connect">
          <a
            href="mailto:anne.medina.au@gmail.com"
            className="connect-links mail"
          >
            <img className="connect-logos" src={mail} />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/carmelaanne-medina/"
            className="connect-links linkedin"
            target="_blank"
          >
            <img className="connect-logos" src={linkedin} />
            LinkedIn
          </a>
        </div>

        <div className="about">
          <h3>About</h3>
          <p>
            I am a full-stack developer proficient in JavaScript, CSS, HTML, and
            React for front-end development, as well as Node.js and PHP for
            back-end solutions. I am committed to adhering to coding standards,
            guidelines, and best practices, ensuring high-quality and
            maintainable code.
          </p>

          <h3>Interests</h3>
          <p>
            I enjoy exploring and analyzing ideas that can benefit others. In my
            downtime, I find joy in sophisticated coloring books, where I
            experiment with blending colored pencils. I also play badminton and
            love swimming during the summer months.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
