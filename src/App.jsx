import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="card">
      <div className="name"></div>
      <div className="profession"></div>
      <div className="website"></div>

      <div className="cta">
        <button className="cta-button">Email</button>
        <button className="cta-button">LinkedIn</button>
      </div>

      <div className="about">
        <h3>About</h3>
        <p>
          I am a full-stack developer proficient in JavaScript, CSS, HTML, and
          React for front-end development, as well as Node.js and PHP for
          back-end solutions. I am committed to adhering to coding standards,
          guidelines, and best practices, ensuring high-quality and maintainable
          code. I prioritize forward-thinking design and scalability in my work
          to mitigate potential technical debt and support long-term project
          success.
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
  );
}

export default App;
