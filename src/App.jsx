import './styles.css';

function App() {
  return (
    <div>
      <header>
        <h1>Anti-Doping Awareness</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#quiz">Quiz</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>What is Doping?</h2>
        <p>Doping refers to the use of banned substances or methods to unfairly improve athletic performance.</p>
      </section>

      <section id="resources">
        <h2>Educational Resources</h2>
        <ul>
          <li><a href="https://www.wada-ama.org">WADA Official Site</a></li>
          <li><a href="https://www.nadaindia.org/">NADA India</a></li>
        </ul>
      </section>

      <section id="quiz">
        <h2>Test Your Knowledge</h2>
        <p>Coming soon: An interactive quiz to test what you know about anti-doping.</p>
      </section>

      <footer>
        <p>&copy; 2025 Anti-Doping Awareness Initiative</p>
      </footer>
    </div>
  );
}

export default App;
